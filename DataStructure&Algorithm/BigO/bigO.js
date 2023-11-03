// Readable
// Scalable (Big O used to measure scalability): Memory(Space Complexity: how long it takes the algorithm to run), Speed(Time Complexity: the memory that is required by the algorithm)
// Data Structures: Arrays, Stacks, Queues, Linked Lists, Trees, Tries, Graphs, Hash Tables
// Algorithms: Sorting, Dynamic Programming, BFS +  DFS (Searching), Recursion

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

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === `nemo`) {
      console.log(`Found NEMO!`);
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    if(fish === `nemo`) {
      console.log(`Found NEMO!`);
    }
  }
}



findNemo(nemo);
findNemo(everyone);
findNemo(large);
findNemo2(everyone);
findNemo3(everyone);


// a way to evaluate the efficient: big o notation
// time complexity
// space complexity

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(`booo!`);
  }
}
booo([1, 2, 3, 4, 5]);   // space complexity: O(1)  i=0

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = `hi`;
  }
  return hiArray;
}
console.log(arrayOfHiNTimes(6));








































