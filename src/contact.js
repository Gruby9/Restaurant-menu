function createContact() {
    const contact = document.createElement('div')
    const contactListTitle = document.createElement('p')
    const contactList = document.createElement('ul')
    const contact1 = document.createElement('li')
    const contact2 = document.createElement('li')
    const mainContent = document.querySelector('.mainContent')

    contact.classList.add('contact')
    contactListTitle.classList.add('contactListTitle')
    contactList.classList.add('contactList')
    contact1.classList.add('contact1')
    contact2.classList.add('contact2')
    
    contactListTitle.innerHTML = 'Lista osob do kontaktu z restauracja'
    contact1.innerHTML = 'Pierwsza osoba: 156849876'
    contact2.innerHTML = 'Druga osoba: 359849876'
    
    mainContent.appendChild(contact)
    contact.appendChild(contactListTitle)
    contact.appendChild(contactList)
    contactList.appendChild(contact1)
    contactList.appendChild(contact2)
}

export { createContact }