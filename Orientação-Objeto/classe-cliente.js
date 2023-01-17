class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const joao = new Cliente("João", "98765432101", "joao@email.com", 500);

joao.depositar(400);
joao.exibirSaldo();