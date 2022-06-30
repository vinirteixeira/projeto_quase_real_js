
let elementoLogin = document.getElementById("login")
let elementoSenha = document.getElementById("senha")

const verificarLogin = (login, senha) => {
    if (login == "maria" && senha == "123") {
        localStorage.setItem("usuarioLogado", "Maria");
        localStorage.setItem("userSurname", "Silva");
        return true;
        
    }

    return false;
};

const showErrorMsg = () => {
    alert("Não foi possível logar!!!");
};

const realizarLogin = () => {
    const login = elementoLogin.value;
    const senha = elementoSenha.value;
    if (verificarLogin(login, senha)) {
        // window.location.href = "./views/home.html"; ou
        window.location.assign("./views/home.html");
    }
    else {
        showErrorMsg();
    }
};