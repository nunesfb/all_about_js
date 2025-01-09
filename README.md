# BASIC JAVASCRIPT

ES6, ES7, ES8, ES9, ES10, ES2020, ES2021, ES2022 features

## ES6 (2015)

### Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### Destructuring

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

### Template Literals

```javascript
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

### Modules

```javascript
// file1.js
export const greet = (name) => `Hello, ${name}!`;

// file2.js
import { greet } from "./file1.js";
console.log(greet("World")); // Hello, World!
```

## ES7 (2016)

### Exponentiation Operator

O operador de exponenciação (\*\*) foi introduzido no ES7 (2016) e é usado para calcular a potência de um número. Em essência, ele é uma forma mais simples e legível de usar a função Math.pow().

```javascript
console.log(2 ** 3); // 2 elevado à potência 3 = 2 * 2 * 2 = 8
```

### Array Includes

```javascript
const fruits = ["apple", "banana"];
console.log(fruits.includes("apple")); // true
```

## ES8 (2017)

### Async/Await

```javascript
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
};
fetchData();
```

### Object.entries()

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
```

### String Padding

A funcionalidade String Padding foi introduzida no ES8 (2017) e permite preencher (ou "pad") uma string com caracteres adicionais até que ela atinja um determinado comprimento. Existem dois métodos para isso:

- padStart(targetLength, padString)
- padEnd(targetLength, padString)

```javascript
console.log("5".padStart(3, "0")); // 005
```

## ES9 (2018)

### Rest/Spread Properties

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(rest); // { b: 2, c: 3 }
```

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Copiar objeto usando spread
const objCopy = { ...obj };

console.log(objCopy); // { a: 1, b: 2, c: 3 }
```

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combinar objetos usando spread
const combined = { ...obj1, ...obj2 };

console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }
```

## Pass by Reference vs Pass by Value

### Pass by Value

Em JavaScript, os tipos primitivos (como Number, String, Boolean, null, undefined, Symbol, e BigInt) são passados por valor.
Isso significa que uma cópia do valor é passada para a variável ou função, e alterações feitas ao valor original não afetam a cópia.

```javascript
let a = 10;
let b = a; // Uma cópia do valor de 'a' é atribuída a 'b'

b = 20; // Modificando 'b'
console.log(a); // 10 (o valor original de 'a' não foi alterado)
console.log(b); // 20
```

### Pass by Reference

Objetos (como Arrays, Functions, e Objetos propriamente ditos) são passados por referência.
Isso significa que a variável armazena um ponteiro para o local na memória onde o objeto está armazenado. Alterações no objeto afetam todas as referências a ele.

```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // 'obj2' referencia o mesmo objeto que 'obj1'

obj2.name = "Bob"; // Alterando a propriedade através de 'obj2'
console.log(obj1.name); // "Bob" (a alteração é visível em 'obj1')
console.log(obj2.name); // "Bob"
```

### Comparação Direta

**Pass by Value**

```javascript
let x = 5;
function modifyValue(val) {
  val = 10; // Isso não afeta 'x'
}

modifyValue(x);
console.log(x); // 5 (não alterado)
```

**Pass by Reference**

```javascript
let arr = [1, 2, 3];
function modifyArray(array) {
  array[0] = 99; // Modifica o array original
}

modifyArray(arr);
console.log(arr); // [99, 2, 3] (o array original foi alterado)
```

Mesmo em objetos (Pass by Reference), se você sobrescrever a referência completamente, a alteração não se reflete no original:

```javascript
let obj = { name: "Alice" };

function replaceObject(o) {
  o = { name: "Bob" }; // Substituímos a referência
}

replaceObject(obj);
console.log(obj.name); // "Alice" (o objeto original não foi substituído)
```

Isso acontece porque a referência original ainda aponta para o mesmo local na memória, mas o novo objeto criado pela função não altera o ponteiro externo.

**Dicas para evitar confusão**

Use o operador spread para criar cópias ao trabalhar com objetos ou arrays.

```javascript
let original = { name: "Alice" };
let copy = { ...original }; // Cópia independente
copy.name = "Bob";

console.log(original.name); // "Alice" (original intacto)
console.log(copy.name); // "Bob"
```

Para arrays:

```javascript
Copiar código
let originalArray = [1, 2, 3];
let copyArray = [...originalArray]; // Cópia independente

copyArray[0] = 99;

