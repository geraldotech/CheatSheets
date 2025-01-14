# mysql

- [https://www.tutorialrepublic.com/php-tutorial/php-mysql-update-query.php
](https://www.tutorialrepublic.com/php-tutorial/php-mysql-update-query.php
- [https://programmopedia.com/how-to-edit-data-in-php-using-form-mysqli/](https://programmopedia.com/how-to-edit-data-in-php-using-form-mysqli/)
- [https://websitebeaver.com/php-pdo-vs-mysqli](https://websitebeaver.com/php-pdo-vs-mysqli)

navigate to the bin folder of your MySQL Server installation directory

- connect to the MySQL console:

  - `mysql -u -p` | XAMPP ? open Terminal in `C:\xampp\mysql\bin>mysql -u root -p`

- List all users:

  - `SELECT User FROM mysql.user;`

- DATABASES

  - create a new database
    - `CREATE DATABASE example_database;`
  - Show databases
    - `SHOW DATABASES;`
  - Delete
    - `DROP DATABASE <name>;`
  - Select
    - `USE <name>`
  - List tables from selected DATABASE
    - `SHOW TABLES;` or `SHOW FULL TABLES;`
  - Delete record
    - `DELETE FROM <tablename> WHERE item_id='8';`
  - Where contains string 
    - `SELECT * FROM cadastros WHERE NOME like '%GERALDO%';` 
  

- Now give this user permission over the example_database database:

  - `GRANT ALL ON example_database.\* TO 'example_user'@'%';`

# Examples tables:

### CREATE A TABELA A SEGUIR:

```sql
ID: INT AUTO_INCREMENT
NOME:
CPF:
EMAIL: UNIQUE
```

### CREATE TABLE:

- `CREATE TABLE Users.cadastros (person_id INT AUTO_INCREMENT, NOME VARCHAR(255), EMAIL VARCHAR(190) UNIQUE, CPF VARCHAR(12), PRIMARY KEY(person_id));`  

### INSERT

- `INSERT INTO Users.cadastros (NOME, EMAIL, CPF) VALUES ("GERALDO COSTA FILHO", "geraldo.filho@geraldo.com", "1234567890-1");`

- ALTER - Adicionando nova columa "LIMITE" a tabela existente:
  - `ALTER TABLE cadastros ADD LIMITE VARCHAR(100);`

- Com `SELECT * FROM cadatros;` vai notar que os usuarios anteriores nao tem limite, agora vamos adicionar limite por condição, mostrar columa especifica `SELECT NOME FROM cadastros;`
  - `UPDATE cadastros set LIMITE = '1000' WHERE person_id = '3'`

- UPDATE set email do usuário:
  - `UPDATE cadastros set EMAIL = 'felipe@live.com' WHERE person_id = '3';`

- UPDATE set all password
  - `UPDATE cadastros set PASSWORD = '123';`
 
- UPDATE MULTIPLE SETS
  - `UPDATE cadastros set LIMITE = '2000', EMAIL = 'geraldo@geraldo.com' WHERE person_id = '1';`

 - UPDATE LIMITE +2
    - `UPDATE cadastros set LIMITE = LIMITE +2 WHERE person_id = '1';`

- Adicionando CLIENTE_DESTE:
  - `ALTER TABLE cadastros ADD CLIENTE_DESTE TIMESTAMP NOT NULL;`     

- WHERE LIMITE IS 0?
  - `SELECT NOME FROM cadastros WHERE LIMITE = '0.00';`

- WHERE LIMITE IS > 0?
  - `SELECT * FROM cadastros WHERE LIMITE > '0.00';`
  - 
- SELECT NOME,EMAIL ONLY 
  -  `SELECT NOME,EMAIL FROM cadastros WHERE person_id = '4';`

- Order Alphabetically
  - `select * from cadastros order by nome;`

Agora nosso INSERT padrão: 
  - `INSERT INTO Users.cadastros (NOME, EMAIL, CPF, LIMITE) VALUES ("ISABELLA COSTA", "isabella.filho@geraldo.com", "1234567890-1", "0.00")`

  - OBS na column CLIENTE_DESTES na verdade o `TIMESTAMP` é referente a última atualizacao daquela coluna do usuáirio:
      - Alterando o tipo da tabela `ALTER TABLE cadastros MODIFY CLIENTE_DESDE date NOT NULL;`
      - INSERT ATUALIZADO: `INSERT INTO Users.cadastros (NOME, EMAIL, CPF, LIMITE, CLIENTE_DESDE, PASSWORD) VALUES ("LETICIA", "leticia@test.com", "123456786-12", "0.00", NOW(), '123');` ou sem especificar a database pois a mesma já está selecionada ` INSERT INTO cadastros (NOME, EMAIL, CPF, LIMITE, CLIENTE_DESDE, PASSWORD) VALUES ("LOL FARIAS", "2duda@test.com", "123456786-12", "0.00", NOW(), '123');`


- Backup and Restore [https://docs.bitnami.com/aws/infrastructure/mariadb/administration/backup-restore-mysql-mariadb/](https://docs.bitnami.com/aws/infrastructure/mariadb/administration/backup-restore-mysql-mariadb)
- data_base - nome do scheme
- -dump: `C:\Program Files\MySQL\MySQL Server 8.0\bin> -h localhost -u root -proot --port=3306  --default-character-set=utf8 --comments sga_dev2 > "C:\\Users\\gmapnitro\\Documents\\dumps\\SGA\\testes.sql"` 

- [PHP FUNCTION onclick](https://stackoverflow.com/questions/19323010/execute-php-function-with-onclick)

- Adicionar table and check data [https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-22-04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-22-04)
