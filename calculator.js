let submission = document.querySelector(".submission");
const lift = document.querySelector("#lift");

submission.addEventListener("click", () => {

  const exercise_ = document.querySelector("#lift");
  const weight_ = document.querySelector("#dweight");
  const repetitions_ = document.querySelector("#repetitions");
  const percentage_ = document.querySelector("#percentage");
  
  let weight = parseFloat(weight_.value);
  let repetitions = parseFloat(repetitions_.value);
  let percentage = parseFloat(percentage_.value);
  let exercise = exercise_.value;

const screen = document.querySelector("#screen")
if(!exercise || !weight || !repetitions || !percentage) {
    screen.textContent = "Fill All Fields"
} else if((exercise !== "Bench Press") && (exercise !== "Biceps Arm Curl") && (exercise !== "Crunch") && (exercise !== "Deadlift") && (exercise !== "Lat Pulldown") && (exercise !== "Leg Press") 
&& (exercise !== "Overhead Press" ) && (exercise !== "Squat") &&(exercise!=="Seated Cable Row") &&(exercise!== "Triceps Pushdown")){
  screen.textContent = "Select valid exercise";
}else if(weight<0){
  screen.textContent = "Invalid weight given";
}else if(repetitions<0){
  screen.textContent="Invalid Reps given";
}else if(percentage<0 || percentage>100){
  screen.textContent="Invalid percentage given";
}
else{
    /*
  Write your code here on logic for weight repetitions and specify exercise.
    */

  let oneRM = weight * (1 + (repetitions/30));
  let percentageRM = (((percentage)/100) * oneRM).toFixed(2);
  screen.textContent = percentageRM.toString();

}

})

lift.onchange= (e)=>{
  let liftPath = e.target.value;
  if(liftPath === "Bench Press"){
    videoSource("https://www.youtube.com/embed/SCVCLChPQFY?autoplay=1&mute=1");
  }else if(liftPath === "Biceps Arm Curl"){
    videoSource("https://www.youtube.com/embed/HHLfVkfApF8?autoplay=1&mute=1");
  }else if(liftPath === "Crunch"){
    videoSource("https://www.youtube.com/embed/qZq9bNk1owk?autoplay=1&mute=1");
  }else if(liftPath === "Deadlift"){
    videoSource("https://www.youtube.com/embed/1ZXobu7JvvE?autoplay=1&mute=1");
  }else if(liftPath === "Lat Pulldown"){
    videoSource("https://www.youtube.com/embed/zMAMA9_Ehn8?autoplay=1&mute=1");
  }else if(liftPath === "Leg Press"){
    videoSource("https://www.youtube.com/embed/ZPi-Xobxtd4?autoplay=1&mute=1");
  }else if(liftPath ==="Overhead Press"){
    videoSource("https://www.youtube.com/embed/VF-YjKlhph0?autoplay=1&mute=1");
  }else if(liftPath === "Squat"){
    videoSource("https://www.youtube.com/embed/QmZAiBqPvZw?autoplay=1&mute=1");
  }else if(liftPath ==="Triceps Pushdown"){
    videoSource("https://www.youtube.com/embed/SkRrWqZNy2A?autoplay=1&mute=1");
  }else if(liftPath === "Seated Cable Row"){
    videoSource("https://www.youtube.com/embed/I1_4ObvS70A?autoplay=1&mute=1");
  }else{
    videoSource("https://www.youtube.com/embed/sJjmu5tG_EM?autoplay=1&mute=1");
    document.querySelector("#screen").textContent = "Select valid exercise";
  }
}
const videoSource = (path) => {
  document.querySelector("#demo").src = path;
  }