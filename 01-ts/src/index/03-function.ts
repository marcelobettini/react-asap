
/**
 * 
 * @param message - El Mensaje a mostrar en la consola.
 * Esta función muestra un mensaje en la consola.
 */
function messenger(message: string): void {
    console.log(message)
}

messenger('Hello, TypeScript!')

/**
* Esta función genera números de Fibonacci hasta un límite dado.
* @param n - La cantidad de números de Fibonacci a generar.
* @returns Una cadena que contiene los números de Fibonacci separados por comas.
*/
function fibonacciNumbers(n: number): string {
    const fib: number[] = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib.join(', ')
}

console.log(fibonacciNumbers(14))
console.log(fibonacciNumbers(25))


/**
*
* Esta función verifica si una cadena dada es un palíndromo.
* @param str - La cadena a verificar.
* @returns Verdadero si la cadena es un palíndromo, falso en caso contrario.
*/
const isPalindrome = (str: string): boolean => {
    // elimina caracteres no alfanuméricos y convierte a minúsculas
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // Verifica si la cadena limpia es la misma hacia adelante y hacia atrás
    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}
console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('Amigo, no gima')) // true
console.log(isPalindrome('Anita lava la tina')) // true
console.log(isPalindrome('hello world')) // false

/**
 * Función con parámetros opcionales y por defecto.
 * @param name - El nombre de la persona, por defecto "Guest User".
 * @param tokens - La cantidad de tokens (opcional).
 * @returns Un mensaje de saludo.
 */
function greet(name: string = "Guest User", tokens?: number): string {
    return `Hello, ${name || " guest"}. You have ${tokens || "no"} tokens.`
}

// Ejemplos de uso correcto:
console.log(greet()) // Usa el valor por defecto para name, tokens es undefined
console.log(greet("Alice")) // name = "Alice", tokens es undefined  
console.log(greet("Bob", 50)) // name = "Bob", tokens = 50

// Si querés usar el valor por defecto para name pero pasar tokens, 
// es necesario pasar undefined explícitamente:
console.log(greet(undefined, 25)) // name usa valor por defecto, tokens = 25

/**
 * Función con un objeto como parámetro.
 * @param user - Un objeto que contiene información del usuario.
 * @param book - Un libro para agregar al autor.
 * @returns void
 */

//las interfaces se importan como tipos, no como valores (type)
import type { Author } from './02-arrays-objects-interfaces'
import { vargasLlosa } from './02-arrays-objects-interfaces'

function addBookToAuthor(author: Author, book: string): void {
    author.books.push(book)
}
addBookToAuthor(vargasLlosa, 'La llamada de la tribu')
console.log(vargasLlosa.books)


