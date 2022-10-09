import "./style.scss";

const content = document.querySelector('#content')

function createContent() {
    const sidebar = document.createElement('div.sidebar')
    const homePhoto = document.createElement('div.homephoto')
    const restaurantName = document.createElement('div.restaurantName')
    const barMenu = document.createElement('div.menu')
    const barStaff = document.createElement('div.staff')
    const barContact = document.createElement('div.contact')

    restaurantName.innerHTML = 'SKRT'
    barMenu.innerHTML = 'MENU'
    barStaff.innerHTML = 'STAFF'
    barContact.innerHTML = 'CONTACT'
    homePhoto.innerHTML = 'Najlepsza knajpa w Warszawie'

    content.appendChild(sidebar)
    content.appendChild(homePhoto)

    sidebar.appendChild(restaurantName)
    sidebar.appendChild(barMenu)
    sidebar.appendChild(barStaff)
    sidebar.appendChild(barContact)
}

createContent();