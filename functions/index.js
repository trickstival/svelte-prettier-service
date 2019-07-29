const prettier = require('prettier')
const express = require('express')
const prettierSvelte = require('prettier-plugin-svelte')
const { RequestValidator } = require('./validator')

const app = express()
app.use(express.json())

export default (payload) => {
    RequestValidator.prettier(payload)
    const {
        code,
        options
    } = payload

    const formattedCode = prettier.format(code, {
        plugins: [
            prettierSvelte,
        ],
        ...options
    })
    return { formattedCode }
}

