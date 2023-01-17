const clientes = [

    {
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
        ]
    },

    {
        nome: "Lucas",
        idade: 25,
        cpf: "12345678910",
        email: "lucas@email.com",
        dependentes: [
            {
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "17/12/2011", 
            },
        ]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes);