create database if not exists web_lab;
use web_lab;

create table if not exists web_lab.desks (
	id int not null auto_increment,
	name varchar(45) not null,
    price int not null,
    primary key(id)
)
