-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2023 a las 13:24:51
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `funkoshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de animé, series, películas y más'),
(3, 'LLaveros', 'LLaveros coleccionables');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(200) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos', 'img/pokemon/pk-cover.webp'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección', 'img/star-wars/st-cover.webp'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto', 'img/harry-potter/hp-cover.webp'),
(4, 'Naruto', 'Una de las historias animé más famosas ahora también coleccionable', '/img/naruto/nr-cover.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) NOT NULL,
  `img_front` varchar(200) NOT NULL,
  `img_back` varchar(200) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category_id` int(11) NOT NULL,
  `licence_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `product_price`, `stock`, `discount`, `sku`, `dues`, `img_front`, `img_back`, `create_time`, `category_id`, `licence_id`) VALUES
(1, 'Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.', '1799.99', 8, 10, 'STW001001', 3, '/star-wars/baby-yoda-1.webp', '/star-wars/baby-yoda-box.webp', '2023-12-12 12:32:49', 1, 2),
(2, 'Bobba Fett Fighter', 'Figura coleccionable de Bobba Fett Fighter - The Mandalorian Saga, edición limitada.', '1799.99', 8, 10, 'STW001002', 3, '/star-wars/bobbafeth-1.webp', '/star-wars/bobbafeth-box.webp', '2023-12-12 20:58:21', 1, 2),
(3, 'Luke Skywalker & Grogu', 'Figura coleccionable de Luke Skywalker & Grogu - The Mandalorian Saga, edición limitada.', '1799.99', 8, 10, 'STW001003', 3, '/star-wars/luke-1.webp', '/star-wars/luke-box.webp', '2023-12-12 20:58:16', 1, 2),
(4, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stromtrooper lightsaber - Star Wars Saga.', '1799.99', 8, 10, 'STW001004', 3, '/star-wars/trooper-1.webp', '/star-wars/trooper-box.webp', '2023-12-12 12:32:01', 1, 2),
(5, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', '1799.99', 8, 10, 'PKM001001', 3, '/pokemon/charmander-1.webp', '/pokemon/charmander-box.webp', '2023-12-12 12:32:06', 1, 1),
(6, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', '1799.99', 8, 10, 'PKM001002', 3, '/pokemon/dragonite-1.webp', '/pokemon/dragonite-box.webp', '2023-06-28 02:33:24', 1, 1),
(7, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', '1799.99', 8, 10, 'PKM001003', 3, '/pokemon/pidgeotto-1.webp', '/pokemon/pidgeotto-box.webp', '2023-06-28 02:33:25', 1, 1),
(8, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', '1799.99', 8, 10, 'PKM001004', 3, '/pokemon/pikachu-1.webp', '/pokemon/pikachu-box.webp', '2023-06-28 02:33:26', 1, 1),
(9, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', '1799.99', 8, 10, 'PKM001005', 3, '/pokemon/vulpix-1.webp', '/pokemon/vulpix-box.webp', '2023-06-28 02:33:27', 1, 1),
(10, 'Harry Potter & Hedwig', 'Figura coleccionable de Harry Potter & Hedwig - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001001', 3, '/harry-potter/harry-1.webp', '/harry-potter/harry-box.webp', '2023-12-12 12:34:15', 1, 3),
(11, 'Hermioni Ball Dress', 'Figura coleccionable de Hermione - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001002', 3, '/harry-potter/hermione-1.webp', '/harry-potter/hermione-box.webp', '2023-12-12 12:34:35', 1, 3),
(12, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001003', 3, '/harry-potter/luna-1.webp', '/harry-potter/luna-box.webp', '2023-12-12 12:34:28', 1, 3),
(13, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001004', 3, '/harry-potter/snape-patronus-1.webp', '/harry-potter/snape-patronus-box.webp', '2023-12-12 12:34:22', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `licence_id` (`licence_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `licence`
--
ALTER TABLE `licence`
  MODIFY `licence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
