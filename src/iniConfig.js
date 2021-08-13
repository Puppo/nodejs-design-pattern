import ini from 'ini'
import { ConfigTemplate } from './configTemplate.js'

export class IniConfig extends ConfigTemplate {

    _serialize(data) {
        return ini.stringify(data)
    }

    _deserialize(data) {
        return ini.parse(data)
    }

}