console.log(originalArray); // [1, 2, 3]
console.log(copyArray); // [99, 2, 3]
```

## ES10 (2019)

### Optional Catch Binding

O conceito de Optional Catch Binding foi introduzido no ES10 (2019) e simplifica o uso do bloco catch ao tornar opcional a declaração de um parâmetro para capturar o erro. Isso é útil em cenários onde você não precisa acessar o objeto de erro capturado.

```javascript
try {
  throw new Error("Oops!");
} catch {
  console.log("Error caught!");
}
```

### Array.flat()

O método Array.flat() foi introduzido no ES10 (2019) e é usado para "achatar" ou flatenar arrays multidimensionais. Ele retorna um novo array com todos os elementos internos concatenados em um único nível, até a profundidade especificada.

```javascript
const arr = [1, [2, [3, [4]]]]; // O array arr é multidimensional com 4 níveis de profundidade
console.log(arr.flat(2)); // [1, 2, 3, [4]] - O método reduz dois níveis do array.
```

## ES2020

### Nullish Coalescing Operator

O operador nullish coalescing (??) foi introduzido no ES2020 e é usado para fornecer um valor padrão quando a expressão à esquerda for null ou undefined. Ele é especialmente útil para evitar valores nulos ou indefinidos em variáveis ou expressões.

```javascript
const valueNullish = 0 ?? "default"; // `0` não é null ou undefined
console.log(valueNullish); // 0
```

```javascript
const user = { name: null, age: undefined };
const displayName = user.name ?? "Guest";
const displayAge = user.age ?? 18;

console.log(displayName); // Guest
console.log(displayAge); // 18
```

### Optional Chaining

O Optional Chaining foi introduzido no ES2020 e é um operador (?.) que permite acessar propriedades de objetos ou chamar métodos de maneira segura. Ele evita erros ao tentar acessar propriedades de objetos que podem ser null ou undefined.

```javascript
const user = { profile: { name: "Alice" } };

// Acessar propriedade existente
console.log(user?.profile?.name); // Alice

// Tentar acessar propriedade inexistente
console.log(user?.address?.city); // undefined
```

## ES2021

### String.replaceAll

```javascript
const str = "banana";
console.log(str.replaceAll("a", "o")); // bonono
```

### Logical Assignment Operators

**OR Logical Assignment (||=)**

Atribui um novo valor apenas se a variável atual for falsy (false, 0, null, undefined, NaN, ou "").

```javascript
let a = 0;
a ||= 5; // Atribui 5 porque 0 é falsy
console.log(a); // 5
```

**AND Logical Assignment (&&=)**

Atribui um novo valor apenas se a variável atual for truthy.

```javascript
let b = 1;
b &&= 5; // Atribui 5 porque 1 é truthy
console.log(b); // 5
```

**Nullish Coalescing Assignment (??=)**

Atribui um novo valor apenas se a variável atual for null ou undefined.

```javascript
let c = null;
c ??= 5; // Atribui 5 porque c é null
console.log(c); // 5
```

### ES2022

## Class Fields

```javascript
class Person {
  name = "Alice"; // Public field
  #age = 25; // Private field

  getAge() {
    return this.#age;
  }
}

const p = new Person();

console.log(p.name); // Alice
console.log(p.age); // undefined
console.log(p.getAge()); // 25
```

### Top-Level Await

Antes do Top-Level Await, o uso do await era restrito a dentro de funções marcadas como async. Isso exigia que os desenvolvedores encapsulassem a lógica em uma função para lidar com operações assíncronas.

Com o Top-Level Await, é possível usar await diretamente no escopo principal de um módulo, simplificando o código em situações como chamadas de API, inicializações dependentes de dados, e mais.

**Exemplo Prático**

```javascript
const response = await fetch("https://api.example.com/data");
const data = await response.json();

export default data;
```

Neste caso, os dados são carregados antes que sejam exportados, garantindo que o módulo esteja pronto para uso imediato.

Se um módulo usar Top-Level Await, qualquer outro módulo que o importe será bloqueado até que a operação assíncrona seja concluída.

```javascript
// moduloA.js
export const data = await fetch("https://api.example.com/data");

// moduloB.js
import { data } from "./moduloA.js";
console.log(data); // Só é executado após o fetch de moduloA.js ser concluído
```

Tratamento de Erros:

Erros em operações com await devem ser tratados explicitamente para evitar falhas no módulo.

```javascript
try {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );
  console.log(data);
} catch (error) {
  console.error("Erro ao buscar dados:", error);
}
```

Casos de Uso Comuns

- Configuração Inicial de Aplicativos: Carregar dados de configuração ou autenticação antes que o aplicativo inicie.

- Pré-Carregamento de Dados: Buscar dados críticos necessários antes que outros módulos sejam carregados.

- Integração com APIs ou Backends: Realizar chamadas API diretamente no escopo principal do módulo.

### Array.findLast

O método Array.findLast() foi introduzido no ES2022 e é usado para encontrar o último elemento de um array que satisfaz uma condição especificada em uma função de callback.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.findLast((num) => num % 2 === 0)); // 4
```

