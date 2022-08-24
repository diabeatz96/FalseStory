let submission = document.querySelector(".submission");

const exercise_ = document.querySelector("#lift");
const weight_ = document.querySelector("#weight");
const repetitions_ = document.querySelector("#repetitions");
const percentage_ = document.querySelector("#percentage");

const weight = parseFloat(weight_.value);
const repetitions = parseFloat(repetitions_.value);
const percentage = parseFloat(percentage_.value);

submission.addEventListener("click", () => {
    const screen = document.querySelector("#screen")
    if(!exercise_.value || !weight || !repetitions || !percentage) {
        screen.textContent = "Fill All Fields"
    } else {
        /*
      Write your code here on logic for weight repetitions and specify exercise.
        */
      let oneRM = weight * (1 + (repetitions/30));
      let percentageRM = (((percentage)/100) * oneRM).toFixed(2);
      screen.textContent = percentageRM.toString();
    }

})

