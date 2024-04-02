
O site https://www.jdoodle.com/online-java-compiler possui um compilador java online, onde você pode copiar e executar os códigos.

<details>
    <summary>Setup Windows</summary>

 windows: https://www.oracle.com/br/java/technologies/downloads/#jdk22-windows
IntelliJ: https://www.jetbrains.com/pt-br/idea/download/download-thanks.html?platform=windows&code=IIC
    
</details>

Introdução à programação POO em Java: https://stecine.azureedge.net/repositorio/00212ti/07673/index.html

classes e objetos em Java, deriva do C++ e este do C

Existem três tipos de visibilidade, representados pelos seguintes modificadores: private, protected and public:
    “private” indica que o método ou atributo só pode ser acessado internamente à classe, enquanto “public” define que ambos são visíveis para todo o exterior.

```java
public class Aluno {
    private String nome;
    
    public void inserirNome(String n){
        nome = n;
    }
    public String recuperarNome(){
        return nome;
    }
    
    public static void main(String args[]) {
     Aluno geraldo = new Aluno();
     geraldo.inserirNome("Geraldo Costa");

      System.out.println("Saida: "+ geraldo.recuperarNome());
    }
}

```

```java
public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=25;
      int z=x+y;

      System.out.println("Sum of x+y = " + z);
    }
}
```

