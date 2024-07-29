# Docker

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/8f377a3c-0518-4c91-8e4e-0cd619df8cbd)


- WSL usando o tutorial de instalação: https://github.com/codeedu/wsl2-docker-quickstart.  
- [Instalar o Docker no Ubuntu](https://github.com/codeedu/wsl2-docker-quickstart?tab=readme-ov-file#1---instalar-o-docker-com-docker-engine-docker-nativo)
- Mínimo de Docker comandos... https://www.youtube.com/watch?v=ntbpIfS44Gw
- useful container e images comando, remote, delete... [how-to-remove-docker-images-con](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
 
<details>
<summary>é similar ao virtualbox?</summary>


Sim, Docker e VirtualBox são ferramentas que têm alguns propósitos semelhantes, mas funcionam de maneiras um pouco diferentes.

O VirtualBox é uma tecnologia de virtualização que permite criar máquinas virtuais completas em um sistema host. Isso significa que você pode executar sistemas operacionais inteiros dentro dessas máquinas virtuais, como se fossem computadores separados dentro do seu computador real. Cada máquina virtual no VirtualBox possui seu próprio sistema operacional e recursos isolados, como memória e espaço em disco.

Por outro lado, o Docker utiliza uma tecnologia chamada de contêineres. Os contêineres são como caixas que contêm apenas o software necessário para executar um aplicativo específico. Eles compartilham o sistema operacional do host, mas são isolados uns dos outros e do sistema operacional host. Docker permite empacotar um aplicativo e todas as suas dependências em um contêiner, tornando-o portátil e consistente em diferentes ambientes de execução.

Então, enquanto o VirtualBox cria máquinas virtuais completas, o Docker cria contêineres que contêm apenas as partes necessárias do software, o que os torna mais leves e mais rápidos de serem iniciados e executados. Em resumo, enquanto ambos permitem isolar e executar aplicativos, o Docker é mais leve e voltado para a execução de aplicativos isolados, enquanto o VirtualBox é mais adequado para criar ambientes completos de sistemas operacionais virtuais.

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/cea0dc67-f61a-4f19-b602-cacd672f090d)
 
</details>


### Quick start Docker:

- ## Utils
 
- `sudo docker pull nginx` - get images in docker hub after this create containers from images.
- `sudo docker images` - listar images
- `sudo docker image inspect nginx` - inspectx
- `sudo docker rmi nginx` -  remove images
- `docker run --name mysqlContainer -e MYSQL_ROOT_PASSWORD=root mysql` eg creating a mysql docker from image after https://hub.docker.com/_/mysql
- **if docker run again will create multiple containers, if created just run it by id or custom name**
- `docker ps` - show containers running
- `docker ps -a` - list all
- `docker ps -q -a` - list all only ids
- `docker start <id>` - start again
- `docker stop <id> or <name>` - stop

Fazer o bind das portas do container para conexão da porta do container e não da máquina
Remover o container e lets create a new one:

- `docker run --name MysqlContainer2 -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql`

Now teste mysql connection:


![image](https://github.com/geraldotech/CheatSheets/assets/92253544/84869adf-9d23-41be-a3b2-d416d005fb13)


## Flags

- `-e` - variavelAmbiente
- `--name` - nomeContainer
- `-d` - Runs the container in detached mode (in the background).
- `-q` - flag is short for --quiet. When used, it instructs Docker to only print the container IDs, without any additional information
- `-p` - portaMaquina:portaContainer published expose, a port from the Docker container to the host machine.  to run in **http://localhost:8080** from Computer, rodar portas baixas precisa ser admin.
`docker ps` - to see this redirect

## Filter

- remove by names: - `docker rm $(docker ps -a -q --filter "name=geraldoreact/node")`

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/f7966b6f-3e62-4c6f-9331-da3f30de2edc)



### To run [nginx](https://hub.docker.com/_/nginx): 

- `docker run nginx` - works but running only on docker port 80
- `docker run -p 8080:80 nginx`
  - `docker run -d -p 80:80 nginx`
- `netstat -tln` - to checkout portas em LISTEN
- `docker exec friendly_noether ls` - executar comando em container em execução, open a in a new tab | friendly_noether is a random name, but works with docker id too  
- `docker run -it nginx bash` - run nginx go to bash, -i interative mode, now you can change `root@19966f3508c8:/# cat /usr/share/nginx/html/index.html`
- `docker exec -it <CONTAINER_ID> bash` - when container is running
- `docker container rm <id>` - delete container

Container sempre vem de uma imagem, então todo processo será foi perdido, então vamos especificar um volume para este container

- Open VSCode on terminal run `docker run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx` -v nginx - -v de volume
- create a html folder and index.html
- test it, you are sharing a linux wsl folder with Docker and access it from VSCODE [Windows]


# Creating a custom image with your project

1 - create a Dockerfile  
2 - `docker build -t geraldocosta/nginx-test:latest .`  
3 - now run your own image: `docker run -p 8080:80 geraldocosta/nginx-test:latest`  

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/9a64a500-3d5d-4a87-999b-d31a02e5b58c)

