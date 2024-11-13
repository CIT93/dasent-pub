async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        onSuccess(data);
    }
    catch (error) {
        console.log(`ERROR: ${error}`)
    }

    const data = await response.json();
    console.log(data)

}
getUsers()

function renderUsers(getUsers) {
    data.forEach(user => {
        const objUsers = document.createElement("h1")
        objUsers.textContent = getUsers
        document.getElementById("output").append(objUsers)
    });

}

function onSuccess(data){
    renderUsers(data)
}