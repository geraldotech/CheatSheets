# Git How To
**Git e Git/Hub, comandos testados no Windows 10:** [Download: GitHub](https://git-scm.com/downloads)




Fazer a pasta do projeto em (https://github.com/new) e a mesma pasta no seu computador e abrir com o *GitBash here inside* folder:
    

## Write a README.md
```
echo "# thisatest" >> README.md
```

## Iniciar repositório: (default is: master)
     git init

## Add single Files:
- single 
```
     $ git add filename.html
```
- all files
```
    $ git add .
```

## Change branch master para main:
    $ git branch -M main 

## Add remote:
    git remote add origin https://github.com/geraldotech/projeto.git

## remove file from add:
    git reset  | git reset <filename>

## Display changes to be committed:

    git status

  <img src="https://raw.githubusercontent.com/geraldotech/Git-How-TO/main/img/changes-to-be-committed.jpg" alt="alt-text" style="zoom:50%;" />
    
### Commit:

    $ git commit -m "msg here"

## Setup login 

    git config --global user.email "email@geraldo.com"
    git config --global user.name "Your name"
    git commit -m "first commit"


## Push **upload/deploy/sent to git**:
    git push -u origin main | git push

## Commint && push inline:
    $ git commit -m "update" && git push -u origin main

## clear screen:
    clear

## Delete a file from loca repository and commit it.
    $ git rm sabado.html
    $ git commit -m "arquivo apagado"
    $ git push


## restore a file before delete
    $ git restore upload/1.txt

 ## restore 2 when uses: 
    $ git rm -r upload/1.txt
    $ git restore --staged upload/1.txt


# Branch

  - Create new Branch ***Clone original main subsidiária***  
    ```$ git checkout -b <name>
    $ git branch -m <name>
    $ git branch <super>   !important create but do not change location
    ```

 - Commit new Branch:  
    ```
        $ git commit -m "versao ptbr" 
    ```
 - Push Branch: 
    ```
        $ git push origin version2  
    ```
 - Display all Branch Local
    ```
        $ git branch
    ```
 - Display all Branch Remote
    ```
        $ git branch -r
    ```
 - Display all Branch
    ```
        $ git branch -a
    ```
 - Switch to Branch in Your Local Repo
    ```
        $ git checkout version2
    ```
 - Deploy this branch:
    ```
       $ git push -u origin version2
    ```
    ### Delete Branchs:

    #### Remotely:  
        $ git push origin --delete my-branch-name

    #### Locally: 
        $ git branch --delete sabado

    #### Merge e.g 1
    - main(atual) com version2 ou seja devo estar na Branch a ser modificada (version2)  
    ```
    $ git checkout version2  
    $ git merge main  
    $ git push origin version2  
    ```
    #### Merge e.g 2
    - (version2) atual with main  
    ```
    $ git checkout main
    $ git merge version2
    $ git push origin main
    ```

### Clonando repo

#### Make a folder and:
     $ git clone https://github.com/geraldotech/Login-Form-HTML-CSS

#### Update clone:
    cd /folder => $git pull

---
## Others commands:


#### Remove remote:
	git remote rm origin
#### Check out git version:
	git --version

#### Update repo local:
	git pull --rebase origin <branch>
	git push

### Rename a file
    $ git mv Answers_ref_a_CSS.pdf Answers_CSS.pdf 
    $ git commit -m "renamed" && git push origin main 

### branch missing on local
    $ git fetch 

### Rename a repository

1. Go to [Gitweb](https://github.com/) and rename Repository name 
2. Rename folder in local location
3. Now remove currently origin ``` 
$ git remote rm origin``` 
4. Add new origin 
```
$ git remote add origin https://github.com/geraldotech/server-guide.git 
```
5. Modify ou create a simple file to commit next step:
6. Commit and push the changes!
```
$ git commit -m "renamed" && git push origin main
```

### Bugs, maybe delete  *.git* from local    
    git rm -r .git

>
> 
> By: **GeraldoDev** 2022







