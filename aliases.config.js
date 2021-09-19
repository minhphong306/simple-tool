const path = require('path')
const aliases = {
    '@utils': 'src/utils',
    '@component': 'src/components',
    '@': 'src',
}

module.exports = {
    webpack: {},
}

for (const alias in aliases) {
    const aliasTo = aliases[alias]
    module.exports.webpack[alias] = resolveSrc(aliasTo)
}

function resolveSrc(_path) {
    return path.resolve(__dirname, _path)
}
