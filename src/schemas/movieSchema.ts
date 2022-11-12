import joi from "joi";

export const MovieSchema: joi.ObjectSchema<string | number> = joi.object({
  name: joi.string().required(),
  genre_id: joi.number().required(),
  streaming_id: joi.number().required(),
  status_id: joi.number().required(),
});
