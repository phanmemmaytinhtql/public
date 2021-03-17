/*
>> Q1:

customer
product
technician
invoice			"must be created after customer"
intervention	"must be created after technician and invoice"
replacement		"must be created after product and intervention"

>> Q2:

replacement		"must be dropped after product and intervention"
intervention	"must be dropped after technician and invoice"
invoice			"must be dropped after customer"
technician
product
customer

>> Q3:

drop database if exists hust;
create database hust;
use hust;

set names utf8;
set character_set_client = utf8mb4;

drop table if exists replacement;
drop table if exists intervention;	
drop table if exists invoice;
drop table if exists technician; 
drop table if exists product;
drop table if exists customer;

create table customer (
	cust_no 	int,
    cust_name 	varchar(20)	not null, 
    surname 	varchar(20)	not null,
    address 	varchar(50)	not null,
    city 		varchar(20)	not null,
    zip 		int 		not null,
    tel 		varchar(20) not null,
    constraint customer_pk primary key (cust_no)
);

create table product (
	rfrns 			varchar(7),
    designation		text 			not null,
    unit_price		decimal(9, 2), 
    stock_quantity	int,
    min_quantity	int,
    constraint product_pk primary key (rfrns)
);

create table technician (
	tech_no		varchar(7),
    tech_name	varchar(20)		not null,
    hour_rate	decimal(9, 2)	not null,
    constraint technician_pk primary key (tech_no)
);

create table invoice (
	inv_no		int,
    inv_date	date		not null,
    state		varchar(20)	not null,
    customer	int			not null,
    constraint invoice_pk primary key (inv_no),
    constraint invoice_pk_customer foreign key (customer) references customer(cust_no)
);

create table intervention (
	interv_no	int,
    interv_date	date		not null,
    technician	varchar(7)	not null,
    duration	int			not null,
    invoice		int,
    constraint intervention_pk primary key (interv_no),
    constraint intervention_fk_technician 	foreign key (technician) 	references technician(tech_no),
    constraint intervention_fk_invoice		foreign key (invoice)		references invoice(inv_no)
);

create table replacement (
	product			varchar(7),
    intervention	int,
    qtity			int,
    constraint replacement_pk primary key (product, intervention),
    constraint replacement_fk_product		foreign key (product)		references product(rfrns),
    constraint replacement_fk_intervention	foreign key (intervention)	references intervention(interv_no)
);


>> Q4:

alter table replacement drop constraint replacement_fk_product;
alter table product alter column rfrns type varchar(10);
alter table replacement alter column product type varchar(10);
alter table replacement add constraint replacement_fk_product foreign key (product) references product(rfrns);

>> Q5:

alter table invoice
add constraint invoice_chk_state check (state = 'R' or state = 'O');

>> Q6:

delete from customer;

alter table customer
alter column address drop not null,
alter column city drop not null,
alter column tel drop not null,
alter column zip drop not null;
insert into customer(cust_no, surname, cust_name) values (10, 'NGUYEN', 'do');

alter table intervention drop constraint intervention_fk_technician;
alter table technician alter column tech_no type varchar(7);
alter table intervention alter column technician type varchar(7);
alter table intervention add constraint intervention_fk_technician foreign key (technician) references technician(tech_no);

insert into technician(tech_no, tech_name, hour_rate) values ('T1', 'Hunter Steve', 18);
insert into technician(tech_no, tech_name, hour_rate) values ('T2', 'Dupont Jean', 15);

alter table intervention drop constraint intervention_fk_invoice;
alter table invoice alter column inv_no type varchar(7);
alter table intervention alter column invoice type varchar(7);
alter table intervention add constraint intervention_fk_invoice foreign key (invoice) references invoice(inv_no);
insert into invoice(inv_no, state, inv_date, customer) values ('I122', 'R', '2020-07-05', 10);
select data_type
from information_schema.columns
where table_name = 'intervention' and column_name = 'duration';

alter table intervention alter column duration type decimal(9, 2);
insert into intervention(interv_no, interv_date, technician, duration, invoice) values ('1001', '2020-07-03', 'T2', 1.5, 'I122');
insert into intervention(interv_no, interv_date, technician, duration, invoice) values ('1002', '2020-07-04', 'T1', 1, 'I122');

alter table product 
alter column designation drop not null;
insert into product(rfrns) values ('DT101');
insert into product(rfrns) values ('DT103');
insert into product(rfrns) values ('DT105');

insert into replacement(product, intervention, qtity) values ('DT101', 1001, 1);
insert into replacement(product, intervention, qtity) values ('DT103', 1001, 2);
insert into replacement(product, intervention, qtity) values ('DT105', 1002, 3);

>> q7:

update intervention
set duration = 2
where interv_no = 1002;
*/

