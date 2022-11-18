import os
import pymysql
import pandas as pd
import pickle
import re

from dotenv import load_dotenv, find_dotenv
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# 환경변수 불러오기
load_dotenv(find_dotenv())
HOST = os.environ["MYSQL_HOST"] # MySQL host
DB = os.environ["MYSQL_NAME"]   # MySQL name
USER = os.environ["MYSQL_USER"] # MySQL user
PASSWORD = os.environ["MYSQL_PASS"] # MySQL password
PORT = int(os.environ["MYSQL_PORT"]) # MySQL port


# DB 연결
db = pymysql.connect(host=HOST, port=PORT, user=USER, passwd=PASSWORD, db=DB, charset='utf8', autocommit=True, cursorclass=pymysql.cursors.DictCursor)
#  cursor생성
cursor = db.cursor()


okt = Okt()
path = os.path.abspath(os.path.join(os.getcwd(), "data"))
with open(os.path.join(path, "stop_words.pkl"), "rb") as f:
    stop_words = pickle.load(f)


# 한글, 숫자, 영문만 가져옴
def sub_special(s):
    # html 태그 제거
    tag_remover = re.compile('<.*?>')
    s = re.sub(tag_remover, '', s)
    return re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z ]','',s)


# 리스트를 문자열로
def list_2_str(list):
    return "".join(list)


# 형태소 분석
def morph_and_stopword(text):
    text = sub_special(text)
    
    #형태소 분석
    words = okt.morphs(text, stem=True)
    
    # 형태소 분석 결과 담을 텍스트
    feat_list = []
    
    #불용어 처리
    for word in words:
        if word not in stop_words and len(word) > 1:
            feat_list.append(word)
            
    return list_2_str(set(feat_list))


# dict의 value로 key 찾기
def get_key(val, dict):
    for key, value in dict.items():
        if val == value:
                return key


def get_recommendations(user_seq, cosine_sim):
    
    idx = seq_2_idx[0]
    
    # 해당 데이터와의 유사도를 가져온다.
    sim_scores = list(enumerate(cosine_sim[idx]))
    
    # 유사도에 따라 정렬
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:9]
    
    # 추천 방 저장 리스트
    room_list = [idx[0] for idx in sim_scores]
    relation = list(df["room_seq"].iloc[room_list])
    print(relation)
    relation = ",".join(map(str, relation))
    sql = "INSERT INTO `relation` (user_seq, room_list) VALUES (" + str(user_seq) + ", '" + relation + "');"
    cursor.execute(sql)
    db.close()
    
    return list(df["room_seq"].iloc[room_list])


def recomm(user_seq):
    user_seq = user_seq
    global df, seq_2_idx
    
    # 포트폴리오 summary 조회
    port_sql = "SELECT GROUP_CONCAT(DISTINCT(`p`.`summary`) SEPARATOR '') AS `portfolios` \
        FROM `portfolio` AS `p` \
        INNER JOIN `arrange` AS `a` ON `p`.`port_seq` = `a`.`port_seq` \
        INNER JOIN `room` AS `r` ON `a`.`room_seq` = `r`.`room_seq` \
        INNER JOIN `user` AS `u` ON `r`.`user_seq` = `u`.`user_seq` \
        WHERE `u`.`user_seq` = " + str(user_seq) + " GROUP BY `u`.`user_seq`; "

    cursor.execute(port_sql)
    result = cursor.fetchall()

    ports = result[0].get("portfolios")

    # Tag 조회
    tag_sql = "SELECT GROUP_CONCAT(DISTINCT(`t`.`name`) SEPARATOR '') AS `tags` \
        FROM `tag` AS `t` \
        INNER JOIN `arrange` AS `a` ON `t`.`port_seq` = `a`.`port_seq` \
        INNER JOIN `room` AS `r` ON `a`.`room_seq` = `r`.`room_seq` \
        INNER JOIN `user` AS `u` ON `r`.`user_seq` = `u`.`user_seq` \
        WHERE `u`.`user_seq` = " + str(user_seq) + " GROUP BY `u`.`user_seq`; "

    cursor.execute(tag_sql)
    result = cursor.fetchall()
    tags = result[0].get("tags")

    user_feat = ports + tags
    df = pd.DataFrame({"room_seq": [0], "feat": [user_feat]})
    
    # 포트폴리오 summary 조회
    port_sql = "SELECT `r`.`room_seq`, GROUP_CONCAT(DISTINCT(`p`.`summary`) SEPARATOR '') AS `portfolios` \
        FROM `portfolio` AS `p` \
        INNER JOIN `arrange` AS `a` ON `p`.`port_seq` = `a`.`port_seq` \
        INNER JOIN `room` AS `r` ON `a`.`room_seq` = `r`.`room_seq` \
        INNER JOIN `user` AS `u` ON `r`.`user_seq` = `u`.`user_seq` \
        WHERE `r`.`user_seq` != " + str(user_seq) + " GROUP BY `r`.`room_seq` ;"

    cursor.execute(port_sql)
    result = cursor.fetchall()
    df_ports = pd.DataFrame(result)

    # Tag 조회
    tag_sql = "SELECT `r`.`room_seq`, GROUP_CONCAT(DISTINCT(`t`.`name`) SEPARATOR '') AS `tags` \
        FROM `tag` AS `t` \
        INNER JOIN `arrange` AS `a` ON `t`.`port_seq` = `a`.`port_seq` \
        INNER JOIN `room` AS `r` ON `a`.`room_seq` = `r`.`room_seq` \
        INNER JOIN `user` AS `u` ON `r`.`user_seq` = `u`.`user_seq` \
        WHERE `r`.`user_seq` != " + str(user_seq) + " GROUP BY `r`.`room_seq` ;"

    cursor.execute(tag_sql)
    result = cursor.fetchall()
    df_tags = pd.DataFrame(result)

    # 태그 없을 시 빈 데이터 프레임 생성
    if df_tags.empty:
        df_tags = pd.DataFrame({"room_seq": [], "tags": []})
        
    # portfolio, tag 데이터 프레임 병합
    df_rooms = pd.merge(df_ports, df_tags, how="outer")

    # 결측값 제거
    df_rooms["portfolios"] = df_rooms["portfolios"].fillna("")
    df_rooms["tags"] = df_rooms["tags"].fillna("")

    # 열 병합
    df_rooms["feat"] = df_rooms["portfolios"] + df_rooms["tags"]
    df_rooms.drop(["portfolios", "tags"], axis=1, inplace=True)

    # 로그인 유저 데이터와 각 방의 데이터 프레임 병합
    df = pd.concat([df, df_rooms], ignore_index=True)
    df.drop_duplicates(inplace=True, ignore_index=True)

    df["feat"] = df["feat"].map(lambda x:morph_and_stopword(x))
    
        
    seq_2_idx = dict(zip(df["room_seq"], df.index))

    tf_idf = TfidfVectorizer()
    feat_list = list(df["feat"])
    tf_idf_matrix = tf_idf.fit_transform(feat_list)
    print("TF-IDF 행렬의 크기(shape): ", tf_idf_matrix.shape)

    cosine_sim = cosine_similarity(tf_idf_matrix, tf_idf_matrix)
    print("코사인 유사도 연산 결과: ",cosine_sim.shape)

    return get_recommendations(user_seq, cosine_sim)
