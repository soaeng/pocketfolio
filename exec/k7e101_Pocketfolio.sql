CREATE DATABASE  IF NOT EXISTS `pocketfolio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pocketfolio`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: k7e101.p.ssafy.io    Database: pocketfolio
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alert` (
  `alert_seq` bigint NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_confirmed` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F',
  `created` datetime NOT NULL DEFAULT (curtime()),
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`alert_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `alert_ibfk_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `alert_chk_1` CHECK ((`is_confirmed` in (_utf8mb4'T',_utf8mb4'F')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alert`
--

LOCK TABLES `alert` WRITE;
/*!40000 ALTER TABLE `alert` DISABLE KEYS */;
/*!40000 ALTER TABLE `alert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `arrange`
--

DROP TABLE IF EXISTS `arrange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arrange` (
  `arrange_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_seq` bigint NOT NULL,
  `item_seq` bigint NOT NULL,
  `location_x` decimal(15,8) NOT NULL,
  `location_y` decimal(15,8) NOT NULL,
  `location_z` decimal(15,8) NOT NULL,
  `rotation` decimal(15,8) NOT NULL,
  `port_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`arrange_seq`),
  KEY `room_seq` (`room_seq`),
  KEY `item_seq` (`item_seq`),
  KEY `port_seq` (`port_seq`),
  CONSTRAINT `arrange_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `arrange_ibfk_2` FOREIGN KEY (`item_seq`) REFERENCES `item` (`item_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `arrange_ibfk_3` FOREIGN KEY (`port_seq`) REFERENCES `portfolio` (`port_seq`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arrange`
--

LOCK TABLES `arrange` WRITE;
/*!40000 ALTER TABLE `arrange` DISABLE KEYS */;
INSERT INTO `arrange` VALUES (1,1,173,2.16700092,3.65906742,3.21517470,0.00000000,NULL),(2,1,182,2.23823348,3.64370181,3.10663447,-1.57079633,NULL),(3,1,56,0.52108744,1.01672466,4.18704125,-1.57079633,22),(4,1,228,2.69941211,1.02572173,4.11342748,0.00000000,NULL),(6,1,68,4.91318796,1.72969093,3.99331425,-1.57079633,NULL),(7,1,176,-4.39103147,2.32937908,-1.87606331,0.00000000,NULL),(8,1,17,-2.68169186,0.00000000,-0.97210934,-0.78539816,NULL),(9,1,169,-3.69460877,0.00000000,3.41357484,-0.78539816,NULL),(11,1,225,-3.70465418,0.00000000,-1.80741363,0.00000000,NULL),(12,1,235,-3.36166832,0.00000000,-1.04489886,0.00000000,NULL),(13,1,70,4.22360831,1.74361306,4.03707517,-2.35619449,NULL),(14,1,81,-4.42649706,3.95202810,2.69387917,0.00000000,NULL),(15,1,205,1.47654505,-0.07335805,4.00926082,-1.57079633,NULL),(19,2,174,-4.04482754,4.61177211,-0.75639964,-3.92699082,NULL),(20,2,181,-4.02573364,4.68679735,3.31973989,0.00000000,NULL),(21,2,274,-5.40251130,4.84801970,5.27702978,0.00000000,NULL),(22,2,154,-1.25846606,0.00000000,-3.50038634,0.00000000,NULL),(23,2,138,-0.95369277,0.00000000,-2.47126116,0.00000000,NULL),(24,2,22,0.00000000,0.00000000,5.63701421,-0.78539816,NULL),(25,2,35,-0.07657312,0.00000000,1.49576372,-5.49778714,8),(26,2,183,0.27361042,0.00000000,-1.83095809,0.00000000,NULL),(27,2,195,-4.90002207,0.00000000,-1.96611887,0.00000000,NULL),(28,2,192,-4.40978770,0.00000000,3.83800933,0.00000000,NULL),(29,2,213,-2.35016142,0.00000000,3.76966280,0.00000000,NULL),(30,2,167,-1.18154645,0.00000000,-0.86256960,-0.78539816,NULL),(33,12,210,-1.90388312,0.08770198,0.05517300,0.00000000,NULL),(34,12,209,-3.15798494,4.64290892,4.35200740,0.00000000,NULL),(37,12,57,-3.21425038,5.27616660,4.03310228,0.00000000,16),(38,12,187,-3.84894759,4.71334452,0.85723272,0.00000000,NULL),(39,12,187,-2.97521146,4.65152997,-1.06266851,-4.71238898,NULL),(41,12,217,-2.62414032,4.68518663,0.56224235,0.00000000,NULL),(43,12,185,-4.02950919,4.75954741,2.57071226,0.00000000,NULL),(44,12,44,0.00000000,0.00138491,5.88326878,0.00000000,NULL),(45,12,71,-3.01798348,5.29317602,4.88194160,0.00000000,17),(46,12,166,-2.68586285,5.62506458,0.03697072,0.00000000,NULL),(47,12,56,-2.61557119,5.61646295,0.99978079,0.00000000,15),(51,1,217,3.35414330,0.00000000,-1.16965088,0.00000000,NULL),(52,1,46,3.33879358,0.93959373,-1.05326738,0.00000000,23),(53,1,73,3.04341666,0.95845447,-1.87687390,0.00000000,NULL),(54,1,103,2.37475796,1.01793073,3.97788135,-1.57079633,NULL),(55,1,181,1.63814955,0.00000000,2.30994134,0.00000000,NULL),(56,6,170,-1.49972305,0.00000000,-1.51304746,0.00000000,NULL),(57,6,177,-4.16540975,0.00000000,3.67306730,0.00000000,NULL),(58,6,301,-3.92265689,0.00000000,2.23908460,0.00000000,NULL),(59,6,48,3.61731233,0.00000000,3.55717990,-1.57079633,NULL),(60,4,211,-0.94433065,-0.00031580,1.58614477,-1.57079633,NULL),(61,4,186,-0.82169091,0.10776862,1.11217299,-4.71238898,NULL),(62,4,46,-0.82544648,1.02123772,1.74459120,-1.57079633,NULL),(63,4,68,-2.09933676,1.02146896,1.77590601,0.00000000,NULL),(64,4,59,0.68172576,-0.01166381,1.51611284,0.00000000,NULL),(65,4,105,-1.62292602,2.99287365,1.53983747,0.00000000,NULL),(66,4,36,-1.28962634,-0.06646807,-1.02809233,0.00000000,NULL),(67,4,245,0.10914906,1.00044267,1.92985469,0.00000000,NULL),(68,4,47,1.47196982,0.00000000,1.78271139,-1.57079633,NULL),(69,14,201,2.91731928,-0.15669029,0.00000000,0.00000000,NULL),(70,14,15,4.12880184,0.00000000,3.49197937,-2.35619449,NULL),(71,1,122,-4.42150890,2.25719299,2.43318119,0.00000000,NULL),(72,1,129,2.16899014,1.63211857,4.32720745,-1.57079633,NULL),(73,1,125,2.20562904,4.29330141,4.18489252,-1.57079633,NULL),(74,1,118,3.29739344,-0.04202060,4.07576362,-1.57079633,NULL),(75,1,131,1.31287624,1.56458714,4.14549573,-1.57079633,NULL),(76,1,71,1.53647809,1.01793373,4.22175796,-1.57079633,NULL),(77,1,195,-4.18998872,0.00000000,1.15812582,0.00000000,NULL),(78,1,201,3.60485591,3.65671919,3.72960219,0.00000000,NULL),(79,1,192,4.78190936,0.00000000,-1.18903960,-3.14159265,NULL),(80,1,194,4.51592537,0.00000000,4.07267523,-1.57079633,NULL),(82,7,53,-1.06035856,2.89957194,2.19439642,-1.57079633,NULL),(83,1,204,-2.20423373,0.00000000,-4.62987413,0.00000000,NULL),(84,1,278,4.13172129,2.27023120,4.07720040,0.00000000,NULL),(85,1,279,0.55633967,3.64776377,1.42944721,0.00000000,NULL),(86,1,280,-1.96426930,-0.05278295,3.83768400,0.00000000,NULL),(87,1,277,4.97990329,2.26914325,3.96795170,0.00000000,NULL),(88,1,275,4.53958142,2.25769601,4.03171701,0.00000000,NULL),(89,1,274,-2.46610374,-0.00381526,3.58887077,0.00000000,NULL),(90,8,167,-1.80938785,0.00000000,1.58409109,-0.78539816,24),(91,1,67,4.40561956,1.20831119,3.96833179,-1.57079633,NULL),(92,1,120,-4.42779765,2.23581052,1.11624209,-3.14159265,NULL),(93,1,72,3.40427314,4.10472505,3.79534877,0.00000000,NULL),(94,8,216,1.02740763,0.00000285,1.89077550,-1.57079633,25),(95,8,228,0.28905860,0.83679150,2.02013002,0.00000000,NULL),(96,8,310,1.26165142,0.89861658,1.79888359,0.00000000,NULL),(98,7,196,-2.15138775,0.00000000,-2.02769753,0.00000000,NULL),(99,7,214,-1.26874966,0.00000000,1.62273801,-1.57079633,NULL),(100,7,67,-0.04367484,0.00000000,1.83994753,-1.57079633,NULL),(101,7,187,-1.35355385,0.00000000,0.95855390,-4.71238898,NULL),(102,7,283,-1.03307808,0.00000000,-1.95010630,-6.28318530,NULL),(107,4,180,-1.06121548,0.00000000,0.00000000,-1.57079633,NULL);
/*!40000 ALTER TABLE `arrange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `board_seq` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_seq` bigint NOT NULL,
  `board_category_seq` bigint DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT (curtime()),
  `updated` datetime NOT NULL DEFAULT (curtime()),
  PRIMARY KEY (`board_seq`),
  KEY `user_seq` (`user_seq`),
  KEY `board_category_seq` (`board_category_seq`),
  CONSTRAINT `board_ibfk_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `board_ibfk_2` FOREIGN KEY (`board_category_seq`) REFERENCES `board_category` (`board_category_seq`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_category`
--

DROP TABLE IF EXISTS `board_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_category` (
  `board_category_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`board_category_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_category`
--

LOCK TABLES `board_category` WRITE;
/*!40000 ALTER TABLE `board_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_comment`
--

DROP TABLE IF EXISTS `board_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_comment` (
  `comment_seq` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_public` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'T',
  `created` datetime NOT NULL DEFAULT (curtime()),
  `board_seq` bigint NOT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`comment_seq`),
  KEY `board_seq` (`board_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `board_comment_ibfk_1` FOREIGN KEY (`board_seq`) REFERENCES `board` (`board_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `board_comment_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `board_comment_chk_1` CHECK ((`is_public` in (_utf8mb4'T',_utf8mb4'F')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_comment`
--

LOCK TABLES `board_comment` WRITE;
/*!40000 ALTER TABLE `board_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_hit`
--

DROP TABLE IF EXISTS `board_hit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_hit` (
  `board_hit_seq` bigint NOT NULL AUTO_INCREMENT,
  `board_seq` bigint NOT NULL,
  `user_seq` bigint DEFAULT NULL,
  `hit_date` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`board_hit_seq`),
  UNIQUE KEY `UK_BOARD_HIT` (`board_seq`,`user_seq`,`hit_date`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `board_hit_ibfk_1` FOREIGN KEY (`board_seq`) REFERENCES `board` (`board_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `board_hit_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_hit`
--

LOCK TABLES `board_hit` WRITE;
/*!40000 ALTER TABLE `board_hit` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_hit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_like`
--

DROP TABLE IF EXISTS `board_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_like` (
  `board_like_seq` bigint NOT NULL AUTO_INCREMENT,
  `board_seq` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`board_like_seq`),
  UNIQUE KEY `UK_BOARD_LIKE` (`board_seq`,`user_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `board_like_ibfk_1` FOREIGN KEY (`board_seq`) REFERENCES `board` (`board_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `board_like_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_like`
--

LOCK TABLES `board_like` WRITE;
/*!40000 ALTER TABLE `board_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`category_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'기타'),(2,'그래픽 디자인'),(3,'일러스트레이션'),(4,'UI/UX'),(5,'제품 디자인'),(6,'패션'),(7,'광고'),(8,'미술'),(9,'게임 디자인'),(10,'사운드'),(11,'개발');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_like`
--

DROP TABLE IF EXISTS `comment_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_like` (
  `comment_like_seq` bigint NOT NULL AUTO_INCREMENT,
  `comment_seq` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`comment_like_seq`),
  UNIQUE KEY `UK_COMMENT_LIKE` (`comment_seq`,`user_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `comment_like_ibfk_1` FOREIGN KEY (`comment_seq`) REFERENCES `board_comment` (`comment_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_like_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_like`
--

LOCK TABLES `comment_like` WRITE;
/*!40000 ALTER TABLE `comment_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `follow_seq` bigint NOT NULL AUTO_INCREMENT,
  `user_from` bigint NOT NULL,
  `user_to` bigint NOT NULL,
  PRIMARY KEY (`follow_seq`),
  UNIQUE KEY `UK_FOLLOW` (`user_from`,`user_to`),
  KEY `user_to` (`user_to`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user_from`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`user_to`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (6,1,2),(10,1,4),(5,1,6),(1,2,1),(11,4,1),(4,4,5),(7,6,1),(25,6,2),(31,6,4),(12,7,1);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guestbook`
--

DROP TABLE IF EXISTS `guestbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guestbook` (
  `guestbook_seq` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_public` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'T',
  `created` datetime NOT NULL DEFAULT (curtime()),
  `room_seq` bigint NOT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`guestbook_seq`),
  KEY `room_seq` (`room_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `guestbook_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `guestbook_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `guestbook_chk_1` CHECK ((`is_public` in (_utf8mb4'T',_utf8mb4'F')))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guestbook`
--

LOCK TABLES `guestbook` WRITE;
/*!40000 ALTER TABLE `guestbook` DISABLE KEYS */;
INSERT INTO `guestbook` VALUES (1,'방이 너무 예뻐요!','T','2022-11-20 13:42:28',7,2),(2,'방이 너무 예뻐요 잘 보고 갑니다 ㅎㅎ','T','2022-11-20 20:32:09',2,5),(3,'아기자기해요~','T','2022-11-20 23:53:14',7,1),(4,'크리스마스 트리!!! 얼마 남지 않았군요 후후','T','2022-11-21 00:26:44',2,1),(5,'랩 잘 들었어요 ! !! !! !! !!!!! !! 님의 길을 응원합니다. . .. ...','T','2022-11-21 00:27:17',12,1),(6,'방이 아주 \'깨끗\'한걸요? ?? 거진 모델 하우스 ~','T','2022-11-21 00:27:44',11,1),(7,'야통이가 먼데요??','T','2022-11-21 00:28:01',14,1),(8,'깔끔한 방 ! !!! 팔로우 했어요 소통해요 ~ ^^','T','2022-11-21 00:29:33',4,1),(9,'방이 너무 예뻐요!!','T','2022-11-21 01:10:48',1,4);
/*!40000 ALTER TABLE `guestbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guestbook_comment`
--

DROP TABLE IF EXISTS `guestbook_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guestbook_comment` (
  `comment_seq` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_public` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'T',
  `created` datetime NOT NULL DEFAULT (curtime()),
  `guestbook_seq` bigint NOT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`comment_seq`),
  KEY `guestbook_seq` (`guestbook_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `guestbook_comment_ibfk_1` FOREIGN KEY (`guestbook_seq`) REFERENCES `guestbook` (`guestbook_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `guestbook_comment_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `guestbook_comment_chk_1` CHECK ((`is_public` in (_utf8mb4'T',_utf8mb4'F')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guestbook_comment`
--

LOCK TABLES `guestbook_comment` WRITE;
/*!40000 ALTER TABLE `guestbook_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `guestbook_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`image_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (6,'image.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/8d422464-3a7f-42c4-a660-2a54ffbdabd8.png'),(7,'SSAFYTHEMONEYpng.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/28cb7850-d475-4a57-9ecc-10d073aea70a.png'),(8,'SSAFYTHEMONEYpng.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/40f8974b-312f-4069-8565-7e2078d425b5.png'),(9,'SSAFYTHEMONEYpng.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/711899c0-85f4-4ae3-a6e3-1d8527772be8.png'),(10,'20221119_162414.jpg','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/a04b06a1-f7f0-4945-b703-6baa56592c4f.jpg'),(11,'eye.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/b6788e4c-f970-4aa4-a1bd-60c4151ea7c8.png'),(15,'호타로.gif','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/ccced24a-f426-4022-8038-6da85cc33545.gif'),(19,'logo4.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/f0da6f7b-c7a2-4b3b-af36-c582627f9ecb.png'),(22,'logo4.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/0501ad51-9459-44bf-8d0a-9fdb568c27eb.png'),(23,'logo4.png','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/330a7301-03ca-4fa7-adac-76516c27c687.png');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_seq` bigint NOT NULL AUTO_INCREMENT,
  `name_eng` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_kor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `asset` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_category_seq` bigint DEFAULT NULL,
  `category` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`item_seq`),
  UNIQUE KEY `UK_ITEM` (`asset`),
  UNIQUE KEY `UK_ITEM_IMAGE` (`image`),
  KEY `item_category_seq` (`item_category_seq`) /*!80000 INVISIBLE */,
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`item_category_seq`) REFERENCES `item_category` (`item_category_seq`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=313 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Alpaca','알파카','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/ec2a3ba2-f75f-45d8-8db2-2af190dcbf5d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/ca80605b-1382-4865-94cb-33146b2b2e6d.png',2,'','',''),(2,'Antelope','영양','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/beb044fe-96b2-4a84-a66b-49e0faf079f1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/fc1c1a76-1b5f-41b9-ad6e-d782c80dfb7b.png',2,'','',''),(3,'Baboon','개코원숭이','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/b8fdd0a7-9adf-41b4-bad3-3914ee16c337.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/2bad0918-2dc8-4bc6-b618-0dd2fd1cdb3b.png',2,'','',''),(4,'Badger','오소리','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/b67de5ac-ef11-424b-a021-62c0eaa2cde9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/43a84f35-87c6-46a1-82f6-6564ba7c6478.png',2,'','',''),(5,'Bear','견디다','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/06208436-260e-47e5-af44-0044f2e7cd59.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/95b587ba-bb89-4ab5-b432-17fbcf82dfac.png',2,'','',''),(6,'Beluga','벨루가','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/10dffd7c-037c-4c7e-a848-cfbbd90cdf12.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/ab245b01-23f0-4222-bac7-b1f48b046ac6.png',2,'','',''),(7,'Bison','바이슨','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/0e24d329-0174-484c-a80d-49c13b3324c1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/394d4dc4-172f-453b-8f9e-e98e99514e17.png',2,'','',''),(8,'Bull','황소','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/55a5c6af-15a8-47c4-bfce-460a8a27b0c7.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/dbf691c9-0fac-47b6-a342-2c6107ee04d6.png',2,'','',''),(9,'Cardinal','추기경','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/770dddf4-b185-404f-bbe0-235ca83802c2.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/c4310d97-6f5d-432c-9a14-851a168dbe64.png',2,'','',''),(10,'Chameleon','카멜레온','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/fff50fc8-c94f-46da-839d-efa171636f4e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/9f89f113-dffc-4cb9-9364-ee207e5cd690.png',2,'','',''),(11,'Chipmunk','얼룩다람쥐','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/f355aec9-b7ce-44b8-8933-19a4b7a9fd61.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/f86ba14b-aeab-4afe-bb8a-991438d5c848.png',2,'','',''),(12,'Cougar','쿠거','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/049a23f4-56cd-4dae-acf6-a0e1d5496c16.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/cdeb63ce-09c2-41ff-ae81-93d83dadd185.png',2,'','',''),(13,'Deer','사슴','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/55511b75-0479-4e9f-a709-c41974f17ef1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/1a65ac69-8eb8-4f5b-8620-d783db5097a9.png',2,'','',''),(14,'Ferret','페렛','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/3e45777a-db94-4bd9-b1b3-e7dbbcbcabad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/c557c3c0-e645-4e50-8b60-2b16e7dd8a34.png',2,'','',''),(15,'Giraffe','기린','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/9224b2d1-f3d4-4fd6-a15f-3996aac1515b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/d6cfa8e0-208b-4d36-947b-545aa4f902f2.png',2,'','',''),(16,'Goat','염소','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/32b91cf3-3784-4e98-b009-a90af2f1f2fe.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/55a14715-6867-49f9-8f81-f0c1127b6850.png',2,'','',''),(17,'Goose','똥침','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/9c91724f-3913-4b78-9379-3a90b97b34cf.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/abfdf33c-53ac-4076-9e60-05ac7ae54a0a.png',2,'','',''),(18,'Hamster','햄스터','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/e1443ec5-c6ac-4252-a777-d17c811c51f7.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/a0a373bb-8720-4fd9-a556-437d829b17f6.png',2,'','',''),(19,'Hare','토끼','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/06d9080f-ad50-49bd-a0db-d812bc448147.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/affeb4ee-66fd-42bc-bc59-164370206489.png',2,'','',''),(20,'Hedgehog','고슴도치','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/ec4b8609-07df-4a74-9174-03c23e1a4161.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/e5671cab-ea89-466e-8c47-a3a1b54389b9.png',2,'','',''),(21,'Horse','말.','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/5ba11799-06d1-44aa-a30c-6e785689c5ca.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/5f77fdb9-7872-40a6-b719-08547c85b608.png',2,'','',''),(22,'Husky','허스키','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/9b16d06d-b1e5-4a7b-8da8-745cada7cb81.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/613e6c50-1ea8-4c8b-88ff-eade578f3236.png',2,'','',''),(23,'Iguana','이구아나','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/652ea423-13b9-4763-acb8-e3518ed7d296.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/31609aa0-d77e-4c1e-a1e7-77d6cdb32d7c.png',2,'','',''),(24,'Jackal','자칼','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/ad0868f8-eed1-4a5d-b8df-daf28235d357.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/3cb48aeb-19ca-4cb4-a89e-071d5f005335.png',2,'','',''),(25,'Lamb','새끼 양','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/6aafba98-2c80-43ee-93ae-118cd8ce90a3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/175fc823-5c51-49b4-a8c3-9fb3e017ab45.png',2,'','',''),(26,'Lemur','여우원숭이','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/0a5dc88d-75fe-49cd-8938-e7728c57bce3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/2dc4c870-5fd5-4301-8b48-4a9a8d445113.png',2,'','',''),(27,'Lion','사자','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/c2fbf78c-6896-4208-8983-04eb13527288.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/33c58fef-7cec-4432-80ac-5ccfa110a593.png',2,'','',''),(28,'Lioness','사자자리','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/3de85614-db3e-45e8-97ac-ec128f4712d7.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/1355f9cf-5dde-4b00-bf51-aecf2e4d4cd4.png',2,'','',''),(29,'Llama','라마','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/376f4e6f-b456-4327-872a-1bb41a3a3e23.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/3f3bbdfd-c371-4c04-98f3-31f2c8f9c758.png',2,'','',''),(30,'Lynx','링스','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/72603187-2fbc-4129-a22f-95efbb207c26.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/14b46ae1-430d-45e3-9286-fa176483ca3c.png',2,'','',''),(31,'Mallard','말라드','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/f466058a-5883-4349-940b-76364d4110ea.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/7928b9fd-cabb-4fab-b375-58b8f9124999.png',2,'','',''),(32,'Marten','마르텐','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/6515d963-71df-4237-8728-362c5de1e82b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/6971cebf-d1a5-4625-b52f-567c5c71a973.png',2,'','',''),(33,'Mole','몰','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/f5282b83-bcf7-4a2a-a826-bdcc47266aac.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/71adc3f8-4434-4582-b71f-5318197d23de.png',2,'','',''),(34,'Monkey','원숭이','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/d21dbdc3-c22d-4b3c-a7d4-124c7e6e01be.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/adeceb07-dd47-4b18-a15c-0efd5d788e6e.png',2,'','',''),(35,'Moose','무스','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/0d2314ca-a5cd-4b0b-a8d6-ba948409f129.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/07760958-c3c7-4726-a26f-ffb55048bb97.png',2,'','',''),(36,'Narwhal','나르왈','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/866cb0a6-03c5-4460-ae9b-6aa88708dd86.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/0a481c46-3613-45c4-8eb4-e69cd8acb32e.png',2,'','',''),(37,'Puffin','퍼핀','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/414070dc-3a40-406f-b3da-f853095e69ca.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/666724f2-fd64-4d15-88ef-4f67059d32fb.png',2,'','',''),(38,'Python','파이썬','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/16a8ea39-a9a7-457c-8174-a22a64b84727.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/ead9544c-fa6c-4e14-b511-79341bddb870.png',2,'','',''),(39,'Serval','서벌','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/6dd7fca7-5e67-4e01-a5d2-188b67d4e5e4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/69de26c1-604d-469f-8b10-6461b8e78a9b.png',2,'','',''),(40,'Skunk','스컹크','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/70065edb-7ea1-4278-8d02-7f2017dc8734.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/69bf420d-171c-464b-8737-bbea3f97a35e.png',2,'','',''),(41,'SnowLeopard','눈표범','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/777cc638-b142-492f-8b33-b69234a5401a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/f344b73b-c59b-4f1a-9332-f576efb620e8.png',2,'','',''),(42,'Squirrel','다람쥐','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/84104b99-f381-4e46-8543-381c856f04db.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/9015bf77-9c09-4138-b88c-ab8e16919625.png',2,'','',''),(43,'Toucan','투칸','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/cb80b8f4-97f1-41c2-b43e-f4aa8b4ce337.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/58c0ade2-9992-48b1-bf4a-4ce541bd2eed.png',2,'','',''),(44,'Turkey','터키','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/75f4d4d7-fa32-4844-b84a-6eb428c08b4f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/70070e12-8e0b-47ff-80c2-bcaae041b44d.png',2,'','',''),(45,'Wildebeest','와일드비스트','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/d6139e36-ecf5-4239-9622-09727bcacb82.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/animal/image/dfcf351d-2805-49af-ab01-21e58807fe8b.png',2,'','',''),(46,'Computer1','컴퓨터1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/0a6ab61c-46a6-4291-8dda-57235dd68c2e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/b928d688-4b1c-41d7-8ffa-60935829537e.png',4,'','',''),(47,'Easel5','이젤5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/82b8fff0-286c-4461-9d4d-33a63fe1a260.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/c45ea2bc-81fd-4c00-a77d-ad5cc8e56028.png',4,'','',''),(48,'Gamingmachine1','게임기1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/a62ef1e7-2b39-4685-aaf2-02dfcd4811c5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/05a4c29b-5384-4e68-b126-aaee004b43ba.png',4,'','',''),(49,'Mirror17','거울17','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/ae4fe641-ec82-46af-adad-7397a434186a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/8ed65ee6-6b98-4e09-9447-551964fca77d.png',4,'','',''),(50,'Mirror18','거울18','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/b0b57a91-9c1a-45d2-98e2-feec55bc4d93.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/05b4abae-2034-4d20-8027-58aa8862a55b.png',4,'','',''),(51,'Mirror25','미러25','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/fdcfc5af-18de-4e27-b0af-c899c1d9e34f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/5b4863ae-6da4-43a6-b932-0482c43320a0.png',4,'','',''),(52,'Mirror28','거울28','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/8ff3bc6b-d158-451e-8bea-04d476b51ef3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/4c5f5623-1d3b-46d6-937b-c086f4ad878c.png',4,'','',''),(53,'Mirror110','미러110','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/4aaa7e11-0fe7-404d-a917-cd64dd28593c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/18438764-b09a-4dbe-a411-542aec85dbe4.png',4,'','',''),(54,'Television3','텔레비전3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/fcb9d83f-3f13-45ee-9de1-714a9a01279c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/fac5dde0-368e-46cc-83eb-f786934b3ffb.png',4,'','',''),(55,'TV4','TV4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/9f71c650-61a6-424b-80b8-65b1b76201a9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/b317fcca-5c3c-4fe9-be4f-6c22ed80faa8.png',4,'','',''),(56,'TV15','TV15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/324e9f4e-4e3e-4469-bcaf-03597747d515.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/d3790bdd-4596-4295-aa1e-9418cfee5574.png',4,'','',''),(57,'TV18','TV18','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/03a6f523-1c57-473a-aedb-06c11f38b43d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/display/image/7b73c45b-534b-41c1-87f8-bc16d565a621.png',4,'','',''),(58,'Arrangement-1','배열-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f32b7d82-0581-41e6-a27e-f968848b1d83.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/8482976c-5ad9-4e8f-b761-4e09acb22bf6.png',5,'','',''),(59,'Backpack115','백팩115','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/a779f908-2c75-476b-9429-120b3ae034e9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/f77a7773-cd3c-439a-92b2-612608f41317.png',5,'','',''),(60,'Ball20','볼20','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/8e4286b6-aaff-4a80-a205-274a564004eb.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/0ae4fa0f-bd91-4c29-8b47-3d2d6fb54ebb.png',5,'','',''),(61,'beachball_002','비치볼_002','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/71b3393e-380d-4cca-8064-15ea6431d17d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/fc2585d2-0f46-4923-810c-a52e4b333ac3.png',5,'','',''),(62,'Bell','벨','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/72cddd80-f025-4aa4-b8e7-4b8c00d116b8.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/6ca501bc-8862-4cef-bb25-d237840e9343.png',5,'','',''),(63,'bike_004','자전거_004','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/250d5985-9db9-4cf6-b308-119ef2ef16eb.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d18090bc-a178-4941-ae01-a68c8330c8dd.png',5,'','',''),(64,'bike_005','자전거_005','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c941877e-77e5-4930-bb03-59c9e08ecf14.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/30d47d60-ba99-4697-809b-43b860ff56f4.png',5,'','',''),(65,'bike_006','자전거_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/a6051ca5-2f6a-4249-a741-09268e9e3241.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/484a9962-d770-4964-8813-44586006f6d6.png',5,'','',''),(66,'Birdcage6','버드케이지6','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/bff2d0ad-b41f-4cb0-a44b-87edf75ccd1c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/a1c54437-4d4c-4a75-b585-d7a5b23316cc.png',5,'','',''),(67,'Books25','25권','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/90b299b3-34e4-4de8-92c9-f21a59a76a9d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e9412c73-4c71-4604-a79c-29a013d03ee9.png',5,'','',''),(68,'Books35','35권','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/67884837-7690-494a-97dc-f5c669b3b06d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/6ea02856-37ef-4ab4-9d07-c5f3caafd737.png',5,'','',''),(69,'Books47','47권','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/6e6a17da-6489-4ff9-9ea9-5b9e277d1064.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/78477db9-5047-44ef-87cd-39054322fbe1.png',5,'','',''),(70,'Books67','67권','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ffd3a40e-bd09-4b40-82cc-853d1d3bd029.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/029a452c-4e1e-4863-81be-f57d9fecb311.png',5,'','',''),(71,'Boombox1','붐박스1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/673418a7-5210-45ac-b89c-0a1accfae350.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/bc2deb05-54fc-4664-89af-cda402418a0d.png',5,'','',''),(72,'Bottle23','23병','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/e69fe3f2-2957-4b85-ab5f-873abe46f092.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/315f0c86-ceb7-4946-97fd-f2a60e3b8c34.png',5,'','',''),(73,'Bottle33','병33','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/567b2038-5692-494b-b4b8-7c41e2811319.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/37226ba4-ab77-4a3f-b0f5-ea8efdc77958.png',5,'','',''),(74,'buoy_002','부표_002','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ad4262c6-a009-41cb-9255-be391dd93e43.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/78ee364e-00c7-4e3d-8ccf-e209253373e0.png',5,'','',''),(75,'Cake116','케이크116','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ef0f1dd3-cf78-435d-8246-33cb6324131a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/5ef7088e-f9b2-4cc0-a7ca-eac9044cc40f.png',5,'','',''),(76,'Candlestickwithcandles211','초가 달린 촛대 211개','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/e71ce237-5004-4bd5-b452-48feb9050a60.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/39dbf36a-52b9-4d5c-a296-e259a3caff2d.png',5,'','',''),(77,'chair_blue001','의자_블루001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/19912b5a-3184-45b5-a891-a4c0ff98a71e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/4c9c2552-b126-4ccb-a9c8-c381f7aecbf7.png',5,'','',''),(78,'chair_green001','의자_그린001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/40e51e20-07c4-4c24-a38c-9fb72281c875.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/a1a73066-b60e-4e1c-a417-eab48878d4e7.png',5,'','',''),(79,'chair_red001','의자_레드001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/82c4e686-41d9-40cd-8b31-8194450ad515.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/18f31d7e-0b5f-4577-b53d-3d0cbb3b148d.png',5,'','',''),(80,'Christmas_hat-1','크리스마스_모자-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/35195624-2b65-4008-bb1f-bd045541eafe.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/11414fe0-2c4a-4663-8445-4bcb83449a04.png',5,'','',''),(81,'Clock13','시계 13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ee1243e0-852d-43e6-b927-b6571ff99f16.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/dcd4447d-9b51-440d-b8ba-41e2f812d7f0.png',5,'','',''),(82,'Cookie-1','쿠키-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ba7acefa-d1fb-40b1-8caa-d27cfa50331a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e76bc306-414e-48dd-80b3-d20093a1c394.png',5,'','',''),(83,'Cookie-3','쿠키-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/1a63b16c-1983-4f0a-9624-1a67437532f6.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/de1af29f-e8ff-4966-b2b6-798813834ef2.png',5,'','',''),(84,'Cookie-5','쿠키-5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/194a37b2-e230-4591-b7b6-85bf89568c9f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9460c6fb-89e4-4b59-b999-b011b94f47fc.png',5,'','',''),(85,'Cutlery3','커트러리3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/3e9c65ad-e8af-4558-a9d5-9dcc8ebe3eeb.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9c539c27-36e0-473e-bc12-19a554b141d6.png',5,'','',''),(86,'Dinosaur13','공룡13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c8b80d60-c384-4fa7-a0b0-74ed47765cf5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/6c8919ea-b2ed-4d87-b35a-7f36a6198267.png',5,'','',''),(87,'Dress19','드레스19','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/34ae39f0-fb8c-4ed5-962c-25d2d26c5675.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/3c61165c-fada-4ee6-a134-c13c685c3b2a.png',5,'','',''),(88,'Dumbell120','덤벨120','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c1fb18bd-f3f6-43fc-9f12-5b6a84a2127a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/994e5c54-44a7-4eba-b0af-45e81acad61a.png',5,'','',''),(89,'Flake-1','플레이크-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/13b70d44-07f0-43ad-88fa-b013bc4aeffe.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/445c386d-9f99-41f0-9a5f-7b90d27f85ac.png',5,'','',''),(90,'flippers_005','오리발_005','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c5fc3811-a92b-4c7c-87c9-5fb8cfb0ca27.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e7c10e4d-6edb-409a-aa8f-1fc581a68bf2.png',5,'','',''),(91,'Gift-1-0','기프트-1-0','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/1254aa22-567e-47bf-a4b5-dbe04045dfc5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/cf20e227-f478-4cdf-b3a3-d61837bcd079.png',5,'','',''),(92,'Gift-1-1','기프트-1-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/320f21f5-c6c3-47b2-ab47-98d829223c01.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/45239476-ab15-441c-a591-fa2e58061191.png',5,'','',''),(93,'Gift-1-3','기프트-1-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/285cba70-14e7-461c-81ac-971b6de52e40.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/740b320b-ad32-4cb5-9907-feaf1a104001.png',5,'','',''),(94,'Gift-2-0','기프트-2-0','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/81f2d607-defc-4624-8dff-92faff07d12e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d7d0bec2-4c68-4a04-8f21-1ab07e5afe89.png',5,'','',''),(95,'Gift-2-1','기프트-2-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/69b53cef-b579-4057-ac27-5a256038fbb7.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/bf73e9b9-0729-4edf-92f7-0516104c4ba3.png',5,'','',''),(96,'Gift-2-3','기프트-2-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/add1780d-298f-4e5a-8148-8f9fe1eeca1e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/75ac381f-714e-41a9-ae03-505e08360f74.png',5,'','',''),(97,'Gift-4-0','기프트-4-0','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/7cd7980c-6233-4263-a10b-1c9b7c0a1a53.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/b7243247-1fbf-4f00-b28f-ae5e0aa63feb.png',5,'','',''),(98,'Gift-4-1','선물-4-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f0a13551-4a26-46d8-94ac-25b0211620d5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/fea6c281-4fa8-4391-81f5-62b34f8cdfea.png',5,'','',''),(99,'Gift-4-4','선물-4-4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f5ba2f0a-3f0e-42cd-a53a-8f3a0320fb95.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d2f82c80-ac1c-43a2-b0bd-6d63fa45d465.png',5,'','',''),(100,'Gift-5-0','기프트-5-0','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/02e87c98-e1a8-47a0-bc29-8adab16d7417.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/648208ca-6bda-43d5-a2ee-1ebe0e6337f7.png',5,'','',''),(101,'Gift-5-3','선물-5-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/98206ca9-1512-409e-97c3-b05f31b735ce.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/004e66e5-1349-4e3d-84f6-684731b2da1a.png',5,'','',''),(102,'Gift-5-4','선물-5-4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/9ac31f6f-6544-4c3b-95c4-1a970be699bc.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/a65f4087-5c8f-4025-9fb0-20fef9f2f691.png',5,'','',''),(103,'Gramophone11','축음기 11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f86a3b75-649f-4d7f-ad7b-e1868eeb3d5f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/45496be8-ab11-48a6-81cc-eb73f4db2b97.png',5,'','',''),(104,'Grill12','그릴12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f0743154-17f2-4923-97c9-0f06aad94172.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/04ae0de3-0f4a-4015-8c90-8ff6fdb845a4.png',5,'','',''),(105,'Hanger19','행거19','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/cca9c2a9-d206-4596-8642-6d3542c94d67.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e9ef672c-cdbb-49c0-ad14-c733b042c502.png',5,'','',''),(106,'inflatable_donut_006','팽창식_팽창식_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/3dc40309-0a9b-420f-865a-ce2f901267a5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d63be3ce-1583-4cfc-8550-6e9c30d67d0d.png',5,'','',''),(107,'inflatable_donut_010','팽창식_팽창식_010','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/bf57d06d-1625-4034-852e-8cc7dd6a10d9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/4c26c6ed-7733-4a0d-9b78-402965d3e022.png',5,'','',''),(108,'inflatable_duck001','인플레터블_15001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/fc975856-d2c4-471b-8f1b-edaef8bdd553.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e3c47d79-e984-4771-8d2d-059ea13c10b2.png',5,'','',''),(109,'inflatable_flamingo001','인플레터블_15001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/9636b409-4cea-4d6c-8c91-17a570ef263b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/38c42609-deba-4919-b86d-debf3cfdc5c4.png',5,'','',''),(110,'Jug3','저그3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/9387fba5-7d72-4d56-8722-c18ba7ce7045.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e26c127a-0367-47f1-8e31-382b1aed25ac.png',5,'','',''),(111,'Kettle13','주전자13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/bce4b243-332f-4720-8d83-e714eef5d237.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c143add6-efb3-47f4-9863-7e4aa9789e55.png',5,'','',''),(112,'Lamp9','램프9','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/2138bcd5-a94f-4c01-bfb7-57669231613f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/945aefa9-94ea-4f93-865a-4e6f735628f3.png',5,'','',''),(113,'Lamp12','램프 12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/7480d2f5-a512-4797-92a9-f99052e6b0ca.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/26862aa6-309c-4a4e-9553-0c6e4923783a.png',5,'','',''),(114,'Lamp18','램프 18','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ee955123-edc2-4fb2-a1b4-9478ffd676d4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c5fde56e-af79-4858-ba52-da245b46f9c0.png',5,'','',''),(115,'Lamp115','램프115','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/e023ae90-84cb-49ea-b9d0-765ebbb24d23.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/285aaf57-8890-4308-8592-efd63dd606dd.png',5,'','',''),(116,'Lump17','덩어리17','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/f1429d3d-9b8a-4cd9-b301-1745f2ba6a5d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/617bb3ab-ebec-419f-9703-4a74b137c9e8.png',5,'','',''),(117,'Lump27','덩어리 27','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/af43bd72-d083-47a6-b35b-0a320a18d746.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/3c832d5f-20d1-47c0-bff7-bf4c953e5a6f.png',5,'','',''),(118,'Nutcracker','호두까기 인형','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/95eb3956-852a-4c29-bbc0-0489efe39416.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/b1f682a0-7d28-4165-95b9-57576982ebee.png',5,'','',''),(119,'OpenBook11','오픈북11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/58f61f03-6d02-4a2d-a229-b2e4ca0c4141.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/aa391fb2-0302-4cd2-90ad-f312fb071f1f.png',5,'','',''),(120,'Painting213','그림213','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/05c43a70-4772-4886-b124-0176c3cca010.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/4bdc9acc-821d-48d1-90f8-ba6ee3e063dd.png',5,'','',''),(121,'Pan13','팬13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/5ea57843-48d4-4a3c-a5bf-e3afe2869403.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/64b05f07-bb1f-45f6-b77d-d2fbc10b0448.png',5,'','',''),(122,'Picture14','그림 14','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/0e4823cc-33c7-45e5-8f6d-a73abebef07b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/b48de732-da09-420d-b0dd-07fbb88c5c34.png',5,'','',''),(123,'Pillow-2','베개-2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/fc0d7066-4be0-455b-8d07-b69aa4746ed1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/50f642f0-2162-499e-89c4-92c2adaf9754.png',5,'','',''),(124,'Pillow-4','베개-4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/d97610cf-7e73-4585-948a-523eb6c55863.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/966296e4-924a-4bfa-8b13-e1f73847043f.png',5,'','',''),(125,'Pillows25','베개25','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/e88e059d-c7d2-4363-9613-a5ebd608fa67.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/8deaacfb-af15-4093-8a77-0e6bc0623716.png',5,'','',''),(126,'Plate-2','플레이트-2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/82c41a4b-2c54-4464-a071-12296beec0ba.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/ef126f51-3e9f-408f-bf97-48f5a544429a.png',5,'','',''),(127,'Plate73','판73','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/e1a710ef-1cd5-4b04-ab08-5085e11eec5b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/92155994-51ff-4191-addf-d5d739a9860d.png',5,'','',''),(128,'Plate93','플레이트93','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/4c02e71b-bba6-44aa-91a5-41d15bbd42ae.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/cffaee66-5f8e-4414-9b1c-f1322421d050.png',5,'','',''),(129,'Poster11','포스터11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/cbff2dc0-9c91-4f86-abb6-5d83e9573367.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/2083d1ca-7f30-4728-ad7f-aa59b7151756.png',5,'','',''),(130,'Poster21','포스터21','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/73963086-4f5c-46a9-8517-a91e3cc41c4c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/76ca774e-8230-44ef-9905-093d21dbf1ee.png',5,'','',''),(131,'Poster71','포스터71','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/397a0b36-1eb1-401e-b4be-59b70d8ea643.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/debf7ae4-e6eb-4e48-800d-57c4dbe6f30c.png',5,'','',''),(132,'rack_tshirt001','랙_티셔츠001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/fe6cfaf3-cb45-43a0-b4f2-bd4ddc13b80d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/4a3d5d2b-aa69-4e39-8c8c-1e29e5013bb2.png',5,'','',''),(133,'sand_castle_003','모래_성_003','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/9cd5997b-90a9-468c-abef-765b2291d077.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/2777bfac-0a5c-4626-99a5-614ff76b2d66.png',5,'','',''),(134,'shell_005','쉘_005','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/03f97fdd-5e4f-4cbb-9b75-c721ae67ac6b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/ccaea16c-9ab6-4df7-97f8-2a8be80435cc.png',5,'','',''),(135,'shell_006','셸_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/4e0ad360-eca1-4c07-ab5c-ebeb6902bd5d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c9cf1da2-347f-4052-a052-c8f6f66871e1.png',5,'','',''),(136,'Shirt19','셔츠19','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c3045591-5037-4e2b-b8be-162164f6a8ec.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/a1d7cdae-48c7-42fd-b620-e9a85587ac92.png',5,'','',''),(137,'snorkel_008','스노클_008','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/cf4bec18-e527-40da-b8c9-1b0cc7803b34.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/33eea95e-ba1e-421d-b5bf-26c7159ab85f.png',5,'','',''),(138,'Snowman-1','스노우맨-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/345124cf-f6ae-43fc-bf34-2c22df71ae90.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/8d903ffb-0edc-43ef-9a58-a4d015549590.png',5,'','',''),(139,'Snowman-3','스노우맨-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/2df2303d-28b8-4e9c-ba11-51dd27153279.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/f3119cc5-46c5-4b73-826e-e30dafe75a25.png',5,'','',''),(140,'Sock-1','양말-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/a3475ff8-970e-4ca2-9cdd-c4901c32b4d4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/055602b0-da42-4e21-9d9e-b1238686be85.png',5,'','',''),(141,'surfboard_003','서핑보드_003','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/ae0e270a-e3f8-4b5d-ad40-57b65bd79f24.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c899f971-6800-40ca-b6cd-b83c737d660f.png',5,'','',''),(142,'surfboard_004','서핑보드_004','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/79fc109c-f490-482f-af5c-e80c9e615b0f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c6dc77b8-f6f8-45f4-9c85-5df2286446d0.png',5,'','',''),(143,'Teddy_bear-1','테디_곰-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/5d6815b6-1a6e-4af8-8e4f-dfde2f7276d0.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/6b3a5578-c9ba-41db-bb1e-bb39d1451b5e.png',5,'','',''),(144,'Teddy_bear-2','테디_곰-2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/661ec32c-96f2-4359-98f5-a1b374c41d12.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/45a615a5-3d32-4be4-95bc-a76410a37389.png',5,'','',''),(145,'Teddy_bear-3','테디_곰-3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/85e5ff02-c99d-411c-9854-843f6daa4ec4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/c0aa3fcd-1981-4609-9698-9c1a0f18f521.png',5,'','',''),(146,'towel_006','타월_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/52b70787-d55b-4920-9bc7-b819fa363aa9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/4e15962f-fbad-4bc5-85d8-9baca577e97a.png',5,'','',''),(147,'towel_008','타월_008','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/eb240b25-84d4-4d3d-aa6b-41fc02fc7b0b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/fac11308-6787-4350-bca1-a31feb6a91b8.png',5,'','',''),(148,'towel_009','타월_009','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/aed7ce70-21be-4f56-9c01-90670083a64e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d914168d-8b2a-4339-9efe-118d4a313778.png',5,'','',''),(149,'ToyAirship15','토이 에어십 15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/35dff3fb-f22b-4550-b0c8-15ea64419fb8.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/f5a7ca52-6294-4551-bf88-3fa0f98387fc.png',5,'','',''),(150,'ToyBus15','토이버스 15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/1ed4f1a0-f039-4277-ba1d-85d1c033b2ba.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9e2709f8-1972-4cc2-ae72-1edcbff71459.png',5,'','',''),(151,'ToyCar315','토이카 315','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/730a6fbb-5574-4eee-b3d9-d9c83bdfac4d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/54c751a9-51dd-4794-ad4e-0d9afa88a75d.png',5,'','',''),(152,'Toyhelicopter15','토이헬리콥터','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/d860a5ca-192d-4aa2-8c2b-5980d80a22ad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/0fc1e4a6-c13a-4691-9c67-d2ffb0d9422e.png',5,'','',''),(153,'ToyShip15','토이십15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/bf7c8c48-1f0f-426f-a40b-b254daecb127.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/d3d543b3-24f9-490c-8f2b-b755dbcd39b9.png',5,'','',''),(154,'Tree-1','트리-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/0f1ca921-98ac-4201-a8ca-00f38e69bf5c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/36574aef-4a37-4a8e-9cd2-96beaa8c068e.png',5,'','',''),(155,'umbrella_005','우산_005','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/831464eb-b64b-4bf7-b30a-62510e505332.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/8b86b3f0-bb27-432b-a28d-2868f18e46f5.png',5,'','',''),(156,'umbrella_006','우산_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/4f9f9077-4470-4a68-9491-8c831a0e0b66.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/f8edd736-b456-46ba-acb9-bf9c142b6e5f.png',5,'','',''),(157,'umbrella_007','우산_007','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/1e3f2504-9005-4f89-b9da-f11d7d78ec35.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/557f28fa-5c50-451b-bb48-566ce4c6265c.png',5,'','',''),(158,'umbrella_008','우산_008','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/a3731f14-fcf3-42bf-a4b0-1b0a3d43ff14.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/7fc54922-2682-4469-8c66-38913fa2bcbb.png',5,'','',''),(159,'van_green','반_그린','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/142ce6e8-536e-4e23-9799-4902d3040f91.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9dade4a8-e67f-4c2d-836c-c9c1adbcae8b.png',5,'','',''),(160,'van_pink','반_핑크','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/a8314e13-cd81-40bc-b32d-f21dd78585ad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/dde46af2-60fd-45b4-9dce-4bf0299cc1d4.png',5,'','',''),(161,'van_yellow','반_노랑','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/b8c28792-9ec9-495f-a4e3-372e33a8f35d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9992004e-49e1-4d28-9f8b-21cb9b67d721.png',5,'','',''),(162,'Vase11','꽃병11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/2f52217f-5969-4af9-a25c-be644f9ef7c3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/baecc0fe-e30d-4149-bfff-c84779a1c269.png',5,'','',''),(163,'Weight120','무게120','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/18f1e5f5-6cf9-43cc-8f4c-71a8a4d23b83.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/5224821e-f2d0-4793-9fd1-4ccebd96c0d3.png',5,'','',''),(164,'WineBottle23','와인병23','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/c4ddb2e8-33f1-41f4-8510-e647569b181b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/915e2263-0e88-428e-a2e9-681fc69495ce.png',5,'','',''),(165,'WineBottle33','와인병33','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/eaaa3129-ca04-4a3e-a475-a93e145f1e05.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/e4c2d4a9-c073-4391-bc5c-c2bdf514736e.png',5,'','',''),(166,'Wineglass33','와인글라스33','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/63af2a8e-31ee-4289-928d-01e37c917551.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/etc/image/9d61b891-f29b-4885-b53c-077e8f5c5245.png',5,'','',''),(167,'Armchair14','안락의자 14','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/a7c95a2f-c17b-4a77-8d52-7ccf35395cbe.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/883ca605-52dd-4db8-ad9c-f8b4960aa2cf.png',1,'','',''),(168,'Armchair16','안락의자 16','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/de545b77-47a4-4ac1-b4cd-c7664a21ea38.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/38895979-e746-49d5-bb78-dbef9b88a955.png',1,'','',''),(169,'Armchair26','안락의자26','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/e0a91e82-423b-43d6-8459-dfbe79ecf77f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/d09bbe7b-e6eb-44b6-aa90-cd7e9bdae63a.png',1,'','',''),(170,'Bath8','배스8','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/1e8f042b-64d9-46ee-b077-ccb6b0bc6ed9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/47115ca9-27d6-400d-a0a9-db4750e31bb1.png',1,'','',''),(171,'bbq_open001','bbq_open001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/3089c90f-183d-4c93-950f-056fe0752463.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/e0ad4910-7257-4c14-996a-0d83445de34e.png',1,'','',''),(172,'Bed5','5번 침대','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/f204587a-77f0-41d0-bfa8-2748b7200f27.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/23dad3fb-729e-49bc-9ac6-8e3acfc6779c.png',1,'','',''),(173,'Bed13','13번 침대','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/5b280930-22ea-4a83-8af4-1b29aec72be0.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/abdff170-aa8e-49b3-b316-4ece9f351244.png',1,'','',''),(174,'Bed18','18번 침대','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/44dec632-98f6-4526-8860-e18d3f6c6071.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/8fc018c3-678b-491e-ba65-db2be915fe46.png',1,'','',''),(175,'Bed215','215번 침대','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/e98d40d2-0bcf-4d73-b235-52955d7ab47f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/7aed5a68-bf29-4f79-9801-3abdd0b99d4e.png',1,'','',''),(176,'Board2','보드2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/5115fea3-c31d-4dd2-be0a-527d4cc081bf.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/3bbbd7e1-adc9-4809-8730-8a8cb47632f5.png',1,'','',''),(177,'Cabinet116','내각116','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/5bd4394f-806e-4d11-8374-a2002d71482b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/0b7f3d10-2cf4-42b2-b8a7-3f8d8faf42e7.png',1,'','',''),(178,'Cabinet117','캐비닛 117','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/d5c96f73-8ffa-4761-b16f-aa746c5b3759.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/abe8d178-9489-4148-8dd9-a693c02400f3.png',1,'','',''),(179,'Carpet-2','카펫-2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/365ea489-8de2-4ecc-a428-cb8378955031.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/b4b8d561-60fa-45c2-b7c3-71e345ec7f83.png',1,'','',''),(180,'Carpet5','카펫5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/174f1bb3-1f8c-4be5-8eb1-e558df259c66.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/d58ca4b5-e7f2-43fd-9cf4-2b57e267ed74.png',1,'','',''),(181,'Carpet13','카펫13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/30806e68-d7d3-495d-b87d-2009251e2f56.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/cd8b4f50-776b-42e3-8ad7-2bcc25111f2b.png',1,'','',''),(182,'Carpet14','카펫14','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/18084821-f617-434e-bc74-c8aa61f52084.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/2623aacc-6d01-4767-be63-a752f98cb665.png',1,'','',''),(183,'Carpet118','카펫118','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/1dfff16d-8bb6-4ff5-94d4-3d99928eaec5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/70706d50-c4f9-4b05-8f77-000a997b8ed0.png',1,'','',''),(184,'chair_lifeguard001','의자_라이프가드001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/627e0277-d666-44fe-9109-2b007ea76c51.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/4e5ab5da-9acb-40f1-bb86-a2e0e4c1be41.png',1,'','',''),(185,'chair_white001','의자_화이트001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/884f29e5-6226-45f7-8006-a7a1ecfa2025.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/ff3985ae-9edc-4b6f-a1d5-ba7202125bb3.png',1,'','',''),(186,'Chair11','체어11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/2a1f9a6a-b889-4a58-9a07-49377e732f55.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/f5e87d59-5c99-48de-a1c6-8a262df2ca32.png',1,'','',''),(187,'Chair12','체어12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/4edaa4ab-e057-48e7-bbc9-f1d51f32b900.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/17881f14-d036-4a15-a06a-81d94e70aefd.png',1,'','',''),(188,'Chair15','체어15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/506bd72f-4c52-4e02-a27e-ea1e49a500db.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/4991ca4c-5f27-462d-87df-a417f1f4f9c6.png',1,'','',''),(189,'Chair33','체어33','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/68e7b018-c7bb-4301-8bb7-f19970324caf.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/c22757f2-2b78-4cd9-bc07-44d559957b04.png',1,'','',''),(190,'Chair115','의자 115','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/6baef0ac-db2a-44d0-b07c-99b4269fd0e0.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/d4ba136b-2d87-4b27-af6c-271f689a67d5.png',1,'','',''),(191,'Chair215','의자 215','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/b589baf5-153d-428c-bf7f-bf70246dd828.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/3c8b6270-7117-4858-b9dc-c004c0cd8503.png',1,'','',''),(192,'Couch1','카우치1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/b45723db-f7e5-486a-a07e-086f0b773d7a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/b40db6b9-128b-4756-ba40-0aba9c7ad024.png',1,'','',''),(193,'Cupboard11','찬장11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/fc71ea87-f250-48c7-8daa-12577c04aa03.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/88b0d3f7-f171-47a0-b4bf-eb0d6a2abeb6.png',1,'','',''),(194,'Cupboard21','찬장 21','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/031f1297-aed8-4a8a-a8d4-e6e54129f817.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/dae704c7-8628-4e7b-8ed3-f2479b5e177b.png',1,'','',''),(195,'Fireplace','벽난로','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/0b590866-80ed-4e9f-a34e-41891b1a62df.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/ef426705-0522-4928-971c-1fb9b1e6d346.png',1,'','',''),(196,'Floorhanger5','플로어 행거 5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/178831f8-13de-4377-9019-8083930e8883.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/d2d9acb4-7329-40f8-95ac-b4b6c973810c.png',1,'','',''),(197,'Fridge3','냉장고3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/4d5f0bcc-f3fe-402c-b683-f4c3073e8f91.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/785d97ab-575b-4cab-a809-ca8fd3db6819.png',1,'','',''),(198,'Gasstove3','가스레인지3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/fcac339c-9c24-4bdc-901d-54ffe94f7b04.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/ecc6840a-b03f-42fa-bdb2-6217f9cfea30.png',1,'','',''),(199,'HotTub12','핫터브12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/8e9b6f6f-1489-4cc3-b946-9d2852c25552.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/1f876305-d015-4346-a315-02d69ad8173d.png',1,'','',''),(200,'KitchenCabinet23','키친캐비닛23','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/6c5909f2-0527-450e-a52c-1937c11151ef.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/70529ccc-5d87-41e5-93d4-d10ca7ff7e70.png',1,'','',''),(201,'LittleTable4','리틀 테이블 4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/34c19cdb-2a1e-47bd-abe5-70683941207d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/3bfcc5c9-b5bc-4767-81bd-5aa823821106.png',1,'','',''),(202,'Locker8','락커8','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/618c085a-d9c5-48f9-b512-a7468c6bda20.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/f5cb6d23-77d2-468c-8bbe-f69772680091.png',1,'','',''),(203,'Odclock11','Odclock11','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/a20c0548-0320-41a6-9814-ea40c4f3f36b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/b54b5e85-ff0b-49fb-842a-1cd93578bc2e.png',1,'','',''),(204,'Rug8','러그8','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/3f9a8313-a4dc-4f63-903a-a8a81f20c68e.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/0770604e-cbd9-42ef-9a95-f60cdbd3400d.png',1,'','',''),(205,'Shelf14','선반 14','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/db0607c6-7fcb-4f16-b4c3-fbf6cd83b500.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/bebd1da0-3f46-4f15-893b-196d7656e6ca.png',1,'','',''),(206,'Sofa','소파','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/749e5329-6051-4847-9a27-df8092f7dc05.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/80c71b4c-1b80-4e41-9d69-e618ac6f88ba.png',1,'','',''),(207,'Sofa4','소파4','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/77105b18-f6aa-46c1-99eb-0815d4d262c5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/5ec4882e-0692-4d0e-9135-f91d804977ca.png',1,'','',''),(208,'Stool2','걸상2','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/9d645d23-aa49-4b53-a31b-919b8a02e9bc.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/2b139089-5221-41e0-b007-0ffe7866bcf0.png',1,'','',''),(209,'table_picnic_003','table_sublic_003','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/a99233bd-e403-4fa4-ae0f-a60cd4ffd300.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/2a07d4aa-6b37-49c5-b86c-2ceb76d6cc32.png',1,'','',''),(210,'table_picnic_004','table_sublic_004','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/e98316e9-80c2-43cf-b5cd-ccd64c481a6b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/2944c160-8d4d-4a57-a819-a2893160f2a5.png',1,'','',''),(211,'Table1','표 1.','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/92d7856d-a26d-48a3-9d4f-fb460b1dc442.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/571d3d0d-3ab4-4d82-b9dd-00672595a2e5.png',1,'','',''),(212,'Table-1','표-1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/6468fdc3-fe0e-4dce-9d69-c8e3d2ae4970.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/6ea03584-86aa-4a85-9244-c620ce6c1545.png',1,'','',''),(213,'Table3','표 3','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/b802f37c-93fb-4c5f-bae2-069846116c62.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/2e040683-0ec3-496e-81d4-2895545dd398.png',1,'','',''),(214,'Table5','표 5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/abef8215-22e3-4bac-b2bb-34b567602b3d.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/4fdefeac-147b-4fa3-a27a-60ae12c68f0d.png',1,'','',''),(215,'Table12','표 12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/2a17b59a-4f08-408f-9fdb-d5d6b3a1e291.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/c477bff1-182d-4627-93aa-04a990a22d40.png',1,'','',''),(216,'Table16','표 16','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/42a48bf7-fb1b-4f8b-9ce0-5f3fbc067ee9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/f609c783-c9b8-4de8-92d1-4311256631bb.png',1,'','',''),(217,'Table32','표 32','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/72738470-56e3-42c6-840e-5a7003efc11a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/ecc59a43-35c7-4540-ba1a-bc0b13efdf17.png',1,'','',''),(218,'Table211','표 211','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/02f51106-d5a3-407c-ae15-5505f5c5f4e2.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/furniture/image/9b9c3d2b-7c70-47dc-98bc-c3e09c4d7331.png',1,'','',''),(219,'Apple_01_LOD1','애플_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/27f420af-fcfe-46dc-a2a0-bc53c42a0e40.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/72d2e926-dabc-4143-8e6a-8a03c733b6de.png',3,'','',''),(220,'Artichoke_01_LOD1','아티초크_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/ac2668eb-467f-4eb2-ac00-5429cf3204a0.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/9b8ea762-9a45-47fe-85c3-2a40eabd3160.png',3,'','',''),(221,'Aubergine_02_LOD1','오버그린_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/2398bd49-a7d2-4f85-8fc6-64feff0028ea.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/86b59720-7f97-422f-8437-f55ece361500.png',3,'','',''),(222,'Avocado_02_LOD1','아보카도_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/19e3482e-cf7f-4f35-a212-350ab9ed4497.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/257ac4bb-87c4-4616-8293-b18d0e219b96.png',3,'','',''),(223,'Bananacomb_02_LOD1','바나나콤_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/59d2684a-fe56-4a44-ad78-2831a8466490.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/a4d1cf8e-3be5-43b6-ad44-9f1f40d6204e.png',3,'','',''),(224,'Bananacomb_03_LOD1','바나나콤_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/529d86ac-b667-4a65-988f-5a7b67b82a09.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/e13468ab-6df4-4265-a4bc-3a15495a30c6.png',3,'','',''),(225,'Basketwithflowers5','꽃이 있는 바구니 5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/fb6269c3-4607-4b02-82fb-26f43aa47298.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/6842c4e9-39e0-4593-99d9-f53ab1fda07f.png',3,'','',''),(226,'Blueberry_03_LOD1','블루베리_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/15849e81-81a4-459b-9eac-2b2347895110.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/732c3215-b386-4740-91a0-f998ee8c5069.png',3,'','',''),(227,'Broccoli_01_LOD1','브로콜리_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d33a5375-5e01-4801-8a2c-8e2ca6b9f56c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/ab48e023-5923-45a6-80eb-5db63f11604a.png',3,'','',''),(228,'Cactus16','선인장 16','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/3953ad02-930a-437d-915d-e53ee048f018.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/bcabbf34-ba67-40f4-976c-8ad3edf0df90.png',3,'','',''),(229,'Capsicum_01_LOD1','캡시쿰_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/be334107-7cf0-4f28-818d-ac054bde2c8b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/81a2de66-3036-456b-bddb-9984a4cc97d3.png',3,'','',''),(230,'Capsicum_02_LOD1','캡시쿰_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/b5ba10b0-d9ef-4710-ac21-90694cc7654f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/72a1d467-4769-4c6c-be90-26a440299662.png',3,'','',''),(231,'Capsicum_03_LOD1','캡시쿰_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/646560f2-becd-4961-9f8f-85f2f57b2464.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/4a1c59ba-2b1e-4041-a8cc-a56f0cd039e2.png',3,'','',''),(232,'Carrot_02_LOD1','당근_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/c80a216f-fc22-4d3c-9585-f62534112a12.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/e28f9462-9c5a-4ca5-9848-8bdf88dd0a57.png',3,'','',''),(233,'Cauliflower_04_LOD1','콜리플라워_04_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/4a589799-ae46-410a-b458-a12933eb2c49.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/bcbc4810-8540-4268-8305-de386b237a53.png',3,'','',''),(234,'Cherry_03_LOD1','체리_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/10c73976-5967-4592-8246-b5261a72ddb5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2efe5d05-4585-46d5-8db7-e79f1daee4b6.png',3,'','',''),(235,'CherryTree26','체리트리26','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/0ecc81a7-a334-4d1b-bf3c-ff0a11300f48.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/65836d58-bde1-4968-840e-e10dcc26c7f5.png',3,'','',''),(236,'Cornsimple_02_LOD1','옥수수심플_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/a507bf02-a798-483b-a89d-4f3d5fc8bec2.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/0d5227bd-9639-4d49-b8db-60fbd8a4754d.png',3,'','',''),(237,'Cornsimple_03_LOD1','옥수수심플_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/dfc12ab8-b987-4d9f-82b7-8c5c52a1455b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/5fc6429a-00a5-4388-a84c-0a569551d35d.png',3,'','',''),(238,'Flower_000','플라워_000','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/68a1d74b-9824-4432-94dc-e4fd966feb65.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/9be06aa0-e7f9-494e-a8a4-eb1b15358638.png',3,'','',''),(239,'Flower_001','플라워_001','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/1aac9619-c534-46d4-b2bf-7cdcbf40835f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/66ed6a0e-1a29-4928-8003-fe15dfa0d2a1.png',3,'','',''),(240,'Flower_002','플라워_002','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/28b0b716-e7e3-475e-8f9d-afa8e00e946b.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/056deafe-6505-4181-af1b-a0229a11b06f.png',3,'','',''),(241,'Flower_003','플라워_003','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/0c9e9483-3926-467d-b6d4-3722d536199f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/a1e2a9fa-b0fc-4ceb-a10d-044f3d522f57.png',3,'','',''),(242,'Flower_004','플라워_004','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/12b743d8-627c-4249-b210-31d07d6c64ac.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/dd4877a6-c0bc-4226-8b17-bd200648d0bf.png',3,'','',''),(243,'Flower_005','플라워_005','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f9f63882-83af-4f7e-aa0e-b18230e47337.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/6f1fffbf-2dee-4e75-a1d2-6a94396868c3.png',3,'','',''),(244,'Flower_006','플라워_006','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/ba215a4b-072a-432b-a5ac-78e32083d4ad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2c99fff8-bd17-4f2b-ad64-b1f625635e7f.png',3,'','',''),(245,'Flower_007','플라워_007','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/359d69f5-2e86-4c17-a228-c297881eb521.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/37b87472-1132-46d0-8baa-93a259a783a7.png',3,'','',''),(246,'Flower_008','플라워_008','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/28e32ba0-5091-486e-8f1e-0c39d0956cdc.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/5b18aa74-57f1-403f-a732-84b0ea221324.png',3,'','',''),(247,'Flower_009','플라워_009','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/7c768c66-d5d8-4bb4-860a-27c1703888ad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/db21485e-4a54-4f24-8259-32a06411290a.png',3,'','',''),(248,'Flower_010','플라워_010','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/e6522dc7-4a23-4397-ac38-ba84e7cee3c3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/f7dc5082-73df-4056-9241-8096c5cc1844.png',3,'','',''),(249,'Flower_011','플라워_011','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/2e491688-d487-4333-a7bf-ab635503c767.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/3f9225ea-2dc7-4ada-a5e4-d8bab463d10d.png',3,'','',''),(250,'Flower_012','플라워_012','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/b3e64496-e559-4123-9667-4ca1a9c68f56.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2e20cd9e-6737-4495-823c-2acec16f565f.png',3,'','',''),(251,'Flower_013','플라워_013','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/ab68b617-463c-47a7-bed9-07ec9f73cb00.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/41b90e2a-d763-43eb-ab81-7e8ab5dfb1b6.png',3,'','',''),(252,'Flower_014','플라워_014','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/44f753e1-bc4c-4511-9633-b0f451d2dcef.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/073c1ec6-ea49-4eb9-953a-d4ef79d8cb95.png',3,'','',''),(253,'Flower_015','플라워_015','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/db3fe5f9-24d9-4a0e-b59f-000ab1046bad.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/a284064c-3b58-4b2c-b2b9-82bc2edd21f7.png',3,'','',''),(254,'Flower_016','플라워_016','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/aee107c1-3b95-4580-8049-7814bfaaa119.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/901bf716-0134-45fc-ab02-80cdcae179ce.png',3,'','',''),(255,'Flower_017','플라워_017','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f56189f9-c7c8-4632-af7d-492d57a5777c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/bc0a8941-a71c-441c-b404-e4568e78df01.png',3,'','',''),(256,'Flower_018','플라워_018','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/67fda075-f78b-443c-8435-1ce455c43ecd.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/59a85124-8855-4ac3-aa5b-945eebcc3acd.png',3,'','',''),(257,'Flower_019','플라워_019','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/88071751-b90b-4c11-a5d4-ddff7450e394.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/648b1f4e-470d-420a-b13e-068d1bc20e79.png',3,'','',''),(258,'Flower_020','플라워_020','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/e4e3d3d8-27f9-4d0b-9773-a71678249d73.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/5c3d1da8-598a-4a8a-9a58-47ad0bcc66de.png',3,'','',''),(259,'Flower_021','플라워_021','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/75993044-ca6e-4512-a089-4faefdac416f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/5ffb28c5-7777-4946-8edd-33e3134a1c03.png',3,'','',''),(260,'Flower_022','플라워_022','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/80c583fb-8200-48aa-a3ce-400a705b47e3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/241d66cd-5075-4b75-9eb3-c92d57ac9bd5.png',3,'','',''),(261,'Flower_023','플라워_023','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/76297daf-14af-43b6-9b67-e84d194723ce.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/6f62683d-6417-4af1-8e83-937a3f0f797b.png',3,'','',''),(262,'Flower_024','플라워_024','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/2c1d0dfd-a3c0-4af1-8e95-ee140ec28b17.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/262b5c16-b0ca-4b9b-9620-069ae617918c.png',3,'','',''),(263,'Flower_025','플라워_025','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/a0fcafd3-3c21-4f77-a47a-86c3a84d2b37.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/a68383fb-bccc-4409-b17f-d1afa7bcf4df.png',3,'','',''),(264,'Flower_026','플라워_026','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/695af13a-926d-490d-80aa-d0c32d9a67df.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2a7b223a-1b8d-4b82-aa1f-6c5639467188.png',3,'','',''),(265,'Flower_027','플라워_027','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/79261a5a-4b98-495d-84e7-812a7f842f00.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/60d70141-a5c3-4dfe-95d6-6b476787e882.png',3,'','',''),(266,'Flower_028','플라워_028','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/90b43e0c-2cd4-4219-9d08-58ca99328a35.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/21c53fce-e070-4868-8a94-be192fa5fbd7.png',3,'','',''),(267,'Flower_029','플라워_029','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/a9f4995b-de06-487b-8f8e-b86ae1994a45.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/64cfe0a3-1a6b-4ad1-b55c-d027a1307082.png',3,'','',''),(268,'Flower_030','플라워_030','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/1161db27-0520-4acc-910a-8e4c7dba966f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/59fa4be4-d455-4f45-9713-1af32e8c0167.png',3,'','',''),(269,'Flower_031','플라워_031','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/40a6bed9-93a5-468e-808b-24f82f08c8b8.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/880d1caa-5f30-4346-bd8c-9a4208f983b1.png',3,'','',''),(270,'Flower1','꽃1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d2c65c87-fff9-4f3b-96d0-9396badf93b3.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/28f145c7-3c0f-4292-89f9-b44b2ff4f29a.png',3,'','',''),(271,'Flower12','플라워12','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f9238970-0fac-4a7b-a014-d5da924c5f1f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/afa81d39-24dc-4920-87f8-5dd0792ca37a.png',3,'','',''),(272,'Flower13','플라워13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/3acb9bae-9d11-4194-af23-bb3ff69e96e4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/e19347f3-07b4-447c-95ec-f9f341f5ce9e.png',3,'','',''),(273,'Flower15','플라워15','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/dc3354ca-247b-45c4-a639-0660956fd089.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/16e525a2-0c04-4583-984d-8e119a911f9e.png',3,'','',''),(274,'Flower36','플라워36','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/b4532907-ddea-4a6f-9eb8-b8908568b0f1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2a352741-229c-41d9-ac04-0efa4f4693c5.png',3,'','',''),(275,'Flower63','플라워63','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/55e76d7a-be1c-45de-8c33-dc46fc241c87.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/30ac1ea5-25ba-470b-a677-8b108e6c695f.png',3,'','',''),(276,'Flower111','플라워111','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/71f37fec-e28b-48fa-a9ff-e3ea9e4d0e79.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/4872d8a6-e280-45bd-a9cf-3d0d2ce493c1.png',3,'','',''),(277,'Flower215','플라워215','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f99c1bee-8cbc-4315-ac25-493c264d0b24.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/8edee9b8-a13e-4e5f-be0f-3e4be28a3f80.png',3,'','',''),(278,'Flower315','플라워315','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/3515810e-76c6-4075-9fbd-19cf40438e6c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/747f73f1-8c9c-4935-8c72-6af1c6c9589f.png',3,'','',''),(279,'Flower417','플라워417','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/65dcd99a-668a-4461-840a-e3553df1c7ef.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/f3e136e2-e27b-473c-9ad7-5aafa2e0b320.png',3,'','',''),(280,'Flower517','플라워517','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/8344b5ff-527e-4867-a41f-690dbbed9d8f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/9e0af1d8-2903-46d1-b00b-caeb29261d39.png',3,'','',''),(281,'Flower615','플라워615','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d3c5e76d-d3b0-4b02-b4bf-323d1e1c4106.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/013d9651-b6bd-48e4-9c2c-c342c867d0a5.png',3,'','',''),(282,'Flower617','플라워617','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d6801024-657e-42ac-8170-3ef475cf3911.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/7f29ce5b-d6ba-40fc-9525-bad5bb1887a1.png',3,'','',''),(283,'Floweronastand6','플라워 온 스탠드 6','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/38c8daf6-04b7-4859-92d5-089a1e64e664.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/00015701-0d02-45ee-8f8c-d2679dbeb8c5.png',3,'','',''),(284,'Grape_06_LOD1','포도_06_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/35fa55b9-d188-4f28-a7d2-fcf5986e5129.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/df3ffdc4-8f8f-4e13-9f8e-1b219a1b889c.png',3,'','',''),(285,'Leek_01_LOD1','부추_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/4277d854-5e8a-434e-a546-3d1574f97f2c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/ff6c087e-6318-4e39-bbc4-4e6c055c0910.png',3,'','',''),(286,'Lemon_01_LOD1','레몬_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/fa6a96ad-672c-4282-9417-354d641f449c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/6e246230-d806-4c91-917f-1da40bca6bd5.png',3,'','',''),(287,'Lemoncut_01_LOD1','레몬컷_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/e1ead034-84fc-48e7-80ee-ba1dc38eeee1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/8482480d-08ec-443a-bfe7-7eb080dcbaef.png',3,'','',''),(288,'Mango_01_LOD1','망고_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/3fe11a5c-4a09-4bda-b484-da52593d2ec5.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/1d861640-3571-4d19-a0bb-d15c93caf422.png',3,'','',''),(289,'Mango_02_LOD1','망고_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/5ffd0056-8e59-4bd1-8caf-f718307a03a4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/ee6c5c28-b25b-489b-b5f4-776036b630cc.png',3,'','',''),(290,'Mango_03_LOD1','망고_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/a3c46dac-dd80-47d2-be58-a3268ad23a5f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/622dd4cb-fc64-4140-b203-6aad9cc6ae6c.png',3,'','',''),(291,'Mangosteen_01_LOD1','망고스틴_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/3d91da05-0ffe-4c82-92db-b6a67851f5ef.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/288d0b01-e526-45fa-89c2-c89408696fb2.png',3,'','',''),(292,'Orange_01_LOD1','오렌지_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f44b4d23-49d0-476e-9387-479c3614a329.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/3af5a84a-e9cd-4637-a47c-2a9b72559c8a.png',3,'','',''),(293,'OrangeTree16','오렌지 나무 16','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/db29a1e8-767e-4020-8eef-40e40c8ca138.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/ccb35352-fb2e-4342-9bbc-f02c01e6ebba.png',3,'','',''),(294,'Palm112','팜112','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/e1a2f4a1-60d1-4be9-967f-4cff12cd6481.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/0a77d8aa-dba9-4c83-9863-776b04e94c78.png',3,'','',''),(295,'Palm212','팜212','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/2600fd81-1434-40cb-a8c3-21f089f0bac2.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/788bcd73-dab7-4602-82aa-b8d939f9e724.png',3,'','',''),(296,'palmtree_003','야자수_003','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d3b3d742-873d-4e4a-a52f-913f8ea746b0.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/21fc454c-279f-4980-a375-349b695343dd.png',3,'','',''),(297,'palmtree_004','야자수_004','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/f5c8b146-f523-40c5-94d5-d2e7065e66d9.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/60424bef-7ceb-415a-898b-ea533ab4d490.png',3,'','',''),(298,'Pear_01_LOD1','배_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d2265bb8-309d-4e77-9b04-4bb0e1bc51ef.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/88aaded5-5479-476f-84fc-4080a9ebd1a4.png',3,'','',''),(299,'Peas_02_LOD1','완두콩_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/478bc546-5a9d-413f-92c7-48ddab7e892a.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/b6778eab-cd02-4145-ad61-ef4682bc764f.png',3,'','',''),(300,'Pineapple_02_LOD1','파인애플_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/52f09883-18ee-4cf6-b5b4-6e7116279d98.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/de26f21d-ed61-457a-9d4f-7a8b4eadc034.png',3,'','',''),(301,'Plant4','제4공장','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/46053db4-d753-425c-b896-84e973d4d68f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/16476083-211a-4afd-b079-61750829696f.png',3,'','',''),(302,'Plum_02_LOD1','자두_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/ffb2750e-37ae-4a60-a255-c80a79bcec5c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/3c88cad0-863c-4c96-ba3d-0be3365b8a88.png',3,'','',''),(303,'Tomato_01_LOD1','토마토_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/5b346139-6b9d-4c2f-b269-e96cae05e766.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/340342ca-baa2-4734-a6f0-b80e6f75f32f.png',3,'','',''),(304,'Tomato_02_LOD1','토마토_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/1cded6e5-90b1-4202-8249-25c1c3304821.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/2d3dbabd-6f64-4498-b1ab-38fe1ca9f605.png',3,'','',''),(305,'Tomato_03_LOD1','토마토_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/c7c38770-c7c8-4a38-9462-22a760af9f44.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/219bca7d-72dd-4c15-9c06-26b894cf5c4d.png',3,'','',''),(306,'Tree13','트리13','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/2cbc1e97-de6c-4318-9955-5437857fc64c.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/b135510f-34b8-49ce-b8ff-9abe33382df9.png',3,'','',''),(307,'Turnip_01_LOD1','순무_01_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/82099b2d-a21a-4623-8d14-3f5c19b5922f.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/3d948bdd-47b7-45c3-901d-d4caf154993e.png',3,'','',''),(308,'Turnip_02_LOD1','순무_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/37734c26-383d-49ef-88d6-1667882330c1.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/8a35aa75-5b1f-47f1-9f9a-93bf63a695da.png',3,'','',''),(309,'Turnip_03_LOD1','순무_03_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/909ee4da-3f46-44cd-9017-7e4d6f2c5b06.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/acedb556-7053-4a31-8091-e1d6ceb8ffd7.png',3,'','',''),(310,'VasewithFlowers211','꽃병 211','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/1603f2db-aaa7-4a42-8856-305d6b881f21.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/36e2bca8-d4ea-41f1-a222-e08275096d4b.png',3,'','',''),(311,'Vasewithsunflower5','해바라기 꽃병 5','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/d080059b-b31c-4f90-8e4d-3503febfe4b4.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/b6fc1ed3-bc94-4a39-a2cb-59c7507766f5.png',3,'','',''),(312,'Watermelon_02_LOD1','수박_02_LOD1','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/fb0f1ad3-8f47-439d-8db6-ff648dd0df46.glb','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/item/plant/image/097faaa0-1efe-4e14-9337-329c488965e5.png',3,'','','');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_category`
--

DROP TABLE IF EXISTS `item_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_category` (
  `item_category_seq` bigint NOT NULL AUTO_INCREMENT,
  `name_kor` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_eng` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`item_category_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_category`
--

LOCK TABLES `item_category` WRITE;
/*!40000 ALTER TABLE `item_category` DISABLE KEYS */;
INSERT INTO `item_category` VALUES (1,'가구','furniture'),(2,'동물','animal'),(3,'식물','plant'),(4,'전시','display'),(5,'기타','etc');
/*!40000 ALTER TABLE `item_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth`
--

DROP TABLE IF EXISTS `oauth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth` (
  `oauth_seq` bigint NOT NULL AUTO_INCREMENT,
  `key` varchar(127) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`oauth_seq`),
  UNIQUE KEY `UK_OAUTH_KEY` (`key`),
  UNIQUE KEY `UK_OAUTH_USER_FROM` (`user_seq`,`from`),
  CONSTRAINT `oauth_ibfk_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth`
--

LOCK TABLES `oauth` WRITE;
/*!40000 ALTER TABLE `oauth` DISABLE KEYS */;
INSERT INTO `oauth` VALUES (1,'102133242776579578196','Google',1),(2,'103672156066107971047','Google',2),(3,'108751005436188537212','Google',3),(4,'102523903622491004466','Google',4),(5,'111627448489292872982','Google',5),(6,'109069609844517521000','Google',6),(7,'109072991197404395997','Google',7),(10,'2540499982','Kakao',10),(11,'105125626599790403971','Google',11),(12,'2542519394','Kakao',12);
/*!40000 ALTER TABLE `oauth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio` (
  `port_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_seq` bigint NOT NULL,
  `created` datetime NOT NULL DEFAULT (curtime()),
  `updated` datetime NOT NULL DEFAULT (curtime()),
  PRIMARY KEY (`port_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `portfolio_ibfk_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio`
--

LOCK TABLES `portfolio` WRITE;
/*!40000 ALTER TABLE `portfolio` DISABLE KEYS */;
INSERT INTO `portfolio` VALUES (8,'아이링크(공통프로젝트)','<h2>아이링크(공통프로젝트)</h2><p>? “유아교육시설”과 “보호자”의 Web을 통해 정보 교환 및 양방향 소통이 가능하게 지원합니다.</p><p>? “아이”는 키오스크를 통해 개인별 학습 진행 상황, 하루 일기 등의 서비스를 체험할 수 있습니다.</p><h4>프로젝트 진행 기간</h4><ul style=\"list-style-type:disc;\"><li>기획 및 개발 : 2022.07.11(월) ~ 2022.08.17(수)</li><li>working day : 27days</li></ul><h4>주요 기능</h4><ul style=\"list-style-type:disc;\"><li>유아 교육 시설(WEB)</li><li>보호자(WEB)</li><li>아이(KIOSK)</li></ul><h4>나의 github : &nbsp;<a href=\"hyunii02_ilink\">hyunii02_ilink</a></h4>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/11ca2862-79a8-40e4-9934-945f26ba9ad2.png','제목을 입력해주세요_-001 (7).png',2,'2022-11-20 13:48:40','2022-11-20 13:48:40'),(15,'Needity - SSAFY THE MONEY 777','<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MbOaLKAW8DA?start=5\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',NULL,NULL,11,'2022-11-20 14:12:31','2022-11-20 15:39:40'),(16,'Needity - 비켜라 [prod. kquan(케이퀀)]','<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/DkrFsK4EdAw?start=10\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',NULL,NULL,11,'2022-11-20 14:13:12','2022-11-20 14:13:12'),(17,'Needity - We Meet Up','<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/B5gRg8R_G48?start=9\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',NULL,NULL,11,'2022-11-20 14:13:44','2022-11-20 14:13:44'),(20,'혼자야 ? (비대면 아바타 미팅 서비스)','<h4>? SSAFY 7기 공통 프로젝트 우수상 수상작 (부울경 1반 3등)</h4><p>? <strong>프로젝트 진행기간 : 2022/07/11 ~ 2022/08/19</strong></p><p>? <strong>FE: 김누리, 김효근, 배송윤, 이승현</strong></p><p>? <strong>BE: 배상현 (팀장)</strong></p><p>? <a href=\"https://youtu.be/ngQkkMlmzA8\"><strong>UCC 및 프로젝트 설명 유튜브 링크 (사용자 가이드)</strong></a></p><p><img src=\"https://lab.ssafy.com/s07-webmobile1-sub2/S07P12E104/-/raw/master/README.assets/logo-16608005227942.png\" alt=\"logo\"></p><h2>? 소개</h2><h3>세상에 없던 새로운 만남, 아바타 미팅 서비스 &lt;혼자야?&gt;</h3><h4>\"<strong>혼자야?</strong>\"는 랜덤 미팅 서비스와 게이미피케이션을 접목시켜 사용자들의 접근성을 높이고,</h4><h4><strong>랜덤 대화 주체 추천</strong>, <strong>유저 상호 평가</strong> 등의 유저 친화적 컨텐츠를 제공하는 스낵 서비스 입니다.</h4><h2>?주요 기능</h2><ul><li>Openvidu (webRTC)를 통한 비대면 랜덤 화상채팅(미팅) 서비스입니다.</li><li>예전 예능에서 유행했던 “아바타 소개팅”이라는 컨텐츠에서 아이디어를 얻어 지시자 역할인 유저가 명령을 내리고, 아바타 역할인 유저가 이를 수행하며 재밌는 상황이 연출되는 서비스입니다.</li><li>4가지 역할(싱글, 아바타, 지시자, 랜덤)과 미팅 정원(1:1 또는 4인)을 선택하여 입장할 수 있는 랜덤 매칭 시스템을 구현하였습니다.</li><li>유저는 상대 유저가 싱글 역할 유저인지, 아바타 역할 유저인지 모르는 상태로 대화를 진행하며, 대화 시간이 종료될 경우 상대의 역할을 맞히거나 자신의 역할을 속여서 포인트를 얻는 방식의 gamification이 적용되어 있습니다.</li><li>해당 미팅에서 마음에 든 상대와 상호 동의 하에 1:1 DM 채팅을 따로 할 수 있습니다.</li></ul>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/ff41b712-932e-44d4-a250-d8435d45fae4.png','logo-16608005227942.png',5,'2022-11-20 16:47:37','2022-11-20 16:47:37'),(21,'호타로','<figure class=\"image\"><img src=\"https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/ccced24a-f426-4022-8038-6da85cc33545.gif\"></figure>',NULL,NULL,1,'2022-11-20 16:47:39','2022-11-20 16:54:26'),(22,'츄애니원','<p>? <strong>프로젝트 진행기간 : 2022/08/22 - 2022/10/07</strong></p><p>? <strong>팀원소개</strong></p><figure class=\"table\"><table><thead><tr><th>이름</th><th>역할</th></tr></thead><tbody><tr><td>금동운</td><td>BigData &amp; Frontend</td></tr><tr><td>박유주</td><td>Backend</td></tr><tr><td>안세영</td><td>Backend &amp; Server</td></tr><tr><td>이소영</td><td>BigData &amp; Backend</td></tr><tr><td>이승현</td><td>Frontend</td></tr><tr><td>장창완</td><td>Frontend</td></tr></tbody></table></figure><p>? <a href=\"https://youtu.be/oGQ1oaCvIBA\"><strong>UCC 보러가기</strong></a></p><p>&nbsp;</p><h2>01 서비스 소개</h2><blockquote><h4>애니메이션 빅데이터 추천 서비스</h4><p>\"츄애니원\"은 유저들의 선호도를 기반으로 잠재요인의 값을 구하여</p><p>각각의 유저에게 애니메이션을 맞춤형으로 제공하는 서비스이다.</p></blockquote><h2>&nbsp;</h2><h2>02 주요 기능</h2><p>✔ 애니메이션 추천</p><p>✔ 애니메이션에 대한 정보와 리뷰, 톡톡을 통한 소통공간</p><p>✔ 유저가 본 애니메이션을 분석하여 만든 일본어 단어장</p><p>✔ 취향이 비슷한 사람들과 소통의 공간, 오픈채팅</p><p>&nbsp;</p><h2>03 개발환경</h2><p>? <strong>Backend</strong></p><ul><li>Django 4.1.1</li><li>djongo 1.3.6</li><li>pymongo 3.12.3</li><li>spring-boot 2.7.3</li><li>spring-security 2.7.3</li><li>docker 20.10.18</li><li>docker-compose 2.1.0</li><li>mysql 5.7</li><li>nginx 1.23.1</li></ul><p>? <strong>Frontend</strong></p><ul><li>VSCode (IDE)</li><li>react 18.2.0</li><li>react-canvas-confetti 1.3.0</li><li>react-chartjs-2 4.3.1</li><li>react-dom 18.2.0</li><li>react-material-ui-carousel 3.4.2</li><li>react-player 2.10.1</li><li>react-redux 8.0.2</li><li>react-router-dom 6.3.0</li><li>redux 4.2.0</li><li>redux-persist 6.0.0</li><li>redux-thunk 2.4.1</li><li>sockjs-client 1.6.1</li><li>styled-components 5.3.5</li><li>typescript 4.8.3</li><li>framer-motion 7.3.6</li><li>&nbsp;</li><li>@mui/icons-material 5.10.3</li><li>@mui/material 5.10.3</li><li>@reduxjs/toolkit 1.8.5</li><li>@stomp/stompjs 6.1.2</li><li>@types/canvas-confetti 1.4.3</li><li>@types/chart.js 2.9.37</li><li>@types/react 18.0.20</li><li>@types/react-dom 18.0.6</li><li>@types/react-redux 7.1.24</li><li>@types/sockjs-client 1.5.1</li><li>@types/stompjs 2.3.5</li></ul><p>? <strong>BigData</strong></p><ul><li>keras 2.10.0</li><li>konlpy 0.6.0</li><li>numpy 1.23.3</li><li>pandas 1.5.0</li><li>scikit-learn==1.1.2</li><li>scikit-surprise==1.1.3</li><li>scipy 1.9.1</li><li>surprise 0.1</li><li>tensorflow 2.10.0</li><li>MongoDB 4.4.16</li></ul><p>&nbsp;</p><h2>04 기술 특이점</h2><p>? <strong>Stomp를 활용한 socket 통신</strong></p><p><strong>Stomp</strong> : Websocket 위에서 동작하는 텍스트 기반의 메세지 전송 프로토콜</p><p>메세지를 Controller 어노테이션이 적용된 객체를 이용해 조직적으로 관리할 수 있으며 Spring Security를 적용해 메세지를 보호할 수 있다.</p><p>Messaging Protocol을 만들고 메세지 형식을 커스터마이징 할 필요가 없다.</p><p>STOMP의 \"destination\" 및 Message Type을 기반으로 메세지를 보호하기 위해 Spring Security를 사용할 수 있다.</p><p>&nbsp;</p><p>? <strong>빅데이터 알고리즘 1 - 컨텐츠 기반 필터링</strong></p><p>Okt를 활용하고 morphs를 사용하여 형태소 분석을 한 뒤 불용어 처리로 데이터 정제</p><p>sklearn의 TfidfVectorizer 라이브러리를 활용하여 분석진행</p><p>sklearn의 cosine_similarity 라이브러리를 활용하여 유사도 계산</p><p>&nbsp;</p><p>? <strong>빅데이터 알고리즘 2 - 협업 필터링 + 컨텐츠 기반 필터링</strong></p><p>scipy의 svds 라이브러리를 활용하여 U, sigma, V 행렬을 반환하고 diag를 이용해 변환하고 내적을 수행하는 특이값분해를 진행하여 1차 추출</p><p>sklearn의 TfidfVectorizer, cosine_similarity 라이브러리를 활용하여 2차 추출</p><h2>&nbsp;</h2><h2>05 협업 툴</h2><ul><li><strong>Gitlab</strong></li><li><strong>Jira</strong></li><li><strong>Notion</strong></li></ul><p>&nbsp;</p>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/5ba83e87-ea81-473b-b721-a147a9749245.jpg','KakaoTalk_20221007_125538217.jpg',1,'2022-11-20 17:19:36','2022-11-20 17:19:36'),(23,'아이링크','<h2><strong>? 아이와 이어주다 - 아이링크</strong></h2><p>&nbsp;</p><h2><strong>? 프로젝트 진행 기간</strong></h2><p>2022.07.11(월) ~ 2022.08.18(목)</p><p>SSAFY 7기 2학기 공통프로젝트 - <strong>아이링크</strong></p><p>&nbsp;</p><h2><strong>? 아이링크- 배경</strong></h2><p>원과 가정 사이의 소통을 도와줘요!</p><p>스스로 모든 것을 하고 싶어하는 모든 아이를 위해 우리 서비스는 만들어졌어요.</p><p>아이 혼자서 자신의 하루를 돌아보고 그 날의 기분을 기록해보아요!</p><p>매일 기록한 일상이 선생님과 부모님에게 전달되어 모두의 기억이 될 수 있게 해줄게요.</p><p>&nbsp;</p><h2><strong>? 아이링크- 개요</strong></h2><p><strong>아이링크는</strong> 선생님과 부모님과의 정보 교환과 양방향 소통 기능을 지원함과 동시에</p><p>개인 별 학습 진행 상황, 하루의 일기 등을 통해 아이들의 자발적인 참여를 유도해요 !</p><p>&nbsp;</p><h2><strong>? 주요 기능</strong></h2><ul><li><strong>키오스크</strong><ul><li>바쁜 아침 잊은 건 없을까 준비물을 다시 한번 체크해 보아요.</li><li>보육 시설의 공지 사항을 확인할 수 있어요.</li><li>오늘의 날씨와 식단, 간식을 확인할 수 있어요.</li></ul></li><li><strong>키즈 설문</strong><ul><li>오늘 유치원에서 무슨 일이 있었는지, 기분은 어떤지 부모님과 공유해봐요.</li><li>설문을 통해 부모님들은 아이가 안전하게 집에 도착했는지 확인할 수 있어요.</li><li>오늘 아이의 기분이 어떤지, 특별한 일은 없었는지, 웹으로 확인할 수 있어요.</li></ul></li><li><strong>칭찬 스티커</strong><ul><li>키즈 설문, 방과 후 퀴즈 등으로 아이의 참여를 유도할 수 있어요 !</li><li>칭찬 스티커 개수에 따라 다양한 보상이 있어요 !</li></ul></li><li><strong>유치원</strong><ul><li>유치원에서 아이의 정보 관리를 편리하게 할 수 있어요!</li><li>가정에서 유치원에 등원 시 전달 사항을 간단하게 전달할 수 있어요.(복용 약,하원 시 픽업 유무 등)</li><li>유치원에서도 아이들 특이 사항을 한눈에 볼 수 있어요 !</li></ul></li></ul><h2><strong>✔ 주요 기술</strong></h2><p><strong>Backend - Node.js 16.15.0</strong></p><ul><li>Express.js 4.18.1</li><li>Bcrypt 5.0.1</li><li>JWT 8.5.1</li><li>Swagger-jsdoc 6.2.3</li><li>Swagger-ui-express 4.5.0</li><li>Sequelize 6.21.3</li><li>MySQL 2.3.3</li><li>Redis 4.2.0</li><li>Multer 1.4.5</li></ul><p><strong>Backend - DB</strong></p><ul><li>MySQL 8.0.29</li><li>Redis 7.0.4</li></ul><p><strong>Frontend</strong></p><ul><li>Visual Studio Code IDE</li><li>React 18.2</li><li>MUI 5.9.3</li><li>Context API</li><li>Axios 0.27.2</li><li>Styled-component 5.3.5</li><li>react-router-dom 6.3.0</li><li>react-daum-postcode 3.1.1</li></ul><p><strong>CI/CD</strong></p><ul><li>AWS EC2</li><li>Jenkins</li><li>NGINX</li><li>PM2</li></ul><h2><strong>✔ 협업 툴</strong></h2><ul><li>Gitlab</li><li>Notion</li><li>Jira</li><li>Discord</li></ul><h2><strong>✔ 협업 환경</strong></h2><ul><li>Gitlab<ul><li>코드의 버전을 관리</li><li>이슈 발행, 해결을 위한 토론</li><li>MR시, 팀원이 코드 리뷰를 진행하고 피드백 게시</li></ul></li><li>JIRA<ul><li>매주 목표량을 설정하여 Sprint 진행</li><li>업무의 할당량을 정하여 Story Point를 설정하고, In-Progress -&gt; Done 순으로 작업</li></ul></li><li>회의<ul><li>Discord 스탠드업 회의 진행, 당일 할 업무 브리핑</li><li>Discord 마무리 회의 진행, 당일 업무 진행 브리핑, 다음 날 진행할 업무 브리핑</li><li>빠른 소통과 신속한 대응이 가능</li></ul></li><li>Notion<ul><li>회의가 있을 때마다 회의록을 기록하여 보관</li><li>회의가 길어지지 않도록 다음날 제시할 안건을 미리 기록</li><li>기술 확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리</li><li>컨벤션 정리</li><li>간트 차트 관리</li><li>규칙, 기능 명세서 등 모두가 공유해야 하는 문서 관리</li></ul></li></ul><h2><strong>✔ 팀원 역할 분배</strong></h2><figure class=\"table\"><table><thead><tr><th>이름</th><th>직책</th><th>파트</th><th>업무</th></tr></thead><tbody><tr><td>강민재</td><td>팀장</td><td>FE</td><td>KIOSK 담당, 전역 상태 관리</td></tr><tr><td>안정현</td><td>팀원</td><td>FE</td><td>WEB 담당, 메인 페이지, 회원관리 페이지, 특이사항 페이지, UCC 담당</td></tr><tr><td>김국진</td><td>팀원</td><td>FE</td><td>Web 담당, 메인 페이지, 식단관리 페이지, 퀴즈 페이지, 반관리 페이지</td></tr><tr><td>배지우</td><td>팀원</td><td>FE</td><td>WEB 담당, 공지사항 페이지, 알림장 페이지, 유치원등록 페이지</td></tr><tr><td>송형근</td><td>팀원</td><td>BE</td><td>AWS/Jenkins Setting, 서비스 API 개발, 문서, 컨벤션 관리</td></tr><tr><td>이소영</td><td>팀원</td><td>BE</td><td>DB Setting, 서비스 API 개발, 사용자 인증</td></tr></tbody></table></figure><h2><strong>✔ 프로젝트 산출물</strong></h2><ul><li><a href=\"https://chrome-thief-e28.notion.site/ce80acbe0e724574ac6667c69a8df4e2\">컨셉 기획 및 디자인</a></li><li><a href=\"https://chrome-thief-e28.notion.site/9aa7aed850d34327824a47bdd80b6361\">기능명세서</a></li><li><a href=\"https://chrome-thief-e28.notion.site/d9937a5a29824281adac35ebde340e21\">WBS</a></li><li><a href=\"https://www.figma.com/file/N2hX0Yex6XTZxVnB1cd1Zf/Untitled?node-id=0%3A1\">와이어프레임</a></li><li><a href=\"https://www.figma.com/file/t3TTNzAe0xUSVvttbgbBHW/Untitled?node-id=0%3A1\">아키텍처</a></li><li><a href=\"https://chrome-thief-e28.notion.site/c73e7a5d4f524c79bb71298f5e5f622d\">API 명세서</a></li><li><a href=\"https://www.erdcloud.com/d/LSiXoytFWdnx7DbqD\">ERD</a></li><li><a href=\"https://chrome-thief-e28.notion.site/ab79ef5934984be7a273d94203f74751\">컨벤션</a></li><li><a href=\"https://chrome-thief-e28.notion.site/6198e6bdd87649f2b85bd40e56a8fa61?v=2cfa62ec34f94fb2b06696baebd7e1a4\">트러블 슈팅</a></li></ul><h2><strong>✔ 프로젝트 결과물</strong></h2><ul><li><a href=\"https://drive.google.com/file/d/1l-Lys8dGtY5_s4iBlFcDxaQowIn_24TT/view?usp=sharing\">사용매뉴얼</a></li><li><a href=\"https://docs.google.com/document/d/10003uM5WJNu9KX3JPZleELapDk2o1Yp9dN2DRlZAbcM/edit?usp=sharing\">포팅매뉴얼</a></li><li><a href=\"https://docs.google.com/presentation/d/1t5iPXE_KGjOoJk-zvma17btQpl48ymC5bX7pnzBlOgc/edit?usp=sharing\">중간발표자료</a></li><li><a href=\"https://docs.google.com/presentation/d/1NiSj9vUSFG0veN--SHTnRUA2tDIM5enbgn8hxETQWT0/edit?usp=sharing\">최종발표자료</a></li></ul>',NULL,NULL,1,'2022-11-20 17:23:29','2022-11-20 17:23:29'),(24,'약쏙','<p>블록체인 기반의 전자 처방전 서비스</p>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/7503a939-ac0e-4edb-90ee-c1356736a8d4.png','001.png',7,'2022-11-21 00:35:56','2022-11-21 00:35:56'),(25,'D-Station','<p>개발자를 위한 로드맵 서비스</p>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/51039e71-90fb-4a82-b1ba-9e2ebd0b6e94.ico','favicon.ico',7,'2022-11-21 00:40:24','2022-11-21 00:40:24'),(28,'탐정: 렌즈 속 비밀','<h2><strong>? 프로젝트 소개</strong></h2><p>AI를 통해 사진에서 인식한 사물을 증거로 모아 사건의 실마리를 풀어나가는 모바일 추리 게임</p><p>오프닝 페이지</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/opening.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/opening.gif\" alt=\"오프닝페이지\"></a></p><p>회원가입</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/signup.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/signup.gif\" alt=\"회원가입\"></a></p><p>로그인</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/signin.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/signin.gif\" alt=\"로그인\"></a></p><p>로그아웃</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/logout.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/logout.gif\" alt=\"로그아웃\"></a></p><p>에피소드 및 챕터 선택</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/episode.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/episode.gif\" alt=\"에피소드\"></a></p><p>대화화면 NPM</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/ingame.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/ingame.gif\" alt=\"대화화면\"></a></p><p>스킵 기능</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/skip.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/skip.gif\" alt=\"스킵\"></a></p><p>사진 인식(AI)</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/ai.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/ai.gif\" alt=\"ai\"></a></p><p>사진 인식 - 이미 찾은 단서일 경우</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/duplicate.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/duplicate.gif\" alt=\"이미 찾은 단서\"></a></p><p>사진 인식 - 적합하지 않는 단서일 경우</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/noclue.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/noclue.gif\" alt=\"적절하지 않는 경우\"></a></p><p>백로그</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/backlog.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/backlog.gif\" alt=\"백로그\"></a></p><p>인벤토리</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/inventory.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/inventory.gif\" alt=\"인벤토리\"></a></p><p>음량 조절</p><p><a href=\"https://github.com/ManjaKang/ai_game/blob/main/readme/sound.gif\"><img class=\"image_resized\" style=\"width:600px;\" src=\"https://github.com/ManjaKang/ai_game/raw/main/readme/sound.gif\" alt=\"음량\"></a></p><h4><strong>UCC</strong></h4>',NULL,NULL,6,'2022-11-21 00:51:49','2022-11-21 00:52:41'),(31,'포켓폴리오','<figure class=\"image image_resized\" style=\"width:362px;\"><img src=\"https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/image/38802470-f777-4c19-bf82-10cb575a9b3e.png\"></figure><p style=\"margin-left:0px;\">포켓폴리오는 Pocket과 Portfolio를 합쳐 만든 이름으로 자신의 포트폴리오를&nbsp;</p><p style=\"margin-left:0px;\">3D 공간인 포켓에 전시하고 공유할 수 있는 서비스입니다.</p><p style=\"margin-left:0px;\">여러 개의 포켓을 포트폴리오의 컨셉에 맞게 꾸밀 수 있어 사용자의 개성을 드러낼 수 있습니다.</p><p style=\"margin-left:0px;\">각 카테고리별 좋아요 순, 좋아요/팔로우 등의 방식으로 메인에&nbsp;</p><p style=\"margin-left:0px;\">추천 포켓이 노출되기에 사용자들의 취향이나 좋은 아이디어를 볼 수 있으며 포켓 내의 방명록을 통해 유저 간 소통이 가능합니다.</p>','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/thumbnail/37b7a0f7-335c-4ab4-8f58-48b307dc32a7.png','logo3.png',4,'2022-11-21 02:10:19','2022-11-21 02:10:19');
/*!40000 ALTER TABLE `portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio_url`
--

DROP TABLE IF EXISTS `portfolio_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio_url` (
  `port_url_seq` bigint NOT NULL AUTO_INCREMENT,
  `port_seq` bigint NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`port_url_seq`),
  KEY `port_seq` (`port_seq`),
  CONSTRAINT `portfolio_url_ibfk_1` FOREIGN KEY (`port_seq`) REFERENCES `portfolio` (`port_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_url`
--

LOCK TABLES `portfolio_url` WRITE;
/*!40000 ALTER TABLE `portfolio_url` DISABLE KEYS */;
INSERT INTO `portfolio_url` VALUES (1,20,'https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/e5188903-82f1-4086-9a71-1c2909549f9b.jfif','38615778a21d4bc4aa319247fe888a46.jfif',0),(6,31,'https://pocketfolio.s3.ap-northeast-2.amazonaws.com/portfolio/d775569b-e8c2-4abc-ba16-d2c7eaef995a.png','eye.png',0);
/*!40000 ALTER TABLE `portfolio_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relation`
--

DROP TABLE IF EXISTS `relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relation` (
  `relation_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`relation_seq`),
  UNIQUE KEY `UK_RELATION` (`user_seq`),
  CONSTRAINT `FKf4xx42548kokccca04i78ckhc` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relation`
--

LOCK TABLES `relation` WRITE;
/*!40000 ALTER TABLE `relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `room_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_seq` bigint NOT NULL,
  `theme` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_main` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `privacy` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'O',
  `created` datetime NOT NULL DEFAULT (curtime()),
  `updated` datetime NOT NULL DEFAULT (curtime()),
  PRIMARY KEY (`room_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_chk_1` CHECK ((`is_main` in (_utf8mb4'T',_utf8mb4'F'))),
  CONSTRAINT `room_chk_2` CHECK ((`privacy` in (_utf8mb4'O',_utf8mb4'S',_utf8mb4'C')))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'소앵 포켓',1,'apartment_01','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/17925f29-99a8-476e-acce-77b9feca75a0.png','T','O','2022-11-19 21:35:51','2022-11-21 00:37:24'),(2,'jjung8749님의 포켓',2,'apartment_03','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/eff81900-128d-4686-8d17-02f5a7440a14.png','T','O','2022-11-19 21:36:20','2022-11-20 15:54:35'),(3,'songyun.bae님의 포켓',3,'room_01',NULL,'T','O','2022-11-19 21:43:58','2022-11-19 21:43:58'),(4,'뚱땅이방',4,'room_04','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/d3a7d0f0-42dd-46f6-af2e-5c8294da3dee.png','T','O','2022-11-19 21:44:26','2022-11-21 01:03:42'),(6,'프론트엔드 개발기록',5,'apartment_01','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/75dee213-4ebc-4722-938d-a78a22f1bbd5.png','T','O','2022-11-19 21:50:48','2022-11-20 17:15:26'),(7,'kmj5052님의 포켓',6,'room_03','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/5843c957-9cc1-45d3-8ceb-9ff81cc0d99d.png','T','O','2022-11-19 22:04:27','2022-11-21 02:40:02'),(8,'Ganadara`s',7,'room_02','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/eef27df3-d4f0-4d9e-987c-352432ed4fbf.png','T','O','2022-11-19 23:50:08','2022-11-21 00:40:35'),(11,'window18님의 포켓',10,'room_01',NULL,'T','O','2022-11-20 10:09:43','2022-11-20 10:09:43'),(12,'Needity Rap Room',11,'apartment_03','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/aebe8e2e-1beb-488e-a7c4-8f0ae0d3db5c.png','T','O','2022-11-20 12:28:52','2022-11-20 17:07:49'),(13,'mkmkmk484848님의 포켓',12,'room_01',NULL,'T','O','2022-11-20 19:44:01','2022-11-20 19:44:01'),(14,'야통이 방',4,'apartment_01','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/room/thumbnail/1e0ad657-d38c-4576-8d17-a14a7ec93be3.png','F','O','2022-11-20 21:02:07','2022-11-20 23:58:15');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_category`
--

DROP TABLE IF EXISTS `room_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_category` (
  `room_category_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_seq` bigint NOT NULL,
  `category_seq` bigint NOT NULL,
  PRIMARY KEY (`room_category_seq`),
  UNIQUE KEY `UK_ROOM_CATEGORY` (`room_seq`,`category_seq`),
  KEY `category_seq` (`category_seq`),
  CONSTRAINT `room_category_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_category_ibfk_2` FOREIGN KEY (`category_seq`) REFERENCES `category` (`category_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_category`
--

LOCK TABLES `room_category` WRITE;
/*!40000 ALTER TABLE `room_category` DISABLE KEYS */;
INSERT INTO `room_category` VALUES (1,1,11),(2,2,2),(3,3,1),(4,4,3),(6,6,11),(7,7,9),(8,8,4),(11,11,1),(12,12,10),(13,13,1),(14,14,11);
/*!40000 ALTER TABLE `room_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_hit`
--

DROP TABLE IF EXISTS `room_hit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_hit` (
  `room_hit_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_seq` bigint NOT NULL,
  `user_seq` bigint DEFAULT NULL,
  `hit_date` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`room_hit_seq`),
  UNIQUE KEY `UK_ROOM_HIT` (`room_seq`,`user_seq`,`hit_date`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `room_hit_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_hit_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_hit`
--

LOCK TABLES `room_hit` WRITE;
/*!40000 ALTER TABLE `room_hit` DISABLE KEYS */;
INSERT INTO `room_hit` VALUES (44,1,4,'2022-11-20'),(66,1,4,'2022-11-21'),(12,1,5,'2022-11-20'),(7,1,6,'2022-11-19'),(26,1,6,'2022-11-20'),(50,1,6,'2022-11-21'),(64,1,7,'2022-11-21'),(31,1,11,'2022-11-20'),(36,1,12,'2022-11-20'),(1,2,1,'2022-11-19'),(58,2,1,'2022-11-21'),(70,2,4,'2022-11-21'),(43,2,5,'2022-11-20'),(8,2,6,'2022-11-19'),(24,2,6,'2022-11-20'),(75,2,6,'2022-11-21'),(32,2,11,'2022-11-20'),(16,3,1,'2022-11-20'),(67,3,4,'2022-11-21'),(40,3,5,'2022-11-20'),(10,3,6,'2022-11-19'),(28,3,6,'2022-11-20'),(57,3,6,'2022-11-21'),(38,3,12,'2022-11-20'),(5,4,1,'2022-11-19'),(19,4,1,'2022-11-20'),(63,4,1,'2022-11-21'),(42,4,5,'2022-11-20'),(11,4,6,'2022-11-19'),(23,4,6,'2022-11-20'),(56,4,6,'2022-11-21'),(17,6,1,'2022-11-20'),(62,6,1,'2022-11-21'),(48,6,4,'2022-11-20'),(69,6,4,'2022-11-21'),(9,6,6,'2022-11-19'),(27,6,6,'2022-11-20'),(52,6,6,'2022-11-21'),(34,7,1,'2022-11-20'),(59,7,1,'2022-11-21'),(21,7,2,'2022-11-20'),(46,7,4,'2022-11-20'),(68,7,4,'2022-11-21'),(13,7,5,'2022-11-20'),(33,7,11,'2022-11-20'),(37,7,12,'2022-11-20'),(71,8,6,'2022-11-21'),(18,11,1,'2022-11-20'),(60,11,1,'2022-11-21'),(47,11,4,'2022-11-20'),(72,11,4,'2022-11-21'),(39,11,5,'2022-11-20'),(25,11,6,'2022-11-20'),(51,11,6,'2022-11-21'),(20,12,1,'2022-11-20'),(61,12,1,'2022-11-21'),(30,12,2,'2022-11-20'),(73,12,4,'2022-11-21'),(15,12,5,'2022-11-20'),(22,12,6,'2022-11-20'),(53,12,6,'2022-11-21'),(65,12,7,'2022-11-21'),(55,13,1,'2022-11-21'),(45,13,4,'2022-11-20'),(74,13,4,'2022-11-21'),(41,13,5,'2022-11-20'),(49,14,1,'2022-11-20'),(54,14,1,'2022-11-21'),(76,14,6,'2022-11-21');
/*!40000 ALTER TABLE `room_hit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_hover`
--

DROP TABLE IF EXISTS `room_hover`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_hover` (
  `room_hover_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_seq` bigint NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`room_hover_seq`),
  UNIQUE KEY `UK_ROOM_HOVER` (`room_seq`,`url`),
  CONSTRAINT `room_hover_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_hover`
--

LOCK TABLES `room_hover` WRITE;
/*!40000 ALTER TABLE `room_hover` DISABLE KEYS */;
/*!40000 ALTER TABLE `room_hover` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_like`
--

DROP TABLE IF EXISTS `room_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_like` (
  `room_like_seq` bigint NOT NULL AUTO_INCREMENT,
  `room_seq` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`room_like_seq`),
  UNIQUE KEY `UK_ROOM_LIKE` (`room_seq`,`user_seq`),
  KEY `user_seq` (`user_seq`),
  CONSTRAINT `room_like_ibfk_1` FOREIGN KEY (`room_seq`) REFERENCES `room` (`room_seq`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_like_ibfk_2` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_like`
--

LOCK TABLES `room_like` WRITE;
/*!40000 ALTER TABLE `room_like` DISABLE KEYS */;
INSERT INTO `room_like` VALUES (4,1,2),(13,1,4),(15,1,6),(17,1,7),(1,3,2),(5,4,2),(14,6,4),(3,7,2),(8,7,5),(10,8,2),(16,12,1);
/*!40000 ALTER TABLE `room_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag_seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `port_seq` bigint NOT NULL,
  PRIMARY KEY (`tag_seq`),
  KEY `port_seq` (`port_seq`),
  CONSTRAINT `FKfyym10v0256brlh1ktvf0yqxm` FOREIGN KEY (`port_seq`) REFERENCES `portfolio` (`port_seq`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'아이링크',8),(2,'공통프로젝트',8),(3,'포트폴리오',8),(11,'힙합',15),(12,'랩',15),(13,'자작곡',15),(14,'힙합',16),(15,'랩',16),(16,'자작곡',16),(17,'힙합',17),(18,'랩',17),(19,'자작곡',17),(20,'WebRTC',20),(21,'React',20),(22,'JavaScript',20),(23,'Stomp',20),(24,'빙과',21),(25,'호타로',21),(26,'빅데이터',22),(27,'추천',22),(28,'스프링부트',22),(29,'장고',22),(30,'리액트',22),(31,'MySQL',22),(32,'MongoDB',22),(33,'Node',23),(34,'Express',23),(35,'리액트',23),(36,'Redis',23),(37,'MySQL',23),(38,'JWT',23),(39,'블록체인',24),(40,'Web3',24),(41,'신기한데이거',24),(42,'우주',25),(43,'개발자',25),(44,'개린이',25),(56,'포켓폴리오',31),(57,'포트폴리오',31),(58,'우리는하나',31);
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_seq` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `describe` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blog_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT (curtime()),
  `token` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_seq`),
  UNIQUE KEY `UK_USER_EMAIL` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2soaeng@gmail.com','소앵이다','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/profile/bcf0bd04-b55d-4267-944a-832d6c989b1f.png','1998-01-17','소앵이다!',NULL,'2022-11-19 21:35:51','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NTU4MzYsImV4cCI6MTY3MTU0NzgzNiwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMSJ9.0AiJwpcPbWhecgo_zkYPjJtlGGb6sLYy28qQKxNOavg'),(2,'jjung8749@gmail.com','jjung8749','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/profile/ecf3b481-c29e-4cf3-b305-9e206adfca33.jpeg',NULL,'안녕하세요. jjung8749입니다.',NULL,'2022-11-19 21:36:20','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NDU2MDEsImV4cCI6MTY3MTUzNzYwMSwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMiJ9.7oRlkOMb2m43rFdV3sWc3w7IebWzod-gv_FjPZQzQrM'),(3,'songyun.bae@gmail.com','songyun.bae',NULL,NULL,'안녕하세요. songyun.bae입니다.',NULL,'2022-11-19 21:43:58','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg4NjE4MzgsImV4cCI6MTY3MTQ1MzgzOCwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMyJ9.iO2X74rdV9OQeP2GZQ58rRwc2kYNBLknTcgePx3q-KY'),(4,'baesongyun@gmail.com','송송','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/profile/340d606d-f944-467c-a0bd-dfcf7299b266.jpg','1997-03-16','안녕하세요. 뚱땅이입니다.',NULL,'2022-11-19 21:44:26','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NjI0NDYsImV4cCI6MTY3MTU1NDQ0Niwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiNCJ9.4zNoEh9t8i2r1Q96B90uhvavNPgSn0WMyTmoeYxRrNo'),(5,'window8397@gmail.com','window8397','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/profile/9024a777-0d00-4911-8ff7-dc66cfef3b11.jfif',NULL,'안녕하세요. window8397입니다.',NULL,'2022-11-19 21:50:48','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NDMxOTgsImV4cCI6MTY3MTUzNTE5OCwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiNSJ9.XFzFngoJHYo9bWSn4TGI5Adf6_2Ch0ryMxoZMNS-Odg'),(6,'kmj5052@gmail.com','만자',NULL,'1994-07-16','안녕하세요. 항상 공부하는 개발자 강민재입니다.','https://github.com/ManjaKang','2022-11-19 22:04:27','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NjU2NjIsImV4cCI6MTY3MTU1NzY2Miwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiNiJ9.aCQLBSbk5_pjO6qZdlqrns_BSPBQ1hWHK5gslDcQR9I'),(7,'gheun071212@gmail.com','gheun071212','https://pocketfolio.s3.ap-northeast-2.amazonaws.com/profile/fdcbaca0-efb0-449b-83ae-8b3c5d1944bf.gif','1995-07-12','안녕하세요. gheun071212입니다.','https://github.com/gheun0712','2022-11-19 23:50:08','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NTkzMDUsImV4cCI6MTY3MTU1MTMwNSwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiNyJ9.orZrLMUuqC6u2myEgo1tzOsfW0c2oOjVaYHxorcOv5M'),(10,'window18@nate.com','window18',NULL,NULL,'안녕하세요. window18입니다.',NULL,'2022-11-20 10:09:43','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5MDY1ODIsImV4cCI6MTY3MTQ5ODU4Miwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMTAifQ.FQjn00zEJaS66jJn0u5tKUFQT57iuyA5Fw83cqmbP2A'),(11,'wntjdcl1@gmail.com','화난닭',NULL,'1997-01-01','안녕하세요. 화난닭입니다.',NULL,'2022-11-20 12:28:52','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5MzEyMzksImV4cCI6MTY3MTUyMzIzOSwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMTEifQ.Yr0RVFjQi0A_VPYqQDb16ru82dw_4CS_NVo2QE6uarU'),(12,'mkmkmk484848@naver.com','mkmkmk484848',NULL,NULL,'안녕하세요. mkmkmk484848입니다.',NULL,'2022-11-20 19:44:01','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njg5NDEwOTAsImV4cCI6MTY3MTUzMzA5MCwic3ViIjoicmVmcmVzaFRva2VuIiwidWlkIjoiMTIifQ.Qv4Q9stIo0zofulSPMSQtuxEmM5O5aqy2dFzHWtXy9Q');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-21  3:15:40
