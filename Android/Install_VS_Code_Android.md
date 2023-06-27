# How to install VS Code in Android Phones

Install termux apk:

<a href="https://f-droid.org/en/packages/com.termux/">https://f-droid.org/en/packages/com.termux/ </a>

if dpk update (err) change repo

    termux-change-repo

### install Ubuntu

```shell
pkg install wget openssl-tool proot -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh
```

### start ubuntu

```shell
./start-ubuntu.sh
```

### Downloading Code Server

```shell
wget https://github.com/cdr/code-server/releases/download/v3.10.2/code-server-3.10.2-linux-arm64.tar.gz
```

### descompactar

```shell
tar -xvf ./code-server-3.10.2-linux-arm64.tar.gz
```

### enter folder and run

```shell
cd code-server-3.10.2-linux-arm64
```

### run

```shell
./code-server
```

### # Now visit http://127.0.0.1:8080 Your password is in

```
~/.config/code-server/config.yaml
```

### how access out localhost

in `config.yaml` change 127.0.0.1 to 0.0.0.0:8080

<a href="https://www.codewithharry.com/blogpost/install-vs-code-in-android">REF </a>

[https://www.brainytechz.com/2022/03/install-vs-code-android.html?m=1](https://www.brainytechz.com/2022/03/install-vs-code-android.html?m=1)
