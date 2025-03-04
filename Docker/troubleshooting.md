Para corrigir isso, você pode fazer:
1.	Alterar o dono da pasta para www-data:
sudo chown -R www-data:www-data /caminho/para/a/pasta/cargas
2.	Garantir as permissões adequadas (leitura, escrita e execução para o dono):
sudo chmod -R 755 /caminho/para/a/pasta/cargas

Se você quiser que o gmapdev (usuário do VSCode) também tenha permissão de leitura/escrita sem interferir no acesso do Nginx, você pode adicionar esse usuário ao grupo www-data:
sudo usermod -aG www-data gmapdev

Recarregar o grupo do usuário no sistema
Após adicionar o usuário ao grupo www-data, é necessário recarregar as permissões de grupo para garantir que as mudanças tenham efeito. Você pode fazer isso de duas formas:
•	Sair e entrar novamente no VSCode (ou reiniciar a sessão do terminal). Alternativamente, pode forçar a atualização do grupo com o comando:
newgrp www-data
•	Verificar se o grupo foi adicionado corretamente com o comando:
groups gmapdev
O arquivo sga/core/Controller.php tem as permissões -rw-r--r--, o que significa que:
•	O dono (www-data) pode ler e escrever no arquivo.
•	O grupo (gmapdev) pode apenas ler o arquivo.
•	Outros usuários podem apenas ler o arquivo.
Se você precisa permitir que o gmapdev também edite o arquivo:

sudo chmod 664 sga/core/Controller.php
Isso dará permissão de escrita para o grupo (gmapdev).
Se você precisa permitir que todos editem o arquivo (não recomendado):
sudo chmod 666 sga/core/Controller.php
