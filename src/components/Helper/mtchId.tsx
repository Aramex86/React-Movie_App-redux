export const matchIdFunc = (array: any[], value: any) => {
  return array.filter((item: { id: any }) => item.id == value);
};
