export const initialState = [
    {
        item: 'learn about reducers',
        completed: false,
        id: 1,
    },
    {
        item: 'write a medium article',
        completed: false,
        id: 2,
    },
    {
        item: 'check abramov twiter',
        completed: false,
        id: 3,
    },
    {
        item: 'prep for lecture',
        completed: false,
        id: 4,
    },
];

export const reducer = (state, action) => {
    const { type } = action;
    // we can store data in an action object at action.payload

    switch(type) {
      case 'ADD_TODO':
            const newToDo = {
                id: new Date().getUTCMilliseconds(),
                item: action.payload.item,
              };
        return [...state, newToDo]
    case 'DELETE_TODO':
            return [...state].filter( element => element.id !== action.payload.id);
      default:
        return state;
    }
  };