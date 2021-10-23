

const linksSocialMedia = {
    github: 'marcosCantarutti',
    youtube: 'rocketseat',
    facebook: 'marcos.cantarutti' ,
    instagram: '',
    twitter: 'LakaNegro21'
}



function changeSocialMediaLinks() {

    userName.textContent = 'Marcos Cantarutti'

    for(let li of socialLinks.children){ 
    const social = li.getAttribute('class')
    li.children[0].href = 
    `https://${social}.com/${linksSocialMedia[social]}`
    }

}
changeSocialMediaLinks()


const getGitHubProfileInfos = () => {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    console.log(url)

    fetch(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGithub.children[1].textContent = data.login
        userGithub.href = data.html_url
        userAvatar.children[1].src = data.avatar_url
    })

}

getGitHubProfileInfos()