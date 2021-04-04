--Creación de la tabla  playa en la BD MYSQL--

CREATE DATABASE PLAYA;

create table t_vehiculo(
  veh_id int not null auto_increment;
  veh_placa varchar(6),
  veh_marca varchar(30),
  veh_anio year,
  veh_modelo varchar(40),
  veh_color varchar(20),
  primary key (veh_id)
);

create table t_playa(
  playa_id init not null auto_increment primary key,
  playa_dir varchar(100),
  playa_cap int
);

create table t_registro(
  reg_id int not null auto_increment primary key,
  fech_fechin datetime,
  reg_fechfin datetime,
  playa_iod int,
  veh_id int,
  foreing key (playa_id) references t_playa(playa_id),
   foreing key(veh_id) references
)

--iNSERTAR DATOS A LA TABLA T_VEHICULO
insert into  t_vehiculo( veh_placa ,veh_marca, veh_anio, veh_modelo, veh_color) values 
('A3A133','SUSUKI',2010,'JETTA','NEGRO'),
('A3P183','MAZDA',2009,'MZ56','AZUL'),
('A5A122','HYUNDAY',2020,'HY200','NEGRO'),

--iNSERTAR DATOS A LA TABLA T_PLAYA

insert into t_playa(playa_dir, playa_cap) values
('Av. Arequipa 1587', 50 ),
(Av. 'Javier Prado',200 )


