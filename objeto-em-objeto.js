const cliente = {
    nome: "Mateus",
    idade: 20,
    cpf: "12345678910",
    email: "mateus@email.com",
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011", },
        {
            nome: "Julia",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        }
    ],
}

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc =="20/03/2011" );

console.log(filhaMaisNova[0].nome);
console.log(filhaMaisNova[1].nome);