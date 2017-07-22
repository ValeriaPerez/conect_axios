const initialState = 0;

export default function numero(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;

    case 'DECREMENTAR':
      return state - 1;

    case 'MULTIPLICAR':
      return state * 2;
    default:
      return state;
  }
}
