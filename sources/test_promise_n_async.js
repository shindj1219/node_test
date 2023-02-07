function devide(numA, numB) {
  return new Promise((resolve, reject) => {
    if (numB === 0) {
      reject(new Error("Unable to devide by 0."));
    } else {
      resolve(numA / numB);
    }
  });
}

function testPromise() {
  devide(8, 2)
  .then((result) => {
    console.log("성공:", result);
  })
  .catch((error) => {
    console.log("실패:", error);
  });
}

async function testAsyncAwait() {
  try {
    let result = await devide(8, 2);
    console.log("성공:", result);
  } catch(error) {
    console.log("실패:", error);
  }
}

testPromise();
testAsyncAwait();