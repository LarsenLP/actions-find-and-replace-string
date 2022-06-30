const core = require('@actions/core')
const github = require('@actions/github')

try {
    const source = core.getInput('source')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
    const value = source.replaceAll(find, replace)
    core.setOutput('value', value)
} catch (error) {
    core.setFailed(error.message)
}