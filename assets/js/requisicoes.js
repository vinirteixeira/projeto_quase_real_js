exibir_load(true);
let produtos = [];

fetch('../json/hobbies.json')
.then(response => response.json()) // para status 200
.then(data => {
    produtos = data;
    exibirProdutos(produtos);
    console.log(data);
})
    
.catch( error => { // para status de erro
    console.error('Algo de errado não está certo', error);
    document.getElementById('#erro').innerHTML = "Algo de errado não está certo!";
})
.finally((finalizar) => { // sempre acaba aqui, certo ou errado
    // exibir_load(false)
    console.warn('sempre cai aqui');
})

