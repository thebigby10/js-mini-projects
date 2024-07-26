document.getElementById("fetch-buttton").addEventListener("click", fetchData);
function fetchData() {
  let username = document.getElementById("username-field").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((data) => {
      if (data.status == 200) return data.json();
      else throw "data fetch failed!";
    })
    .then((data) => {
      document.getElementById("data-section").style.visibility = "visible";
      console.log(data);
      document.getElementById("dp-img").src = data.avatar_url;
      document.getElementById("name-div").innerHTML = data.name;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("data-section").style.visibility = "hidden";
      let element = document.getElementById("not-found-banner");
      element.style.visibility = "visible";
      setTimeout(() => {
        element.style.visibility = "hidden";
      }, 2000);
    });
}
