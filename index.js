globalVars={};

function onClickOpenComputer() {
    document.getElementById("openComputerBtn").innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>`;
    document.getElementById("openComputerBtn").disabled = true;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/openMyComputer.php");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                document.getElementById("openComputerBtn").disabled = false;
                document.getElementById("openComputerBtn").innerHTML = `<i class="fa fa-check fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("openComputerBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            } else {
                document.getElementById("openComputerBtn").disabled = false;
                document.getElementById("openComputerBtn").innerHTML = `<i class="fa fa-times fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("openComputerBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            }
                
        }
    };
}

function onClickOpenLights() {
    document.getElementById("openLightsBtn").innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>`;
    document.getElementById("openLightsBtn").disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=open");
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                document.getElementById("openLightsBtn").disabled = false;
                document.getElementById("openLightsBtn").innerHTML = `<i class="fa fa-check fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("openLightsBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            } else {
                document.getElementById("openLightsBtn").disabled = false;
                document.getElementById("openLightsBtn").innerHTML = `<i class="fa fa-times fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("openLightsBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            }
        }
    };

    
}

function onClickCloseLights() {
    document.getElementById("closeLightsBtn").innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>`;
    document.getElementById("closeLightsBtn").disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=close");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                document.getElementById("closeLightsBtn").disabled = false;
                document.getElementById("closeLightsBtn").innerHTML = `<i class="fa fa-check fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("closeLightsBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            } else {
                document.getElementById("closeLightsBtn").disabled = false;
                document.getElementById("closeLightsBtn").innerHTML = `<i class="fa fa-times fa-3x"></i><span></span>`;
                window.setTimeout(function() {
                    document.getElementById("closeLightsBtn").innerHTML = globalVars.openLightsBtnText;
                }, 1000);
            }
        }
    };
}

function init() {
    globalVars.openComputerBtnText = document.getElementById("openComputerBtn").innerHTML;
    globalVars.openLightsBtnText = document.getElementById("openLightsBtn").innerHTML;
    globalVars.closeLightsBtnText = document.getElementById("closeLightsBtn").innerHTML;

    document.getElementById("openComputerBtn").onclick = onClickOpenComputer;
    document.getElementById("openLightsBtn").onclick = onClickOpenLights;
    document.getElementById("closeLightsBtn").onclick = onClickCloseLights;
}


window.onload = init