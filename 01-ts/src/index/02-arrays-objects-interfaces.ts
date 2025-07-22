const jsTools: string[] = ["React", "Angular", "Vue", "React Native", "Svelte"]
jsTools.forEach((tool, idx) => {
    console.log(`${idx + 1} - ${tool}`)
})

// al hacer hover vemos el tipo del objeto
const melville = {
    firstName: "Herman",
    lastName: "Melville",
    books: ["Moby Dick", "White Jacket", "Billy Budd", "Isle of the Cross"],
    born: 1819,
    city: "New York",
    country: "USA",
    died: 1891,
}

// podemos resolverlo en línea, pero no es reutilizable
const cortazar: {
    firstName: string,
    lastName: string,
    books: string[],
    born: number,
    city: string,
    country: string,
    died: number | "alive",
} = {
    firstName: "Julio",
    lastName: "Cortázar",
    books: ["Rayuela", "Bestiario", "Final del juego", "Casa tomada"],
    born: 1914,
    city: "Bruselas",
    country: "Bélgica",
    died: 1984,

}

// Lo más recomendable en estos casos (objetos) es crear una interfaz reusable -> al transpilar a JavaScript, se elimina la interfaz. Pero TypeScript la usa para validar el código y autocompletar. Cada interfaz es un contrato que debe cumplir un objeto para ser considerado de ese tipo. Es una forma de definir la estructura de un objeto, especificando qué propiedades debe tener y sus tipos.
export interface Author {
    firstName: string
    lastName: string
    books: string[]
    born: number
    city: string
    country: string
    died: number | "alive"
    // bestSeller?: string // el signo de interrogación indica que es opcional
    // También podemos definir métodos dentro de la interfaz. No poseen lógica, solo la firma y el tipo de valor de retorno
    // getFullName: () => string
}
//lo exportamos para poder usarlo en otros archivos
export const vargasLlosa: Author = {
    firstName: "Mario",
    lastName: "Vargas Llosa",
    books: ["La ciudad y los perros", "La casa verde", "El Paraíso en la otra esquina", "La fiesta del chivo"],
    born: 1936,
    city: "Arequipa",
    country: "Perú",
    died: 2025,

}

//Solo vargasLlosa cumple con la interfaz Author, por lo que podemos usarlo como tal. Entonces, por qué se me permite agregar melville y cortazar a un array de tipo Author? Porque TypeScript permite que un objeto sea considerado de un tipo si cumple con la estructura de la interfaz, incluso si no se define explícitamente como tal. Es decir, si un objeto tiene todas las propiedades requeridas por la interfaz, se puede tratar como un objeto de ese tipo. De todos modos, lo correcto es que cada objeto del tipo Author sea definido como tal, para que el código sea más claro y mantenible.
const authors: Author[] = []
authors.push(melville)
authors.push(cortazar)
authors.push(vargasLlosa)
for (const author of authors) {
    console.log(author)
}
