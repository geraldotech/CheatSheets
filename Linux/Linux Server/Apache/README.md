# Apache

### Options +Indexes

https://askubuntu.com/questions/500933/listing-files-in-apache-server

- sudo nano /etc/apache2/apache2.conf

- certifique-se de mudar: `<Directory /var/www>` para `<Directory /var/www/html>`
  
```shell
<Directory /var/www/html>
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
</Directory>

```

- Abrir porta 80 na Oracle Cloud
Opening up port 80 and 443 for Oracle Cloud servers - DEV Community

