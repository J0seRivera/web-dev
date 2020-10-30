const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.favoritos.find(item => item.id === action.payload.id)
      if (exist) return { ...state }

      return {
        ...state,
        favoritos: [...state.favoritos, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favoritos: state.favoritos.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VEHICLE_SOURCE':
      return {
        ...state,
        viewing: state.vehiculos.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};
export default reducer;
