### Contetualizando permissões no linux:


Fazendo um `ld -l` obtemos:

- `drwxrwxr-x 10 gmapdev  www-data  4096 Mar 29 08:09`

onde: drwxrwxr-x (Sempre um conjunto de 10 caracreres) o primeiro caractere representa o tipo que pode ser:

```js
- → Arquivo comum
d → Diretório
l → Link simbólico (symlink)
b → Arquivo de dispositivo de bloco (ex.: discos)
c → Arquivo de dispositivo de caractere (ex.: terminais, dispositivos de som)
s → Socket (comunicação entre processos)
p → FIFO (pipe nomeado)
```


Os demais 3 conjuntos de caracteres representam: usuário, grupo e outros.


- gmapdev é o dono e  www-data é o grupo, usuário gmapdev (dono do diretório) tem as seguintes permissões:
   - r (read) → Pode ler o diretório (listar arquivos dentro dele).
   - w (write) → Pode modificar o diretório (criar, renomear ou excluir arquivos dentro dele).
   - x (execute) → Pode entrar no diretório (cd para acessá-lo).
 
-  Explicação completa das permissões:
    - d → Indica que é um diretório.
    - rwx → Permissões do dono (gmapdev).
    - rwx → Permissões do grupo (www-data).
    - r-x → Permissões dos outros usuários (qualquer um no sistema).


Outro exemplo: (Imagem abaixo extraida do devopscube.com):

![image](https://github.com/user-attachments/assets/1640a8b4-541b-47d9-899d-4dd30bf9e95d)


## Mudar as permissões

#### o que faz um simples: 
-  `sudo chmod 665 file.txt`

Cada dígito representa as permissões de uma categoria de usuários:
		
| Categoria       | Valor 665 | Permissões                  |
|---------------|----------|----------------------------|
| Dono (owner)  | 6 → `rw-` | Leitura e escrita (read + write)  |
| Grupo (group) | 6 → `rw-` | Leitura e escrita (read + write)  |
| Outros (others) | 5 → `r-x` | Leitura e execução (read + execute) |


Notação simbólica: `sudo chmod u+rw,g+rw,o+r file.txt`


### Os números 4, 5, 6 e 7

usados em permissões do Linux são representações de bits no sistema binário. Vamos analisar cada um deles e como se convertem para binário.

Conversão para Binário e Significado
Cada permissão em Linux é representada por três bits:

4 (100) → Leitura (r--)

2 (010) → Escrita (-w-)

1 (001) → Execução (--x)

A soma desses valores define as permissões que um usuário tem.

| Decimal | Binário | Permissões                  |
|---------|--------|-----------------------------|
| 4       | 100    | r-- (somente leitura)       |
| 5       | 101    | r-x (leitura e execução)    |
| 6       | 110    | rw- (leitura e escrita)     |
| 7       | 111    | rwx (leitura, escrita e execução) |

Possibilidades:

```txt
sudo chmod 444 file.txt
sudo chmod 555 file.txt
sudo chmod 666 file.txt
sudo chmod 777 file.txt

- Altera apenas permissoes do grupo
sudo chmod g+rwx file.txt
```


