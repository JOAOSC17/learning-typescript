const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknow;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};
objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'outro valor';
objetoA.chaveD = 'outro valor';
