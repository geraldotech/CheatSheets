# Desabilitar packages do Android Galaxy

Por Geraldo Filho
Data: 26/02/2020  
Dispositivo: Galaxy S9+

Nem sempre é viável realizar root, um processo avançado que muitas vezes requer formatar o aparelho, acarretando na garantia e etc. Contudo, você pode desabilitar os apps, mesmo aqueles mais avançados com o intuito de liberar mais RAM e até economizar um pouco mais de bateria, não que hoje em dia seja necessário, porém limpar a interface deixando apenas o que mais usa é bem conveniente.

Adb Shell no Windows (Android Debug Bridge) (O intuito não é explicar o que é, e sim colocar em prática algumas ações, para saber mais [clique aqui](https://www.androidpit.com.br/adb-drivers-android-windows)

## No Device:

- Ativar modo de depuração USB
- App para get package info:
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

Desabilitar um package:
`adb shell pm disable-user --user 0 com.samsung.voiceserviceplatform`

Habilitar um package:
`adb shell pm enable com.samsung.voiceserviceplatform`

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
com.samsung.android.bixby.wakeup
com.samsung.android.bixby.service
com.samsung.android.bixbyvision.framework
com.samsung.android.app.settings.bixby
com.android.printspooler
com.samsung.android.visionintelligence
com.sec.spp.push - samsung push
com.samsung.android.bixby.agent
com.samsung.android.app.spage - samsung free
`com.sec.android.soagent` && `com.wssyncmldm` Software update: 
`com.samsung.android.app.aodservice` Always On Display: 
```
