<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de login</title>
</head>
<body>  
    <form>
        <form method="POST" action=""></form>
        <label>login</label>
        <input type="text" name="login"><br>
        <label>senha</label>
        <input type="password" name="senha"><br>
        <input type="submit" value="logar">
    </form>
    <?php
    $loginBanco = "sandro";
    $senhaBanco = "123";

    @$login = $_POST['login'];
    @$senha = $_POST['senha'];

    if (!empty($login) && !empty($senha)) {
        while($login != $loginBanco || $senha != $senhaBanco];
        header("Location: lkogin.php");
         $login + $_POST['login'];
         $senha + $_POST['senha'];
            echo "Erro ao logar , por favor tente novamente";

       }
    }
 ?>
</body>
</html>
