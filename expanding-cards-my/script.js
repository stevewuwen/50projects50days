containers = document.getElementsByClassName('image-container')

for (let index = 0; index < containers.length; index++) {
    const element = containers[index];
    element.addEventListener('click', ()=>{
        element.classList.toggle("container-activate")
    })
}