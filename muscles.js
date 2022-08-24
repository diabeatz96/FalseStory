let frontbody = document.getElementById('FrontBody');
let backbody = document.getElementById('BackBody')


/*
     The best approach i can think of is iteratively going through each muscle and showcasing the box hover, space might be too hard to cover
     with the whole layout already there.
     ---------------------------------------------------------------------------------------------------------------

 */


/* Added function for creating boxes and their default layout*/

function boxSettings(element, e, body = true) {
    element.setAttribute("id", "infobox");
    element.style.width = "150px";
    element.style.height = "150px";
    element.style.backgroundColor = "white";
    element.style.position = "absolute";
    element.style.zIndex = "1";
    if(body) {
        element.style.top = e.clientY + 40 + 'px';
    } else {
        element.style.top = e.clientY + 40 + 'px';
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#head").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#abdomen").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#pectorals").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#quadriceps").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#tibialis").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#gastrocnemius").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
    })

    doc.querySelector("#gastrocnemius").addEventListener("click", () => {
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#gastrocnemius").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#abductors").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#biceps").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#deltoids").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#flexors").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#backdeltoids").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#triceps").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#lowerleg").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#gluteus").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#lowerback").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
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
        console.log("Mouse is clicked!");
        const newBox = document.createElement("div");
        boxSettings(newBox, e, false);
        document.querySelector(".Bodies").append(newBox);
    })

    doc.querySelector("#trapezoidback").addEventListener("mouseleave", () => {
        const box = document.getElementById("infobox");
        box.remove();
    })

    doc.querySelector("#trapezoidback").addEventListener("click", () => {
        /*
             fill in info to add modal window for specifics of clicking functionality
         */
    })


}, false)
