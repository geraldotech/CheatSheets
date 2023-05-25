# Odin USB2.0

Erro: `Galaxy Note 9 Odin FAIL: "Can't open the serial(COM) port.`

Geralmente causado pela conexão de alta velocidade, usar um hub 2.0 ou seguir o procedimento abaixo, mesma técnica já foi usado para um Asus Max Pro e agora em qualquer Galaxy que venha a apresentar este problema. Já havia falado sobre esse assunto [neste link](https://technotesbr.blogspot.com/2020/09/asus-zenfone-max-pro-m1-erro-ao-usar-o.html)

1 - Conectar ao Odin e observar a porta de conexão no meu caso foi `COM:4`

2 - Go to `Computador\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\xxxxx`
Onde tem os xxx é o `HardWare ID`, se tiver muitos registros de portas apague todas e veja o novo registro sendo criado.

3 - Na pasta `USB2.0` edite o registro `S9-USB2.0.reg` adicionando o Hardware-ID, faça o mesmo para o arquivo .bat depois rode o registro e o bat as admin
4 - Colocar em Modo download e tentar instalar a TWRP
