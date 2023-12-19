const firstname = prompt('Inserisci il tuo nome:');
console.log('firstname', firstname, typeof firstname);
const lastName = prompt('Inserisci il tuo cognome:');
console.log('lastName', lastName, typeof lastName);

// const person = {
//     firstname: firstname,
//     lastName: lastName
// };

/* 
    Nei casi in cui, il nome di una chiave e il nome di una variabile dalla quale
    voglio prendere il valore per quella specifica chiave corrispondono, posso 
    semplificare la scrittura in questo modo:
*/

const person = createPersonObject(firstname, lastName);

/* 
    Questa scrittura qui mi crea un oggetto con 2 proprietà che sono:
    - firstName
    - lastName
    Il valore di firstName è quello della VARIABILE firstName. 
    Il valore di lastName è quello della VARIABILE lastName. 
*/

console.log('person', person, typeof person);
console.log('person.firstName', person.firstName, typeof person.firstName);
console.log('person.lastName', person.lastName, typeof person.lastName);

console.log('Il mio nome completo è', person.getFullName());

const personTwo = createPersonObject('Vincenzo', 'Di Santo', true);

console.log('Il mio nome completo è', personTwo.getFullName());

// function createPersonObject(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         getFullName() {
//             return this.firstName + ' ' + this.lastName;
//         }
//     };
// }

function createPersonObject(firstName, lastName, isMillionaire = false) {
    return {
        firstName: firstName,
        lastName: lastName,
        isMillionaire: isMillionaire,
        getFullName: function() {
            /* Qui il this è l'oggetto in sé */
            console.log(this);
            return this.firstName + ' ' + this.lastName;
        }
    };
}

// function createPersonObject(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         getFullName: () => {
//             /* Qui il this è la window */
//             console.log(this);
//             return this.firstName + ' ' + this.lastName;
//         }
//     };
// }