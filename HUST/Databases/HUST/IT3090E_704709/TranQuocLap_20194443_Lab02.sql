
-- ex1
select first_name as "First Name", last_name as "Last Name"
from employees
where salary > 10000;

-- ex2
select departments.department_id
from departments
where department_id in (
    select department_id from employees
    );

-- ex3
select *
from employees
where salary > 10000
order by salary desc;

-- ex4
select *
from countries inner join regions r on r.region_id = countries.region_id
where region_name = 'Asia';

-- ex5
select *
from countries
where country_name like 'C%';

-- ex6
select *
from jobs
where lower(job_title) like '%scientist%';

-- ex7
select e.employee_id, first_name, last_name, J1.start_date, d1.department_name, J2.start_date, d2.department_name
from job_history J1, job_history J2, employees e, departments d1, departments d2
where e.employee_id = J1.employee_id and
      d1.department_id = J1.department_id and
      d2.department_id = J2.department_id and
      J1.employee_id = J2.employee_id and
      lower(d1.department_name) = 'accounting' and lower(d2.department_name) = 'human resources';

-- ex8
select count(e.department_id)
from departments inner join employees e on departments.department_id = e.department_id
where lower(department_name) = 'accounting'
group by e.department_id;

-- ex9
select e1.salary MAX, e2.salary MIN
from employees e1, employees e2
where e1.salary >= all(
    select salary from employees
    ) and
      e2.salary <= all(
          select salary from employees
        );

-- ex10
select department_name, count(e.department_id)
from departments d left outer join employees e on d.department_id = e.department_id
group by e.department_id, department_name;


