const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/rando`
    );

    // with promise.all
    // const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    // const imgs = all.map(el => el.body.message);
    // console.log(imgs);

    // Using Promise.allSettled instead of Promise.all
    const all = await Promise.allSettled([res1Pro, res2Pro, res3Pro]);
    const successfulResponses = all
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value.body.message);
    
    const unsuccessfulResponses = all
    .filter(result => result.status === 'rejected')
    .map(result => result.reason);

    console.log('Successful Responses:');
    console.log(successfulResponses);
    console.log('Unsuccessful Responses:');
    console.log(unsuccessfulResponses);

    await writeFilePro('dog-img.txt', successfulResponses.join('\n'));
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: READY 🐶';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR 💥');
  }
})();
