const packageJson = require('./package.json')
const { writeFileSync } = require('fs')

delete packageJson.scripts['install-latest-dev-deps']
delete packageJson.scripts['install-exact-prettier']
delete packageJson.scripts.prep
delete packageJson.scripts['reset-git']
delete packageJson.scripts.postinstall

writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))
