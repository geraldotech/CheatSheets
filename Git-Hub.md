# <div align="center">Git How To</div>

**Git e Git/Hub, comandos testados no Windows 10:** 

- [x] [Download: Git scm](https://git-scm.com/downloads)


Fazer a pasta do projeto em (https://github.com/new) e a mesma pasta no seu computador e abrir com o _GitBash here inside_ folder:

### Write a README.md

```
echo "# thisatest" >> README.md
```

### Iniciar repositório: (default is: master)

     git init

### Add single Files:

- single

```
     $ git add filename.html
```

- all files

```
    $ git add .
```

###  list all the branches in your repository and see which one you're currently on:
     $ git branch

###  create and switch to a new branch in a single command:
     $ git switch -c feature/new-feature

### Change branch master para main:

    $ git branch -M main
    $ git checkout main

### Add remote:

    git remote add origin https://github.com/geraldotech/projeto.git

### remove file from add:

    git reset  | git reset <filename>

### Display changes to be committed:

    git status

  <img src="https://raw.githubusercontent.com/geraldotech/Git-How-TO/main/img/changes-to-be-committed.jpg" alt="alt-text" style="zoom:50%;" />
    
#### Commit:

    $ git commit -m "msg here"

### Setup login

    git config --global user.email "email@geraldo.com"
    git config --global user.name "Your name" // same to change UserName GitLens
    git commit -m "first commit"

### Push **upload/deploy/sent to git**:

    git push -u origin main | git push

### Commint && push inline:

    $ git commit -m "update" && git push -u origin main

### clear screen:

    clear

### Delete a file from loca repository and commit it.

    $ git rm sabado.html
    $ git commit -m "arquivo apagado"
    $ git push

### restore a file before delete

    $ git restore upload/1.txt

### restore 2 when uses:

    $ git rm -r upload/1.txt
    $ git restore --staged upload/1.txt
### restore all files
     $ git restore .

# Branch

1 - Create new Branch **_Clone original main subsidiária_**

```s
$ git checkout -b <name>
$ git branch -m <name>
$ git branch <name> !important create but do not change location

```

2 - Fazer as edições  
3 - Commit new Branch:

```s
$ git commit -m "novo btn"
```

4 - Push Branch:

```
$ git push origin version2
```

- create empty Branch:
  ```
  git switch --orphan <new branch>
  ```

- Display all Branch Local
```
$ git branch
```
- Display all remote branch 
```
$ git branch -r
```
- Display all branch
```
$ git branch -a
```
- switch to branch in Your Local Repo
```
 $ git checkout version2
 $ git switch nome-da-branch

```
- Deploy this branch:

  ```
     $ git push -u origin version2
  ```

  #### Delete Branchs:

  ###### Remotely:

       $ git push origin --delete my-branch-name

  ###### Locally:

       $ git branch -d main3
       $ git branch --delete sabado

### Merge

> > e.gbtn com main:

1 - checkout main  
2 - git merge btn  
3 - git push origin main

#### Clonando repo

###### Make a folder and:

     $ git clone https://github.com/geraldotech/Login-Form-HTML-CSS

###### Update clone:

    cd /folder => $git pull

---

### Others commands:

###### Remove remote:

    git remote rm origin

###### Check out git version:

    git --version

###### Update repo local:

    git pull --rebase origin <branch>
    git push

###### Update repo local:

```bash

git fecth origin
fetch diff origin/main
only: git pull
```

#### Rename a file

    $ git mv Answers_ref_a_CSS.pdf Answers_CSS.pdf
    $ git commit -m "renamed" && git push origin main

#### branch missing on local

    $ git fetch

#### Rename a repository

1. Go to [Gitweb](https://github.com/) and rename Repository name
2. Rename folder in local location
3. Now remove currently origin ` $ git remote rm origin`
4. Add new origin

```
$ git remote add origin https://github.com/geraldotech/server-guide.git
```

5. Modify ou create a simple file to commit next step:
6. Commit and push the changes!

```
$ git commit -m "renamed" && git push origin main
```

#### Bugs, maybe delete _.git_ from local

    git rm -r .git

#### Rewriting the most recent commit message

    git commit --amend

#### Semantic Commits + emoji


###  sempre gravar a senha (docker)
     git config --global credential.helper store
     


#### Undo all changes (including all changes that have not been committed!) with:
     git checkout .
####  specify a specific file using:
     git checkout filename.js

####  you will not loose your local changes after a  git reset --hard HEAD^
![image](https://github.com/geraldotech/CheatSheets/assets/92253544/84ef2a98-ce49-4629-88b2-eadae0bb8d6d)



## Erros:


After Try merge files into main `User fatal: refusing to merge unrelated histories`
The error message "fatal: refusing to merge unrelated histories" occurs when Git encounters two divergent branches with no common ancestry. This typically happens when you're trying to merge branches that have no common history.
To resolve this issue, you can add the --allow-unrelated-histories flag to the git merge command:

- `git merge --allow-unrelated-histories files`

#### Commits Pattern

- FEAT - indica um novo recurso no código
- FIX - indica que está solucionando um problema (bug fix)
- DOCS - indicam que houveram mudanças na documentação
- TEST - para testes
- BUILD - arquivos de build e dependências
- RERF - identificar quaisquer alterações no code que estejam relacionados a performance

### Git commits Emojis

- [x] [Commit messages](https://www.linkedin.com/feed/update/urn:li:activity:6941814951699206144/)
- [ ] [https://github.com/ikatyang/emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)
- [ ] [https://gist.github.com/parmentf/035de27d6ed1dce0b36a](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

### shields

- [List](https://dev.to/envoy_/150-badges-for-github-pnk#workspace-specs)
```html
<p align="center">
      <a href="https://travis-ci.org/lusaxweb/vuesax">
        <img
          src="https://img.shields.io/badge/any_text-you_like-blue"
          alt="travis ci badge"
        />
      </a>
      <a href="https://travis-ci.org/lusaxweb/vuesax">
        <img
          src="https://img.shields.io/badge/just%20the%20message-8A2BE2"
          alt="travis ci badge"
        />
      </a>
</p>
```
     
- [ ] [badages](https://github.com/alexandresanlim/Badges4-README.md-Profile)


<hr>
>>  By:  **geraldoX** 2022


