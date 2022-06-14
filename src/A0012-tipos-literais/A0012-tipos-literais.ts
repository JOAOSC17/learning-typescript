let x = 10; // eslint-disable-line
x = 0b100;
const y = 10;
let a = 100 as const;// eslint-disable-line
const person = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
export function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Amarelo'): string {
  return cor;
}
console.log(escolhaCor('Azul'));
export default 1;
