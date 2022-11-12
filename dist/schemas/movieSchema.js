import joi from "joi";
export var MovieSchema = joi.object({
    name: joi.string().required(),
    genre_id: joi.number().required(),
    streaming_id: joi.number().required(),
    status_id: joi.number().required()
});
