const saveLS = (...cfpData) => {
    const serializedArr = JSON.stringify(cfpData); //converting cfpData, which is an object, into a string representation 
    localStorage.setItem("cfp", serializedArr); //cfp is the key, serializedArr is the value
}

const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp");// go get the cfp value
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr); // if there's something in the cfp then return the parse value to the function getLS
    } else {
        return []; //if the value is null, return an empty array
    }

}

const cfpData = getLS();

export { cfpData, saveLS, getLS };
