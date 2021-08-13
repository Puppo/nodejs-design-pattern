

export class Matrix {

    constructor(inMatrix) {
        this.data = inMatrix
    }

    get(row, column) {
        if (row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError("Out of bounds")
        }
        return this.data[row][column]
    }

    set(row, column, value) {
        if (row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError("Out of bounds")
        }
        this.data[row][column] = value
    }

    [Symbol.iterator]() {
        let nextRow = 0
        let nextColumn = 0

        return {

            next: () => {
                if (nextRow >= this.data.length) {
                    return { done: true }
                }

                const currVal = this.data[nextRow][nextColumn]

                if (nextColumn >= this.data[nextRow].length - 1) {
                    nextColumn = 0
                    nextRow++
                } else {
                    nextColumn++
                }

                return { value: currVal }
            }

        }
    }

}