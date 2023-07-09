export const getData = (list, id) => {
    return list?.find((place) => place.id === +id);
  };