select *
from (select sID, sName, gpa, gpa*(sizehs/1000.0) as scaled_gpa
	from student) G
where abs(scaled_gpa - gpa) > 1;

/* College paired with the highest GPA applied to that college */
select distinct college.cname, gpa
from student, apply, college
where student.sid = apply.sid
	and college.cname = apply.cname
	and gpa >= all (select gpa from student, apply
				  where student.sid = apply.sid and college.cname = apply.cname);
				  
/* inner join on conditions, similar to theta join in relational algebra */
/* join is an abbr for inner join */
select distinct sname, major
from student inner join Apply on student.sid = apply.sid;

/* natural join. Caution: distinguish between natural vs 2 types of inner join */
select *
from student natural join apply;

select *
from student join apply using(sID);

/* left outer join. Display student who do not apply to any college as well */
/* left join is an abbr */
select sname, sid, cname, major
from student left outer join apply using(sID);

/* same result as */
select sname, sid, cname, major
from student join apply using(sid)
union
select sname, sid, null, null
from student
where sid not in (select sid from apply);

/* right join is similar to swap */
/* full join is applied to both, similar to union of left and right outer join */
/* outer join is not associative
   left, right outer join are not commutative */

select max(gpa)
from student;

/* wrong query because of duplicate: student can apply to multiple uni with a same major */
select avg(gpa)
from student join apply using(sid)
where major = 'CS';

/* right query */
select avg(gpa)
from student
where sid in (select sid from Apply where major = 'CS');

/* count number of student applying to Cornell */
select count(*)
from student
where sid in (select sid from Apply where cname = 'Cornell');

/* another version */
select count(distinct sid)
from apply
where cname = 'Cornell';

/* group */
select cname, count(*)
from apply
group by cname;

select cname, major, min(gpa), max(gpa)
from student join apply using(sid)
group by cname, major;

select student.sid, count(distinct cname)
from student left join apply using(sid)
group by student.sid;

select cname
from apply
group by cname
having count(*) < 5;