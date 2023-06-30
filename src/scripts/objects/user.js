const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubeUser){
        this.avatarUrl = gitHubeUser.avatar_url;
        this.name = gitHubeUser.name;
        this.bio = gitHubeUser.bio;
        this.userName = gitHubeUser.login;        
    },
    setRepositories(repositories){
        this.repositories = repositories;
    }
}

export{user}