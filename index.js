function getRepositories() {
    const req = new XMLHttpRequest()
    req.addEventListener("load", showRepositories)
    req.open("GET", "https://api.github.com/users/octocat/repos")
    req.send()
}

function showRepositories(el) {
    console.log(this)
}
