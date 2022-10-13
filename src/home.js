function createHomeTab() {
    const homePhoto = document.createElement('div')
    const mainContent = document.querySelector('.mainContent')

    homePhoto.classList.add('homePhoto')
    
    homePhoto.innerHTML = 'Najlepsza knajpa w Warszawie'
    
    mainContent.appendChild(homePhoto)
}

export { createHomeTab }