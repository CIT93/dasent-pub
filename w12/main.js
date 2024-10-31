const FORM = document.getElementById("form");

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const numRep = FORM.numRep.value;
    const workoutTime = FORM.workoutTime.value;
    start(exerciseType, numRep, workoutTime);

})

function start(exerciseType, numRep, workoutTime){
    const output = document.getElementById("output");
    const newH2 = document.createElement("h1");
    newH2.textContent = `Start ${exerciseType} and try to reach ${numRep} in ${workoutTime} seconds.`;
    setTimeout(() => { `${exerciseType} time is up`;}, workoutTime*1000);

};
