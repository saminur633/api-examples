const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};
const displayUser = (user) => {
  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.results[0].gender;
  console.log(user.results[0].gender);
  const name = user.results[0].name.first + " " + user.results[0].name.last;
  document.getElementById("name").innerHTML = name;
  const title = user.results[0].name.title;
  document.getElementById("title").innerHTML = title;
  const city = user.results[0].location.city;
  document.getElementById('city').innerHTML = city;
  
};
loadUser();
