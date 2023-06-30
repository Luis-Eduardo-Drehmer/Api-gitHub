import { repos } from "./services/repositories.js";
import { user } from "./services/user.js";
  


document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;
    getUserProfile(userName);
})
document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEntreKeyPressed = key === 13;
    if (isEntreKeyPressed) {
        getUserProfile(userName);
    }
})



function getUserProfile(userName) {
    user(userName).then((userData) => {
        let userInfo = `<div class="info"> 
            <img src="${userData.avatar_url}" alt="Foto de perfil do usario"/>
            <div class="data">
                <h1>${userData.name ?? "Não possui nome cadastrado 😢"}</h1>
                <p>${userData.bio ?? "Não possui bio cadastrado 😢"}</p>
            </div>
        </div>`;
        document.querySelector('.profile-data').innerHTML = userInfo;
    })
    getUserRepositories(userName);
}

function getUserRepositories(userName) {
    repos(userName).then((reposData) => {
        let repositoriesItens = "";
        reposData.forEach(repo => {
            repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });
        document.querySelector('.profile-data').innerHTML += `<div class="repositories section">   
                                                                 <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                              </div>`
    })
}