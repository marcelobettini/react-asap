// tipado estático e inferencia de tipos
let firstName = "Marcelo"
let lastName: string = "Bettini" //best practice

let isProfessor: boolean = true
let isStudent: boolean = true
let courses: number = 5

console.log({
    'First Name': firstName,
    "Last Name": lastName,
    "Is Professor": isProfessor,
    "Is Student": isStudent,
    "Courses": courses
})

//enums (erasableSyntaxOnly: false) debido a que JavaScript no tiene enums
// son una forma de definir un conjunto de constantes con nombre
// se pueden usar para representar roles, estados, etc.
// en TypeScript, los enums se compilan a objetos en JavaScript
// esto permite que los enums sean utilizados en tiempo de ejecución
// y se pueden usar para mejorar la legibilidad del código
// ejemplo de uso de enums
enum UserRole {
    Professor = "professor",
    Student = "student"
}
let userRole: UserRole = UserRole.Professor
userRole = UserRole.Student

//literal types
// son tipos que representan un valor específico y, por lo tanto, son más restrictivos que los tipos primitivos.
let userStatus: "active" | "inactive" = "active"
userStatus = "inactive"
// userStatus = "pending" // Error: Type '"pending"' is not assignable to type '"active" | "inactive"'.


//union types
let mixedTypes: number | string = "Hola Mundo"
mixedTypes = 12

let mixedWithConstantValue: number | "COUNT STOPPED"
mixedWithConstantValue = 1
mixedWithConstantValue = 99
mixedWithConstantValue = "COUNT STOPPED"

// intersection types
// se pueden combinar tipos para crear un nuevo tipo que tenga todas las propiedades de los tipos combinados
type User = {
    firstName: string
    lastName: string
    isProfessor: boolean
    isStudent: boolean
    courses: number
}
type UserWithRole = User & {
    role: UserRole
}
let user: UserWithRole = {
    firstName: "Marcelo",
    lastName: "Bettini",
    isProfessor: true,
    isStudent: false,
    courses: 5,
    role: UserRole.Professor
}
console.log(user)


console.log({
    'First Name': firstName,
    "Last Name": lastName,
    "Is Professor": isProfessor,
    "Is Student": isStudent,
    "Courses": courses
})
