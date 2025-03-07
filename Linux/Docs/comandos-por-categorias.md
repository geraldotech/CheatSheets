<h1 align="center">Linux Ubuntu - Comandos</h1>

- Inicial version: 18/05/2012
- Last update: 02/08/2024
- By: Geraldo Filho

<hr>

### Usuários:

- sudo: permite executar ações como usuário root
- sudo su: Altera para o usuário root
- adduser name: criar usuário
- userdel -r “name”: deletar
- userlist: listar
- more /etc/passwd - Listar usuarios
- passwd: alterar senha
- visudo - edita o arquivo sudoers.tmp de configurações dos usuários
- id <user> – mostra informações do ID só usuário
- w - Mostra-nos quem está no sistema ou que comando cada job está a executar
- who - Mostra-nos quem está logado no sistema
- whoami - Diz-nos quem é o dono da shell

### Rede:

- Mostrar informações IP: `ifconfig`
- Adicionar uma placa virtual: `sudo ifconfig eth0:1 <ip>`
- Alterar Servidores DNS: `/etc/resolv.conf`
- Alterar configurações das interfaces: `/etc/network/interfaces`
- Reinciar interfaces após alterações: `/etc/init.d/networking/restart`
- Verificar status ports +detalhado com:
  - `netstat -tulpn | grep :80`
- Verificar status ports -detalhado com:
  - `netstat -tln | grep 80`
- `whois mydomain.com` - permite-nos saber informações sobre determinados domínios na - Internet, quando um domínio foi registado, quando expira, etc
- Permite-nos fazer o download completo de páginas web, com todos os ficheiros, de forma fácil e não interativa: `wget`
- Logar with Oracle Cloud: `$ ssh -i ssh-key ubuntu@<IP-ADDRESS>`
- Show public up address: `curl http://icanhazip.com`

### Sistema:

- which google-chrome - mostrar localização de um software instalado
- cd - navega entre os diretórios do sistema
- media - Diretório onde estão localizados os CD/DVD/Pen-drivers
- top - Visualiza processos correntes
- ps -aux - Similtar ao TOP e até melhor.
- kill: mata “fecha” um processo
- uptime - Mostra o tempo em que o sistema está em execução.
- update-rc.d -f bind9 remove - Remove o bind da inicialização no boot
- #Substitua bind pelo programa que quiser remover da inicialização.
- update-rc.d bind9 defaults - O bind volta a iniciar no boot
- free: mostra a quantidade de memória RAM disponível
- `locate <arquivo>` – procura por arquivos especificado no sistema.
- lsmod - Lista drivers em execução.
- halt: desliga o sistema imediatamente
- shutdown -h now - desliga o sistema
- shutdown -h +5 - desligará o sistema em 5 minutos!
- reboot - reinicia o sistema imediatamente
- mkdir - cria um diretório
- rm – remove arquivos
- rm -rf -remove um diretório
- rm -rd - remove um diretório
- rm -rf D/* - remove todos os arquivos e pasta de um directory
- touch: - create files
- echo "# oi" >> directory/style.css - create file and write
- cat - read file content

- mv- mover arquivos
- uname - nome do sistemas
  - unamed -a - nome do sistemas com detalhes
- dmesg: Mostra as mensagens de inicialização do Kernel. São mostradas as mensagens da última inicialização do sistema
- `ls -la` ou apenas `ls -l` – mostra as permissões dos arquivos.
- `cp`: copia ficheiros
  - `cp -a one/. /home/gmap/Downloads/two/` using a dot at the end of our source directory to indicate that everything within the directory should be copied
  -  `cp -r A/* B/` - copiar todos files pasta A para B, funciona como o comando acima.
  - `cp -a /folder/ /newfolderpath` - copiar pasta recursive
  
- ls: mostra o conteúdo do diretório
- pwd: exibe o caminho do diretório atual
- ssh usuario@IP : Se logar remotamente com o protocolo ssh
- history: Lista os últimos comandos utilizados
- chmod +x : muda as permissões de um arquivo. (Muito usado para ssh)
- clear: limpa o terminal
- du – mostra o tamanho de cada arquivo dentro do diretório.
- du -ha – mostra o tamanho geral de todos os arquivos de um diretório.
- du -hs - mostra o tamanho geral
- [neofetch](https://github.com/dylanaraps/neofetch/wiki/Installation#debian) - displays information about your operating system, software and hardware
  

### HD e mídias virtuais:

- df: Exibi um resumo de espaços HD e pen-drivers se conectados

### Instalações:

- --purge – remove o pacote assim como o arquivo de configuração

### Como instalar pacotes deb:

use o cd para navegar até o local do arquivo.deb
Instalar:

- `dpkg -i pack.deb`

Remover:

  - `dpkg -r pack`

Repack arquivos:

  - `dpkg-repack Gimp`

Para repack é necessário instalar:

  - `apt-get install dpkg-repack`



### Utils:

- check content install: 
  - `apt install bat` and run `batcat file.html`

- Criar arquivos vazios:
  - `touch`

- Criar arquivos content:
  - `echo “hello” > index.html`
  - `echo Amazon >> file.txt`
  - write one on a.txt inside one directory:
    - `echo one > one/a.txt`


- Proteger arquivo contra modificação:
  - `sudo chattr +i /etc`

- Desproteger arquivo:
  - `sudo chattr -i /etc`

- Acessar últimos comando a partir de um editor de texto:
  - `~$ sudo gedit ~/.bash_history`

- Nota: Após editar o arquivo histórico de comandos é importante também limpar o histórico da memória RAM, caso
  contrário os comandos guardados na memória RAM serão transferidos novamente para o arquivo original localizado no sistema:
  - `$ history -c`

- Alterar permissões de um arquivo ou pasta (pasta com cadeado):
  - `$ sudo chown -R usuario:usuario pasta`

- Como extrair tar.gz
  - `$ sudo tar xvfz filename.tar.gz`

- Como extrair gz
  - `$ sudo gunzip file.gz`

- Como extrair .tar
  - `$ sudo tar xvf filename.tar`

- Como extrair para uma pasta de destino:

  - `$ sudo unzip apps.zip -d /home/geraldo/pasta`

- Command to zip a directory using a specific directory:
  `apt-get install zip`
  `zip -r wordpress.zip /var/www/wordpress`

  


[command-to-zip-a-directory-using-a-specific-directory-as-the-root](http://stackoverflow.com/questions/2473115/command-to-zip-a-directory-using-a-specific-directory-as-the-root)
