const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info"> 
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usario"/>
                            <div class="data">
                                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrado 😢"}</p>
                                <div class="followers-following">
                                    <p> ${user.followers} followers · ${user.following} following</p>
                                </div>
                            </div>
                        </div>`;
    },
    renderRepositories(user) {
        let repositoriesItens = "";
        user.repositories.forEach(repo => {
            repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">   
                                                                 <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                              </div>`
        }
    },
    renderEvenst(user) {
        let eventsItens = "";
        user.events.forEach(events => {
            if (events.type === "CreateEvent") {
                if (events.payload.description === null) {
                    eventsItens += `<li><h3>${events.repo.name} </h3><p> - sem mensagem</p></li>`;
                } else {
                    eventsItens += `<li><h3>${events.repo.name} </h3><p> - ${events.payload.description}</p></li>`;
                }
            } else {
                eventsItens += `<li><h3>${events.repo.name}</h3><p> - ${events.payload.commits[0].message}</p></li>`;
            }
        });
        if (user.events.length > 0) {
            this.userProfile.innerHTML += ` <div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }