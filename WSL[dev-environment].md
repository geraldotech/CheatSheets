# Criando um ambiente Dev Produvito com WSL no Windows

A Microsoft criou o wsl pensando nos desenvolvedores que não querem abrir mão do Windows, contudo requer o uso do ambiente Linux, tem  Kernel completo do Linux embarcado, no Link abaixo você pode conferir um guide com slides de como funciona o wsl e também o link da Microsoft
se você ainda não usa esse recurso começe agora.

- https://github.com/argentinaluiz/ambiente-dev-produtivo?tab=readme-ov-file
- https://learn.microsoft.com/en-us/windows/wsl/setup/environment

WSL funciona de forma inteligente com para virtualização só consome o que é necessário, antigamente lá em 2012 eu tinha meu ambiente de Dev, era um virtualbox rodando um Ubuntu Server, hoje temos WSL e ainda pode ficar melhor com Docker.

- [ ] linux to windows - works but bad perfomance: `php index.php` operação de rede
- [x] run linux in linux - faster

### Backups:
> open power shell or dos
> 
- `wsl --export Ubuntuhostname C:/users/gmap/Documents/back.tar`
- `wsl --import Ubuntuhostname C:/users/gmap/Documents/back.tar`



## Access Windows directory:
- `gmapdev@gmapnitro:~$ cd /mnt/`
- `gmapdev@gmapnitro:/mnt$ cd c/`

## explorer.exe 

```shell
gmapdev@gmapnitro:~$ pwd
/home/gmapdev
gmapdev@gmapnitro:~$ explorer.exe
```

## VSCode

>> before WSL extesion

wsl open folder in VsCODE [Win]: `~ ❯ code project`
![image](https://github.com/geraldotech/CheatSheets/assets/92253544/b279bec4-d379-43e2-9b51-f0f110fa8aac)


wsl você pode naturalmente fazer um `~ ❯ explorer.exe project01` que vai abrir a pasta que está no Windows

### VSCode WSL Mode

- Download and why you need it: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl

>> before extesion - modo rede
![image](https://github.com/geraldotech/CheatSheets/assets/92253544/a15a2ccc-c429-409d-8ac2-1dd1997878b1)


>> after extension - better
![image](https://github.com/geraldotech/CheatSheets/assets/92253544/96ff3e07-a186-4399-8bc2-4ee5934f8fc0)

launch a new instance of VS Code connected to WSL by opening a WSL terminal, navigating to the folder of your choice, and typing `code .`
Abrir open with WSL no VSCODE digite: `CTRL + shift + P` => `>reopen folder in WSL` or click on * Open a Remote Window * you can chooce close, reopen e etc...



## shutdown
- `wsl --shutdown`

## wslconfig

set a config create a  `gmapdev@gmapnitro:~$ vim /mnt/c/Users/gmap/.wslconfig` file: [REF](https://youtu.be/vkJr0mK_u6s?t=5263)


- Como instalar o wsl no Windows 10/11 https://github.com/geraldotech/CheatSheets/blob/main/Linux/Docs/WSL-Windows_Subsystem_for_Linux.md
- Após dominir o uso de wsl aprenda Docker

- https://github.com/geraldotech/CheatSheets/blob/main/Docker.md
