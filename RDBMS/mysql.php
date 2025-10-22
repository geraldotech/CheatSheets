<?php
// Configurações de conexão
$host = 'localhost';
$username = 'root';
$password = 'root';

// DSN (Data Source Name)
$dsn = "mysql:host=$host;charset=utf8mb4";

try {
    // Cria a instância PDO
    $pdo = new PDO($dsn, $username, $password);

    // Define modo de erro para exceção (bom para debug)
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "✅ Conexão com o banco de dados bem-sucedida!";
} catch (PDOException $e) {
    // Captura erro e exibe
    echo "❌ Erro ao conectar ao banco: " . $e->getMessage();
}
?>
