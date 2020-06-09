/*  takes in a credit card number and returns a string that replaces all but the last four digits with stars, like this: "************1111" */
const cc = "12345678901234";
const regex = /\d(?=\d{4})/g;
const result = cc.replace(regex, "*");
console.log(result);
