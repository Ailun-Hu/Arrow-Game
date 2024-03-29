
async function refreshleaderboard() {
    const response = await axios.get('https://arrowgamebackend.azurewebsites.net/api/showleaderboard');
    //const response = await axios.get('http://localhost:7071/api/ShowLeaderboard');
    const data = response.data;
    //const data = await fetch('http://localhost:7071/api/ShowLeaderboard');

    const userlist = document.getElementById("userlist");
    const scorelist = document.getElementById("scorelist");
    userlist.innerText = '';
    scorelist.innerHTML = '';
    
    //Makes 2 different list for name and score
    data.forEach(element => {
        var username = document.createElement('li');
        username.appendChild(document.createTextNode(element["Username"]));
        userlist.appendChild(username);

        var score = document.createElement('li');
        score.appendChild(document.createTextNode(element["HighestScore"]));
        scorelist.appendChild(score);
    });
}
