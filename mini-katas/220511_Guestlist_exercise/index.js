const guestList = []

// function to add a new guest
addGuest = () => {

    if (guestList.length >= 10) {
        alert('Sorry guest list is full!')
        return
    }

    let newGuest = prompt('Please insert your first name')

    if (guestList.includes(newGuest)) {
        alert('This name is already on the list')
        return
    }


    guestList.push(newGuest)
}

/*
// function to show each guest from the list in the console
showGuestList = () => {
    guestList.forEach(element => console.log(element))
}
*/

// function to show each guest from the list on the site
const renderedGuestList = document.querySelector('.guest-list ul')

showGuestList = () => {
    clearList(renderedGuestList)
    guestList.forEach(element => {
        const newListEntry = document.createElement('li')
        newListEntry.innerText = `${element}`
        renderedGuestList.appendChild(newListEntry)
    })
}

// support function needed to not re-render list with duplicate items
clearList = () => {
    renderedGuestList.innerHTML = ''
}

// function to remove a user by entering a name
removeGuest = () => {
    let guestToRemove = prompt('Please insert name to remove here')

    if (guestList.includes(guestToRemove)) {
        for (let i = 0; i < guestList.length; i++) {
            if (guestList[i] == guestToRemove) {
                guestList.splice(i, 1)
            }
        }
        showGuestList()
    }

    else {
        alert('Name is not on the list')
    }
}

