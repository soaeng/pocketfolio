# ./Dockerfile 
FROM python:3.8
WORKDIR /var/jenkins_home/workspace/backend/backend/Recommend

RUN apt-get update && apt-get install -y g++ default-jdk
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
RUN export JAVA_HOME
RUN echo $JAVA_HOME

## Install packages
COPY requirements.txt ./
RUN pip install -r requirements.txt

## Copy all src files
COPY . .

## Run the application on the port 8080
EXPOSE 8000

# gunicorn 배포 명령어
# CMD ["gunicorn", "--bind", "허용하는 IP:열어줄 포트", "project.wsgi:application"]
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "pocketfolio.wsgi:application"]

