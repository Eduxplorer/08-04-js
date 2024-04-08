// function minhaFuncao() {
//     console.log("Testando")
// }

// minhaFuncao()
// minhaFuncao()
// minhaFuncao()
// minhaFuncao()

// const minhaFuncaoEmVariavel = function (txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// minhaFuncaoEmVariavel ("sapato")
// minhaFuncaoEmVariavel ("colher")
// minhaFuncaoEmVariavel (5+5)

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;       

// function soma (a, b) {
//     console.log(`A soma entre ${a} e ${b} é = ${a + b}`)
//     console.log(`A sub entre ${a} e ${b} é = ${a - b}`)
//     console.log(`A div entre ${a} e ${b} é = ${a / b}`)
//     console.log(`A multi entre ${a} e ${b} é = ${a * b}`)
// }

// soma (a,b) 
// // soma (c,b) 
// soma (d,a) 

// function raizQuadrada (numero) {
//     return numero * numero

// }

// console.log(raizQuadrada(4))

// Função Anonima

// const raizquadrada = (numero) => {
//     return numero * numero
// }

// console.log(raizquadrada(4))

// const testArrow = () => {
//     console.log("Essa é uma arrow function")
// }

// testArrow ()

// const parOuImpar = (n) => {
//     if (n % 2 === 0) {
//         console.log(`${n} é par`)
//         return 
//     }
//     console.log(`${n} é impar`)
// }

// parOuImpar(2)

// const lista = [1, 2, 3, 4, 5]

// console.log(lista)
// console.log(typeof lista)

// console.log(lista[1])
// console.log(lista[0])
// console.log(lista[6])
// console.log(lista.length)

// const lista2 = ["Fusca", "Variant", "Chevete", "Golf", "Opala", "Brasilia"]

// for(let i = 0; i < lista2.length; i++){
//     console.log(`Elemento da lista: ${lista2[i]}`)
// }   

// const cores = ["Azul", "amarelo", "verde", "vermelho", "branco"] 
//     for(let i = 0; i < cores.length; i++){
//         console.log(`Está cor é ${cores[i]}`)
// }

// const nums = [1, 2, 3, 4, 5]

// nums.forEach((n) => {
//     console.log(`O número atual é: ${n}`)
// })

// const numbers = [5, 12, 4, 22];
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto"
// const text2 = "EITA JOVEM!"

// console.log(text.toUpperCase())
// console.log(text2.toLocaleLowerCase())

// const array = ["a", "b", "c"]

// array.push("d")

// // console.log(array)
// // console.log(array.length);

// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido)
// console.log(array)
// console.log(array.length)

// array.push("Dá", "Para", "Inserir", "Vários")

// console.log(array)

const letters = ["a", "b", "c"]

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("z", "x", "y")

letters.unshift("p")

console.log(letters)