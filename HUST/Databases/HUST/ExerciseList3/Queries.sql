/* ExerciseList3

drop table if exists replacement;
drop table if exists intervention;	
drop table if exists invoice;
drop table if exists technician; 
drop table if exists product;
drop table if exists customer;

create table customer (
	cust_no 	int,
    cust_name 	varchar(20), 
    surname 	varchar(20),
    address 	varchar(50),
    city 		varchar(20),
    zip 		int,
    tel 		varchar(20),
    constraint customer_pk primary key (cust_no)
);

create table product (
	rfrns 			varchar(7),
    designation		text,
    unit_price		decimal(9, 2), 
    stock_quantity	int,
    min_quantity	int,
    constraint product_pk primary key (rfrns)
);

create table technician (
	tech_no		varchar(7),
    tech_name	varchar(20),
    hour_rate	decimal(9, 2),
    constraint technician_pk primary key (tech_no)
);

create table invoice (
	inv_no		int,
    inv_date	date,
    state		varchar(20),
    customer	int,
    constraint invoice_pk primary key (inv_no),
    constraint invoice_pk_customer foreign key (customer) references customer(cust_no)
);

create table intervention (
	interv_no	int,
    interv_date	date,
    technician	varchar(7),
    duration	int,
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

>> Q1:

select rfrns, designation
from product;

>> Q2:

select distinct product
from replacement;

>> Q3:

select rfrns, designation
from product
where unit_price > 15;

>> Q4:

select address
from customer
where cust_name = 'Dallalon';

>> Q5:

select cust_name
from customer
union
select tech_name
from technician

>> Q6:

select rfrns
from product
where unit_price > 15 and rfrns in (select product
				from replacement);

>> Q7:

select rfrns
from product
except
select product as rfrns
from replacement;

>> Q8:

select interv_no, interv_date, duration
from intervention inner join invoice on intervention.interv_no = invoice.inv_no
where invoice.state = 'R';

>> Q9:

select interv_no, interv_date, duration
from intervention inner join technician on intervention.technician = technician.tech_no
where tech_name = 'Foucher';

>> Q10:

select inv_no
from invoice inner join customer on invoice.customer = customer.cust_no
where cust_name = 'Rivoire';

>> Q11:

select distinct designation
from product
where rfrns in (select replacement.product
			   from replacement, product, intervention
			   where replacement.product = product.rfrns and replacement.intervention = intervention.interv_no
			   and interv_date = '2020-07-03');

>> Q12:

select invoice.inv_no, intervention.interv_no, customer.cust_name
from invoice, intervention, customer
where invoice.inv_no = intervention.invoice and invoice.customer = customer.cust_no
	and state <> 'R';

>> Q13:

select invoice.inv_date
from technician, intervention, invoice, replacement
where intervention.technician = technician.tech_no and intervention.interv_no = replacement.intervention and intervention.invoice = invoice.inv_no
	and technician.tech_name = 'Saultier';

>> Q14:

select product.designation, intervention.duration, invoice.state
from customer, replacement, intervention, invoice, product
where product.rfrns = replacement.product
	and replacement.intervention = intervention.interv_no
	and intervention.invoice = invoice.inv_no
	and invoice.customer = customer.cust_no
	and customer.cust_name = 'Provent';

>> Q15:

select inv_no
from invoice, customer
where invoice.customer = customer.cust_no
	and ((cust_name = 'Rivoire' and state = 'R')
		or (cust_name = 'Favero' and state <> 'R'));

>> Q16:

select cust_no
from customer
except
select customer
from invoice

>> Q17:

select invoice
from technician, intervention
where intervention.technician = technician.tech_no
	and tech_name = 'Bonnaz'
intersect
select invoice
from technician, intervention
where intervention.technician = technician.tech_no
	and tech_name = 'Mauras';
*/


