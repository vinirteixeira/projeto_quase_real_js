//exibir_load(true);
const ulListaSeguidores = document.getElementById('listaSeguidores');
const ulListaSeguindo = document.getElementById('listaSeguindo');
const ulListaRepositories = document.getElementById('listaRepositories')

function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`
    
}

const headers = new Headers();
    headers.append('Authorization', 'token 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',  );

fetch("https://api.github.com/users/vinirteixeira", {headers:headers})
.then(response => response.json()) // para status 200
.then(data => {
    console.log(data);
    renderiza_foto(data.avatar_url);
    document.getElementById('nome').innerText = data.name;
    document.getElementById('location').innerHTML = "Localização: " + data.location;
    document.getElementById('seguindo').prepend("Seguindo " + data.following + " pessoas: ") ;
    document.getElementById('seguidores').prepend("Sendo seguido por " + data.followers + " pessoas: ") ;
    document.getElementById('repositories').prepend ("Total de repositórios (públicos) = " + data.public_repos + ": ");
    getseguidores();
    getseguindo();
    getRepo();
})

    
.catch( error => { // para status de erro
    console.error('Algo de errado não está certo', error);
})
.finally((finalizar) => { // sempre acaba aqui, certo ou errado
    // exibir_load(false)
    console.warn('sempre cai aqui');
})

function getseguidores() {
    
    fetch("https://api.github.com/users/vinirteixeira/followers", {headers:headers})
    .then(response => response.json())
    .then(data => {
        console.log(data);
           for(let elemento of data) {
            document.getElementById('listaSeguidores').innerHTML  += `<a href="${elemento.html_url}"><li>${elemento.login}</li></a>`;
        } 
    })
}

function getseguindo() {
    fetch("https://api.github.com/users/vinirteixeira/following", {headers:headers})
    .then(response => response.json())
    .then(data => {
        console.log(data);
           for(let elemento of data) {
            document.getElementById('listaSeguindo').innerHTML  += `<a href="${elemento.html_url}"><li>${elemento.login}</li><a>`;
        } 
    })
}

function getRepo() {
    fetch("https://api.github.com/users/vinirteixeira/repos", {headers:headers})
    .then(response => response.json())
    .then(data => {
        console.log(data);
           for(let elemento of data) {
            document.getElementById('listaRepositories').innerHTML  += `<a href="${elemento.html_url}"><li>${elemento.name}</li></a>`;
        } 
    })
}