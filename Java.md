O site jdoodle possui um compilador java online, onde você pode copiar e executar os códigos.

classes e objetos em Java, deriva do C++ e este do C

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

