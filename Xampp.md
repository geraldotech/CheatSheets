## Enable virtual hosts

C:\xampp\apache\conf\extra\httpd-vhosts.conf add:

```js
## Added to serve as primary recipient of web requests:
<VirtualHost *:80>
ServerName localhost

    DocumentRoot "C:/xampp/htdocs"    
</VirtualHost>


<VirtualHost *:80>
    ServerName php.localhost
    DocumentRoot "C:/xampp/htdocs/PHP"    
    <Directory "C:/xampp/htdocs/PHP">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## subdomain

edit `C:\Windows\System32\drivers\etc\drivers`

```txt
143.198.232.51 		myvps.localhost.com
127.0.0.1 		    php.localhost
```

change home page edit `C:\xampp\htdocs\index.php to index2.php`


## PHP Server 
setup built-in server embutido

- ir na variaveis de ambiente do Windows> Usuarios > path > edit > adicionar o caminho do php
- no diretório do projeto abrir o cmd: `php -S localhost:8888`


![image](https://github.com/geraldotech/CheatSheets/assets/92253544/12482260-934b-40ba-962c-a00c29c0bac0)


