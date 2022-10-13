function createMenu() {
    const menuTitle = document.createElement('div')
    const dishOne = document.createElement('div')
    const dishTwo = document.createElement('div')
    const dishThree = document.createElement('div')
    const dishPhotoOne = document.createElement('div')
    const dishPhotoTwo = document.createElement('div')
    const dishPhotoThree = document.createElement('div')
    const dishNameOne = document.createElement('div')
    const dishNameTwo = document.createElement('div')
    const dishNameThree = document.createElement('div')
    const mainContent = document.querySelector('.mainContent')
    
    menuTitle.classList.add('menuTitle')
    dishOne.classList.add('dishOne')
    dishTwo.classList.add('dishTwo')
    dishThree.classList.add('dishThree')

    dishPhotoOne.classList.add('dishPhoto', 'one')
    dishPhotoTwo.classList.add('dishPhoto', 'two')
    dishPhotoThree.classList.add('dishPhoto', 'three')
    
    dishNameOne.classList.add('dishName', 'one')
    dishNameTwo.classList.add('dishName', 'two')
    dishNameThree.classList.add('dishName', 'three')

    menuTitle.innerHTML = 'Menu:'
    dishNameOne.innerHTML = 'jedzenie1'  
    dishNameTwo.innerHTML = 'jedzenie2'
    dishNameThree.innerHTML = 'jedzenie3'    
    
    mainContent.appendChild(menuTitle)
    mainContent.appendChild(dishOne)
    mainContent.appendChild(dishTwo)
    mainContent.appendChild(dishThree)

    dishOne.appendChild(dishPhotoOne)
    dishTwo.appendChild(dishPhotoTwo)
    dishThree.appendChild(dishPhotoThree)

    dishOne.appendChild(dishNameOne)
    dishTwo.appendChild(dishNameTwo)
    dishThree.appendChild(dishNameThree)
}

export { createMenu }