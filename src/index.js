import { CheckUrlsGenerator } from './asyncGenerators.js'
import { CheckUrls } from './asyncIterators.js'
import { fruitGenerator, generator } from './generator.js'
import { Matrix } from './iterableProtocol.js'
import { createAlphabetIterator } from './simpleIterator.js'

const alphabetIterator = createAlphabetIterator()
let iterationResult = alphabetIterator.next()
while (!iterationResult.done) {
    console.log(iterationResult.value)
    iterationResult = alphabetIterator.next()
}


const matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const matrixIterator = matrix[Symbol.iterator]()
let matrixIterationResult = matrixIterator.next()
while (!matrixIterationResult.done) {
    console.log(matrixIterationResult.value)
    matrixIterationResult = matrixIterator.next()
}

const fruitIterator = fruitGenerator()
let fruitIterationResult = fruitIterator.next()
while (!fruitIterationResult.done) {
    console.log(fruitIterationResult.value)
    fruitIterationResult = fruitIterator.next()
}

console.log('Using next():')
const nextIterator = generator()
nextIterator.next()
console.log(nextIterator.next('nodejs'))

console.log('Using throw():')
const throwIterator = generator()
throwIterator.next()
console.log(throwIterator.throw(new Error('Boom!')))

console.log('Using return():')
const returnIterator = generator()
returnIterator.next()
console.log(returnIterator.return('My return value'))


const checkUrls = new CheckUrls([
    'https://nodejsdesignpatterns.com',
    'https://example.com',
    'https://mustbedownforsurehopefully.com'
])

const checkUrlsGenerator = new CheckUrlsGenerator([
    'https://nodejsdesignpatterns.com',
    'https://example.com',
    'https://mustbedownforsurehopefully.com'
])

async function checkUrl() {
    for await (const status of checkUrls) {
        console.log(status)
    }

    for await (const status of checkUrlsGenerator) {
        console.log(status)
    }
}

checkUrl()