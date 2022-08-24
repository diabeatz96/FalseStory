let isSettingOpen = false;


function activateSettings() {
    let nav = document.getElementById("settingsBar");
    console.log("This is getting clicked")
    if(isSettingOpen) {
        nav.style.width = "0px";
        isSettingOpen = false;
    } else {
        nav.style.width = "300px";
        isSettingOpen = true;
    }
    const input = document.createElement("input");
}
