# Sistema de Controle de Tráfego Aéreo


### Instruções de instalação
---
Pré-requisitos:
- Nodejs Versão 20.10.0 LTS
- NPM Versão 10.2.3
---
Executando o projeto:

Abra um prompt de comando e navegue até a pasta raíz do projeto, no mesmo nível onde se encontra o arquivo package.json e execute os seguintes comandos:
```sh
npm install
npm run start
```

Executando testes unitários
```sh
npm install
npm run test
```

#### Dependências
Foi necessário utilizar o babel como dependência para transpilar o código em ECMA SCRIPT 6 para CommonJs, sem isso não seria possível utilizar os novos imports juntamente com os testes em Jest por exemplo.
