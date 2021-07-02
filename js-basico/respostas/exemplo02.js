//`Concatenar x interpolar` | Vamos criar variaveis usando let, const e var,
// atribuir strings e vamos concatenar e interpolar.

const a = "Meu nome é: "
const b = "André"

const c = a.concat(b);

console.log("Primeira maneira de concatenar em JavaScript:")
console.log(a + b);
console.log("Segunda maneira de concatenar em JavaScript:")
console.log(c);

//Concatenando arrays em JavaScript

const d = ["a","b","c","d"];
const e = [1,2,3,4];
const f = d.concat(e);

console.log(f);

//Usando interpolação no JavaScript

console.log(`Olá, ${a}${b}`);
console.log(`Olá, ${a+b}`);

