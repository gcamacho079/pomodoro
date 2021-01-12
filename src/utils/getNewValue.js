const getNewValue = (currentValue, action) => {
  let newValue;
  switch(action) {
    case 'increment':
      newValue = currentValue + 1;
      break;
    case 'decrement':
      newValue = currentValue - 1;
      break;
    default:
      newValue = currentValue;
  }
  return newValue;
};

export default getNewValue;