# CONTEÚDO VISTO

## Event Loop + Callback Queue

O Event Loop é um dos conceitos fundamentais do JavaScript, relacionado à sua natureza single-threaded e orientada por eventos. Ele gerencia a execução de código, eventos e tarefas assíncronas, garantindo que as operações sejam processadas na ordem correta.

**Como funciona o Event Loop?**

O Event Loop monitora continuamente as seguintes partes principais do mecanismo de execução:

- Call Stack (Pilha de Chamadas): É onde as funções são empilhadas e executadas. Quando uma função termina, ela é removida da pilha.
- Callback Queue (Fila de Retorno): Armazena tarefas assíncronas prontas para serem executadas, como setTimeout ou eventos do DOM. As tarefas na fila só são movidas para o Call Stack quando a pilha está vazia.
- Microtask Queue: Armazena tarefas mais prioritárias, como promessas resolvidas (Promise.then), que são executadas antes das tarefas da Callback Queue.

**Fluxo de Funcionamento**

1. Funções síncronas são executadas primeiro na Call Stack.
2. Quando uma operação assíncrona (ex.: setTimeout) é encontrada, ela é delegada para o navegador ou runtime (ex.: Node.js). Quando a operação termina, a callback correspondente é enviada para a Callback Queue.
3. O Event Loop verifica se a Call Stack está vazia. Se estiver vazia, ele move as funções da Callback Queue ou Microtask Queue para a pilha para execução.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

//Start
//End
//Promise resolved
//Timeout callback
```

### Pure Functions

Uma pure function (função pura) é uma função que, para os mesmos inputs, sempre retorna os mesmos outputs e não causa efeitos colaterais no programa ou no estado externo. Elas são um conceito fundamental na programação funcional e ajudam a criar código previsível, testável e reutilizável.

**Características de uma Pure Function**

- Determinística: Para os mesmos inputs, a função sempre retorna os mesmos outputs. Não depende de estados externos que podem mudar.
- Sem efeitos colaterais: Não modifica variáveis globais, objetos externos ou realiza ações como operações de I/O (ex.: manipular arquivos, modificar o DOM, ou fazer chamadas de API).

```js
// Pure Function: Não depende de estados externos e retorna o mesmo resultado para os mesmos inputs
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (sempre o mesmo resultado para os mesmos inputs)
```

### Hoisting

O hoisting é um comportamento em JavaScript onde declarações de variáveis, funções e classes são "elevadas" ao topo de seu escopo (global ou de função) durante a fase de compilação. Isso significa que você pode usar variáveis ou funções antes de declará-las, mas há diferenças de comportamento dependendo do tipo de declaração usada (var, let, const, ou function).

**Como funciona o Hoisting?**

- Declarações de variáveis com var são "elevadas" ao topo do escopo, mas sua inicialização não é elevada.
- Declarações de funções (function) são completamente elevadas — incluindo a inicialização.
- Declarações com let e const são elevadas, mas ficam em um "temporal dead zone" (zona morta temporal) até que sejam definidas no código.
- Classes são elevadas, mas também permanecem na "zona morta temporal".

**Exemplo com var**

O mecanismo de hoisting eleva a declaração var a; para o topo do escopo, mas a inicialização (a = 5) permanece na posição original.

```javascript
console.log(a); // undefined (declarada, mas não inicializada)
var a = 5;
console.log(a); // 5
```

**Exemplo com let e const**

O let é elevado ao topo do escopo, mas não é inicializado. Ele permanece na "zona morta temporal" até a linha onde é definido.

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10
```

**Exemplo com Funções**

Declarações de funções (function) são completamente elevadas, incluindo sua inicialização.

```javascript
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

**Exemplo com Classes**

Declarações de classes são elevadas ao topo, mas permanecem na "zona morta temporal" até serem definidas.

```javascript
const p = new Person(); // ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor() {
    this.name = "Alice";
  }
}
```

### Compose

Compose é um conceito da programação funcional que consiste em combinar múltiplas funções pequenas em uma única função. Essa composição de funções permite aplicar transformações de maneira sequencial, passando o output de uma função como input para outra.

```javascript
const add = (x) => x + 2;
const multiply = (x) => x \* 3;
const subtract = (x) => x - 1;
```

```javascript
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const calculate = compose(subtract, multiply, add);

