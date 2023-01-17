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

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup){
        super(nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoup(valor){
        this.saldoPoup += valor;
    }

    exibirSaldoPoup() {
        console.log(`Seu saldo é ${this.saldoPoup}`);
    }
}

const joao = new ClientePoupanca("João", "98765432101", "joao@email.com", 500, 0);

joao.depositar(1000);

console.log(joao);

joao.depositarPoup(600);

joao.exibirSaldoPoup();