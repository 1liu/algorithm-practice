/*
 */
const cc = "12345678901234";
const regex = /\d(?=\d{4})/g;
const result = cc.replace(regex, "*");
console.log(result);
