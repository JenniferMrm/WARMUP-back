DROP DATABASE IF EXISTS WarmUp ;
CREATE DATABASE WarmUp ;
USE WarmUp ;

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `password` varchar(255),
  `experience` varchar(255),
  `avatar_id` int,
  `training_time` int
);

CREATE TABLE `avatars` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `src` varchar(255)
);

CREATE TABLE `trainings` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255),
  `description` varchar(255),
  `link` varchar(255),
  `author` int
);

ALTER TABLE `trainings` ADD FOREIGN KEY (`author`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`avatar_id`) REFERENCES `avatars` (`id`);
