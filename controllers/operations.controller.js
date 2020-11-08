const { validationResult } = require('express-validator');

exports.sum = (req, res, next) => {
  const errors = validationResult(req);
  validateErrors(errors);

  try {
    const valueOne = +req.body.valueOne;// se agrega más para que se vuelvan un valor numérico
    const valueTwo = +req.body.valueTwo;
    const resultSum = valueOne + valueTwo;
    res.status(201).json({ message: "sum success.", data: { resultSum } });

  } catch (e) {
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

exports.substract = (req, res, next) => {
  const errors = validationResult(req);
  validateErrors(errors); 

  try {
    const valueOne = +req.body.valueOne;// se agrega más para que se vuelvan un valor numérico
    const valueTwo = +req.body.valueTwo;
    const resultSum = valueOne - valueTwo;
    res.status(201).json({ message: "substract success.", data: { resultSum } });

  } catch (e) {
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

exports.multiplication = (req, res, next) => {
  const errors = validationResult(req);
  validateErrors(errors);

  try {
    const valueOne = +req.body.valueOne;// se agrega más para que se vuelvan un valor numérico
    const valueTwo = +req.body.valueTwo;
    const resultSum = valueOne * valueTwo;
    res.status(201).json({ message: "multiplication success.", data: { resultSum } });

  } catch (e) {
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

exports.divide = (req, res, next) => {
  const errors = validationResult(req);
  validateErrors(errors);

  try {
    const valueOne = +req.body.valueOne;// se agrega más para que se vuelvan un valor numérico
    const valueTwo = +req.body.valueTwo;
    const resultSum = valueOne / valueTwo;
    res.status(201).json({ message: "multiplication success.", data: { resultSum } });

  } catch (e) {
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

function validateErrors(errors){
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
}
