# Docker

![image](https://github.com/user-attachments/assets/2e831987-aeea-4df8-8a9a-a58f736acc84)

- [WSL usando o tutorial de instalação: Instalar o Docker no Ubuntu Nativo](https://github.com/codeedu/wsl2-docker-quickstart?tab=readme-ov-file#1---instalar-o-docker-com-docker-engine-docker-nativo)
   - WSLg e rodar aplicações gráficas do Linux no Windows - https://learn.microsoft.com/pt-br/windows/wsl/tutorials/gui-apps
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

- syntax: `docker run <imageName?>` - cria um container from a image

- Docker Hello World message: `docker run hello-world` 


- `docker ps` - show containers running
- `docker ps -a` - list all
- `docker ps -q -a` - list all only ids
 
- `docker start <id>` - start again
- `docker stop <id> or <name>` - stop
 
- `docker pull nginx` - get images in docker hub after this create containers from images.
 
- `docker images` - listar images
- `docker image inspect nginx` - inspectx

- `docker rmi nginx` -  remove images
- `docker run --name mysqlContainer -e MYSQL_ROOT_PASSWORD=root mysql` eg creating a mysql docker from image after https://hub.docker.com/_/mysql
- **if docker run again will create multiple containers, if created just run it by id or custom name**


### Parar o Docker manualmente ao iniciar WSL2
- sudo nano /etc/wsl.conf
- adicionar
```shell
[boot]
command="sudo service docker stop"
```


### Subir docker novamente ao iniciar WSL2
-  sudo systemctl enable docker
- sudo nano /etc/wsl.conf
   - deixar:
   - 
```shell
  [boot]
systemd=true
```



### Políticas de Reinício no Docker

- `docker inspect --format='{{.HostConfig.RestartPolicy.Name}}' nome_do_container`

### Alterando a Política de Reinício para no

- `docker update --restart=no nome_do_container`


Fazer o bind das portas do container para conexão da porta do container e não da máquina
Remover o container e lets create a new one:
- `docker run --name MysqlContainer2 -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql`
- `docker stop $(docker ps -q)` - parar todos os containers em execução
- `docker rm $(docker ps -aq)` - Para remover todos os containers (incluindo os que estão parados):


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


### To run nginx [nginx](https://hub.docker.com/_/nginx): 

- `docker run nginx` - works but running only on docker port 80 curl localhost will not work yet!!
- `docker run -p 8080:80 nginx` -p published - rodar portas baixas como 80 é necessário executar como administrador (sudo)
- `docker run -d -p 80:80 nginx`
- `docker run -it nginx bash` - run nginx go to bash,  now you can change `root@19966f3508c8:/# cat /usr/share/nginx/html/index.html`
   - -i (interative mode): Mantém o STDIN aberto, permitindo que você interaja com o contêiner. Isso é útil para poder digitar comandos diretamente no terminal do contêiner.
   - -t (tty): Aloca um terminal pseudo-TTY. Isso faz com que o Docker emule um terminal para o contêiner, permitindo que ele se comporte como se estivesse em um terminal real, facilitando a interação.
- `docker run -it ubuntu bash` - CTRL + D para exit

## executar comando em container em execução:

- `docker exec <CONTAINER_ID or NAME> ls` - open a in a new tab | friendly_noether is a random name, but works with docker id too  
- `docker exec -it <CONTAINER_ID or NAME> bash` - acessar o bash do container

- `docker container rm <id>` - delete container
- `netstat -tln` - to checkout portas em LISTEN

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

Fazendo as dados persistentes.


Criar uma pasta no computador(Linux) que será compartilhada no container e a mesma no container.

- crie a pasta: html
- rode o comando passando o nome da pasta html e o fullpath dentro do container, desse fazendo o compartilhamento entre as pastas: `docker run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx`
- http://localhost:8080 deve dar Forbidden, sua pasta html no Linux deve estar vazia crie arquivo: touch index.html


[https://docs.docker.com/storage/volumes/](https://docs.docker.com/storage/volumes/#start-a-container-with-a-volume)

- create a container and mount a folder voldata to:
-   `docker run -d --name devtest -p 4000:4000 --mount source=voldata,target=/app ggreact2` where `voldata` is whatever directory that will be mounted in **"Mountpoint": "/var/lib/docker/volumes/voldata/_data"**
- inspect volumesName: `sudo docker inspect voldata`

### reconstrua o container apos modificacoes no DockerFile
- docker-compose down
- docker-compose build --no-cache
- docker-compose up -d


### VSCode connect a containerC:\Apps\ReactNative\nlw\src\app\cart.tsx

- install Dev Container extesntion => https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/380a3ac3-7adf-487f-be9e-4770fbb662fb)

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/b9259b41-a96a-49a1-9f17-46527424d405)

if dont open in `/app` or correct directo to go terminal `type: cd /app`

<hr>


## Apache listar arquivos:

-  não lista arquivos no Docker, verificar os logs do container:  docker logs 287776c06596 `forbidden by Options directive`
- dentro do container: # nano /etc/apache2/apache2.conf e deixar assim:
- ![image](https://github.com/user-attachments/assets/dccec02d-076d-4e0a-9417-34169556caa5)
- service apache2 restart


## acessando container mysql


```sql
-- check mysql is ok
gmapdev@DESKTOP-4GOEVQ2:~/docker/a2/src/sga$ sudo docker exec -it 50b3a213aa90 sh
sh-4.4# mysqladmin ping -uroot -p
Enter password:
mysqld is alive

-- acessar o mysql:
sh-4.4# mysql -uroot -p

mysql> show databases;

```

# Thoubleshoot

## Reativar serviço Docker when linux starts
Se o Docker não estiver iniciando corretamente no boot, os containers não serão iniciados. Execute:

- `sudo systemctl status docker`

Se não estiver ativo, habilite e inicie o Docker:
- `sudo systemctl enable --now docker`

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


