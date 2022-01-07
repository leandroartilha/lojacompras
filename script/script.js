const itens = [

    {
        id: 0,
        nome:'Flor',
        img: './imagens/florRoxa.jpg',
        preco:1.50,
        quantidade:0,
        total:0
    },
    {
        id: 1,
        nome:'Água',
        img:'./imagens/agua.jpg',
        preco:2.00,
        quantidade:0,
        total:0
    },
    {
        id: 2,
        nome:'Grão',
        img:'./imagens/graoBico.jpg',
        preco:5.00,
        quantidade:0,
        total:0
    }

]



inicializarLoja = () =>{

    var containerProdutos = document.querySelector('#produtos');
    itens.map((val)=>{
        containerProdutos.innerHTML += `

        
            <div class="lista-produtos">
                <img class="imgTam" src="`+val.img+`"/>
                <p class="texto-produto">`+val.nome+`</p>
                <p class="texto-preco">R$ `+val.preco+`</p>
                <a class="texto-adicionar" key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
            </div>
        
        
        `;

    })
}

inicializarLoja();

atualizarCarrinho = () => {
    let totalGeral = 0;
    var containerCarrinho = document.getElementById('carrinho');   
    containerCarrinho.innerHTML = ""; 
    itens.map((val) =>{
        
        val.total = val.quantidade * val.preco;
        totalGeral = totalGeral + val.total;
        console.log(totalGeral)
        containerCarrinho.innerHTML += `
        
        <p class="texto-carrinho">`+val.nome+` | Quantidade: `+val.quantidade+` | Preço: `+val.preco+` </p>
        <hr>
        
        `;
    })
    containerCarrinho.innerHTML +=`<p class="texto-carrinho">Valor da Compra: R$ `+totalGeral+`</p>`
    
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        
    })
}


