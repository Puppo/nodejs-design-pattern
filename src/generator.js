

export function* fruitGenerator() {

    yield 'apple';
    yield 'orange';
    yield 'banana';
    return 'pear';

}

export function* generator() {
    try {
        const what = yield null
        yield 'Hello ' + what
    } catch (error) {
        yield 'Hello error: ' + error.message
    }
}