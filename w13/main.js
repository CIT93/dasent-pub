const FORM = document.getElementById("form");

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const numRep = FORM.numRep.value;
    const workoutTime = FORM.workoutTime.value;
    start(exerciseType, numRep, workoutTime);
    FORM.reset()

})



function start(exerciseType, numRep, workoutTime){
    const output = document.getElementById("output");
    const newH1 = document.createElement("h1");
    const newH2 = document.createElement("h2");
    newH1.textContent = `Start your ${exerciseType} and try to reach ${numRep} reps in ${workoutTime} seconds.`,
    setTimeout(() => { newH2.textContent = `${exerciseType} time is up!`;}, workoutTime*1000, )
    output.appendChild(newH1);
    output.appendChild(newH2);
    
};