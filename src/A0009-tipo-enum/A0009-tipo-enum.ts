enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}
function escolhaAsCores(cor: Cores): void {
  console.log(Cores[cor]);
}
console.log(Cores);
console.log(Cores[10]);
console.log(Cores.ROXO);
escolhaAsCores(78);
