Configurações opcionais, talvez referentes ao Wordpress!
Vai ter docs apenas para wordpress

www-data 
Now we need to set www-data (Apache user) as the owner of document root (otherwise known as web root). By default it’s owned by the root user.

$ la -la /var/www/html
