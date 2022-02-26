export const isMultiple = value => (value === 0 || value > 1 ? 's' : '');

export const isCapital = value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
