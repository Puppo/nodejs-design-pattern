const me = new Proxy({
    firstName: 'Luca',
    lastName: 'Del Puppo',
    age: 28,
}, {
    get: function (target, property) {
        console.log('get target', target, 'property', property);
        return target[property];
    },
    set: function (target, property, value) {
        console.log('set target', target, 'property', property, 'value', value)
        return target[property] = value;
    }
})

console.log('Me FirstName', me.firstName)
console.log('Me LastName', me.lastName)
console.log('Me Age', me.age)

me.firstName = 'Marco'
me.lastName = 'Pluto'
me.age = 29

// side effects
const evenNumber = new Proxy([], {
    get: (_, property) => property * 2,
    has: (_, property) => property % 2 === 0
})

console.log(2 in evenNumber)
console.log(5 in evenNumber)
console.log(evenNumber[7])
