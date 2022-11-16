package com.ssafy.pocketfolio.db.repository;

import com.ssafy.pocketfolio.db.entity.RoomHover;
import com.ssafy.pocketfolio.db.view.SearchPortfolioListView;
import com.ssafy.pocketfolio.db.view.SearchRoomListView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// QueryDSL로 리팩토링 예정
public interface SearchRepository extends JpaRepository<RoomHover, Long> {
    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% and c.category_seq in :categories group by r.room_seq",
            countQuery = "select count(distinct(r.room_seq)) " +
                    "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
                    "inner join category c on rc.category_seq = c.category_seq " +
                    "where r.name like %:keyword% and c.category_seq in :categories",
            nativeQuery = true)
    Page<SearchRoomListView> searchRoom(@Param("myUserSeq") Long myUserSeq, String keyword, List<Long> categories, Pageable pageable);

    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% and c.category_seq in :categories group by r.room_seq " +
            "order by `like` desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomOrderByLike(long myUserSeq, String keyword, List<Long> categories, int limit, int offset);

    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% and c.category_seq in :categories group by r.room_seq " +
            "order by hit desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomOrderByHit(long myUserSeq, String keyword, List<Long> categories, int limit, int offset);

    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% and c.category_seq in :categories group by r.room_seq " +
            "order by followerTotal desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomOrderByFollowerTotal(long myUserSeq, String keyword, List<Long> categories, int limit, int offset);

    @Query(value = "select p.port_seq as portSeq, p.name, r.room_seq as roomSeq, r.name as roomName, r.thumbnail as roomThumbnail, " +
            "u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(distinct t.name) as tags " +
            "from portfolio p inner join arrange a on p.port_seq = a.port_seq inner join room r on a.room_seq = r.room_seq " +
            "inner join tag t on a.port_seq = t.port_seq inner join user u on p.user_seq = u.user_seq " +
            "where p.name like %:keyword% or p.summary like %:keyword% group by p.port_seq " +
            "order by p.updated desc limit :limit offset :offset", nativeQuery = true)
    List<SearchPortfolioListView> searchPortfolioOrderByUpdated(String keyword, int limit, int offset);

    @Query(value = "select p.port_seq as portSeq, p.name, r.room_seq as roomSeq, r.name as roomName, r.thumbnail as roomThumbnail, " +
            "u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(distinct t.name) as tags " +
            "from portfolio p inner join arrange a on p.port_seq = a.port_seq inner join room r on a.room_seq = r.room_seq " +
            "inner join tag t on a.port_seq = t.port_seq inner join user u on p.user_seq = u.user_seq " +
            "where p.name like %:keyword% or p.summary like %:keyword% group by p.port_seq " +
            "order by followerTotal desc limit :limit offset :offset", nativeQuery = true)
    List<SearchPortfolioListView> searchPortfolioOrderByFollowerTotal(String keyword, int limit, int offset);





    // All Category 따로: 시작
    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% group by r.room_seq " +
            "order by `like` desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomByAllCategoryOrderByLike(long myUserSeq, String keyword, int limit, int offset);

    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% group by r.room_seq " +
            "order by hit desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomByAllCategoryOrderByHit(long myUserSeq, String keyword, int limit, int offset);

    @Query(value = "select r.room_seq as roomSeq, r.thumbnail, r.name, u.user_seq as userSeq, u.name as userName, u.profile_pic as userProfilePic, " +
            "(select count(*) from room_like where room_seq = roomSeq) as `like`, " +
            "(select count(*) from room_hit where room_seq = roomSeq) as hit, " +
            "(select count(*) from room_like where room_seq = roomSeq and user_seq = :myUserSeq) as isLiked, " +
            "(select count(*) from follow where user_to = u.user_seq) as followerTotal, " +
            "group_concat(c.name) as categoryName " +
            "from room r inner join user u on r.user_seq = u.user_seq inner join room_category rc on r.room_seq = rc.room_seq " +
            "inner join category c on rc.category_seq = c.category_seq " +
            "where r.name like %:keyword% group by r.room_seq " +
            "order by followerTotal desc limit :limit offset :offset", nativeQuery = true)
    List<SearchRoomListView> searchRoomByAllCategoryOrderByFollowerTotal(long myUserSeq, String keyword, int limit, int offset);
    // All Category 따로: 끝
}
