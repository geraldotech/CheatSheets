# Docker é similar ao virtualbox ?


- WSL usando o tutorial de instalação: https://github.com/codeedu/wsl2-docker-quickstart.  
- https://github.com/codeedu/wsl2-docker-quickstart?tab=readme-ov-file#erro-ao-iniciar-o-docker-no-ubuntu-2204
 

Sim, Docker e VirtualBox são ferramentas que têm alguns propósitos semelhantes, mas funcionam de maneiras um pouco diferentes.

O VirtualBox é uma tecnologia de virtualização que permite criar máquinas virtuais completas em um sistema host. Isso significa que você pode executar sistemas operacionais inteiros dentro dessas máquinas virtuais, como se fossem computadores separados dentro do seu computador real. Cada máquina virtual no VirtualBox possui seu próprio sistema operacional e recursos isolados, como memória e espaço em disco.

Por outro lado, o Docker utiliza uma tecnologia chamada de contêineres. Os contêineres são como caixas que contêm apenas o software necessário para executar um aplicativo específico. Eles compartilham o sistema operacional do host, mas são isolados uns dos outros e do sistema operacional host. Docker permite empacotar um aplicativo e todas as suas dependências em um contêiner, tornando-o portátil e consistente em diferentes ambientes de execução.

Então, enquanto o VirtualBox cria máquinas virtuais completas, o Docker cria contêineres que contêm apenas as partes necessárias do software, o que os torna mais leves e mais rápidos de serem iniciados e executados. Em resumo, enquanto ambos permitem isolar e executar aplicativos, o Docker é mais leve e voltado para a execução de aplicativos isolados, enquanto o VirtualBox é mais adequado para criar ambientes completos de sistemas operacionais virtuais.

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/cea0dc67-f61a-4f19-b602-cacd672f090d)



## docker-compose 

O docker-compose é uma ferramenta que facilita a definição e execução de aplicativos Docker com vários contêineres. Em vez de criar e gerenciar manualmente vários contêineres individuais usando comandos Docker separados, o docker-compose permite definir toda a configuração do aplicativo em um arquivo YAML chamado docker-compose.yml.

Dentro do arquivo docker-compose.yml, você pode especificar os serviços que compõem seu aplicativo, como contêineres Docker, redes, volumes, variáveis de ambiente e outros detalhes de configuração. Depois de definir esse arquivo, você pode usar o comando docker-compose para iniciar, parar e gerenciar todo o aplicativo com apenas um comando.

Por exemplo, se você estiver desenvolvendo um aplicativo da web que requer um contêiner para o servidor da web (como o Apache ou o Nginx) e outro para o banco de dados (como o MySQL ou o PostgreSQL), você pode definir esses serviços no arquivo docker-compose.yml. Em seguida, você pode usar o docker-compose para iniciar e parar todos esses contêineres juntos, simplificando bastante o processo de desenvolvimento e implantação de aplicativos baseados em Docker.


- mínimo de Docker comandos... https://www.youtube.com/watch?v=ntbpIfS44Gw
- Uma dica rápida: Não precisa copiar o ID todo do container na hora de manipular ele, já cheguei fazer com apenas os dois primeiros carácteres do ID. Nesse caso eu não tinha IDs com iniciais parecidas.

## Docker e Docker Compose - Instalação no Windows [Sem Docker Desktop] e no Ubuntu
- https://www.youtube.com/watch?v=NMsQ6V97YaQ



## install https://ohmyz.sh/#install

```shell
sudo apt update
sudo apt install git zsh -y
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

# Themes
  -  powerlevel10k https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#manual

