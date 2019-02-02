const renderContacts = () => {
  const storage = window.localStorage
  // Read all the contacts from the storage
  const contacts = JSON.parse(storage.getItem('contacts'))
  
  // Select the container we will use to list the contacts 
  let div = document.querySelector('.contact-list')
  
  if (contacts) {
    div.innerHTML = ''
    
    // render the contacts
    const ul = document.createElement('ul')
    
    // For every contact in our array of contacts, we will
    // create a li element that will contain a card with
    // all the information of the contact
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.setAttribute("class", "list-reset")  
      li.innerHTML = `
      <div class="card mb-4" >
      </div>
<<<<<<< HEAD
      <div class="content">
      <br>
      <h2>${ contact.name }</h2>
      <h3>${ contact.company }</h3>
      <p>${ contact.notes }</p> 
      ${ contact.email } <br>
=======
      <div class="content list-reset">
      <br>
      <h3>${ contact.name }</h3>
      <h5>${ contact.company }</h5>
      <p>${ contact.notes }</p> 
      ${ contact.email } <br> 
>>>>>>> 9d3f3f01cdf957f5e3bf59cd5e19b57830ff0438
      <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
      </div>
      </div><br>
           `
      // Add the contact's li to the unordered list we created earlier
      ul.appendChild(li)
    })
    
    // Lastly, append the list to the contact-list container.
    div.appendChild(ul) 
  } else { 
    div.innerHTML = '<p>You have no contacts in your address book</p>' 
  }
}


document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  
  const addContactForm = document.querySelector('.new-contact-form')
  
  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage
    
    const {
      name,
      email,
      phone,
      company,
      notes,
      twitter,
    } = addContactForm.elements
    
    const contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }
    
    let contacts = JSON.parse(storage.getItem('contacts')) || []
    contacts.push(contact)
    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    addContactForm.reset()
  })
})