// enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("diego", 30, "AR", 1));
