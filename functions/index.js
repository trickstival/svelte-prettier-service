const prettier = require('prettier')
const prettierSvelte = require('prettier-plugin-svelte')
const functions = require('firebase-functions')
const { RequestValidator } = require('./validator')

const admin = require('firebase-admin')
admin.initializeApp()

const handleCode = (payload) => {
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

exports.prettify = functions.https.onRequest((req, res) => {
    res.json(handleCode(req.body))
})