## **Create custom image** React
[REF](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker#step-1-installing-your-application-dependencies) and [REF vite conf](https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa)

  - create your app in wsl directory
  - create your app and create Dockerfile checkout DigitalOcean tutorial
  - Build:  `docker build -t geraldoreact/node .`


<details>
 
<summary>Dockerfile 1 same WORKDIR</summary>

```
FROM node:18-alpine

# como n tenho node_modules will comment it
#RUN mkdir -p /home/gmapdev/gpx/react-docker/node_modules && chown -R node:node /home/gmapdev/app

RUN mkdir -p /home/gmapdev/gpx/react-docker/node_modules  && chown -R node:node /home/gmapdev/gpx/react-docker

## create this dir and set permission
WORKDIR /home/gmapdev/gpx/react-docker

# copy all packge and .json
COPY package*.json ./


USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
```
 
</details>



<details>

<summary>Dockerfile WORKDIR /app </summary>

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/42e04023-9e04-41eb-932a-743f29de5382)

```
FROM node:18-alpine

# Set working directory to /app
WORKDIR /app

# Create node_modules directory and set permissions
RUN mkdir -p node_modules && chown -R node:node /app

# Switch to non-root user
USER node

# Copy all files from host machine to /app directory in the Docker image
COPY . .

# Install dependencies
RUN npm install

# Copy project files
COPY --chown=node:node . .

# Expose port
EXPOSE 4000

# Run Vite development server
CMD ["npm", "run", "dev"]

```

 
</details>

 
- **Create a container** from your custom image: 
  - RUN is like create a container from a image: `docker run --name MyReact -p 4000:4000 ggreact`
  - create a container from a image -d in background `docker run --name 'reactapp' -d -p 4000:4000 ggreact`
  - start in container `docker start MyReact` or `docker start <containerID>`
  -  ls a container `docker exec reactapp ls`
  -  bash a container `docker exec -it reactapp sh`
  -  volume container using -v `docker run  -d --name 'aula03' -p 4000:4000 -v myvol3:/app ggreact2`
  - since alpine by default not have a bin/bash teste navigate with ls, cat in  `docker exec -it devtest2 sh`
 
How open current container in vscode ?
Create interative and bash version?
  
**Tem que passar -d no run, n pode adicionar no docker start**

## **Volume**

Fazendo as dados persistentes

[https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/#start-a-container-with-a-volume)

- create a container and mount a folder voldata to  `docker run -d --name devtest -p 4000:4000 --mount source=voldata,target=/app ggreact2` where `voldata` is whatever directory that will be mounted in **"Mountpoint": "/var/lib/docker/volumes/voldata/_data"**
- inspect volumesName: `sudo docker inspect voldata`


### VSCode connect a container

- install Dev Container extesntion => https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/380a3ac3-7adf-487f-be9e-4770fbb662fb)

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/b9259b41-a96a-49a1-9f17-46527424d405)

if dont open in `/app` or correct directo to go terminal `type: cd /app`



<hr>

# Docker compose 

<details>
<summary> é uma ferramenta que facilita...</summary>

a definição e execução de aplicativos Docker com vários contêineres. Em vez de criar e gerenciar manualmente vários contêineres individuais usando comandos Docker separados, o docker-compose permite definir toda a configuração do aplicativo em um arquivo YAML chamado docker-compose.yml.

Dentro do arquivo docker-compose.yml, você pode especificar os serviços que compõem seu aplicativo, como contêineres Docker, redes, volumes, variáveis de ambiente e outros detalhes de configuração. Depois de definir esse arquivo, você pode usar o comando docker-compose para iniciar, parar e gerenciar todo o aplicativo com apenas um comando.

Por exemplo, se você estiver desenvolvendo um aplicativo da web que requer um contêiner para o servidor da web (como o Apache ou o Nginx) e outro para o banco de dados (como o MySQL ou o PostgreSQL), você pode definir esses serviços no arquivo docker-compose.yml. Em seguida, você pode usar o docker-compose para iniciar e parar todos esses contêineres juntos, simplificando bastante o processo de desenvolvimento e implantação de aplicativos baseados em Docker.

- Uma dica rápida: Não precisa copiar o ID todo do container na hora de manipular ele, já cheguei fazer com apenas os dois primeiros carácteres do ID. Nesse caso eu não tinha IDs com iniciais parecidas.
 
</details>


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
- `docker compose down` kill container but volumes is not deleted
- `docker compose ps` list all docker compose running in background

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

- create a folder:  mkdir `sga2`
   - create a `sga2/src`
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



## Extensions:
 - https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2


## ohmyzsh - Terminal Customizado 
install https://ohmyz.sh/#install

```shell
sudo apt update
sudo apt install git zsh -y
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
Themes powerlevel10k https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#manual


