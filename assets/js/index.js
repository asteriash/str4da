let fetchedData = null; // cache
let hasFetched = false; // check flag

// First, let's check if we've already fetched anything

const writeToClipboard = (response) => {
  console.log(`Trying to write ${response} into the clipboard.`);
  navigator.clipboard.writeText(response); // Writing to clipboard
};

const fetchSocials = (platform) => {
  if (hasFetched == false){   
    fetch ('./assets/js/socials.json')
    .then(parseSocials => parseSocials.json()) //parsing
    .then(data => {
      console.log(`Trying to copy ${data[platform]} into the clipboard;\ncaller: ${platform}.`);
     fetchedData = data; //If we're fetching new stuff, put it into fetchedData
      hasFetched = true;
      writeToClipboard(data[platform]);
    })
    .catch(err => console.error(`Error:\n${err}\nCaller:${platform}`))
  }
  else if (hasFetched == true){
    writeToClipboard(fetchedData[platform]);
    console.log(`Cached: ${fetchedData}\nTrying to copy:${fetchedData[platform]}`);
  }
};
