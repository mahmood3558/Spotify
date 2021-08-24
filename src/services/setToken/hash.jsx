console.log("window.location.hash");
console.log(window.location.hash);
// Get the hash of the url
console.log("window.location.hash");
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default hash;
