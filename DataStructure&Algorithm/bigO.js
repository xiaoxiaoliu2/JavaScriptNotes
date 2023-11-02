const nemo = [`nemo`];
const everyone = [`dory`, `bruce`, `marlin`, `nemo`, `gill`, `bloat`, `nigel`, `squirt`, `darla`, `hank`];
const large = new Array(5).fill(`nemo`);
function findNemo(array) {
  // let time0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] === `nemo`) {
      console.log(`Found Nemo!`);

    }
  }
  // let time1 = performance.now();
  // console.log(`Call to find Nemo took ` + (time1 - time0) + `milliseconds`);
}
findNemo(nemo);
findNemo(everyone);
findNemo(large);

// a way to evaluate the efficient: big o notation
