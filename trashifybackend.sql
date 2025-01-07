-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2025 at 03:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trashifybackend`
--

-- --------------------------------------------------------

--
-- Table structure for table `list_of_blogs`
--

CREATE TABLE `list_of_blogs` (
  `blogs_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `author_name` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `created_at` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `list_of_blogs`
--

INSERT INTO `list_of_blogs` (`blogs_id`, `user_id`, `author_name`, `title`, `subject`, `body`, `created_at`, `image`) VALUES
(12, 8, 'uwi', 'Sampah 1', '123123', 'tukang sapu 123', 'December 9, 2024', NULL),
(13, 8, 'uwi123', 'sampah123', 'loololo', 'lorem ipsum dasdsadas', 'December 9, 2024', NULL),
(14, 8, 'uwi123', 'Banjir', 'Banjir di sana sini', 'asdalahsdqwewq', 'December 9, 2024', 'image-1733731332788.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthday` varchar(50) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `refresh_token_expired` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `birthday`, `refresh_token`, `refresh_token_expired`, `created_at`) VALUES
(8, 'uwi123', 'uwisaga@gmail.com', '$2b$10$B9nLx1SMlJtbI.RJs91.NuOfXsa9bUEhArfNZqB6fpJqo53rWZIne', '2002-10-23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InV3aTEyMyIsImlhdCI6MTczMzcyNTUzOCwiZXhwIjoxNzM0MzMwMzM4fQ.7HDQANkYgyyL53cXfsdl1A8IELxrWLgNlYfmvIznl64', '2024-12-16 06:25:38', 'December 9, 2024'),
(10, 'dasdasdsa', 'dasdasdsa@gmail.com', '$2b$10$Ab2lz5D8iv90xAyD1YO5B.knEAyTzaeHdgCJOe8.P8JYZKKFlNJJa', '2002-10-23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhc2Rhc2RzYSIsImlhdCI6MTczNjE1NjE0NSwiZXhwIjoxNzM2NzYwOTQ1fQ._82WwDG0G6HDAR2ANhRcUwzRxwVwxEDzScoWu55lfSw', '2025-01-13 09:35:45', 'January 6, 2025'),
(11, 'dasdasdsa123', 'dasdasdsa123@gmail.com', '$2b$10$dwGHgQLBcsS9.Pg6KdbzVOp5rYADP5wJCNsoG3ryRkKZya43BL88q', '2002/10/23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhc2Rhc2RzYTEyMyIsImlhdCI6MTczNjE1NzI2MSwiZXhwIjoxNzM2NzYyMDYxfQ.hzFfUcSoZJ_XyDAuCBEYxo7JH_ZH5rHULqzGXWNZj3c', '2025-01-13 09:54:21', 'January 6, 2025'),
(12, '12312312', '1231231312@gmail.com', '$2b$10$hrGRvguibc.HfF.o0AnuTe9uVk6lH.XzrAxYsDr5TxW427o2PlMqK', '2002/10/23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMzEyMzEyIiwiaWF0IjoxNzM2MTYxNDc3LCJleHAiOjE3MzY3NjYyNzd9._VgHtvJx-3elVULo75aKb_4xJRfUpCuYxPD5o4_W4jI', '2025-01-13 11:04:37', 'January 6, 2025'),
(13, 'zxcxzczxc', 'zxczxczxcxzc@gmail.com', '$2b$10$/466.lL5WdLqT7ZsdN.jwOWZLYSLbJoAdL7hIgm7nI10Ahd1f40nq', '2002/10/23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inp4Y3h6Y3p4YyIsImlhdCI6MTczNjE2MTU3MSwiZXhwIjoxNzM2NzY2MzcxfQ.daYcwjjdkX3KMdljBA3iTOjfNQgzC0tLyTSARu05olE', '2025-01-13 11:06:11', 'January 6, 2025'),
(14, '465546', 'zxczx456456546czxcxzc@gmail.com', '$2b$10$j6RahfvRpRx9Xjb/q0cLQuWcPFD0rTMecocp66OdY/eNYSgJq4Spy', '2002/10/23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjQ2NTU0NiIsImlhdCI6MTczNjE2MTcwMiwiZXhwIjoxNzM2NzY2NTAyfQ.VICedPBzGCBHASwK10c-WffCQmBinrRVjvBpWkqCuZ0', '2025-01-13 11:08:22', 'January 6, 2025'),
(15, 'BARBARBoyyHD123', 'BARBARBoyyHD123@gmail.com', '$2b$10$femdaWfobTpR5YuAla9oyuX2AzTAllNn0Z3dEh3MSa0Rqs0L2NwQO', '2024-12-30', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJBUkJBUkJveXlIRDEyMyIsImlhdCI6MTczNjE2MjA3NSwiZXhwIjoxNzM2NzY2ODc1fQ.25AdWmhhTosrVJRVvyeDUI3GOhq_fGdzOX-b0nlE7Ow', '2025-01-13 11:14:35', 'January 6, 2025'),
(16, '12123123123', '12123123123@gmail.com', '$2b$10$c/aYJWdz0C8oiaO8pYKiX.wxYt3soQVCQdt3maWguVD71wMQ4aL2q', '2000-11-23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMTIzMTIzMTIzIiwiaWF0IjoxNzM2MTYzNTQwLCJleHAiOjE3MzY3NjgzNDB9.Zw6zTGbIRL-bHSGn6YD8RhJjZK3bNgaK4Bc3ed6C4IE', '2025-01-13 11:39:00', 'January 6, 2025'),
(17, 'vbvbvbv', 'vbvbvbv@gmail.com', '$2b$10$WWlYWpXfa3RAF9HD2.kN0ea4iajBCQ3exzeQGdz8QeIyXeM3lTTJe', '2025-01-22', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZidmJ2YnYiLCJpYXQiOjE3MzYxNjUyOTksImV4cCI6MTczNjc3MDA5OX0.89glQwATiLOtFx6MFLvAgr-Vm96Oj5SbmNRbE6120Eo', '2025-01-13 12:08:19', 'January 6, 2025'),
(18, 'anjel123', 'anjel123@gmail.com', '$2b$10$M2RbBuzXH4YohMbdZwsuOu2D6IBg4qqJ.0i5dMpfv6angh1pUA2jC', '2025-01-06', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuamVsMTIzIiwiaWF0IjoxNzM2MTcwMzY3LCJleHAiOjE3MzY3NzUxNjd9.6DQuUImjbuXt_Szu7E8rdd_YZso9F9Ju_NBf-0I5EGs', '2025-01-13 13:32:47', 'January 6, 2025');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list_of_blogs`
--
ALTER TABLE `list_of_blogs`
  ADD PRIMARY KEY (`blogs_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list_of_blogs`
--
ALTER TABLE `list_of_blogs`
  MODIFY `blogs_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `list_of_blogs`
--
ALTER TABLE `list_of_blogs`
  ADD CONSTRAINT `list_of_blogs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
