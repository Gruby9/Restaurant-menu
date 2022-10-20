import "./style.scss";
import { createHomeTab } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import kawalek from "./kawalek.jpeg"

const content = document.querySelector('#content')

function createSideBar() {
    const sidebar = document.createElement('div')
    const restaurantName = document.createElement('div')
    const barMenu = document.createElement('div')
    const barContact = document.createElement('div')
    const mainContent = document.createElement('div')

    sidebar.classList.add('sidebar')
    restaurantName.classList.add('restaurantName')
    barMenu.classList.add('barMenu')
    barContact.classList.add('barContact')
    mainContent.classList.add('mainContent')
    
    restaurantName.innerHTML = 'SKRT'
    barMenu.innerHTML = 'MENU'
    barContact.innerHTML = 'CONTACT'
    mainContent.innerHTML = '<p>maincontent</p>'


    content.appendChild(sidebar)
    content.appendChild(mainContent)

    sidebar.appendChild(restaurantName)
    sidebar.appendChild(barMenu)
    sidebar.appendChild(barContact)

    restaurantName.addEventListener('click', function() {
        if (restaurantName.classList.contains('open')) {}
        else {
            for (let i=0; i < sidebar.childNodes.length; i++) {
                sidebar.childNodes[i].classList.remove('open')
            }
            mainContent.innerHTML = ''
            restaurantName.classList.add('open');
            return createHomeTab();
        }
    });

    barMenu.addEventListener('click', function() {
        if (barMenu.classList.contains('open')) {}
        else {
            for (let i=0; i < sidebar.childNodes.length; i++) {
                sidebar.childNodes[i].classList.remove('open')
            }
            mainContent.innerHTML = ''
            barMenu.classList.add('open');
            return createMenu();
        }
    });

    barContact.addEventListener('click', function() {
        if(barContact.classList.contains('open')) {}
        else {
            for (let i=0; i < sidebar.childNodes.length; i++) {
                sidebar.childNodes[i].classList.remove('open')
            }
            mainContent.innerHTML = ''
            barContact.classList.add('open');
            return createContact();
        }
    })


    
}

createSideBar();
