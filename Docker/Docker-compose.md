
# Docker compose 

<details>
<summary> é uma ferramenta que facilita...</summary>

a definição e execução de aplicativos Docker com vários contêineres. Em vez de criar e gerenciar manualmente vários contêineres individuais usando comandos Docker separados, o docker-compose permite definir toda a configuração do aplicativo em um arquivo YAML chamado docker-compose.yml.

Dentro do arquivo docker-compose.yml, você pode especificar os serviços que compõem seu aplicativo, como contêineres Docker, redes, volumes, variáveis de ambiente e outros detalhes de configuração. Depois de definir esse arquivo, você pode usar o comando docker-compose para iniciar, parar e gerenciar todo o aplicativo com apenas um comando.

Por exemplo, se você estiver desenvolvendo um aplicativo da web que requer um contêiner para o servidor da web (como o Apache ou o Nginx) e outro para o banco de dados (como o MySQL ou o PostgreSQL), você pode definir esses serviços no arquivo docker-compose.yml. Em seguida, você pode usar o docker-compose para iniciar e parar todos esses contêineres juntos, simplificando bastante o processo de desenvolvimento e implantação de aplicativos baseados em Docker.

- Uma dica rápida: Não precisa copiar o ID todo do container na hora de manipular ele, já cheguei fazer com apenas os dois primeiros carácteres do ID. Nesse caso eu não tinha IDs com iniciais parecidas.
 
</details>

## instalação:

- ` sudo apt install docker-compose`

# docker-compose.yaml

ferramenta que ajuda a orquestar os containers que estão dentro de um manifesto

```yaml
version: '3'

services:
  mysql:
    image: mysql:8
    container_name: mysql
    restart: always
    environment: 
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: gmapdev
    ports: 
      - 3306:3306
```

- `docker-compose up` - start
- `docker-compose up -d` - run in background
- `docker-compose restart`
- `docker-compose down` kill container but volumes is not deleted
- `docker-compose ps` list all docker compose running in background

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/fabe5e20-4041-45c9-b131-e2fa0700d382)

## Xampp
- `docker pull tomsik68/xampp` - link https://hub.docker.com/r/tomsik68/xampp/
- acessar a pasta mounted dentro do Docker:
  - `docker exec -it myXampp /bin/bash`
  - `cd /opt/lampp/htdocs`
 
- Montar o docker with volume
  - `docker run --name myXampp -p 41061:22 -p 41062:80 -d -v ~/my_web_pages:/mnt/storage/lampp/htdocs tomsik68/xampp`

## Arquivos do Windows para o WSL2:
- `cp /mnt/c/Users/gmap/Downloads/idusuarios.csv /mnt/storage/` ou crie uma pasta em `/mnt/storage` => permissão `sudo chmod 777 /mnt/storage` e mover os arquivos usando o Windows Explorer

## Arquivos do WSL2 para o container:
- <b>onde `myXampp` é o nome do container running</b>
- `root@gmapnitro:/mnt/storage# docker cp /mnt/storage/id.txt myXampp:/mnt/storage`
- `root@gmapnitro:/mnt/storage# docker cp /mnt/storage/id.txt myXampp:/opt/lampp/htdocs`
- `root@gmapnitro:/mnt/storage# docker cp SGA-Padrao-V2.7z 2af3795bff86:/mnt/storage`

## Fix Host '172.18.0.1' is not allowed https://github.com/docker-library/mysql/issues/275

- `mysql -u your_user -p`
- `GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;`

 ## Unknown collation: ''
converter utf do banco de dados
- https://king.host/wiki/artigo/1273-unknown-collation/

permissao de pastas e arquivos
adicoinar exit() alguns headers()

## Docker LAMPP: Apache, PHP and MySQL

- `apt  install docker-compose`
- create a folder:  mkdir `sga`
   - create a `sga/src`
- create a file `docker-compose.yaml`
- create a `Dockerfile` (contem as confs padrão)
- ou baixe os arquivos prontos neste repositório.

Use os comandos:

- `docker-compose build` - fazer o build
- `docker-compose up -d` - up no container
- `docker-compose stop` - parar o container

- crie um index no ./src/index.php e acesse `http://127.0.0.1:8080`
- Permissao: `chown -R www-data:www-data /var/www/html`
    


## zip no docker
- `apt install -y p7zip-full`
   - `7z x myfile.7z`
- `cp -r SGA-Padrao-V2 /var/www/html/SGA-Padrao-V2`