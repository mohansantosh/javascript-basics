CREATE TABLE `employee` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `employeeId` varchar(255) UNIQUE NOT NULL,
  `is_active` bool DEFAULT true,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `employee_info` (
  `id` int PRIMARY KEY,
  `employee_id` int,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255),
  `lastname` varchar(255) NOT NULL,
  `gender` ENUM ('male', 'female'),
  `date_of_birth` date,
  `pan_number` varchar(255),
  `aadhar_number` varchar(255),
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `employee_address` (
  `id` int PRIMARY KEY,
  `employee_info_id` int,
  `house_no` varchar(255),
  `street_name` varchar(255),
  `city` varchar(255),
  `district` varchar(255),
  `state` varchar(255),
  `address_type` ENUM ('home', 'work', 'current', 'others'),
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `designations` (
  `id` int PRIMARY KEY,
  `name` varchar(255) UNIQUE NOT NULL,
  `created_at` datetime
);

ALTER TABLE `employee_info` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

CREATE TABLE `employee_designations` (
  `employee_id` int,
  `designations_id` int,
  PRIMARY KEY (`employee_id`, `designations_id`)
);

ALTER TABLE `employee_designations` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

ALTER TABLE `employee_designations` ADD FOREIGN KEY (`designations_id`) REFERENCES `designations` (`id`);


ALTER TABLE `employee_address` ADD FOREIGN KEY (`employee_info_id`) REFERENCES `employee_info` (`id`);
