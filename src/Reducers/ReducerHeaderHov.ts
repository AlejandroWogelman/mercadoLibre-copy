interface State {
  categories: boolean;
  user: boolean;
  favorite: boolean;
}

interface Action {
  type?: string;
}

export const Actions = {
  CATEGORIES_TRUE: "CATEGORIES_TRUE",
  CATEGORIES_FALSE: "CATEGORIES_FALSE",

  USER_TRUE: "USER_TRUE",
  USER_FALSE: "USER_FALSE",

  FAVORITE_TRUE: "FAVORITE_TRUE",
  FAVORITE_FALSE: "FAVORITE_FALSE",

  CLEAR: "CLEAR",
};
export const initialState: State = {
  categories: false,
  user: false,
  favorite: false,
};

export const reducerHover = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Actions.CATEGORIES_TRUE:
      return {
        ...initialState,
        categories: true,
      };

    case Actions.CATEGORIES_FALSE:
      return initialState;

    case Actions.FAVORITE_TRUE:
      return {
        ...initialState,
        favorite: true,
      };

    case Actions.FAVORITE_FALSE:
      return initialState;

    case Actions.USER_TRUE:
      return {
        ...initialState,
        user: true,
      };

    case Actions.USER_FALSE:
      return initialState;

    case Actions.CLEAR:
      return initialState;

    default:
      return initialState;
  }
};