console.log(calculate(5)); // (5 + 2) \* 3 - 1 = 20
```

### Currying

Currying é uma técnica na programação funcional que transforma uma função com múltiplos argumentos em uma sequência de funções unárias (que aceitam apenas um argumento por vez). Em vez de chamar uma função com todos os argumentos de uma vez, você chama funções intermediárias até que todos os argumentos sejam fornecidos.

**Função Normal**

```javascript
function multiply(a, b, c) {
return a _ b _ c;
}
console.log(multiply(2, 3, 4)); // 24
```

**Função Curried**

```javascript
const multiplyCurried = (a) => (b) => (c) => a _ b _ c;

console.log(multiplyCurried(2)(3)(4)); // 24
```

### Memoization

Memoization é uma técnica de otimização usada para melhorar o desempenho de funções ao armazenar os resultados de cálculos já realizados. Sempre que a função é chamada novamente com os mesmos argumentos, o resultado previamente calculado é recuperado de um cache, em vez de ser recalculado.

```js
function memoizedAdd() {
  const cache = {};

  return function (a, b) {
    const key = `${a},${b}`;
    if (cache[key] !== undefined) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }

    console.log("Calculating result:", key);
    const result = a + b;
    cache[key] = result;
    return result;
  };
}

const add = memoizedAdd();

console.log(add(1, 2)); // Calculating result: 1,2 → 3
console.log(add(1, 2)); // Fetching from cache: 1,2 → 3
console.log(add(2, 3)); // Calculating result: 2,3 → 5
console.log(add(2, 3)); // Fetching from cache: 2,3 → 5
```

### Partial Application

Partial Application é uma técnica de programação funcional em que você cria uma nova função ao "pré-aplicar" alguns dos argumentos de uma função existente. A nova função resultante espera os argumentos restantes para ser chamada.

```js
function partialMultiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = partialMultiply(2); // Pré-aplica 'a = 2'
console.log(multiplyBy2(3)); // 6
console.log(multiplyBy2(4)); // 8
```

### Immutability

Immutability é um conceito fundamental em programação funcional que se refere à incapacidade de modificar diretamente os dados após sua criação. Em vez de alterar o estado de um objeto ou estrutura de dados, uma cópia modificada é criada, mantendo os dados originais inalterados.

**Mutável (com problemas)**

```javascript
const numbers = [1, 2, 3];
numbers.push(4); // Modifica o array original

console.log(numbers); // [1, 2, 3, 4]
```

**Imutável (solução)**

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Cria um novo array com o valor adicionado

console.log(numbers); // [1, 2, 3] (original inalterado)
console.log(newNumbers); // [1, 2, 3, 4]
```

### Closures

Closures são uma característica do JavaScript em que uma função "lembra" do seu ambiente de criação (o escopo onde foi definida), mesmo que seja executada fora desse escopo. Isso permite que funções internas acessem variáveis do escopo externo, mesmo após o término da execução da função externa.

```js
function createCounter() {
  let count = 0; // Variável encapsulada (não acessível fora da função)

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Concurrency + Parallelism

**Concurrency (Concorrência):** É a capacidade de lidar com várias tarefas ao mesmo tempo, mesmo que não estejam sendo executadas simultaneamente. Em JavaScript, isso é gerenciado pelo Event Loop.

**Parallelism (Paralelismo):** É a execução simultânea de múltiplas tarefas em diferentes threads ou núcleos de CPU. Isso pode ser obtido em JavaScript com ferramentas como Web Workers.

**Exemplo com Concurrency**

Usando Promises para tarefas concorrentes:

```javascript
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve();
    }, 2000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed");
      resolve();
    }, 1000);
  });
}

async function concurrentTasks() {
  console.log("Starting concurrent tasks");
  await Promise.all([task1(), task2()]); // Ambas as tarefas começam ao mesmo tempo
  console.log("All tasks completed");
}

concurrentTasks();

/*
Starting concurrent tasks
Task 2 completed
Task 1 completed
All tasks completed
*/
```

**O que acontece?**

As duas tarefas começam concorrentemente.
Promise.all aguarda ambas as Promises serem resolvidas.

**Exemplo com Parallelism**

Usando Web Workers para paralelismo:

```javascript
// worker.js (arquivo separado)
self.onmessage = function (event) {
const number = event.data;
console.log(`Worker received: ${number}`);
const result = number \* number;
self.postMessage(result); // Envia o resultado de volta
};

