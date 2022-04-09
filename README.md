# Desafio DIO Git How To
**Conteúdo abordado nas aulas com Git e Git/Hub, comandos testados no Windows 10:**

[Download: GitHub](https://git-scm.com/downloads)

Fazer a pasta do projeto em (https://github.com/new) e a mesma pasta no seu computador e abrir com o GitBash here inside folder
    

## Write a README.md

```
echo "# thisatest" >> README.md
```

## Iniciar repositório: (default is: master)
     git init

## Add single Files:
    git add filename.html

### Add all files:

     git add .

#### remove file from add
    git reset  | git reset <filename>

## Checkout changes to be committed:

    git status

  ![alt-text](https://raw.githubusercontent.com/geraldotech/Git-How-TO/main/img/gitstatus.jpg)
    

## ***Please tell me who you are

    git config --global user.email "email@geraldo.com"
    git config --global user.name "Your name"
    git commit -m "first commit"

## Mudar de Master para main
    $ git branch -M main

## Adicionar remote
    git remote add origin https://github.com/geraldotech/projeto.git

## Push origin main (finalmente o upload):
    git push -u origin main | git push

## Create new Branch (Faz um clone original subsidiária, ramal)
    $ git checkout -b version2

### commit new Branch

    $ git commit -m "versao ptbr"

### push finally create a Branch
    $ git push origin version2


## List all Branch Local
    $ git branch

## List all Branch Remote
    $ git branch -r

## List all Branch
    $ git branch -a

## Switch to a Branch In Your Local Repo
    $ git checkout version2

### add files
    $ git add index.html
### commit
$ git commit -m "no zulu"

### upload new version
$ git push -u origin version2

### Delete Branchs

#### remotely
    git push origin --delete my-branch-name

#### locally
    $ git push origin --delete sabado

## Delete a file (e.g sabado.html from repository)
    $ git rm sabado.html
    $ git commit -m "arquivo apagado"
    $ git push -u origin main

## restore a file before delete
    $ git restore upload/1.txt


​    
 ## restore 2 when uses: 
    $ git rm -r upload/1.txt
    $ git restore --staged upload/1.txt



#### Fazendo Merge e.g 1
- main(atual) com version2 ou seja devo estar na Branch a ser modificada (version2)
    $ git checkout version2
    $ git merge main
    $ git push origin version2
    
#### Fazendo Merge e.g 2
- (version2) atual with main
$ git checkout main
$ git merge version2
$ git push origin main


### Clonando repositorio

#### Fazer uma pasta e:
     $ git clone https://github.com/geraldotech/Login-Form-HTML-CSS

#### Update clone:
    cd /folder => $git pull


​    
---

### Other commands
    clear - limpar tela




​    
   ## Updating clone:
    cd /folder
    git pull


## Others commands:
#### Limpar tela:
    clear


​    
Por **Geraldo Filho**


​    
​    







