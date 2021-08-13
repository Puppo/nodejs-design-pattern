import superagent from 'superagent'

export class CheckUrls {

    constructor(urls) {
        this.urls = urls
    }

    [Symbol.asyncIterator]() {
        const urlsIterators = this.urls[Symbol.iterator]()

        return {

            async next() {
                const iteratorResult = urlsIterators.next()
                if (iteratorResult.done) {
                    return { done: true }
                }

                const url = iteratorResult.value

                try {
                    const checkResult = await superagent.head(url).redirects(2)
                    return { value: `${url} is up, status ${checkResult.status}` }
                } catch (error) {
                    return { value: `${url} is down, error ${error.message}` }
                }

            }

        }
    }

}