// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);
// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);


// function typewrite(str) {
//   let type = '';
//   for (let i = 0; i < str.length; i++) {
//     type += str[i];
//     setTimeout(() => process.stdout.write(type[i] += '\n'), i*500)
//   }
// };


const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
//
const spinner = (arr) => {
  // console.log(arr);
  // for(let char of arr) {
  for(let char in arr) {
    setTimeout(() => {
      process.stdout.write(arr[char] += 'loading...');
    }, char * 200)
  }
};

spinner(spin);