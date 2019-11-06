/*
 Navicat MySQL Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : laravel

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 06/11/2019 16:51:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `password_resets` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'wag', '13653203495@139.com', NULL, '12345678', NULL, '2019-03-06 09:16:49', '2019-03-06 09:16:49', NULL);
INSERT INTO `users` VALUES (6, '签到奖品设置', '1233@qq.com', NULL, '$2y$10$WoIQFlx.1VtccoLG0eydUeAVIckr3/I4gLcNfelOmJkiEOm5CiPhO', 'u8Na4DHMsMphBzg3cNoMBDzDF35ArNEN4RiogEa2rlVdgzSmPWHvTLTMnzwi', '2019-03-11 03:55:50', '2019-03-11 03:55:50', NULL);
INSERT INTO `users` VALUES (2, 'wag', '13653203495@qq.com', NULL, '$2y$10$1RY2C9D5qKI.8tNs9V9ig.bTlfI5xxN2JFYBaQEHiTjTuWtRs3vsC', NULL, '2019-03-07 02:14:20', '2019-03-07 02:14:20', NULL);
INSERT INTO `users` VALUES (3, 'wag', '123456@139.xom', NULL, '$2y$10$6qGGnpRJXzxYQ16aGiQJjuU9yVIxABVZ6D5QWlqLukSMiDyCYUKQy', NULL, '2019-03-07 02:34:43', '2019-03-07 02:34:43', NULL);
INSERT INTO `users` VALUES (4, 'wag', '11@qq.com', NULL, '$2y$10$ZifHPDRoXx/k390G9hHQQuTNXzZUoX5sNguGLh6mOlxJ2k.j0kUnS', NULL, '2019-03-08 03:06:16', '2019-03-08 03:06:16', NULL);
INSERT INTO `users` VALUES (5, 'bzwh', '123@qq.com', NULL, '$2y$10$rK68J7Z/fyPyYuedUUy2QeYhF5Tyb66ky6JpfVShKN/8m40bSrXoi', NULL, '2019-03-11 02:04:41', '2019-03-11 02:04:41', NULL);
INSERT INTO `users` VALUES (7, '33', '33@qq.com', NULL, '33333333', NULL, NULL, NULL, NULL);
INSERT INTO `users` VALUES (8, 'dfds', '134@qq.com', NULL, '$2y$10$hl5wgxli4X22mDOHFESzNOctcdwE.XIAqbeNL00n7SvXw4cz5gUJm', NULL, '2019-10-31 02:14:49', '2019-10-31 02:14:49', NULL);
INSERT INTO `users` VALUES (9, 'wangxiaoke', '1285@qq.com', NULL, '$2y$10$JFEtiZ3BcC98.Ecr7iclzuVXPUEr4TirbHsi7hLFf9TJn2KOra8/6', 'jEC6sqaurbe34nM1ReVO8DZsFFNZX548QqAOf9W1GVtBkDKw9SWCEcfSQU5g', '2019-11-01 01:36:11', '2019-11-01 01:36:11', NULL);

SET FOREIGN_KEY_CHECKS = 1;
