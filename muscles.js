let frontbody = document.getElementById('FrontBody');
let backbody = document.getElementById('BackBody')
const box = document.getElementById("infobox");


/*
     The best approach i can think of is iteratively going through each muscle and showcasing the box hover, space might be too hard to cover
     with the whole layout already there.
     ---------------------------------------------------------------------------------------------------------------

 */


/* Added function for creating boxes and their default layout*/

function boxSettings(element, e, body = true) {
    element.setAttribute("id", "infobox");
    element.style.width = "200px";
    element.style.height = "200px";
    element.style.position = "absolute";
    element.style.zIndex = "1";
    element.style.color = "white";

    if(!body) {
        element.style.backgroundImage = "linear-gradient(to right, #fc5c7d, #6a82fb)"
    }
}




frontbody.addEventListener("load", () => {
    let doc = frontbody.contentDocument;

    /****
     *
     *  Query Selector for Head
     *
     */

    doc.querySelector("#head").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        /*
               Creating Box That Contains Informatio
         */
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        /*
            Creating header for element.
        */
        const text = document.createElement("h2");
        text.innerText = "The Mind";
        text.style.textAlign = "Center";
        newBox.append(text);
        /*
            Creating List and appending it to end of document.
            First we create ul to hold the list, then we edit the innerHTML of the content,
            Write whatever inner html you want to each link, create new listItem by making new variable
            listItem2 = document.createElement("li);

            if you want to adjust styling, do listItem1.setAttribute("id", "listitem") and write css in stylesheet.\

            Make sure to append to listItems to listHeaders.
        */

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.headspace.com/meditation\"> Meditation </a>  ";
        listItem2.innerHTML = "<a href = \"https://sleepopolis.com/calculators/sleep/\"> Get enough sleep </a>  ";
        listItem3.innerHTML = "<a href = \"https://penzu.com//\"> Journaling </a>  ";
        listItem4.innerHTML = "<a> Exercise! </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#head").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for abdomen
     *
     */


    doc.querySelector("#abdomen").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Abdomen";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=0t4t3IpiEao\"> Crunches </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=wkD8rjkodUI\"> Russian Twists </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=pvIjsG5Svck\"> Planks </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=KhPTiWP6lB4\"> Hanging Knee Raise </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#abdomen").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for trapezoid
     *
     */


    doc.querySelector("#trapezoid").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Trapezius";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=rt17lmnaLSM\"> Farmer's Carry </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=V8dZ3pyiCBo\"> Face Pulls </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=cJRVVxmytaM/\"> Dumbbell Shrug </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=9efgcAjQe7E\"> Babrell Row </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#trapezoid").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
    })

    doc.querySelector("#trapezoid").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for pectorals
     *
     */


    doc.querySelector("#pectorals").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Pectorals";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=gRVjAtPip0Y\"> Bench Press </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=DbFgADa2PL8\"> Incline Bench Press </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=IODxDxX7oi4\"> Push-ups </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=dX_nSOOJIsE\"> Chest Dips </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#pectorals").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for quadriceps
     *
     */


    doc.querySelector("#quadriceps").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Quadriceps";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=Dy28eq2PjcM\"> Barbell Squats </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=VFk3RzndUEc\"> Weighted Leg Press </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=v-mQm_droHg\"> Front Squat </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=9nmAtebIwy8\"> Quad Extensions </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#quadriceps").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for tibialis
     *
     */


    doc.querySelector("#tibialis").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Tibialis";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=ob_ewpLnU5s\"> Seated Toe Raises </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=YnvASa9Oi90\"> Wall Toe Raises </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=VDv7QEcoRGg\"> Heel Walk </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#tibialis").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for gastrocnemius
     *
     */


    doc.querySelector("#gastrocnemius").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Gastrocnemius";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=JbyjNymZOt0\"> Seated Calf Raise </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=u3zgHI8QnqE\"> Jump Rope </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=GAQ-oohMhog\"> Calf Raise Machine </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=ZK4DvJLd3V8\"> Single Leg Calf Raise </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#gastrocnemius").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for abductors
     *
     */


    doc.querySelector("#abductors").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Abductors";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=rCxF2nG9vQ0\"> Side Plank </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=aQVApsdOLSI\"> Clamshells </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=La3xYT8MGks\"> Fire Hydrants </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=eELxVoey3-Q\"> Side Leg Raise </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#abductors").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for biceps
     *
     */


    doc.querySelector("#biceps").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Biceps";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=soxrZlIl35U\"> Incline Curl </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=zC3nLlEvin4\"> Hammer Curl </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=fIWP-FRFNU0\"> Preacher Curl </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=brhRXlOhsAM\"> Chin-ups </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#biceps").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for deltoids
     *
     */


    doc.querySelector("#deltoids").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Deltoids";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=6Z15_WdXmVw\"> Arnold Press </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=lPt0GqwaqEw\"> Rear Delt Fly </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=3VcKaXpzqRo\">  Lateral Raise</a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=lXp16YozXgk\"> Y-Raise </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#deltoids").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

    /****
     *
     *  Query Selector for flexors
     *
     */


    doc.querySelector("#flexors").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Forearms";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=l_rlgnUTyLU\"> Wrist Roller </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=nRgxYX2Ve9w\"> Reverse Bicep Curl </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=Z6o1sy-sw_I\"> Towel Pull-Up </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=vNbatvOweWw\"> Plate Pinch </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#flexors").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })

}, false)

