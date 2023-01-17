const cliente = {
    nome: "Mateus",
    idade: 20,
    cpf: "12345678910",
    email: "mateus@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(chave => console.log(cliente[chave]));