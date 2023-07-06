const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers:'',
    following:'',
    repositories: [],
    events:[],
    setInfo(gitHubeUser){
        this.avatarUrl = gitHubeUser.avatar_url;
        this.name = gitHubeUser.name;
        this.bio = gitHubeUser.bio;
        this.userName = gitHubeUser.login; 
        this.followers = gitHubeUser.followers;
        this.following = gitHubeUser.following;       
    },
    setRepositories(repositories){
        this.repositories = repositories;
    },
    setEvents(events){
        this.events = events;
    }


}

export{user}