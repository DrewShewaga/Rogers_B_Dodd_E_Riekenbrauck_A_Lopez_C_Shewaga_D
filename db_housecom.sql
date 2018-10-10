-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 10, 2018 at 03:28 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_housecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_desc`
--

CREATE TABLE `tbl_desc` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_desc`
--

INSERT INTO `tbl_desc` (`id`, `product_desc`) VALUES
(1, 'the smartest piece in town');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int(20) UNSIGNED NOT NULL,
  `product_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `product_name`) VALUES
(1, 'HouseCom ThermoSecure');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_desc`
--

CREATE TABLE `tbl_product_desc` (
  `id` int(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `desc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_product_desc`
--

INSERT INTO `tbl_product_desc` (`id`, `product_id`, `desc_id`) VALUES
(1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_desc`
--
ALTER TABLE `tbl_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product_desc`
--
ALTER TABLE `tbl_product_desc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_desc`
--
ALTER TABLE `tbl_desc`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_product_desc`
--
ALTER TABLE `tbl_product_desc`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
