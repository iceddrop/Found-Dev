function display(){
const displayUserInfo = (data) => {
    if (!data) return;
   console.log(data)
    
    const {name, bio, created_at, public_repos, followers, following, avatar_url, html_url} = data;

    document.getElementById('username').innerHTML = name;
    document.getElementById('bio').innerHTML = bio;
    document.getElementById('repos').innerHTML = public_repos;
    document.getElementById('followings').innerHTML = following;
    document.getElementById('followers').innerHTML = followers;
    document.getElementById('date').innerHTML = created_at;
    document.getElementById("profile-img").src = avatar_url;
    document.getElementById('btn-2').href = html_url;
  };

const getUserData = () => {
    let userInputValue = document.getElementById('input-box').value;
    const api = `https://api.github.com/users/${userInputValue}`;
  
    
    return fetch(api)
      .then(response => response.json())
      .then(displayUserInfo)
  
  };
  
  getUserData()
}
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('light');
})