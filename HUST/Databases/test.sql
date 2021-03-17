use test;

create table program (
	ID int(8),
    pName varchar(20),
    lecturer_on_charge int(8),
    primary key (ID)
);

create table student (
	ID int(8),
    sName varchar(20) not null,
    email varchar(10),
    gender varchar(6),
    percentage smallint default 0.7,
    program_id int(8),
    constraint student_pk primary key (ID),
    unique(email),
    check(gender = 'Female' or gender = 'Male'),
    constraint student_fk_program foreign key (program_id) references program(ID) on delete set null
);


