export function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (details) { return details.message; });
            return res.status(404).send({ message: errors });
        }
        next();
    };
}
