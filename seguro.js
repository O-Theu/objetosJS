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
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    } 
}

oferecerSeguro(cliente);