# Instalação do Sass

Requisitos:
>> NodeJS

## Install:
`npm install -g sass`

## Fazer um directory for project:
`mkdir mywebsite`

## inside this folder create  directories:

`css` `scss`

## Watch: (or use install a extention):

`sass --watch scss:css`

## Erro de script no Windows 10:
[thanks for](https://stackoverflow.com/questions/56199111/visual-studio-code-cmd-error-cannot-be-loaded-because-running-scripts-is-disabl)

<figure>
<img src="img/sass(3).PNG" style="width:60%" />
<figcaption>Windows error</figcaption>
</figure>

Ir em File > preferences > Settings  no search write: **automation** 

Adicionar a linha: 

```json
"terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"]
```

## Resolvido
<img src="img/sass(4).PNG" style="width:50%" />


vai em scss e criar style.scss

<img src="img/sass(5).PNG" style="width:50%" />

abrir o style.scss e digitar algum style, todo código deve ser escrito no scss: 

<img src="img/sass(6).PNG" style="width:50%" />

Com o watch o arquivo .css é atualizado em real time.

<img src="img/sass(7).PNG" style="width:50%" />

Instalar essa extenção, crie apenas o **style.scss** o **style.css** será gerado automaticamente na mesma pasta.

<img src="img/sass(8).PNG" style="width:40%" />

Multiple style variables:

<img src="img/sass(9).PNG" style="width:30%" />

## Nesting in style.scss

before

<img src="img/sass(10).PNG" style="width:40%" />

after

<img src="img/sass(11).PNG" style="zoom:80%" />

Arquivo grande ou serarar partes do code
10:29 no video https://www.youtube.com/watch?v=Zz6eOVaaelI

Fazer um arquivo chamado `_variables.scss` e declarar o conteúdo. 

<img src="img/sass(1).PNG" style="zoom:50%" />

No style.scss `@import "./variables";`

Atenção caso o style.css foi gerado usando o comando, então na próxima vez usar o comando ao invès do liveserver, caso contrário o add irá gerar um novo arquivo sass em outro diretório.

<img src="img/sass(2).PNG" style="zoom:60%" />

### Refs:

[How to setup a fast node sass/scss project (2021) - YouTube](https://www.youtube.com/watch?v=pGcCWhl6ePQ)

[https://sass-lang.com/guide](https://sass-lang.com/guide)
