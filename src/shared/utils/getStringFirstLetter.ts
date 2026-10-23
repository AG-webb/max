export const getStringFirstLetter = (string: string) => {
  const regex = /^\p{L}|[0-9]$/iu; // Any letter or number

  for (let i = 0; i < string.length; i++) {
    if (!regex.test(string.charAt(i))) continue;

    return string.charAt(i).toUpperCase();
  }

  return "";
};
