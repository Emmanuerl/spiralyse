import joi from "joi";
import joiObjectId from "joi-objectid";

joi.objectId = joiObjectId(joi);

export const isCreateProductDTO = joi.object().keys({
  name: joi.string().required().trim(),
  price: joi.number().positive().required(),
});

export const isUpdateProducDTO = joi.object().keys({
  name: joi.string().optional().trim(),
  price: joi.number().positive().optional(),
});

export const isProductID = joi.object().keys({
  id: joi.objectId().required(),
});
