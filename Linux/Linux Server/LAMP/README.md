## LAMP Stack Apache - PHP Part 1/2  
<======================================================================>

By: @gmapdev  Date: 20, May, 2021 | Last Update: 27/10/2024  |  Ubuntu Server 24.10


APACHE

apache2.conf: arquivo de configuração principal do Apache 2 contém propriedades que são globais ao Apache 2.  
Diretório conf.d: contém arquivos de configuração adicionais, que permitem, por exemplo, adicionar diversos sites ao mesmo domínio.

httpd.conf -  historicamente, o dava nome ao arquivo de configuração do Apache
ports.conf - Contém as diretivas que determinam que em portas TCP o Apache está escutando
sitesavailable - contém os arquivos de Virtual Hosts do Apache.
Virtual Hosts - Permite que o Apache seja configurado para múltiplos sites, que possuam diferentes configurações.



INSTALL APACHE:

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

Testar no brower: http://66.228.52.49/


Note: To identify the server’s public IP address, run the command:

sudo apt-get install curl
curl http://icanhazip.com
