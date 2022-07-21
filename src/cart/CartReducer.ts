interface CoffeeCart {
  id: string;
  quantity: number;
}

interface CoffeeCartAction extends CoffeeCart {
  type: string;
  payload: CoffeeCart;
}

export enum Actions {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
}
export function cartReducer(state: CoffeeCart[], action: CoffeeCartAction) {
  switch (action.type) {
    case Actions.ADD_ITEM: {
      const updateExistent = state.findIndex((e) => e.id == action.payload.id);
      if (updateExistent < 0) {
        const newItem = {
          id: action.payload.id,
          quantity: action.payload.quantity,
        };
        state = [...state, newItem];
      } else {
        const newState = [...state];
        newState[updateExistent] = {
          ...newState[updateExistent],
          quantity: newState[updateExistent].quantity + action.payload.quantity,
        };
        state = [...newState];
      }
      return state;
    }
    case Actions.REMOVE_ITEM: {
      state = [...state].filter((e) => e.id != action.payload.id);
      return state;
    }
    case Actions.UPDATE_ITEM: {
      const targetIndex = state.findIndex((e) => e.id == action.payload.id);
      if (targetIndex < 0) return console.log("No item found in cart.");
      const updatedArray = [...state];
      updatedArray[targetIndex].quantity = action.payload.quantity;
      state = [...updatedArray];
    }
    default:
      return state;
  }
}
