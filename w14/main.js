async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        if(!data.length){
            console.log("Error on return value") 
        } else{
            onSuccess(data);
        }
    }
    catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

getUsers()

function renderUsers(data) {
    data.forEach((user) => {
        const objUsers = document.createElement("h1")
        objUsers.textContent = `${user.name} - Phone: ${user.phone}`
        document.getElementById("output").append(objUsers)
    });

}

function onSuccess(data){
    renderUsers(data);
}

function onError(err) {
    console.log(`Error ${err})`);
}
