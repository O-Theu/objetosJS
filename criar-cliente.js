function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = (valor) => this.saldo += valor;
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;
}

const joao = new Cliente("João", "98765432101", "joao@email.com", 500);

const pedro = new ClientePoupanca("pedro", "98765432101", "pedro@email.com", 500, 1900);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

joao.depositar(400);

pedro.depositarPoup(100);

console.log(joao);

console.log(pedro);