// questions.js
const quizData = [
  {
    topic: "ES6 - Advanced Destructuring",
    question: "Qual será a saída do código abaixo?",
    code: `
const person = { name: "Alice", address: { city: "Wonderland" } };
const {
  name,
  address: { city },
  age = 25,
} = person;

console.log(name, city, age);
    `,
    options: [
      `"Alice Wonderland 25"`,
      `"Alice Wonderland undefined"`,
      `"Alice undefined 25"`,
      `"undefined Wonderland 25"`
    ],
    answer: `"Alice Wonderland 25"`,
    explanation: `\`age\` usa um valor padrão de \`25\` porque não existe no objeto.
\`name\` e \`city\` são extraídos com sucesso.`
  },
  {
    topic: "ES7 - Exponentiation Operator",
    question: "Qual será a saída do código abaixo?",
    code: `
const base = 2;
const exponent = 3 ** 2;
console.log(base ** exponent);
    `,
    options: [
      "64",
      "512",
      "8",
      "Error"
    ],
    answer: "512",
    explanation: `\`3 ** 2\` resulta em \`9\`, e então \`2 ** 9\` é \`512\`.`
  },
  {
    topic: "ES8 - Object.values",
    question: "Qual será a saída do código abaixo?",
    code: `
const person = { name: "Bob", age: 30 };
console.log(Object.values(person).join(", "));
    `,
    options: [
      `"Bob, 30"`,
      `"name, age"`,
      `"undefined"`,
      `"Error"`
    ],
    answer: `"Bob, 30"`,
    explanation: `\`Object.values\` retorna apenas os valores das propriedades do objeto, que são \`["Bob", 30]\`.`
  },
  {
    topic: "ES9 - Rest/Spread Properties",
    question: "Qual será a saída do código abaixo?",
    code: `
const person = { name: "Carol", age: 28, country: "Brazil" };
const { country, ...rest } = person;
console.log(rest);
    `,
    options: [
      `{ name: "Carol", age: 28 }`,
      `{ country: "Brazil" }`,
      `["Carol", 28]`,
      `"Error"`
    ],
    answer: `{ name: "Carol", age: 28 }`,
    explanation: `O operador rest captura as propriedades restantes do objeto original em \`rest\`.`
  },
  {
    topic: "ES10 - Array.flatMap",
    question: "Qual será a saída do código abaixo?",
    code: `
const arr = [1, 2, [3, 4]];
const result = arr.flatMap(x => (Array.isArray(x) ? x : [x * 2]));
console.log(result);
    `,
    options: [
      "[2, 4, 3, 4]",
      "[1, 2, 3, 4]",
      "[2, 4, 6, 8]",
      "Error"
    ],
    answer: "[2, 4, 3, 4]",
    explanation: `\`flatMap\` aplica a função a cada elemento e achata o resultado em 1 nível.`
  },
  {
    topic: "ES2020 - Optional Chaining",
    question: "Qual será a saída do código abaixo?",
    code: `
const user = { profile: { name: "Eve" } };
console.log(user.profile?.age ?? "Age not available");
    `,
    options: [
      `"Age not available"`,
      `"undefined"`,
      `"Error"`,
      `"Eve"`
    ],
    answer: `"Age not available"`,
    explanation: `\`profile?.age\` retorna \`undefined\`, então \`??\` retorna \`"Age not available"\`.`
  },
  {
    topic: "ES2021 - Logical Assignment Operators",
    question: "Qual será a saída do código abaixo?",
    code: `
let x = null;
let y = 10;
x ||= y;
console.log(x);
    `,
    options: [
      "10",
      "null",
      "undefined",
      "Error"
    ],
    answer: "10",
    explanation: `\`x ||= y\` atribui \`y\` a \`x\` porque \`x\` era \`null\`.`
  },
  {
    topic: "Scope Chain with Closures",
    question: "Qual será a saída do código abaixo?",
    code: `
function outer() {
  const outerVar = "Outer";
  return function inner() {
    const innerVar = "Inner";
    console.log(outerVar, innerVar);
  };
}
const closure = outer();
closure();
    `,
    options: [
      `"Outer Inner"`,
      `"Outer undefined"`,
      `"undefined Inner"`,
      `"Error"`
    ],
    answer: `"Outer Inner"`,
    explanation: `A função \`inner\` mantém o acesso ao escopo de \`outer\`, criando uma closure.`
  },
  {
    topic: "Call Stack + Recursion",
    question: "O que acontece ao executar o código abaixo?",
    code: `
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
    `,
    options: [
      "120",
      "5",
      "undefined",
      "Error"
    ],
    answer: "120",
    explanation: `A função \`factorial\` chama a si mesma até que \`n\` seja \`1\`.
A multiplicação de \`5 * 4 * 3 * 2 * 1\` resulta em \`120\`.`
  },
  {
    topic: "Advanced Type Coercion",
    question: "Qual será a saída do código abaixo?",
    code: `
console.log([] + {});
console.log({} + []);
    `,
    options: [
      `"{}[object Object]"`,
      `"undefined"`,
      `"Error"`,
      `"[object Object]"`
    ],
    answer: `"{}[object Object]"`,
    explanation: `No primeiro caso, \`[]\` é convertido para uma string vazia e \`{}\` é convertido para \`[object Object]\`.
No segundo caso, o comportamento pode variar entre navegadores, mas geralmente retorna \`"[object Object]"\`.`
  }
];
