import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const adition = (value) => {
  return {
    type: actionTypes.ADITION,
    val: value
  };
};

export const substraction = (value) => {
  return {
    type: actionTypes.SUBSTRACTION,
    val: value
  };
};
