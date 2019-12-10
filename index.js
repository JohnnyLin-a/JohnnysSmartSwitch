var globalVars={};

function init() {
    document.getElementById("openComputerBtn").onclick = onClickOpenComputer;
    document.getElementById("openLightsBtn").onclick = onClickOpenLights;
    document.getElementById("closeLightsBtn").onclick = onClickCloseLights;

    globalVars.openComputerBtnText = document.getElementById("openComputerBtn").innerHTML;
    globalVars.openLightsBtnText = document.getElementById("openLightsBtn").innerHTML;
    globalVars.closeLightsBtnText = document.getElementById("closeLightsBtn").innerHTML;

    globalVars.openComputerBtn = document.getElementById("openComputerBtn");
    globalVars.openLightsBtn = document.getElementById("openLightsBtn");
    globalVars.closeLightsBtn = document.getElementById("closeLightsBtn");

    globalVars.loadingIcon = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>`;
    globalVars.checkIcon = `<i class="fa fa-check fa-3x"></i>`;
    globalVars.timesIcon = `<i class="fa fa-times fa-3x"></i>`;
}

function onClickOpenComputer() {
    globalVars.openComputerBtn.innerHTML = globalVars.loadingIcon;
    globalVars.openComputerBtn.disabled = true;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/openMyComputer.php");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                globalVars.openComputerBtn.disabled = false;
                globalVars.openComputerBtn.innerHTML = globalVars.checkIcon;
                window.setTimeout(function() {
                    globalVars.openComputerBtn.innerHTML = globalVars.openComputerBtnText;
                }, 1000);
            } else {
                globalVars.openComputerBtn.disabled = false;
                globalVars.openComputerBtn.innerHTML = globalVars.timesIcon;
                window.setTimeout(function() {
                    globalVars.openComputerBtn.innerHTML = globalVars.openComputerBtnText;
                }, 1000);
            }
                
        }
    };
}

function onClickOpenLights() {
    globalVars.openLightsBtn.innerHTML = globalVars.loadingIcon;
    globalVars.openLightsBtn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=open");
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                globalVars.openLightsBtn.disabled = false;
                globalVars.openLightsBtn.innerHTML = globalVars.checkIcon;
                window.setTimeout(function() {
                    globalVars.openLightsBtn.innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            } else {
                globalVars.openLightsBtn.disabled = false;
                globalVars.openLightsBtn.innerHTML = globalVars.timesIcon;
                window.setTimeout(function() {
                    globalVars.openLightsBtn.innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            }
        }
    };

    
}

function onClickCloseLights() {
    globalVars.closeLightsBtn.innerHTML = globalVars.loadingIcon;
    globalVars.closeLightsBtn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=close");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                globalVars.closeLightsBtn.disabled = false;
                globalVars.closeLightsBtn.innerHTML = globalVars.checkIcon;
                window.setTimeout(function() {
                    globalVars.closeLightsBtn.innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            } else {
                globalVars.closeLightsBtn.disabled = false;
                globalVars.closeLightsBtn.innerHTML = globalVars.timesIcon;
                window.setTimeout(function() {
                    globalVars.closeLightsBtn.innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            }
        }
    };
}

window.onload = init