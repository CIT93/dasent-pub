const arrObj = getLS();

function saveLS(arrObj) {
    const serializedArr = JSON.stringify(arrObj); 
    localStorage.setItem("arr", serializedArr); 
}

function getLS() {
    const retrievedArr = localStorage.getItem("arr");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr); 
    } else {
        return []; 
    }

}

export {arrObj, saveLS, getLS};