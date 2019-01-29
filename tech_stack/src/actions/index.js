export const selectLibarary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId

  };
};
