-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220703.0056236a4c
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2023 a las 15:39:23
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lebixor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color_id`
--

CREATE TABLE `color_id` (
  `id` int(11) NOT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `color_id`
--

INSERT INTO `color_id` (`id`, `color`) VALUES
(1, 'Rojo'),
(2, 'Azul'),
(3, 'Verde'),
(4, 'Blanco'),
(5, 'Negro'),
(6, 'Gris');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `company_id`
--

CREATE TABLE `company_id` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `company_id`
--

INSERT INTO `company_id` (`id`, `company`) VALUES
(1, 'Samsung'),
(2, 'Motorola'),
(3, 'Apple'),
(4, 'HP'),
(5, 'Noblex'),
(6, 'Aiwa'),
(7, 'Lenovo'),
(8, 'Stromberg'),
(9, 'Phillips'),
(10, 'LG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `description`, `quantity`, `color_id`, `type_id`, `company_id`) VALUES
(1, 'Motorola G60s', 'motorola-g60s.jfif', 1199999, 'Disfruta de la pantalla más grande, amplia y envolvente jamás vista en un moto g. La pantalla Max Vision FHD+ de 6.8\" ofrece una gama de colores de un 10 % más amplia⁵. Colores vívidos y reales con contrastes únicos y además un aumento del 25 % de brillo⁶ ante la luz solar. La frecuencia de actualización de 120 Hz te ofrece una increíble fluidez en las transiciones en cualquier situación.', 5, 2, 2, 2),
(2, 'Auriculares EarPods', 'auriculares-earpods.jpg', 12399, 'A diferencia de otros auriculares de tapón, el diseño de los EarPods se basa en la anatomía del oído, por eso resultan más cómodos que cualquier otro auricular de este tipo. Los altavoces de su interior reducen al mínimo la pérdida de sonido al tiempo que aumentan la potencia acústica. El resultado es un audio de una calidad extraordinaria. Además, los EarPods con conector Lightning también incluyen un mando integrado en el cable para ajustar el volumen, controlar la reproducción de música y vídeo, y responder o colgar llamadas.', 13, 4, 4, 3),
(3, 'Auriculares Noblex Gamer HP600GM', 'auriculares-gamerNoblex.jpg', 8999, 'Disfrutalo en tu PC, Laptop y en tus consolas favoritas. Incluye adaptador para utilizarlo en dispositivos con entrada de audio y micrófono separadas. Luces LED (vía USB). Micrófono omnidireccional ajustable. Conector Mini Plug 3.5mm. Cable de 2 metros. Control de volumen y habilitación de micrófono desde el cable del auricular. Almohadillas y vincha extra soft para uso confortable. Construcción ultra resistente. Diseño Gamer de Última Generación.', 0, 2, 4, 5),
(4, 'Auriculares inalambricos Aiwa', 'auriculares-inalambricosAiwa.jpg', 4799, 'Características:\r\nTouch multifunción. Control de volumen. Control de canciones. Display indicador de carga. Control de llamadas. Bluetooth v5.0. Formatos BT: HSP/HFP/A2DP/AVRCP. Alcance aproximado de 10m. 5hs de uso continuo. Tiempo de carga 2hs (estuche), 1.5hs (auriculares). Batería de polímero de iones de litio. Capacidad de batería 300mAh (estuche), 40mAh (cada auricular). Tiempo de stand-by: 4 meses.\r\n\r\nIncluye:\r\nEstuche de carga. Cable micro USB. Almohadillas de distintos tamaños. Manual de instrucciones y garantía.', 7, 5, 4, 6),
(5, 'Auriculares Phillips TAH', 'auriculares-phillipsTAH.webp', 7499, 'Características:\r\nColor: Negro.\r\nPlegable: No.\r\nTipo: Auricular On Ear.\r\nAutonomía: 15 Hs.\r\nModelo: TAH1205BK/00.\r\nOrigen: 2755.\r\nConectividad:\r\nBluetooth: Si.\r\nMicrófono Integrado: Si.\r\nGarantía:\r\nDuración: 6 meses.\r\nFunciones especiales:\r\nConexión: Inalámbrico.', 2, 5, 4, 9),
(6, 'Auriculares Stromberg', 'auriculares-stromberg.jpg', 2071, 'Formato del auricular: On-ear. Con Bluetooth: No. Con micrófono: No. Es monoaural: No. Es gamer: Sí. Con luz LED: No. Largo del cable: 1.2 m. Stromberg SC-51-YARD-NE cable 1.2 Mts Plegable.', 30, 5, 4, 8),
(7, 'Iphone 11', 'iphone-11.jpg', 300999, 'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas. Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración.', 99, 5, 2, 3),
(8, 'Iphone 12', 'iphone-12.jpg', 349999, 'El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic.', 100, 6, 2, 3),
(9, 'Motorola G42', 'motorola-g42.jpg', 71999, 'Con el móvil Motorola Moto G42 en color rojo descubrirás colores y sonidos que nunca imaginaste. Pantalla Oled Fhd+ de 6,4” Disfruta de un contraste infinito con colores más vivos y negros más intensos, junto con detalles superdefinidos. Potente procesador Snapdragon 680 Potencia tus juegos más desafiantes, las transmisiones de vídeo y las funciones de la cámara con un rendimiento de más de un 20 % más rápido .', 0, 1, 2, 2),
(10, 'Motorola G52', 'motorola-g52.png', 74999, 'Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 16 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.', 8, 4, 2, 2),
(11, 'Notebook HP', 'notebook-hp.jpg', 249999, 'Sistema operativo\r\n- Windows 10 Home en modo S Procesador\r\n- AMD A4-9125 Dual-Core (frecuencia base de 2,3 GHz, frecuencia de ráfaga de hasta 2,6 GHz, 1 MB de caché) Chipset\r\n- SoC integrado AMD Memoria\r\n- SDRAM DDR4-1866 de 4 GB (1 x 4 GB) Almacenamiento\r\n- Memoria flash eMMC de 64 GB GráficosGráficos AMD Radeon R3 (integrados) Monitor 14 \"en diagonal FHD SVA antirreflejo con micro-borde con retroiluminación WLED, 1920x1080 Funciones de audio\r\n- Altavoces duales Cámara web\r\n- Cámara HP TrueVision HD con micrófono digital integrado Tipo de Batería\r\n- Iones de litio de 3 celdas y 41 Wh Tipo de fuente de alimentación\r\n- Adaptador de corriente alterna de 45 W', 1, 5, 1, 4),
(12, 'Notebook HP Probook 450', 'notebook-hpprobook450.jpeg', 425999, 'Pantalla HD 14\". Procesador: Intel Core i5-10210U. Placa de video integrada. Almacenamiento: SSD PCIe NVMe M.2 de 256 GB. RAM: 8 Gb. WIFI. HDMI. Bluetooth. Camara: HD HP True Vision de 720p con microfono digital integrado. Sistema Operativo: Windows 10 Home. Bateria: Iones de litio de 3 celdas y 41 Wh.', 0, 4, 1, 4),
(13, 'Samsung Galaxy A23', 'samsung-a23.jpg', 88999, 'Pantalla: 6.6\" PLS TFT LCD 1080 x 2408 (FHD+). Procesador: Octa-Core. Almacenamiento: 128 Gb. Ram: 4Gb. Camara: 50.0 MP + 5.0 MP + 2.0 MP + 2.0 MP. Camara Frontal: 8 MP. Sistema Operativo: Android. WIFI. Bluetooth. Lector de tarjetas MicroSD. NFC. USB. GPS. Graba y reproduce videos. Navegador Chrome. Bateria: 5000 mAh.', 23, 5, 2, 1),
(14, 'Samsung Galaxy A33', 'samsung-a33.jpg', 124999, 'Pantalla: 6.4. Memoria interna: 128GB. Procesador: Exynos 1280 8 núcleos 2,4 Ghz. Sistema operativo: Android 12. Cámara: 48 MP + 8 MP + 5 MP + 2 MP. Compatible: 4G.', 67, 5, 2, 1),
(15, 'Samsung Galaxy Z-flip', 'samsung-zflip.jpg', 371755, 'Celular de 6.7\" FHD+ Dynamic Amoled 2x. Procesador Snapdragon 888 Octa Core: 2.84GHz, 2.4GHz, 1.8GHz. Almacenamiento 128 Gb / RAM 8 Gb. Dual sim. Resolucion 2640 x 1080 (FHD+). Camara principal 12 + 12mp, Camara frontal 10 Mp. Sonido potente Dolby Atmos. IPX8. Resolucion de video UHD 4K (3840 x 2160) a 60fps. Tecnologia 5G. USB Type-C. USB 2.0. 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.1. NFC. Sistema operativo Android. GPS. Navegador: Chrome. Sensores: Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor. Bateria de 3300 mAh. No incluye cargador. Trae un nuevo micro chip.', 43, 5, 2, 1),
(16, 'Samsung Galaxy Tab A8', 'tablet-galaxyTabA8.jpg', 229999, 'Celular de 6.7\" FHD+ Dynamic Amoled 2x. Procesador Snapdragon 888 Octa Core: 2.84GHz, 2.4GHz, 1.8GHz. Almacenamiento 128 Gb / RAM 8 Gb. Dual sim. Resolucion 2640 x 1080 (FHD+). Camara principal 12 + 12mp, Camara frontal 10 Mp. Sonido potente Dolby Atmos. IPX8. Resolucion de video UHD 4K (3840 x 2160) a 60fps. Tecnologia 5G. USB Type-C. USB 2.0. 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.1. NFC. Sistema operativo Android. GPS. Navegador: Chrome. Sensores: Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor. Bateria de 3300 mAh. No incluye cargador. Trae un nuevo micro chip.', 465, 5, 6, 1),
(17, 'Tablet Lenovo Yoga Tab 13', 'tablet-lenovo.jpg', 189999, 'Tablet procesador Octa-Core\r\n\r\nSumérgete en la historia Ponla de pie, cuelga e inclina tu tablet con un soporte de acero inoxidable, mientras sientes el drama y la tensión de tus películas y programas favoritos con una impresionante calidad de imagen 2K a través de Dolby Vision ™. Disfrutarás de la paleta de colores sRGB completa durante muchas horas con protección ocular con certificación TÜV que elimina los niveles dañinos de luz azul. Audio cinematográfico en movimiento Experimenta y escucha cada nota y efecto de audio en su propio espacio físico a través del audio cinematográfico en movimiento de Dolby Atmos® con cuatro altavoces JBL. Podrás gozar de cada himno de concierto, pódcast y videollamada mientras disfrutas de la sintonización precisa del audio de primera calidad de Lenovo. Trabaja con dos pantallas. Desde cualquier lugar. Obtén una mayor productividad con doble pantalla. El práctico puerto micro-HDMI transforma tu tablet en una segunda pantalla rápida y sencilla de 2K para tu laptop si quisieras (laptop no incluida). Y el Lenovo Precision Pen 2 opcional (no incluido) es un regalo del cielo para los creadores, ya que te ofrece la destreza y la libertad para dibujar diseños directamente en la pantalla, tal y como lo harías en un bloc de dibujo.', 9, 5, 6, 7),
(18, 'Tablet Samsung Galaxy A7', 'tablet-samsungA7.jpg', 56999, 'TABLET 8.7P A7 LITE SM-T220 SAMSUNG -Pantalla 8.7\" TFT WXGA+ -Procesador MediaTek MT8768T (Quad 2.3GHz + Quad 1.8GHz) -Memoria RAM 3GB -Memoria interna 32GB -Expandible hasta 1TB con tarjeta MicroSD - Cámara Trasera 8MP AF -Cámara Frontal 2MP -USB Tipo C 2.0 -3.5mm Earphone jack -Desbloqueo facial -One Hand Operation -2 parlantes -Sonido Dolby Atmos -Batería 5100mAh -Carga rápida 15W -Medidas: 212 .5x124.7x8mm -Peso: 366gr -Color Plateado -Modelo A7 LITE SM-T220', 0, 6, 6, 1),
(19, 'Tablet Lenovo Tab M10', 'tablet-tabm10.jpg', 83000, 'Esta tablet es la combinación perfecta de rendimiento y versatilidad, ideal para acompañar cada una de tus actividades. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi, wi-fi direct, bluetooth, usb micro-c, wi-fi display, pogo pin, otg te permiten potenciar sus funciones al máximo. Capturá todos tus momentos al instante\r\nGracias a sus cámaras, con resoluciones de 8 Mpx y 5 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.', 876, 6, 6, 7),
(20, 'Smart TV LED 43\" LG', 'tv-LGsmart.jfif', 105999, 'Smart TV. 43\" UHD 4K - HDR. Resolucion ( 3840 x 2160 ). Procesador: Quad Core 4k. Control remoto magico. . Puertos: HDMI 3x2.0, USB x 2. Contraste dinamico. Sonido crear voice.', 123, 5, 3, 10),
(21, 'TV Smart Samsung 55\" LED 4k', 'tv-samsung.jfif', 144499, 'Led smart TV 55\" 4K. Pantalla: widescrren. Frecuencia de barrido 60hz. Bluetooth. Wi Fi. Entrada USB 1. Entrada HDMI 3. Tipo de sonido 2CH. Potencia RMS 20W. Incluye control remoto, pie, manuales.', 0, 6, 3, 1),
(22, 'TV Smart 55\" UHD 4k', 'tv-samsungSmart.jpg', 178199, 'Marca: Samsung.\r\nTipo de TV: Smart TV.\r\nCantidad de Pulgadas: 65\" Pulgadas.\r\nResolucion de Video: Resolucion 4K Ultra HD.\r\nSistema Operativo Android: No.\r\nResolucion de Pantalla: 3840 x 2160.\r\nFormato de Pantalla: Pantalla Plana.\r\nCantidad HDMI: 2 Puertos HDMI.\r\nSintonizador Digital TDA: Si.\r\nApto Netflix: Si.\r\nImagen 3D: No.\r\nConexion USB:Si.\r\nWI-FI: Si.\r\nCaracteristicas Adicionales:\r\nPantalla: Crystal / Procesador: Crystal 4K / Acceso remoto / Optimizador de juego: Game Enhancer / Smart Hub & One Remote.\r\nOrigen:	Argentina', 67, 5, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_id`
--

CREATE TABLE `type_id` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `type_id`
--

INSERT INTO `type_id` (`id`, `type`) VALUES
(1, 'Notebook'),
(2, 'Smartphone'),
(3, 'TV'),
(4, 'Auriculares'),
(5, 'PC'),
(6, 'Tablet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `avatar`, `password`, `isAdmin`, `isActive`) VALUES
(1, 'ignacio3111', 'ignacio@gmail.com', '', '$2b$10$fcr7L9xA2oURGUCoBUOjUeVa8etBhU2v5tZmuMoQOllsdpSyko2zO', 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `color_id`
--
ALTER TABLE `color_id`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `company_id`
--
ALTER TABLE `company_id`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indices de la tabla `type_id`
--
ALTER TABLE `type_id`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `color_id`
--
ALTER TABLE `color_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `company_id`
--
ALTER TABLE `company_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `type_id`
--
ALTER TABLE `type_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type_id` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company_id` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`color_id`) REFERENCES `color_id` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



