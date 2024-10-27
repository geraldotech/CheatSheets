## LAMP Stack Apache - MySQL - PHP

<hr>

By: @gmapdev  Date: 20, May, 2021 | Last Update: 27/10/2024  |  Ubuntu Server 24.10


### INSTALL APACHE:

`apache2.conf:` arquivo de configuração principal do Apache 2 contém propriedades que são globais ao Apache 2.  
Diretório `conf.d:` contém arquivos de configuração adicionais, que permitem, por exemplo, adicionar diversos sites ao mesmo domínio.

`httpd.conf` -  historicamente, o dava nome ao arquivo de configuração do Apache

`ports.conf` - Contém as diretivas que determinam que em portas TCP o Apache está escutando

`sitesavailable` - contém os arquivos de Virtual Hosts do Apache.

`Virtual Hosts` - Permite que o Apache seja configurado para múltiplos sites, que possuam diferentes configurações.


```shell
sudo apt update
sudo apt install apache2
» check status
sudo service apache2 status
```

```shell
» reload:
$ sudo systemctl reload apache2

» Upstart
$ sudo /etc/init.d/apache2 start
$ sudo systemctl start apache2

»  restart
$ sudo service apache2 restart

»  Stop
$ sudo service apache2 stop

/etc/init.d/apache2 start/stop/status/restart always works!


»  Visualizar IP de usuários acessando o servidor (site)
$ netstat -anp | grep :80


»Apache Change Document Root

 $ vim /etc/apache2/sites-available/000-default.conf
 
```

Configurar o firewall: Uncomplicated Firewall

```shell
» In the Apache Full profile, make sure it allows the traffic on ports 80 and 443. Check this by typing the command on:
sudo ufw allow in "Apache"
 
» Verificar os status
sudo ufw app info “Apache Full”
```

Testar no brower: YOUR_IPADDRESS


Note: To identify the server’s public IP address, run the command:

sudo apt-get install curl
curl http://icanhazip.com


## Install mysql:

```shell
apt install mysql-server
» Se não aparecer rode:  
apt-cache search mysql-server
apt install default-mysql-server

»  Checkout service status: 
systemctl status mysql
```

sobre o mysql_secure_installation na  [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu#step-2-installing-mysql)

- Connect to mysql
`mysql -u root -p` 

## Install PHP 8.3 - 2024

```shell
sudo apt install php libapache2-mod-php php-mysql
»  Permissões de pasta:
chmod -R 777 /var/www/
```

Instalação opcional de extensions:

```shell
read on https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu#installing-php-extensions-optional

» Restart APACHE
sudo systemctl reload apache2
```

Test PHP Processing on Web Server: `nano /var/www/html/info.php`
Inside the file, type in the valid PHP code:

```php
<?php
phpinfo ();
?>
```

Open a browser and type in your IP address/info.php


After checking the relevant information about your PHP server through that page, it’s best to remove the file you created as it contains sensitive information about your PHP environment and your Ubuntu server. Use rm to do so:
`sudo rm /var/www/your_domain/info.php`


Criar um usuário no mysql e testar a conexão com o banco de dados: 
 - https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu#step-6-testing-database-connection-from-php-optional



Refs: https://phoenixnap.com/kb/how-to-install-lamp-in-ubuntu


