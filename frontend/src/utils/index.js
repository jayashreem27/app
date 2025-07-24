export const shortenText = (text, n) => {
  if (text && text.length > n) { // Check if 'text' is defined
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};

//validate Email
export const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};