const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
loadBuddies();

const displayBuddy = data =>{
    const buddies = data.results;
    const buddyesDiv = document.getElementById('buddyes');
    for(const buddy of buddies){
        console.log(buddy.email)
        const p =document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first}${buddy.name.last} email: ${buddy.email}`
        buddyesDiv.appendChild(p);
    }
}