// let n = 5 ;  
// for (let i = 1; i <= n; i++) {
//   let pattern = '';
//   for (let j = 1; j <= n - i; j++) {
//     pattern += ' ';
//   }
//   for (let j = 1; j <= (2 * i - 1); j++) {
//     pattern += '*'; 
//   }
//   console.log(pattern); 
// }


let n = 5; 
for (let i = 1; i <= n; i++) {
  let pattern = '';
  for (let j = 1; j <= n - i; j++) {
    pattern += ' ';
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += '*';
  }
  console.log(pattern);
}
for (let i = n - 1; i >= 1; i--) {
  let pattern = '';
  for (let j = 1; j <= n - i; j++) {
    pattern += ' ';
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += '*';
  }
  console.log(pattern);
};
