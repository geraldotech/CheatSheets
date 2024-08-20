<h1 align="center">PostGres SQL</h1>

All tested on Windows 10:

How start server? 

go to `services.msc` choose <ins>postgresql-x64-12</ins> click start

CREATE DATABASE:
`create database [databasename];`

DROP DATABASE:
`DROP DATABASE <NAME>;`

LISTAR DATABASES:
`\l`

CONECTAR A UMA DATABASE
`\c <name>`


Criando tables:
Primeiro se conectar ao Database criado, neste exemplo: filmes

cria 1 
tabela nome: COMPANY:
com as linhas:

NAME
AGE
ADDRESS
SALARY


```sql
CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
```
Apagar tables:
`drop table players;`
Lista a tabela: `\dt`

Leitura de relations: `\d` 

Leitura da tabela: `SELECT * FROM COMPANY;`
Mais uma forma de leitura: `\d company`

Para inserir dados:

```sql
INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'Paul', 32, 'California', 20000.00);
```

Apagando a coluna Salary:

```sql
ALTER TABLE COMPANY DROP SALARY;
```

Adicionando nova columns a tabelas:

**company:**  nome da tabela
**varchar:**  tipo de dados
`ALTER TABLE COMPANY ADD COLUMN STATUS varchar;`

Rename columns:
`ALTER TABLE COMPANY RENAME COLUMN ADDRESS TO CITY;`

Apagando linhas da table por ID e NAME CONDITION:

```sql
DELETE FROM COMPANY WHERE ID=1;
DELETE FROM COMPANY WHERE address = 'sds';
DELETE FROM COMPANY WHERE name = 'performance2';
```
Alterando dados das linhas por ID & Name:

```sql
UPDATE COMPANY SET NAME='FELIPE' WHERE ID=2;
UPDATE COMPANY SET NAME='GERALDO' WHERE NAME='FELIPE';
```

Rename Database Name:
```sql
ALTER DATABASE filmes RENAME TO PESSOAS;
```

Script criar tabela nivel;

```sql
CREATE TABLE NIVEL (
	CODIGONIVEL int NOT NULL,
	DESCRICAO varchar(90) NOT NULL,
	CONSTRAINT CHAVEPNIVEL PRIMARY KEY (CODIGONIVEL)
);
```
Script criar tabela curso:

```sql
CREATE TABLE CURSO (
	CODIGOCURSO int NOT NULL,
	NOME varchar(90) NOT NULL UNIQUE,
	DATACRICAO date NULL,
	CODIGONIVEL int NULL,
	CONSTRAINT CHAVEPCURSO PRIMARY KEY (CODIGOCURSO),
	FOREIGN KEY (CODIGONIVEL) REFERENCES NIVEL (CODIGONIVEL)
);
```
Script 2 criar tabela:

```sql
CREATE TABLE CURSO ( 
CODIGOCURSO int PRIMARY KEY, 
NOME char(90) NOT NULL UNIQUE, 
DATACRICAO date NULL, 
CODIGONIVEL int NULL, 
FOREIGN KEY (CODIGONIVEL) REFERENCES NIVEL (CODIGONIVEL) );
```


Table Curso 2:

```sql
CREATE TABLE CURSO2 ( 
CODIGOCURSO int PRIMARY KEY, 
NOME char(90) NOT NULL UNIQUE, 
DATACRICAO date NULL, 
CODIGONIVEL int NULL REFERENCES NIVEL (CODIGONIVEL));
```

Alterar a tabela CURSO, adicionando coluna DTRECONHALTER 

`TABLE CURSO ADD DTRECONH DATE;`

E se desejarmos remover uma coluna da tabela? Podemos usar a sintaxe a seguir:
`ALTER TABLE <NOMETABELA> DROP <COLUNA>;`

Vamos agora remover a coluna DTRECONH da tabela CURSO. A seguir, código SQL que permite a alteração:
-- Comando para alterar a tabela CURSO, removendo a coluna DTRECONHALTER 
TABLE CURSO DROP DTRECONH;

Remoção de tabela:
`DROP TABLE <NOMETABELA>;`


Se conectar:
`\c <database>`

Clear screen:
`\! cls`

Listar tables:
`\dt`

Leitura das tabelas:

SELECT * FROM CURSO;


Criar tabela e insert valores com auto ID: (https://www.postgresql.org/docs/current/sql-droptable.html#:~:text=DROP%20TABLE%20removes%20tables%20from,exist%20for%20the%20target%20table.)[REF]

```sql
CREATE TABLE PLAYERS(
   ID  SERIAL PRIMARY KEY,
   NAME           TEXT      NOT NULL,
   ADDRESS        CHAR(50)
);



INSERT INTO PLAYERS (NAME,ADDRESS)
VALUES ( 'Paul', 'California');
```

How dump backup: (https://inthetechpit.com/2019/01/27/import-and-dump-data-for-postgresql-on-windows-10/)[ref how import]

`C:\Program Files\PostgreSQL\12\bin>pg_dump.exe -U postgres -d pessoas -f C:\Users\geraldo\Downloads\pessoas.sql `

How import:
::before create database:

`C:\Program Files\PostgreSQL\12\bin>psql.exe -U postgres -d mugnn -f C:\Users\geraldo\Downloads\mugnn.sql`

Refs: (PostgreSQL - INSERT Query (tutorialspoint.com))[https://www.tutorialspoint.com/postgresql/postgresql_insert_query.htm]

