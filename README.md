# Desafio DIO Git How To
### Conteúdo abordado nas aulas com Git e Git/Hub, Comandos testados no Windows 10:

[Download: GitHub](https://git-scm.com/downloads)

## Check out version - verificar versão:

    git --version
    
## Iniciar repositório:
     git init


## Adicionar a área de espera:
    git add readme.md

## Changes to be committed:

    git status
    
  ![alt-text](https://raw.githubusercontent.com/geraldotech/Git-How-TO/main/img/gitstatus.jpg)
    
## Do commit / Fazendo commit:
    git init
    git config user.name "someone"
    git config user.email "someone@someplace.com"
    git add *
    git commit -m "some init msg"
    
    
## Mudar de Master para main
    git branch -m "main"
## Remote add:
    git remote add origin https://github.com/geraldotech/projetogit.git

## Push origin main:
    git push -u origin main

## Create new Branch
    git checkout -b "novo-botao"
    
![alt-text](https://raw.githubusercontent.com/geraldotech/Git-How-TO/main/img/newbutton.jpg)


## geraldo@GERALDO-NOTE MINGW64 ~/Desktop/projetogit (novo-botao)
    $ git commit -m "novo-botao"
    
## geraldo@GERALDO-NOTE MINGW64 ~/Desktop/projetogit (novo-botao)
    $ git push origin novo-botao
    
 ## Merge main com novo-botao:
    git Checkout main 
    git merge novo-botao
    git push origin main
    
  ## How clonar GIT: => / Do a folder - Faça uma pasta e dentro:
    git bash here

    git clone link.git
    
    
   ## Updating clone:
    cd /folder
    git pull


## Others commands:
#### Limpar tela:
    clear
#### Todos os arquivos:
     git add .

#### Git checkout main:
    switch branch para o main
    
## // delete branch locally
    git branch -d localBranchName
## // delete branch remotely
    git push origin --delete remoteBranchName



    
    
    








