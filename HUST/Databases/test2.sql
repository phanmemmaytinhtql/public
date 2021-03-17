select * from program;

alter table program drop column lecturer_on_charge;

alter table program add column
lecturer_on_charge int(8) default 1000;

alter table program
drop constraint student_fk_program ;

alter table program
add constraint student_fk_program foreign key (program_id) references program(ID);

insert into program(ID, pName) values (12345, 'P1');

update program
set pName = 'P2'
where ID = 12345;

delete from program
where ID = 12345;

drop table student;
drop table program;