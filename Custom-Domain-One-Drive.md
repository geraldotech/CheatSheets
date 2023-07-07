# [drv.tw](https://drv.tw)

Host Custom pages using Google Drive and One DRive

- Create Folder with your domain name e.g: `gnn.geraldox.com` and share as public, a pasta deve ser criada no root do seu OneDrive e não em subdirectories e.g:
  - MyWebsites❌
    - WebsiteOne❌
    - WebsiteTwo❌

[Read more in Custom Domain](https://docs-of.drv.tw/how-to/using-custom-domain-name/)

- upload files html, js, css
- Automaticallly o app will scan
- Domain Name Settings create e CNAME:

```json
Tipo: CNAME
Nome: devone
Valor: superdevs-host-masterone.on.drv.tw. "Its your site name"
TTL: 1/2 Hora
```

# 404 custom page

- create a 404.html intro root folder

Now you can asscess from `http://gnn.geraldox.com`

That’s it. Give it a try.
