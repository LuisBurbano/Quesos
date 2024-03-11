USE quesos;

/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/03/2024 0:39:52                           */
/*==============================================================*/

drop table if exists DETALLEORDEN;
drop table if exists ORDENES;
drop table if exists PRODUCTO;

/*==============================================================*/
/* Table: ORDENES                                               */
/*==============================================================*/
create table ORDENES
(
   IDORDEN              int not null AUTO_INCREMENT,
   NOMBRECLIENTE        varchar(255) not null,
   APELLIDOCLIENTE      varchar(255) not null,
   CEDULACLIENTE        varchar(255) not null,
   DIRECCIONCLIENTE     varchar(255) not null,
   CELULARCLIENTE       varchar(255) not null,
   FECHAORDEN           date not null,
   primary key (IDORDEN)
);

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO
(
   IDPRODUCTO           int not null AUTO_INCREMENT,
   NOMBREPRODUCTO       varchar(255) not null,
   IMAGENPRODUCTO       varchar(255) not null,
   PRECIOPRODUCTO       float not null,
   primary key (IDPRODUCTO)
);

/*==============================================================*/
/* Table: DETALLEORDEN                                          */
/*==============================================================*/
create table DETALLEORDEN
(
   IDDETALLE            int not null AUTO_INCREMENT,
   IDORDEN              int not null,
   IDPRODUCTO           int not null,
   CANTIDADPRODUCTO     int not null,
   TOTALDETALLE         float not null,
   primary key (IDDETALLE),
   foreign key (IDORDEN) references ORDENES(IDORDEN),
   foreign key (IDPRODUCTO) references PRODUCTO(IDPRODUCTO)
) ENGINE=InnoDB; -- Asegura que el motor de almacenamiento sea InnoDB

/*==============================================================*/
/* Table: USUARIO                                              */
/*==============================================================*/
create table USUARIO
(
   IDUSUARIO           int not null AUTO_INCREMENT,
   EMAILUSUARIO       varchar(255) not null,
   PASSUSUARIO       varchar(255) not null,
   primary key (IDUSUARIO)
);

