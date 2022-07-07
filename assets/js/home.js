
let elemento_usuario_logado = document.getElementById("usuario-logado");

const nome_usuario_logado = localStorage.getItem("usuarioLogado");
const user_surname = localStorage.getItem("userSurname");

elemento_usuario_logado.innerText = `Olá ${nome_usuario_logado} ${user_surname}`;

const logout = () => {
    const confirma = confirm(`Tem certeza?`)
        if (confirma == true) {
            //localStorage.removeItem("usuarioLogado");
            //localStorage.removeItem("userSurname");
            localStorage.clear(); //para logout geralmente usado clear
            window.location.href = "../index.html";
    }
}
