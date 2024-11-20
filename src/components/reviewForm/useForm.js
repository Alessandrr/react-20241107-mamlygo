import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 5,
};

const FORM_ACTION = {
  SET_NAME: 'SET_NAME',
  SET_TEXT: 'SET_TEXT',
  SET_RATING: 'SET_RATING',
  CLEAR: 'CLEAR',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FORM_ACTION.SET_NAME:
      return { ...state, name: payload };
    case FORM_ACTION.SET_TEXT:
      return { ...state, text: payload };
    case FORM_ACTION.SET_RATING:
      return { ...state, rating: payload };
    case FORM_ACTION.CLEAR:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE, undefined);

  const setName = (name) => {
    dispatch({ type: FORM_ACTION.SET_NAME, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: FORM_ACTION.SET_TEXT, payload: text });
  };

  const setRating = (rating) => {
    dispatch({
      type: FORM_ACTION.SET_RATING,
      payload: rating,
    });
  };

  const clear = () => {
    dispatch({ type: FORM_ACTION.CLEAR });
  };

  return {
    form,
    setName,
    setText,
    setRating,
    clear,
  };
};
