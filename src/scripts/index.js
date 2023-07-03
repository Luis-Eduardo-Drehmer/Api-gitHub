import { getRepos } from "./services/repositories.js";
import { getUser } from "./services/user.js";

import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;
    if (validateEmptyInput(userName))  return;  
    getUserData(userName);
})
document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEntreKeyPressed = key === 13;
    if (isEntreKeyPressed) {
        if (validateEmptyInput(userName))  return;        
        getUserData(userName);
    }
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert("Preencha o campo comm o nome do usuário do GitHube");
        return true;
    }
}

async function getUserData(userName) {
    const userResponses = await getUser(userName);
    if(userResponses.message === "Not Found"){
        screen.renderNotFound();
        return;
    }

    const repositoriesResponses = await getRepos(userName);
    user.setInfo(userResponses);
    user.setRepositories(repositoriesResponses);
    screen.renderUser(user);
}
