const FORM = document.getElementById("form");

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const numRep = FORM.numRep.value;
    const workoutTime = FORM.workoutTime.value;
    start(exerciseType, numRep, workoutTime)
    .then(result)

    FORM.reset()

})



function start(exerciseType, numRep, workoutTime){
    return new Promise(function (resolve) { 
    const output = document.getElementById("output");
    const newH1 = document.createElement("h1");
    newH1.textContent = `Start your ${exerciseType} and try to reach ${numRep} reps in ${workoutTime} seconds.`;
    output.appendChild(newH1);
    setTimeout(() => { 
        const newH2 = document.createElement("h2");
        output.appendChild(newH2);
        resolve(newH2.textContent = `${exerciseType} time is up!`)}, workoutTime*1000 )   
    })
};

function result(workoutTime){
    return new Promise(function (resolve) { 
    setTimeout(() => { 
        const newH3 = document.createElement("h3");
        output.appendChild(newH3);
        resolve(newH3.textContent = "Good workout! 💪")}, workoutTime*1000 )   
    })
}
