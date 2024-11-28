let fetchedData = null;
let hasFetched = false;

// First, let's check if we've already fetched anything

const fetchSocials = (platform) => {
  if (hasFetched == false){   
    fetch ('socials.json')
    .then(parseSocials => parseSocials.json()) //parsing
    .then(data => {
      console.log(`Trying to copy ${data[platform]} into the clipboard;\ncaller: ${platform}.`);
      return data[platform];
      fetchedData = data;
      hasFetched = true;
    })
    .catch(err => console.error(`Error:\n${err}\nCaller:${platform}`))
  }
  else if (hasFetched == true){
    return Promise.resolve(fetchedData);
  }
}


