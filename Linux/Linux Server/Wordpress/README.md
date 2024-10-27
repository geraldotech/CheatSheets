# Wordpress


Create DATABASE:

`CREATE DATABASE wordpress;`

Create a new user:

`CREATE USER 'worduser'@'%' IDENTIFIED BY 'rootpass@123gDd';`

Now give this user permission over the wordpress database:

`GRANT ALL ON wordpress.* TO 'worduser'@'%';`


Enabling the Rewrite Module
Next, we can enable mod_rewrite so that we can utilize the WordPress permalink feature:
`a2enmod rewrite`

Enabling the Changes
Before we implement the changes we’ve made, check to make sure we haven’t made any syntax errors:

`apache2ctl configtest`


Restart Apache to implement the changes:

`systemctl restart apache2`


Downloading WordPress

```shell
cd /tmp
curl -O https://wordpress.org/latest.tar.gz
tar xzvf latest.tar.gz

```

We will be moving these files into our document root momentarily. Before we do, we can add a dummy .htaccess file so that this will be available for WordPress to use later.

Create the file by typing:
`touch /tmp/wordpress/.htaccess`

We’ll also copy over the sample configuration file to the filename that WordPress actually reads:
`cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php`

We can also create the upgrade directory, so that WordPress won’t run into permissions issues when trying to do this on its own following an update to its software:

`mkdir /tmp/wordpress/wp-content/upgrade`

Now, we can copy the entire contents of the directory into our document root. We are using a dot at the end of our source directory to indicate that everything within the directory should be copied, including hidden files (like the .htaccess file we created):

```shell
sudo cp -a /tmp/wordpress/. /var/www/wordpress
sudo cp -R /tmp/wordpress/.  ????
```

Configuring the WordPress Directory, permissão de files and diretórios:

```shell
chown -R www-data:www-data /var/www/wordpress
find /var/www/wordpress/ -type d -exec chmod 750 {} \;
find /var/www/wordpress/ -type f -exec chmod 640 {} \;
```


Configuração do WordPress

Gerar as chaves e copiar para o bloco de notas

curl -s https://api.wordpress.org/secret-key/1.1/salt/

AUTH_KEY e etc...


Now, open the WordPress configuration file:

 `nano /var/www/wordpress/wp-config.php`

substitua as keys pelas que foram geradas:

Edite também:

DB_NAME
DB_USER
DB_PASSWORD


Ref: How To Install WordPress with LAMP on Ubuntu 18.04 | DigitalOcean

EXTRA: INSTALL PHPMYADMIN

```shell
cd /var/www

wget https://files.phpmyadmin.net/phpMyAdmin/5.1.0/phpMyAdmin-5.1.0-all-languages.zip

Apt-get install unzip
 unzip phpMyAdmin-5.1.0-all-languages.zip

Ls -lh /opt

root@localhost:/var/www# mv -v /var/www/phpMyAdmin-5.1.0-all-languages /opt/phpMyAdmin
renamed '/var/www/phpMyAdmin-5.1.0-all-languages' -> '/opt/phpMyAdmin'

chown -Rfv www-data:www-data /opt/phpMyAdmin

nano /etc/apache2/sites-available/phpmyadmin.conf
```


```shell
<VirtualHost *:9000>
ServerAdmin webmaster@localhost
DocumentRoot /opt/phpMyAdmin
 
<Directory /opt/phpMyAdmin>
Options Indexes FollowSymLinks
AllowOverride none
Require all granted
</Directory>
ErrorLog ${APACHE_LOG_DIR}/error_phpmyadmin.log
CustomLog ${APACHE_LOG_DIR}/access_phpmyadmin.log combined
</VirtualHost>
```

<salvar>


/etc/apache2/ports.conf

Adicionar a porta 9000

![image](https://github.com/user-attachments/assets/a699d352-e607-49d5-aa19-4e1fedfbab7b)


Ativar o virtualhost  do phpmyadmin and restart Apache2

![image](https://github.com/user-attachments/assets/23e0d264-ef58-4653-b8e9-c5bb7b0601ba)






