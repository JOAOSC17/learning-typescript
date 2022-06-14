const dadosClientes: readonly [number, string] = [1, 'Luiz'];
const dadosClientes2: [number, string, boolean?] = [1, 'Luiz'];
const dadosClientes3: [number, string, ...string[]] = [1, 'Luiz'];
dadosClientes[0] = 100;
dadosClientes[1] = 100;
dadosClientes[1] = 'Carlos';
