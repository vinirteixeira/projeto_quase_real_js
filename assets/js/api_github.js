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
})
    
.catch( error => { // para status de erro
    console.error('Algo de errado não está certo', error);
})
.finally((finalizar) => { // sempre acaba aqui, certo ou errado
    // exibir_load(false)
    console.warn('sempre cai aqui');
})
