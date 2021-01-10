const getNewValue = (currentValue, action) => {
  let newValue;
  switch(action) {
    case 'increment':
      newValue = currentValue + 1;
      break;
    case 'decrement':
      if (currentValue > 1) {
        newValue = currentValue - 1;
      } else {
        newValue = currentValue;
      }
      break;
    default:
      newValue = currentValue;
  }
  return newValue;
};

export default getNewValue;
