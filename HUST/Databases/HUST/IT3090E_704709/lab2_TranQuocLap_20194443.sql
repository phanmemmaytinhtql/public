-- 1. add a corresponding (foreign key) constraint for employee table

alter table employees
add constraint fk_managerid_employee_id foreign key (manager_id) references employees(employee_id);

-- 2. Write a query to find the full name (first_name, last_name), job, department ID and
-- department name of the employees who works in London.

select concat(first_name, ' ', last_name) full_name, job_title, employees.department_id, department_name
from employees, departments, locations, jobs
where employees.department_id = departments.department_id and departments.location_id = locations.location_id and employees.job_id = jobs.job_id and   -- this line is for inner join only
      lower(city) = 'london';

-- 4) Write a query to find the employee id, name (last_name) along with their direct
-- manager_id and name (last_name).

select e1.employee_id, e1.last_name employee_name, e1.manager_id, e2.last_name manager_name
from employees e1 left join employees e2 on e1.manager_id = e2.employee_id;

-- 7) Employees who worked in region 'Europe' but never in 'Asia'?

select employees.employee_id, last_name
from employees, job_history, departments, locations, countries, regions
where job_history.employee_id = employees.employee_id and job_history.department_id = departments.department_id and departments.location_id = locations.location_id and locations.country_id = countries.country_id and countries.region_id = regions.region_id and   -- this line is for inner join only
      lower(region_name) = 'europe' and
      employees.employee_id not in (
          select employee_id
          from job_history, departments, locations, countries, regions
          where job_history.department_id = departments.department_id and departments.location_id = locations.location_id and locations.country_id = countries.country_id and countries.region_id = regions.region_id and    -- this line is for inner join only
                lower(region_name) = 'asia'
        );

-- 8) Write a query to find the employee ID, job title, number of days between ending date
-- and starting date for all jobs in department 20.

select employee_id, job_title, coalesce(end_date, current_date) - job_history.start_date number_of_days
from job_history, jobs
where job_history.job_id = jobs.job_id and   -- this line is for inner join only
      department_id = 142;

-- 10) Write a query to display employee name, his/her salary and the difference between
-- salary of the employee and minimum salary for the job "Mechanism engineer"

select first_name, last_name, salary, salary - (select min(salary) from employees)
from employees, jobs
where employees.job_id = jobs.job_id and
      lower(job_title) = 'mechanism engineer';

-- 13) Write a query to get the average salary for all departments employing more than 10 employees.

select department_id, avg(salary)
from employees
group by department_id
having count(employee_id) > 10;

-- 14) Write a query to display the job title and average salary of employees.

select employees.job_id, job_title, avg(salary)
from employees, jobs
where employees.job_id = jobs.job_id
group by employees.job_id, job_title;

-- 16) Write a query to display the job title and average salary of employees for the jobs
-- that have the highest average salary.

with job_avg_salary (job_id, avg_salary) as (
    select job_id, avg(salary)
    from employees
    group by job_id
)

select job_id, avg_salary
from job_avg_salary
where avg_salary = (select max(avg_salary) from job_avg_salary);

-- 17) Write a query to display the job title and average salary of employees for the jobs
-- that its average salary is higher than the average of all jobs

with job_avg_salary (job_id, avg_salary) as (
    select job_id, avg(salary)
    from employees
    group by job_id
)

select job_avg_salary.job_id, avg_salary
from job_avg_salary, jobs
where job_avg_salary.job_id = jobs.job_id and
      avg_salary > (select avg(avg_salary) from job_avg_salary);

-- 19) Write a query to display employee name and their number years of experience,
-- order by descending the number years of experiences.

select last_name, (max(coalesce(end_date, current_date)) - min(start_date))/365 n_years
from job_history, employees
where job_history.employee_id = employees.employee_id
group by job_history.employee_id, last_name
order by n_years desc;

-- 20) Write a query to display employee name and their job history for all employees
-- whose experience is more than 15 years.

with job_experience (employee_id, n_years) as (
    select employee_id, max(coalesce(end_date, current_date)) - min(start_date)
    from job_history
    group by employee_id
)
select job_history.*
from employees, job_history, job_experience
where job_history.employee_id = employees.employee_id and job_history.employee_id = job_experience.employee_id and
      n_years > 15*365
group by job_history.employee_id, last_name, job_history.job_id, start_date, end_date, job_history.department_id
order by job_history.employee_id, start_date;

--  3) Write a query to display the department ID and name and firstname of department manager.

select departments.department_id, department_name, first_name
from departments left join employees on departments.manager_id = employees.employee_id;

-- 5) Write a query to find the employee id, name (last_name) along with their direct
-- manager_id and name (last_name), their department name and the department manager (last_name).

select e1.employee_id, e1.last_name, e1.manager_id, e2.last_name manager_name, d1.department_name, e3.last_name department_manager
from employees e1 left join employees e2 on e1.manager_id = e2.employee_id,
     departments d1, employees e3
where e1.department_id = d1.department_id and d1.manager_id = e3.employee_id;

-- 6) Employees who work in "accounting" department or "human resources" department.

select employee_id, last_name
from employees, departments
where employees.department_id = departments.department_id and
      lower(department_name) = 'accounting'
union
select employee_id, last_name
from employees, departments
where employees.department_id = departments.department_id and
      lower(department_name) = 'human resources';

-- 9) Write a query to display the average salary of employees for job "Mechanism engineer".

select avg(salary)
from employees, jobs
where employees.job_id = jobs.job_id and
      lower(job_title) = 'mechanism engineer';

-- 11) Display the job history that were done by any employee who is currently earning
-- more than 10000 of salary, order by employee_id.

select job_history.*
from job_history, employees
where job_history.employee_id = employees.employee_id and
      salary > 10000
group by job_history.employee_id, job_history.job_id, start_date, end_date, job_history.department_id
order by job_history.employee_id, start_date;

-- 12) Write a query to get the highest, lowest, sum, and average salary of all employees.

select max(salary), min(salary), sum(salary), avg(salary)
from employees;

-- 15) Write a query to display the job title and average salary of employees if the average
-- salary for the job is higher than 10000.

select job_title, avg(salary)
from employees, jobs
where employees.job_id = jobs.job_id
group by job_title
having avg(salary) > 10000;

-- 18) Write a query to display job title, employee name, and the difference between
-- salary of the employee and minimum salary for the job.

select job_title, first_name, last_name, salary - min_salary
from employees, jobs
where employees.job_id = jobs.job_id;

-- 21) Who has the most experience?

with job_experience (employee_id, n_years) as (
    select employee_id, max(coalesce(end_date, current_date)) - min(start_date)
    from job_history
    group by employee_id
)
select employees.employee_id, first_name, last_name
from employees, job_experience
where employees.employee_id = job_experience.employee_id and
      n_years = (select max(n_years) from job_experience);