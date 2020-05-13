export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BASE_COLOR':
      return {...state, baseColor: action.payload.color}
    case 'SET_COLOR_COUNT':
      return {...state, count: action.payload.count}
    case 'SET_COLOR_ROTATION':
      return {...state, rotation: action.payload.rotation}
    case 'SET_COLOR_LIGHTNESS':
      return {...state, lightness: action.payload.lightness}
    case 'SET_COLOR_SATURATION':
      return {...state, saturation: action.payload.saturation}
    default:
      return state
  }
}
