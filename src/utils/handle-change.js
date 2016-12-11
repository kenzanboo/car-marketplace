export const handleTextChange = (updateFunction, event) => {
  const value = event.target.value;
  const key = event.target.id;
  const updatedObj = {};
  updatedObj[key] = value;
  updateFunction(updatedObj);
};

export const handleSelectChange = (updateFunction, key, event, index, value) => {
  const updatedObj = {};
  updatedObj[key] = value;
  updateFunction(updatedObj);
};
