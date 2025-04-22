document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('form-cadastro');
    const corpoTabelaGastos = document.getElementById('corpo-tabela-gastos');
    const inputDescricao = document.getElementById('descricao');
    const inputValor = document.getElementById('valor');
    const inputCategoria = document.getElementById('categoria');

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const descricao = inputDescricao.value.trim();
        const valor = parseFloat(inputValor.value);
        const categoria = inputCategoria.value.trim();

        // Verifica se os campos obrigatórios foram preenchidos
        if (descricao === '' || isNaN(valor)) {
            alert('Por favor, preencha a descrição e um valor válido.');
            return;
        }

        // Cria uma nova linha na tabela
        const novaLinha = corpoTabelaGastos.insertRow();

        // Cria as células para cada coluna
        const celulaDescricao = novaLinha.insertCell();
        const celulaValor = novaLinha.insertCell();
        const celulaCategoria = novaLinha.insertCell();

        // Adiciona os valores às células
        celulaDescricao.textContent = descricao;
        celulaValor.textContent = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        celulaCategoria.textContent = categoria;

        // Limpa os campos do formulário
        inputDescricao.value = '';
        inputValor.value = '';
        inputCategoria.value = '';
    });
});