//exibir_load(true);

function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`
}
fetch("https://api.github.com/users/vinirteixeira")
.then(response => response.json()) // para status 200
.then(data => {
    console.log(data);
    renderiza_foto(data.avatar_url);
    document.getElementById('nome').innerText = data.name;
    document.getElementById('location').innerHTML += "Localização: " + data.location;
    document.getElementById('seguindo').innerHTML += "Seguindo " + data.following + " pessoas";
    document.getElementById('seguidores').innerHTML = "Sendo seguido por " + data.followers + " pessoas";
    document.getElementById('repositories').innerHTML = "Total de repositórios (públicos) = " +data.public_repos;
})

    
.catch( error => { // para status de erro
    console.error('Algo de errado não está certo', error);
})
.finally((finalizar) => { // sempre acaba aqui, certo ou errado
    // exibir_load(false)
    console.warn('sempre cai aqui');
})
