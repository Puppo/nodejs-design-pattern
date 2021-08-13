import ini from 'ini'

export const iniStrategy = {
    deserialize: ini.parse,
    serialize: ini.stringify
}


export const jsonStrategy = {
    deserialize: JSON.parse,
    serialize: data => JSON.stringify(data, null, '  ')
}
