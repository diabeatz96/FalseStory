let submission = document.querySelector(".submission");

const exercise = document.querySelector("#lift");
const weight = document.querySelector("#weight");
const repetitions = document.querySelector("#repetitions");
const percentage = document.querySelector("#percentage");

submission.addEventListener("click", () => {
    const screen = document.querySelector("#screen")
    if(!exercise.value || !weight.value || !repetitions.value || !percentage.value) {
        screen.textContent = "Fill All Fields"
    } else {

        /*
      Write your code here on logic for weight repetitions and specify exercise.
        */
       let wght = parseFloat(weight.value)
       let oneRM = ((wght)*(repetitions.value)*0.0333)+wght;
       oneRM+= weight.value;
       let percentageRM = ((percentage.value)/100)*oneRM;
       screen.textContent = oneRM.toString();

    }

})

