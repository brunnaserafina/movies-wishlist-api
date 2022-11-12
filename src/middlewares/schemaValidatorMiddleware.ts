import { Request, Response, NextFunction } from "express";
import joi from "joi";

export function validateSchema(schema: joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors: string[] = validation.error.details.map(
        (details) => details.message
      );
      return res.status(404).send({ message: errors });
    }

    next();
  };
}
