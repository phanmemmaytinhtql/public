-- create database IT3090E_704709;

drop table if exists job_history;
drop table if exists employees;
drop table if exists job_grades;
drop table if exists jobs;
drop table if exists departments;
drop table if exists locations;
drop table if exists countries;
drop table if exists regions;

create table regions (
    region_id serial not null,
    region_name varchar(25),
    constraint pk_regions primary key (region_id)
);

create table countries (
    country_id char(2) not null,
    country_name varchar(40),
    region_id int,
    constraint pk_countries primary key (country_id),
    constraint fk_countries_region foreign key (region_id) references regions(region_id)
);

create table locations (
    location_id int not null,
    street_address varchar(25),
    postal_code varchar(12),
    city varchar(30),
    country_id char(2),
    constraint pk_locations primary key (location_id),
    constraint fk_locations_countries foreign key (country_id) references countries(country_id)
);

insert into regions(region_id, region_name) values (1, 'Asia');
insert into countries(country_id, country_name, region_id) values (1, 'Viet Nam', 1);

create table jobs (
    job_id varchar(10) not null,
    job_title varchar(35) default '',
    min_salary int default  8000,
    max_salary int default  null,
    constraint pk_jobs primary key (job_id)
);

alter table jobs
add constraint chk_jobs_maxsalary check (max_salary <= 25000);

create table departments (
    department_id int not null,
    department_name varchar(30),
    manager_id int,
    location_id int,
    constraint pk_departments primary key (department_id),
    constraint fk_departments_locations foreign key (location_id) references locations(location_id)
);

create table employees (
    employee_id int not null,
    first_name varchar(20),
    last_name varchar(25),
    email varchar(25),
    phone_number varchar(20),
    hire_date date,
    job_id varchar(10),
    salary int,
    commission_pct int,
    manager_id int,
    department_id int,
    constraint pk_employees primary key (employee_id),
    constraint fk_employees_jobs foreign key (job_id) references jobs(job_id),
    constraint fk_employees_departments foreign key (department_id) references departments(department_id)
);

alter table employees
add constraint fk_employees_managerid_employeeid foreign key (manager_id) references employees(employee_id);

alter table departments
add constraint fk_departments_employees foreign key (manager_id) references employees(employee_id);

create table job_history (
    employee_id int not null,
    start_date date,
    end_date date,
    job_id varchar(10),
    department_id int,
    constraint pk_jobhistory primary key (employee_id, start_date),
    constraint fk_jobhistory_department foreign key (department_id) references departments(department_id),
    constraint fk_jobhistory_jobs foreign key (job_id) references jobs(job_id),
    constraint fk_jobhistory_employees foreign key (employee_id) references employees(employee_id)
);

create table job_grades (
    grade_level varchar(2) not null,
    lowest_sal int,
    highest_sal int,
    constraint pk_jobgrades primary key (grade_level)
);

insert into regions(region_name, region_id) values ('Europe', 2);
insert into regions(region_name, region_id) values ('Africa', 3);
insert into regions(region_name, region_id) values ('America', 4);
insert into regions(region_name, region_id) values ('Pacific', 5);

insert into countries(country_id, country_name, region_id) values (2, 'Laos', 1);
insert into countries(country_id, country_name, region_id) values (3, 'Cuba', 4);

insert into locations(location_id, street_address, postal_code, city, country_id) values (123, 'Street 1', 'ABCD', 'Hanoi', 1);
insert into locations(location_id, street_address, postal_code, city, country_id) values (345, 'Street 2', 'ASDW', 'HCM', 1);
insert into locations(location_id, street_address, postal_code, city, country_id) values (789, 'Street 2', 'YRHT', 'Havana', 3);

insert into jobs(job_id, job_title) values ('ENG', 'Engineer');
insert into jobs(job_id, job_title, min_salary, max_salary) values ('SCI', 'Scientist', 10000, 25000);

insert into departments(department_id, department_name) values (142, 'SOICT');
insert into departments(department_id, department_name, location_id) values (543, 'SNEEP', 345);

insert into employees(employee_id, first_name, last_name, job_id, department_id) values (7563, 'Tran', 'Lap', 'ENG', 142);
insert into employees(employee_id, first_name, last_name, job_id, manager_id, department_id) values (7836, 'Nguyen', 'A', 'SCI', 7563, 543);

insert into job_history(employee_id, start_date, end_date, job_id, department_id) values (7563, '2021-04-14', '2029-05-15', 'ENG', 142);
insert into job_history(employee_id, start_date, end_date, job_id, department_id) values (7563, '2021-12-04', '2029-05-15', 'SCI', 142);
insert into job_history(employee_id, start_date, end_date, job_id, department_id) values (7836, '2025-06-10', '2026-04-23', 'ENG', 543);
insert into job_history(employee_id, start_date, end_date, job_id, department_id) values (7836, '2027-03-10', '2043-04-23', 'ENG', 142);

delete from countries
where country_id = '2';

-- delete from countries
-- where country_id = '3';
--
-- delete from employees
-- where employee_id = 7563;

delete from job_history
where employee_id = 7836;

delete from employees
where employee_id = 7836;
