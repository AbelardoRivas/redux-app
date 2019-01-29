export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADITION = 'ADITION';
export const SUBSTRACTION = 'SUBSTRACTION';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const adition = (value) => {
  return {
    type: ADITION,
    val: value
  };
};

export const substraction = (value) => {
  return {
    type: SUBSTRACTION,
    val: value
  };
};

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  };
};