// Criar um Worker
const worker = new Worker("worker.js");

worker.onmessage = function (event) {
console.log(`Result from worker: ${event.data}`);
};

console.log("Sending data to worker");
worker.postMessage(5); // Envia dados para o Worker
console.log("Continuing main thread work");

/*
Sending data to worker
Continuing main thread work
Worker received: 5
Result from worker: 25
*/
```

**O que acontece?**

O código principal e o Worker funcionam em paralelo.
O Worker processa o cálculo enquanto o código principal continua executando.

# TÓPICOS AVANÇADOS

### Type Coercion

Type Coercion em JavaScript refere-se à conversão automática de tipos de dados durante operações, como a combinação de diferentes tipos (ex.: string e number). Essa conversão pode ser implícita ou explícita.

```js
console.log(0 == false); // true (coercion: false é convertido para 0)
console.log(0 === false); // false (sem coercion: compara tipos e valores)

console.log("5" == 5); // true (coercion: "5" é convertido para 5)
console.log("5" === 5); // false (sem coercion)
```

### this: call(), apply(), bind()

Em JavaScript, o valor de this dentro de uma função depende de como a função é chamada. Métodos como call(), apply(), e bind() permitem controlar explicitamente o valor de this, tornando o código mais flexível e reutilizável.

**call()**

O método call() invoca uma função, permitindo especificar o valor de this e passar os argumentos individualmente.

```javascript
const person = {
  name: "Alice",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// Usando call para definir o valor de `this`
greet.call(person, "Hello", "!"); // Hello, Alice!
```

call() chama a função greet, definindo this como o objeto person.

Os argumentos são passados individualmente.

**apply()**

O método apply() funciona como call(), mas os argumentos são passados como um array.

```javascript
const person = {
  name: "Bob",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// Usando apply para definir o valor de `this`
greet.apply(person, ["Hi", "."]); // Hi, Bob.
```

apply() chama a função greet, definindo this como person.

Os argumentos são passados como um array.

**bind()**

O método bind() cria uma nova função com this permanentemente vinculado ao valor especificado. A função não é executada imediatamente, diferentemente de call() e apply().

```javascript
const person = {
  name: "Charlie",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// Usando bind para criar uma nova função
const greetCharlie = greet.bind(person);
greetCharlie("Hey", "!"); // Hey, Charlie!
```

bind() retorna uma nova função com this vinculado ao objeto person.

A nova função (greetCharlie) pode ser chamada posteriormente.

### Scope Chain

Scope Chain é o mecanismo que o JavaScript usa para resolver variáveis. Quando uma variável é referenciada, o JavaScript procura seu valor no escopo atual. Se não encontrar, ele sobe na cadeia de escopos (scope chain) até encontrar a variável ou atingir o escopo global.

- Escopo Local: Variáveis declaradas dentro de uma função só estão disponíveis nesse escopo.
- Escopo Global: Variáveis declaradas fora de qualquer função estão disponíveis em todo o programa.
- Scope Chain: Quando o JavaScript não encontra uma variável no escopo atual, ele procura no escopo externo mais próximo, e assim por diante, até chegar ao escopo global.

```javascript
const globalVar = "Global";

function outerFunction() {
  const outerVar = "Outer";

  function innerFunction() {
    const innerVar = "Inner";

    console.log(innerVar); // "Inner" (escopo local)
    console.log(outerVar); // "Outer" (escopo do pai: outerFunction)
    console.log(globalVar); // "Global" (escopo global)
  }

  innerFunction();
}

outerFunction();
```

### Function Invocation

| **Modo de Invocation** | **Valor de `this`**                        | **Exemplo**                                   |
| ---------------------- | ------------------------------------------ | --------------------------------------------- |
| Função Normal          | `undefined` (strict mode) ou objeto global | `sayHello()`                                  |
| Método                 | Objeto que contém o método                 | `person.greet()`                              |
| `call()` ou `apply()`  | Especificado explicitamente                | `greet.call(person)` ou `greet.apply(person)` |
| Construtor (`new`)     | Novo objeto criado                         | `new Person("Charlie")`                       |
| Arrow Function         | Herda do escopo léxico                     | Definida no momento da criação                |

### IIFEs

Uma IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada imediatamente após ser definida. O objetivo principal das IIFEs é criar um escopo isolado, protegendo variáveis de serem acessadas ou alteradas no escopo global.

```js
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");

// Hello, Alice!
```
