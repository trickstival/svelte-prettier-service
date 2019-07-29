const Joi = require('@hapi/joi')

const Validator = (schema) => {
    return (payload) => {
        const result = Joi.validate(payload, schema)
        if (result.error) {
            throw result.error
        }
        return true
    }
}

module.exports.RequestValidator = {
    prettier: Validator(
        Joi.object().required().keys({
            code: Joi.string().required(),
            options: Joi.object()
        })
    )
}