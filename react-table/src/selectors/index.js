export const selectedTableLineSelector = (state, id) => {
  return state.find((tableLine => tableLine._id === id));
}

export const getLoadingShowTableLine = (state) => {
  if (state.length === 0) return true;
  if (state.length !== 0) return false;
}