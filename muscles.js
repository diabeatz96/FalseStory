let frontbody = document.getElementById('FrontBody');
let backbody = document.getElementById('BackBody')


/*
     The best approach i can think of is iteratively going through each muscle and showcasing the box hover, space might be too hard to cover
     with the whole layout already there.
 */


/* Added function for creating boxes */

function boxSettings(element, e) {
    element.setAttribute("id", "infobox");
    element.style.width = "150px";
    element.style.height = "150px";
    element.style.backgroundColor = "white";
    element.style.position = "absolute";
    element.style.top = e.clientY + 0.5 + 'em';
    element.style.left = e.clientX + 0.4 + 'em';
}


frontbody.addEventListener("load", () => {
    let doc = frontbody.contentDocument;

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

}, false)


