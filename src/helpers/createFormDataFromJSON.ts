function createFormDataFromJSON(object: Record<string, any>): FormData {
  const formData = new FormData();

  Object.keys(object).forEach(key => {
    const value = object[key];
    
    if (Array.isArray(value)) {
      value.forEach(item => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });
  
  return formData;
}

export default createFormDataFromJSON;
