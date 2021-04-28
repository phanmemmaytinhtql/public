-- 1. What are the identifiers of the customers (attribute cust_no), for whom NO invoice has been
-- issued. Give three answers: the first one using EXCEPT, the second one using NOT IN and the
-- third one using NOT EXISTS.

select cust_no
from customers
except
select customer
from invoices;

select cust_no
from customers
where cust_no not in (select customer from invoices);

select cust_no
from customers
where not exists(select inv_no from invoices where customer = customers.cust_no);

-- 2. Which are the references, designations and unit prices of all the products, except the
-- cheapest? Give four answers: the first one using the keyword ANY, the second one using the
-- keywords EXCEPT and ALL, the third one using the keyword NOT IN and ALL, and the last one
-- using NOT EXISTS and ALL.

select reference, designation, unit_price
from products
where unit_price > any (select unit_price from products);

select reference, designation, unit_price
from products
except
select reference, designation, unit_price
from products
where unit_price <= all (select unit_price from products);

select reference, designation, unit_price
from products
where reference not in (select reference from products
                        where unit_price <= all (select unit_price from products));

select reference, designation, unit_price
from products p1
where not exists (select reference from products
                  where p1.unit_price = unit_price and
                        unit_price <= all (select unit_price from products
                                           where unit_price <= all (select unit_price from products)));
-- there must be a better query for the last option in your question. Would you mind sent me an email if there's any?

-- 3. Which are the invoices identifiers for which both the technicians « Bonnaz » and « Mauras »
-- have worked (give three answer: the first one using INTERSECT, the second one using IN and
-- the third one using EXISTS)?

select invoice
from interventions, technicians
where tech_no = technician and
      name = 'Bonnaz'
intersect
select invoice
from interventions, technicians
where tech_no = technician and
      name = 'Mauras';

select invoice
from interventions, technicians
where tech_no = technician and
      name = 'Bonnaz' and
      invoice in (select invoice
                 from interventions, technicians
                 where tech_no = technician and
                       name = 'Mauras');

select invoice
from interventions i1, technicians
where tech_no = technician and
      name = 'Bonnaz' and
      exists(select invoice
             from interventions, technicians
             where tech_no = technician and
                   name = 'Mauras' and
                   invoice = i1.invoice);

-- 4. Give the list of ALL the references of all the products (no matter if they were replaced or
-- not), along with the intervention numbers and the replaced quantity, when these products
-- were actually replaced (if they were never replaced, then you should just obtain NULL).

select reference, intervention, qtity
from products left outer join replacements r on products.reference = r.product;

-- 5. Give the total number of technicians.

select count(tech_no)
from technicians;

-- 6. Give the average unit price of a product. This new attribute will be called “Average”

select avg(unit_price) as Average
from products;

-- 7. List of all the invoices identifiers (sorted by ascending order) and the number of related
-- interventions. Please rename the latter attribute as “number_interv”.

select inv_no, count(interv_no) as number_interv
from invoices left outer join interventions on inv_no = invoice
group by inv_no;

-- 8. References of the products which have been replaced at least twice (i.e. two times),
-- together with the number of times they have been replaced.

select reference, number_replaced
from(select reference, count(intervention) number_replaced
    from products, replacements
    where reference = product
    group by reference) new
where number_replaced >= 2;

-- 9. For each intervention, give its identifier and the total amount for all the replaced parts in
-- that intervention (take into account the unit price AND the quantity of the products
-- replaced, for each intervention).


select interv_no, sum(unit_price) price, sum(qtity) qtity
from interventions left join replacements r on interventions.interv_no = r.intervention, products
where reference = product
group by interv_no;


-- 10. Who is the customer (cust_no and name) who had the highest number of
-- interventions (provide a solution with a nested query)? Please also give the number of
-- interventions for that customer.

select cust_no, name, n_interv
from (select customer, count(interv_no) n_interv
        from interventions, invoices
        where invoice = inv_no
        group by customer) T1,
     customers
where T1.customer = cust_no and
      n_interv >= all (select count(interv_no)
                        from interventions, invoices
                        where invoice = inv_no
                        group by customer);

-- 11. Total amount of the salary, for each invoice identifier. This amount is the salary of the
-- technician (depending on his hourly rate and of the duration of the intervention), for each
-- intervention corresponding to that invoice.

select invoice, sum(salary)
from (select invoice, hour_rate * duration salary
    from interventions, technicians
    where technician = tech_no) S
group by invoice;


-- 12. Total price of each invoice. This price includes the price of the replaced places, and the
-- salary of the technician (depending on his hourly rate and of the time spent), for each
-- intervention depending on that invoice.

select S2.invoice, (coalesce(S2.total_salary, 0) + coalesce(S3.total_unit, 0))
from (select invoice, sum(salary) total_salary
    from (select invoice, hour_rate * duration salary
        from interventions, technicians
        where technician = tech_no) S1
    group by invoice) S2
	full outer join
    (select invoice, sum(t_unit) total_unit
    from (select invoice, unit_price * qtity t_unit
        from interventions, replacements, products
        where intervention = interv_no and product = reference) S
    group by invoice) S3 on 
S2.invoice = S3.invoice;

-- HOTELS RELATIONAL MODEL

create table hotels2 (
    hotel_no varchar(5) not null primary key,
    hotel_name varchar(20),
    zip varchar(5),
    city varchar(20));

create table rooms2 (
    hotel_no varchar(5) not null references hotels2(hotel_no),
    room_no integer not null,
    type varchar,
    price float,
    primary key (hotel_no, room_no));

create table customers2 (
    cust_no varchar(5) not null primary key,
    cust_name varchar(20),
    country varchar(20));

create table bookings2 (
    hotel varchar(5) not null references hotels2(hotel_no),
    customer varchar(20) not null references customers2(cust_no),
    arrival_data date,
    departure_date date,
    room integer,
    primary key (hotel, customer, arrival_data));

-- 3. Which are the hotels from Niort that hosted all the customers from Spain?

select hotel_no
from hotels2 h
where city = 'Niort' and
      not exists (
          select cust_no
          from customers2
          where country = 'Spain' and
                cust_no not in (
                    select customer
                    from bookings2
                    where hotel = h.hotel_no
                  )
          );

-- select a hotel A such that it is in Niort
-- query the list B of customers who've booked the hotel A
-- query the list C of customers from Spain
-- if there's any customer from C who is not in B
-- then A is not in the result

-- 4. Customers who booked in all the hotels of Niort.

select cust_no
from customers2 c
where not exists (
    select hotel_no
    from hotels2
    where city = 'Niort' and
          hotel_no not in (
              select hotel
              from bookings2
              where customer = c.cust_no
              )
    );

-- + select the customer A
-- + query the list B of hotels that A has booked.
-- + query the list C of all hotels in Niort.
-- + if there's any hotel in C that is not in B
-- + then A is not appear in the result

-- 5. Hotels that hosted all the customers from Switzerland.

select hotel_no
from hotels2 h
where not exists(
    select cust_no
    from customers2
    where country = 'Switzerland' and
          cust_no not in (
              select customer
              from bookings2
              where hotel = h.hotel_no
            )
    );

-- select a hotel A
-- query the list B of customers who've booked hotel A
-- query the list C of all the customers from Switzerland
-- if there's any customers from C that is not in B
-- then A is not in the result

