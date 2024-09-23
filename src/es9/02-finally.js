const anotherFn = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Si") : reject("No");
  });
};

anotherFn()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
