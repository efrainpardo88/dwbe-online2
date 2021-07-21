--Creo el modelo punto de contacto con la relacion persona_id 

CREATE TABLE `punto_contacto` (
  `id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `tipo_de_contacto_id` int(11) NOT NULL,
  `valor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `punto_contacto`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `punto_contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

  