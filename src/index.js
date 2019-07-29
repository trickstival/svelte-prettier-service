const prettier = require('prettier')
const express = require('express')
const prettierSvelte = require('prettier-plugin-svelte')
const { RequestValidator } = require('./validator')

const app = express()
app.use(express.json())

app.post('/prettier', (req, res) => {
    RequestValidator.prettier(req.body)
    const {
        code,
        options
    } = req.body

    const formattedCode = prettier.format(code, {
        plugins: [
            prettierSvelte,
        ],
        ...options
    })
    res.json({ formattedCode })
})

const port = 8376

app.listen(port, () => {
    console.log(`Prettier service started on port ${port}`)
})
