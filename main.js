const form = document.getElementById('form-agenda');
const nomeAgenda = prompt("Digite o seu nome:")
const imgTel = '<img src="./images/tel.png" alt="Telefone" />';
const imgCel = '<img src="./images/cel.png" alt="Celular" />';

document.getElementById('nome_agenda').innerHTML = nomeAgenda;

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value.length > 10 ? imgCel : imgTel}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
