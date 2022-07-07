const vetorProduto = [
    {
        "produto": "Produto 01",
        "preco": 3.65,
        "descricao": "Lorem Ipusum!",
        "em_estoque": true,
        "img": "assets/IMG/img0001.jpg"
    },

    {
        "produto": "Produto 02",
        "preco": 100.00,
        "descricao": "Lorem Ipusum! Not ipusum!",
        "em_estoque": false,
        "img": "assets/IMG/img0002.jpg"
    },

    {
        "produto": "Produto 03",
        "preco": 0.90,
        "descricao": "Lorem Ipusum! Not ipusum! outro ipusum!",
        "em_estoque": true,
        "img": "assets/IMG/img0003.jpg"
    },

    {
        "produto": "Produto 04",
        "preco": 20.90,
        "descricao": "Lorem Ipusum! Not ipusum! outro ipusum!",
        "em_estoque": false,
        "img": "assets/IMG/img0003.jpg"
    },

    {
        "produto": "Produto 05",
        "preco": 30.90,
        "descricao": "Lorem Ipusum! Not ipusum! outro ipusum!",
        "em_estoque": true,
        "img": "assets/IMG/img0003.jpg"
    },
];

/**
 * filter (filtra algum elemento)
 * map (altera algo de todos vetores Ex: converter real - dólar)
 * reduce (transformar todos elementos em 1 valor único Ex: média dos valores)
 * length qtd de itens do vetor
 */
const filtroMaior10 = (elemento) => {
    return elemento.preco > 10.00;
}
const emEstoque = (elemento) => {
    return elemento.em_estoque === true;
}

const produtos_em_estoque = vetorProduto.filter(emEstoque);
console.log('Filter:', produtos_em_estoque);

const converterDolar = (elemento) => {
    const newElemento = { ...elemento };
    newElemento.preco = newElemento.preco / 5.43;
    return newElemento;
};

const produtos_em_dolar = vetorProduto.map(converterDolar);
console.log('Map:', produtos_em_dolar);

const retornaNomeProdutos = (elemento) => {
    return elemento.produto + " --- " + elemento.preco;
};

const nomesProdutos = vetorProduto.map(retornaNomeProdutos);

console.log('Map:', nomesProdutos);

const somaPrecos = (totalizador, elemento) => {
    return totalizador + elemento.preco
};
const media_preco = vetorProduto.reduce(somaPrecos, 0); // 0 igual o valor inicial do totalizador

console.log("Reduce: media", media_preco / vetorProduto.length) // length = qtd de itens do vetor

const divListaProdutos = document.getElementById("lista-produtos");

// for(valor of vetor)
// for(indice in vetor)
for (let elemento of vetorProduto) {
    const divProduto = `<div class="produto">
    <h1>${elemento.produto}</h1>
    <p>${elemento.descricao}</p>
    <h5>${elemento.preco}</h5>
    </div>`;
    divListaProdutos.innerHTML += divProduto

}

const exibirProdutos = (vetor) => {
    divListaProdutos.innerText = "";
    for (let elemento of vetor) {
        const divProduto = `<div class="produto">
        <h1>${elemento.produto}</h1>
        <p>${elemento.descricao}</p>
        <h5>${elemento.preco}</h5>
        </div>`;
        divListaProdutos.innerHTML += divProduto

    }
}
exibirProdutos(vetorProduto);

let estadoFiltroEstoque = false;

const btnFiltraApenasEstoque = document.getElementById('filtro01');
btnFiltraApenasEstoque.onclick = () => {
    estadoFiltroEstoque = !estadoFiltroEstoque;
    if (estadoFiltroEstoque) {
        const vetorFiltrado = vetorProduto.filter(emEstoque);
        exibirProdutos(vetorFiltrado);
        btnFiltraApenasEstoque.innerText = "Todos os produtos"
    }
    else {
        exibirProdutos(vetorProduto);
        btnFiltraApenasEstoque.innerText = "Filtrar apenas produtos disponíveis"
    }
}

// const btnAllProducts = document.getElementById(`All01`);
// btnAllProducts.onclick = () => {
//     exibirProdutos(vetorProduto);
//     estadoFiltroEstoque = false ;
// }