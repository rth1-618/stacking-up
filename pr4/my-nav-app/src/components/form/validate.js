export const notFilled = (ele) => {
  if (!ele) return true;
  else return false;
};

export const invalidLength = (text, min, max) => {
  let inv = !text || text.length < min;
  if (max) inv = inv || text.length > max;
  return inv;
};

export const invalidEmail = (email) => {
  const regex = RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return !regex.test(email);
};
export const invalidRating = (val) => {
  return val < 1 || val > 5;
};
