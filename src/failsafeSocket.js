import { OfflineState } from './offlineState.js'
import { OnlineState } from './onlineState.js'

export class FailsafeSocket {

    constructor(options) {
        this.options = options
        this.queue = []
        this.currentState = null
        this.states = {
            offline: new OfflineState(this),
            online: new OnlineState(this)
        }
        this.changeState('offline')
    }

    changeState(state) {
        console.log(`Changing state to ${state}`)
        this.currentState = this.states[state]
        this.currentState.activate()
    }

    send(data) {
        this.currentState.send(data)
    }

}