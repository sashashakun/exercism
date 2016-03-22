const exec = require('child_process').exec;

exec('jasmine-node ./javascript/bob/bob.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/bob/bob.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/hello-world/hello-world.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/hamming/hamming.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/gigasecond/gigasecond.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/leap/leap.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/rna-transcription/rna-transcription.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/word-count/word-count.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})

exec('jasmine-node ./javascript/pangram/pangram.spec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  if (stderr) throw new Error(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
})
