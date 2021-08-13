import { promises as fs } from 'fs'
import objectPath from 'object-path'

export class ConfigTemplate {
    constructor() {
        this.data = {}
    }

    get(configPath) {
        return objectPath.get(this.data, configPath)
    }

    set(configPath, value) {
        return objectPath.set(this.data, configPath, value)
    }

    async load(filePath) {
        console.log(`Deserializing from ${filePath}`)
        this.data = this._deserialize(
            await fs.readFile(filePath, 'utf8')
        )
    }

    async save(filePath) {
        console.log(`Serializing to ${filePath}`)
        await fs.writeFile(filePath, this._serialize(this.data))
    }

    _serialize() {
        throw new Error('_serialize() must be implemented')
    }

    _deserialize() {
        throw new Error('_deserialize() must be implemented')
    }

}
