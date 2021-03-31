-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 31/03/2021 às 12:05
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hackFCamara`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `doador`
--

CREATE TABLE `doador` (
  `id_doador` int NOT NULL,
  `cpf_doador` varchar(11) NOT NULL,
  `nome_doador` char(60) DEFAULT NULL,
  `telefone_doador` varchar(11) DEFAULT NULL,
  `email_doador` varchar(40) DEFAULT NULL,
  `donatario` int DEFAULT NULL,
  `forma_doacao` varchar(50) DEFAULT NULL,
  `data_doacao` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `donatario`
--

CREATE TABLE `donatario` (
  `id_donatario` int NOT NULL,
  `ra_donatario` varchar(8) DEFAULT NULL,
  `nome_donatario` varchar(60) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `email_responsavel` varchar(40) DEFAULT NULL,
  `telefone_responsavel` varchar(11) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `logradouro` varchar(50) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(30) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `escola_donatario` int DEFAULT NULL,
  `segmento_ensino` varchar(30) DEFAULT NULL,
  `serie_ensino` varchar(10) DEFAULT NULL,
  `sonho_profissao` text,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `escola`
--

CREATE TABLE `escola` (
  `id_escola` int NOT NULL,
  `nome_escola` varchar(60) DEFAULT NULL,
  `rede` varchar(60) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `logradouro` varchar(50) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cidade` varchar(30) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fale_conosco`
--

CREATE TABLE `fale_conosco` (
  `id` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `assunto` varchar(30) DEFAULT NULL,
  `mensagem` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `kit`
--

CREATE TABLE `kit` (
  `id_kit` int NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `elementos` text,
  `tipo_kit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `lista_material`
--

CREATE TABLE `lista_material` (
  `id_lista` int NOT NULL,
  `id_donatario` int DEFAULT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `relacao_kit_lista`
--

CREATE TABLE `relacao_kit_lista` (
  `id` int NOT NULL,
  `id_lista_material` int DEFAULT NULL,
  `id_kit` int DEFAULT NULL,
  `status_item` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `doador`
--
ALTER TABLE `doador`
  ADD PRIMARY KEY (`id_doador`),
  ADD KEY `donatario` (`donatario`);

--
-- Índices de tabela `donatario`
--
ALTER TABLE `donatario`
  ADD PRIMARY KEY (`id_donatario`),
  ADD KEY `escola_donatario` (`escola_donatario`);

--
-- Índices de tabela `escola`
--
ALTER TABLE `escola`
  ADD PRIMARY KEY (`id_escola`);

--
-- Índices de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `kit`
--
ALTER TABLE `kit`
  ADD PRIMARY KEY (`id_kit`);

--
-- Índices de tabela `lista_material`
--
ALTER TABLE `lista_material`
  ADD PRIMARY KEY (`id_lista`),
  ADD KEY `id_donatario` (`id_donatario`);

--
-- Índices de tabela `relacao_kit_lista`
--
ALTER TABLE `relacao_kit_lista`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lista_material` (`id_lista_material`),
  ADD KEY `id_kit` (`id_kit`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `doador`
--
ALTER TABLE `doador`
  MODIFY `id_doador` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `donatario`
--
ALTER TABLE `donatario`
  MODIFY `id_donatario` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `escola`
--
ALTER TABLE `escola`
  MODIFY `id_escola` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `kit`
--
ALTER TABLE `kit`
  MODIFY `id_kit` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `lista_material`
--
ALTER TABLE `lista_material`
  MODIFY `id_lista` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `relacao_kit_lista`
--
ALTER TABLE `relacao_kit_lista`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `doador`
--
ALTER TABLE `doador`
  ADD CONSTRAINT `doador_ibfk_1` FOREIGN KEY (`donatario`) REFERENCES `donatario` (`id_donatario`);

--
-- Restrições para tabelas `donatario`
--
ALTER TABLE `donatario`
  ADD CONSTRAINT `donatario_ibfk_1` FOREIGN KEY (`escola_donatario`) REFERENCES `escola` (`id_escola`);

--
-- Restrições para tabelas `lista_material`
--
ALTER TABLE `lista_material`
  ADD CONSTRAINT `lista_material_ibfk_1` FOREIGN KEY (`id_donatario`) REFERENCES `donatario` (`id_donatario`);

--
-- Restrições para tabelas `relacao_kit_lista`
--
ALTER TABLE `relacao_kit_lista`
  ADD CONSTRAINT `relacao_kit_lista_ibfk_1` FOREIGN KEY (`id_lista_material`) REFERENCES `lista_material` (`id_lista`),
  ADD CONSTRAINT `relacao_kit_lista_ibfk_2` FOREIGN KEY (`id_kit`) REFERENCES `kit` (`id_kit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
