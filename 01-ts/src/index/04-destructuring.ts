//Object Destructuring

interface Actor {
    firstName: string
    lastName: string
    placeOfBirth: Place
    movies: Movie[]
}

interface Movie {
    title: string
    director: string
    year: number
}
interface Place {
    city: string
    country: string
}

const actor01: Actor = {
    firstName: 'Leonardo',
    lastName: 'DiCaprio',
    placeOfBirth: {
        city: 'Los Angeles',
        country: 'USA',
    },
    movies: [
        { title: 'Titanic', director: 'James Cameron', year: 1997 },
        { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
        { title: 'The Revenant', director: 'Alejandro González Iñárritu', year: 2015 },
        { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
    ],
}

const actor02: Actor = {
    firstName: 'Brad',
    lastName: 'Pitt',
    placeOfBirth: {
        city: 'Shawnee',
        country: 'USA',
    },
    movies: [
        { title: 'Fight Club', director: 'David Fincher', year: 1999 },
        { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
        { title: 'Se7en', director: 'David Fincher', year: 1995 },
        { title: 'Troy', director: 'Wolfgang Petersen', year: 2004 },
    ],
}

const actor03: Actor = {
    firstName: 'Tom',
    lastName: 'Hanks',
    placeOfBirth: {
        city: 'Concord',
        country: 'USA',
    },
    movies: [
        { title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 },
        { title: 'Saving Private Ryan', director: 'Steven Spielberg', year: 1998 },
        { title: 'Cast Away', director: 'Robert Zemeckis', year: 2000 },
        { title: 'The Green Mile', director: 'Frank Darabont', year: 1999 },
    ],
}


console.log(actor01.firstName + " " + actor01.lastName + ". Born in " + actor01.placeOfBirth.city + ", " + actor01.placeOfBirth.country + ".")

const { firstName, lastName, placeOfBirth: { city, country } } = actor01
// const { city, country } = actor01.placeOfBirth
console.log(`${firstName} ${lastName}. Born in ${city}, ${country}`)


const diCaprioMovies: Movie[] = [
    { title: 'Titanic', director: 'James Cameron', year: 1997 },
    { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { title: 'The Revenant', director: 'Alejandro González Iñárritu', year: 2015 },
    { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
    { title: 'Django Unchained', director: 'Quentin Tarantino', year: 2012 },
    { title: 'Catch Me If You Can', director: 'Steven Spielberg', year: 2002 },
    { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010 },
    { title: 'The Wolf of Wall Street', director: 'Martin Scorsese', year: 2013 },
    { title: 'Gangs of New York', director: 'Martin Scorsese', year: 2002 },
    { title: 'The Aviator', director: 'Martin Scorsese', year: 2004 },
    { title: 'The Great Gatsby', director: 'Baz Luhrmann', year: 2013 },
]

const sortedMovies = diCaprioMovies.toSorted((a, b) => a.year - b.year)
//spread operator
const [firstMovie, secondMovie, ...rest] = sortedMovies
console.log(firstMovie, secondMovie)
console.log(rest)
const actors: Actor[] = [actor01, actor02, actor03]

//for of sin desesctructurar las props
for (const actor of actors) {
    console.log(`${actor.firstName} ${actor.lastName} was born in ${actor.placeOfBirth.city}, ${actor.placeOfBirth.country}.`)
}
//el mismo pero desestructurando
for (const { firstName, lastName, placeOfBirth: { city, country } } of actors) {
    console.log(`${firstName} ${lastName} was born in ${city}, ${country}.`)
}

//for Each sin desestructurar las props
actors.forEach((actor) => {
    console.log(`${actor.firstName} ${actor.lastName} was born in ${actor.placeOfBirth.city}, ${actor.placeOfBirth.country}.`)
})
//for Each desestructurando las props
actors.forEach(({ firstName, lastName, placeOfBirth: { city, country } }) => {
    console.log(`${firstName} ${lastName} was born in ${city}, ${country}.`)
})