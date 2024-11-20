function discord(){
  var discordID = "luna.sh";
  navigator.clipboard.writeText(discordID).then(() =>{
    console.log("You've copied to cliboard!");
    alert("Copied to clipboard");
  }).catch(e => {
    console.error("Failed to copy text!", e);
  });
}
