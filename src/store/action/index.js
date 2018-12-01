import { TODOADD, REMOVEITEMS } from './actionType';

const initialState = {
    todoItems: [],
};

const todoAddSucces = item => ({
    item,
    type: TODOADD,
  });

export const todoAdd = item => (
    dispatch => {
      return (
        dispatch(todoAddSucces(item))
      );
    }
  );

export const removeItem = index => (
    {
        type: REMOVEITEMS,
        index,
    }
)