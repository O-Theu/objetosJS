const listaCPFs = ["12345678910", "12345678910", "12345678910"]

const cliente = {
    nome: "Mateus",
    idade: 20,
    cpf: "12345678910",
    email: "mateus@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(`E o inicio do seu CPF é ${cliente.cpf.substring(0,3)}.`)