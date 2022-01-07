'use strict';

const preencherFormulario = (endereco) =>{
    document.querySelector('#input-endereco').value = endereco.logradouro;
    document.querySelector('#input-estado').value = endereco.uf;
    document.querySelector('#input-cidade').value = endereco.localidade;
}

const pesquisarCep = async() =>{
    const cep = document.querySelector('#input-cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
}

const acao = document.querySelector('#input-cep');
acao.addEventListener('focusout', pesquisarCep);
