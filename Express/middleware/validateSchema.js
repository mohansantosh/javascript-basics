
module.exports = function(schema) {
    return async (req, response, next) => {
        try {
            schema.parse({
                body: req.body
            })
            next();
        } catch(error) {
            response.status(400).send({
                error: JSON.parse(error.message)
            })
        }
    }
}