/******************************************************
       All Back Body Muscles.
 ******************************************************/

backbody.addEventListener("load", () => {
    let doc = backbody.contentDocument;

    /****
     *
     *  Query Selector for backdeltoids
     *
     */

    doc.querySelector("#backdeltoids").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Triceps";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=VP9Qp72zZ_c\"> Skull Crushers </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=GCa8Q4e7laU\"> Flat Bar Pushdown </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=2z8JmcrW-As\"> Dips </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=vB5OHsJ3EME\"> Rope Pushdowns </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#backdeltoids").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for triceps
     *
     */

    doc.querySelector("#triceps").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Rear Delts";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=eGo4IYlbE5g\"> Pull-Up </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=9efgcAjQe7E&t=6s\"> Bent Over Row </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=6yMdhi2DVao\"> Rear Deltoid Machine </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=V8dZ3pyiCBo&t=1s\"> Face Pulls </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#triceps").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })



    /****
     *
     *  Query Selector for lowerleg
     *
     */

    doc.querySelector("#lowerleg").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Calves";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=JbyjNymZOt0\"> Seated Calf Raise </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=u3zgHI8QnqE\"> Jump Rope </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=GAQ-oohMhog\"> Calf Raise Machine </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=ZK4DvJLd3V8\"> Single Leg Calf Raise </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#lowerleg").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for hamstrings
     *
     */

    doc.querySelector("#hamstrings").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Hamstrings";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=_oyxCn2iSjU\"> Romanian Deadlift </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=F488k67BTNo\"> Hamstring Curls </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=r4MzxtBKyNE\"> Deadlift </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=f23vXjoG2e8\"> Good Mornings </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#hamstrings").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
    })

    doc.querySelector("#hamstrings").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for gluteus
     *
     */

    doc.querySelector("#gluteus").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Gluteus Maximus";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=1oed-UmAxFs\"> Weighted Squat </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=SJ1Xuz9D-ZQ\"> Donkey Kicks </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=OUgsJ8-Vi0E\"> Glute Bridge </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=VncTA2oFMuo\"> Split Squats </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#gluteus").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for lowerback
     *
     */

    doc.querySelector("#lowerback").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Latissimus";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=eGo4IYlbE5g&t=4s\"> Pull/Chin Ups </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=CAwf7n6Luuc\"> Cable Lat Pulldowns </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=FWJR5Ve8bnQ\"> Lat Barbell Rows </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=OWvqEaT6Ohc\"> Single Arm Pulldown </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#lowerback").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


    /****
     *
     *  Query Selector for trapezoidback
     *
     */

    doc.querySelector("#trapezoidback").addEventListener("mouseenter", (e) => {
        if(box) {
            box.remove();
        }
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
        const text = document.createElement("h2");
        text.innerText = "Trapezius";
        text.style.textAlign = "Center";
        newBox.append(text);

        const listHeader = document.createElement("ul");
        const listItem1 = document.createElement("li");
        const listItem2 = document.createElement("li");
        const listItem3 = document.createElement("li");
        const listItem4 = document.createElement("li");
        listItem1.innerHTML = "<a href = \"https://www.youtube.com/watch?v=rt17lmnaLSM\"> Farmer's Carry </a>  ";
        listItem2.innerHTML = "<a href = \"https://www.youtube.com/watch?v=V8dZ3pyiCBo\"> Face Pulls </a>  ";
        listItem3.innerHTML = "<a href = \"https://www.youtube.com/watch?v=cJRVVxmytaM/\"> Dumbbell Shrug </a>  ";
        listItem4.innerHTML = "<a href = \"https://www.youtube.com/watch?v=9efgcAjQe7E\"> Babrell Row </a>  ";
        newBox.append(listHeader);
        listHeader.append(listItem1);
        listHeader.append(listItem2);
        listHeader.append(listItem3);
        listHeader.append(listItem4);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#trapezoidback").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


}, false)
