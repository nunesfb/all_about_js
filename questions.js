// questions.js
const quizData = [
  {
    topic: "ES6 (2015)",
    question: "Qual será a saída do código abaixo?",
    code: `
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
    `,
    options: [
      "25",
      "Alice",
      "Alice 25",
      "Error"
    ],
    answer: "Alice 25",
    explanation: `Os valores são impressos na sequencia.`
  },
  {
    topic: "ES6",
    question: "Qual será a saída do código abaixo usando template literals?",
    code: `
const name = "JavaScript";
console.log(\`Hello, \${name}!\`);
    `,
    options: [
      "Hello, JavaScript!",
      "Hello, name!",
      "Hello, undefined!",
      "Error"
    ],
    answer: "Hello, JavaScript!",
    explanation: `Os template literals (\`\`) permitem interpolação de variáveis.
Portanto, \`Hello, \${name}!\` retorna \`Hello, JavaScript!\`.`
  },
  {
    topic: "ES7",
    question: "Qual será a saída do código abaixo?",
    code: `
console.log(2 ** 3);
    `,
    options: [
      "6",
      "8",
      "16",
      "Error"
    ],
    answer: "8",
    explanation: `O operador de exponenciação (\`**\`) eleva \`2\` à potência \`3\`.
O resultado é \`8\`.`
  },
  {
    topic: "ES8",
    question: "O que acontece ao executar o código abaixo?",
    code: `
const person = { name: "Alice", age: 25 };
const entries = Object.entries(person);
console.log(entries);
    `,
    options: [
      "[[\"name\", \"Alice\"], [\"age\", 25]]",
      "{name: \"Alice\", age: 25}",
      "undefined",
      "Error"
    ],
    answer: "[[\"name\", \"Alice\"], [\"age\", 25]]",
    explanation: `\`Object.entries()\` retorna um array de pares chave-valor.
Portanto, o resultado é \`[[\"name\", \"Alice\"], [\"age\", 25]]\`.`
  },
  {
    topic: "ES8",
    question: "O que acontece ao executar o código abaixo?",
    code: `
console.log("5".padStart(3, "0")); // 
    `,
    options: [
      "005",
      "500",
      "5",
      "Error"
    ],
    answer: "005",
    explanation: `Adiciona no inicio da string`
  },
  {
    topic: "ES9",
    question: "Qual será a saída do código abaixo?",
    code: `
const person = { name: "Bob", age: 30 };
const clone = { ...person, city: "New York" };
console.log(clone);
    `,
    options: [
      "{name: \"Bob\", age: 30, city: \"New York\"}",
      "{name: \"Bob\", city: \"New York\"}",
      "{age: 30, city: \"New York\"}",
      "undefined"
    ],
    answer: "{name: \"Bob\", age: 30, city: \"New York\"}",
    explanation: `O operador spread (\`...\`) copia as propriedades do objeto \`person\` para \`clone\`.
A propriedade \`city\` é adicionada, resultando em \`{name: \"Bob\", age: 30, city: \"New York\"}\`.`
  },
  {
    topic: "ES10",
    question: "Qual será a saída do código abaixo?",
    code: `
const arr = [1, 2, [3, 4]];
console.log(arr.flat());
    `,
    options: [
      "[1, 2, 3, 4]",
      "[1, 2, [3, 4]]",
      "[1, 2, [3], [4]]",
      "Error"
    ],
    answer: "[1, 2, 3, 4]",
    explanation: `\`flat()\` reduz a profundidade do array em 1 nível por padrão.
Portanto, o resultado é \`[1, 2, 3, 4]\`.`
  },
  {
    topic: "ES2020",
    question: "Qual será a saída do código abaixo?",
    code: `
const a = null ?? "Default Value";
console.log(a);
    `,
    options: [
      "\"Default Value\"",
      "null",
      "undefined",
      "Error"
    ],
    answer: "\"Default Value\"",
    explanation: `O operador \`??\` retorna o valor à direita se o valor à esquerda for \`null\` ou \`undefined\`.
Portanto, o resultado é \`\"Default Value\"\`.`
  },
  {
    topic: "ES2021",
    question: "Qual será a saída do código abaixo?",
    code: `
const str = "Hello, World!";
console.log(str.replaceAll("l", "x"));
    `,
    options: [
      "\"Hexxo, Worxd!\"",
      "\"Hexxo, World!\"",
      "\"Hello, Worxd!\"",
      "Error"
    ],
    answer: "\"Hexxo, Worxd!\"",
    explanation: `\`replaceAll()\` substitui todas as ocorrências de \`"l"\` por \`"x"\`.
Portanto, o resultado é \`"Hexxo, Worxd!"\`.`
  },
  {
    topic: "ES2022",
    question: "Qual será a saída do código abaixo?",
    code: `
const numbers = [1, 2, 3, 4];
console.log(numbers.at(-1));
    `,
    options: [
      "4",
      "undefined",
      "-1",
      "Error"
    ],
    answer: "4",
    explanation: `\`at(-1)\` retorna o último elemento do array.
Portanto, o resultado é \`4\`.`
  },
  {
    topic: "Call Stack + Memory Heap",
    question: "O que acontece ao executar o código abaixo?",
    code: `
function first() {
  console.log("First function");
  second();
}
function second() {
  console.log("Second function");
}
first();
console.log("Global execution");
    `,
    options: [
      "Global execution, First function, Second function",
      "First function, Second function, Global execution",
      "First function, Global execution, Second function",
      "Second function, First function, Global execution"
    ],
    answer: "First function, Second function, Global execution",
    explanation: `As funções são empilhadas no \`Call Stack\` em ordem de chamada.
A \`first()\` é chamada primeiro, e dentro dela, \`second()\` é chamada.
Por fim, \`console.log("Global execution")\` é executado após o esvaziamento da pilha.`
  },
  {
    topic: "Pure Functions",
    question: "A função abaixo é pura ou impura? Por quê?",
    code: `
function add(a, b) {
  return a + b;
}
    `,
    options: [
      "Pura, porque sempre retorna o mesmo resultado para os mesmos inputs.",
      "Impura, porque modifica o estado externo.",
      "Impura, porque não retorna nada.",
      "Pura, porque usa variáveis globais."
    ],
    answer: "Pura, porque sempre retorna o mesmo resultado para os mesmos inputs.",
    explanation: `A função é pura porque não depende de variáveis externas e sempre retorna o mesmo valor quando chamada com os mesmos argumentos.`
  },
  {
    topic: "Hoisting",
    question: "Qual será a saída do código abaixo?",
    code: `
console.log(x);
var x = 5;
    `,
    options: [
      "5",
      "undefined",
      "ReferenceError",
      "TypeError"
    ],
    answer: "undefined",
    explanation: `Com \`var\`, a variável \`x\` é "içada" (hoisted) para o topo do escopo.
Antes da atribuição, seu valor é \`undefined\`.`
  },
  {
    topic: "Compose",
    question: "Qual será a saída do código abaixo?",
    code: `
const compose = (f, g) => (x) => f(g(x));
const add = (x) => x + 1;
const multiply = (x) => x * 2;

const composedFunction = compose(add, multiply);
console.log(composedFunction(5));
    `,
    options: [
      "11",
      "12",
      "13",
      "15"
    ],
    answer: "11",
    explanation: `\`compose(add, multiply)\` primeiro executa \`multiply(5)\`, que retorna \`10\`, e depois passa \`10\` para \`add\`, resultando em \`11\`.`
  },
  {
    topic: "Currying",
    question: "Qual será a saída do código abaixo?",
    code: `
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4));
    `,
    options: [
      "8",
      "6",
      "4",
      "Error"
    ],
    answer: "8",
    explanation: `\`multiply(2)\` retorna uma função que multiplica \`b\` por \`a\`.
Quando \`multiplyByTwo(4)\` é chamado, ele retorna \`2 * 4 = 8\`.`
  },
  {
    topic: "Memoization",
    question: "O que será armazenado em cache na função abaixo?",
    code: `
function memoizedAdd() {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    }
    console.log("Calculating...");
    cache[n] = n + 10;
    return cache[n];
  };
}
const add = memoizedAdd();
console.log(add(5)); // Calculating... 15
console.log(add(5)); // 15
    `,
    options: [
      "Somente o último resultado",
      "Nada será armazenado",
      "Todos os argumentos chamados e seus resultados",
      "Apenas os valores únicos"
    ],
    answer: "Todos os argumentos chamados e seus resultados",
    explanation: `A função \`memoizedAdd\` armazena em \`cache\` todos os argumentos chamados (ex.: \`5\`) e seus resultados (\`15\`).`
  },
  {
    topic: "Partial Application",
    question: "Qual será a saída do código abaixo?",
    code: `
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addTen = add(10);
console.log(addTen(5));
    `,
    options: [
      "15",
      "10",
      "5",
      "NaN"
    ],
    answer: "15",
    explanation: `\`add(10)\` retorna uma função que soma \`10\` a \`b\`.
Quando \`addTen(5)\` é chamado, ele retorna \`10 + 5 = 15\`.`
  },
  {
    topic: "Type Coercion",
    question: "Qual será a saída do código abaixo?",
    code: `
console.log("10" - "5" + "3");
    `,
    options: [
      "53",
      "83",
      "8",
      "NaN"
    ],
    answer: "83",
    explanation: `Os dois primeiros números como strings (\`"10"\` e \`"5"\`) são convertidos para números pela operação \`-\`, resultando em \`5\`.
Depois disso, \`5 + "3"\` concatena o número com a string, resultando em \`83\`.`
  },
  {
    topic: "Function Invocation",
    question: "Qual será o valor de `this` no código abaixo?",
    code: `
const obj = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName());
    `,
    options: [
      "undefined",
      "null",
      "JavaScript",
      "Error"
    ],
    answer: "JavaScript",
    explanation: `Quando \`obj.getName()\` é chamado, \`this\` refere-se ao objeto \`obj\`.
Portanto, \`this.name\` retorna \`"JavaScript"\`.`
  },
  {
    topic: "Scope Chain",
    question: "Qual será a saída do código abaixo?",
    code: `
const a = 10;

function outer() {
  const b = 20;

  function inner() {
    const c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();
    `,
    options: [
      "undefined undefined 30",
      "10 20 30",
      "undefined 20 30",
      "10 undefined 30"
    ],
    answer: "10 20 30",
    explanation: `\`inner()\` tem acesso ao escopo de \`outer()\` e ao escopo global.
Portanto, \`a = 10\`, \`b = 20\`, \`c = 30\`.`
  },
  {
    topic: "IIFE (Immediately Invoked Function Expression)",
    question: "Qual a saída da IIFE a seguir?",
    code: `
(function () {
  const message = "Hello, World!";
  console.log(message);
})();
    `,
    options: [
      "Hello, World!",
      "undefined",
      "ReferenceError",
      "SyntaxError"
    ],
    answer: "Hello, World!",
    explanation: `A IIFE é uma função auto-invocada.
Ela é executada imediatamente, imprimindo \`"Hello, World!"\`.`
  }

];
