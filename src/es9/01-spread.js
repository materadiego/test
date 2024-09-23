const user = {
  userName: "Diego",
  age: 30,
  country: "AR",
};

const { userName, ...values } = user;

console.log(user);
console.log(userName);
console.log(values);
