const sentence = "hello there from lighthouse labs";

// // Example - Prints out all char at once after 1000ms because of the control flow
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000);
// }

// Prints out each char  50ms apart
for (let i = 0; i < sentence.length; i++) {
  let timer = i * 50;
  setTimeout(() => {
    if (i === sentence.length - 1) return process.stdout.write(`${sentence[i]}\n`);
    process.stdout.write(sentence[i]);
  }, timer);
}