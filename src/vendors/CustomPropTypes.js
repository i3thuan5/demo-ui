export const 分詞格式 = (props, propName, componentName) => {
  if (!/｜/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Should follow 分詞 format.'+
      ' Validation failed.'
    );
  }
}