

const linksSocialMedia = {
    github: 'MarcosCantarutti',
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