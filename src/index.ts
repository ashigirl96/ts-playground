
function asyncFunc(params: number): Promise<number> {
  return new Promise(resolve =>  {
    setTimeout(() => {
      resolve(params);
    }, 2000)
    }
  )
}

async function sample() {
  const result = await asyncFunc(3);
  return result + 5;
}

sample().then(result => {
  console.log(result);
});

async function sum(array: number[]) {
  return array.reduce(async (sum, value) => {
    return await sum + await asyncFunc(value);
  }, 0);
}

sum([4, 2]).then(value => {
  console.assert(typeof value === "number");
  console.log(value);
});