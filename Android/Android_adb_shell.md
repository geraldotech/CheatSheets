# Desabilitar packages do Android Galaxy

Por Geraldo Filho
Data: 26/02/2020  
Dispositivo: Galaxy S9+

Nem sempre é viável realizar root, um processo avançado que muitas vezes requer formatar o aparelho, acarretando na garantia e etc. Contudo, você pode desabilitar os apps, mesmo aqueles mais avançados com o intuito de liberar mais RAM e até economizar um pouco mais de bateria, não que hoje em dia seja necessário, porém limpar a interface deixando apenas o que mais usa é bem conveniente.

Adb Shell no Windows (Android Debug Bridge) (O intuito não é explicar o que é, e sim colocar em prática algumas ações, para saber mais [clique aqui](https://www.androidpit.com.br/adb-drivers-android-windows)

## No Device:

- Ativar modo de depuração USB
- App para get package info ou use o filter do proprio adb.
  - [https://play.google.com/store/apps/details?id=com.ubqsoft.sec01](https://play.google.com/store/apps/details?id=com.ubqsoft.sec01)
  - [https://play.google.com/store/apps/details?id=com.csdroid.pkg](https://play.google.com/store/apps/details?id=com.csdroid.pkg)

## No Windows: (Linux ou MacOS procure a versão adequada)

– Adb download https://dl.google.com/android/repository/platform-tools-latest-windows.zip
– DriverforAdb
https://technotesbr.blogspot.com/2020/09/adb-shell-download-dicas.html

# Comandos:

Listar devices:
`adb devices`

Faz o reboot:
`adb reboot`

Faz o reboot em modo recovery:
`adb reboot recovery`

Faz o reboot em modo download:
`adb reboot download`

Print all packages:
`adb shell pm list packages`

Print Only enabled:
`adb shell pm list packages -e`

Print all Disables:
`adb shell pm list packages -d`

Print all system disabled packages:
`adb shell pm list packages -d -s > disabled.txt`

Disable package:
`adb shell pm disable-user --user 0 com.samsung.voiceserviceplatform`

Enable package:
`adb shell pm enable <app>`

Habilitar um package:
`adb shell pm enable com.samsung.voiceserviceplatform`

Desinstalar app de usuário (aqueles que apenas podem ser desativados):
`adb shell pm uninstall --user 0 com.google.android.youtube`


Filters:

- global
  - adb shell pm list packages 'face'
- enabled
    - `adb shell pm list packages -e 'face'` - get all packages that includes (face)

- disabled:
  - adb shell pm list packages -d 'bixby'

# Some packages for disables

### Bixby packages (Thanks Galaxy Note 9 on Pie)

```css
com.samsung.android.app.spage
com.samsung.android.app.settings.bixby
com.samsung.systemui.bixby2
com.samsung.android.bixby.service
com.samsung.android.bixby.agent
com.samsung.android.bixbyvision.framework
com.samsung.android.bixby.wakeup
com.samsung.android.bixby.agent.dummy;
```

samsung espaço infantil:`com.samsung.android.kidsinstaller`



### Desabilitados testados no Galaxy S20 FE 5G (Android 12)

```css
adb shell pm disable-user --user 0 com.samsung.android.bixby.wakeup
adb shell pm disable-user --user 0 com.samsung.android.bixby.service
adb shell pm disable-user --user 0 com.samsung.android.bixbyvision.framework
adb shell pm disable-user --user 0 com.samsung.android.bixby.agent
adb shell pm disable-user --user 0 com.samsung.android.app.settings.bixby
adb shell pm disable-user --user 0 com.android.printspooler
adb shell pm disable-user --user 0 com.samsung.android.visionintelligence
adb shell pm disable-user --user 0 com.sec.spp.push - samsung push
adb shell pm disable-user --user 0 com.samsung.android.app.spage - samsung free
adb shell pm disable-user --user 0 com.sec.android.soagent Software update
adb shell pm disable-user --user 0 com.wssyncmldm - Software update
adb shell pm disable-user --user 0 com.samsung.android.app.aodservice - Always On Display
adb shell pm disable-user --user 0 com.samsung.android.mapsagent - application recommendations
adb shell pm disable-user --user 0 com.google.android.projection.gearhead - Android Auto
adb shell pm disable-user --user 0 com.samsung.android.app.updatecenter - App update
adb shell pm disable-user --user 0 com.facebook.services
adb shell pm disable-user --user 0 com.facebook.system - multiple packages - Facebook Services
```


Achei uma lista completa em: https://docs.google.com/spreadsheets/u/0/d/12jEGQftFUL3vAI03X0Ku1LgoWFQKdwPA_WHuLh_2ics/htmlview
 thanks https://xdaforums.com/t/help-galaxy-s21-ultra-bloatware-debloat.4237379/
