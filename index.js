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

    globalVars.timedOutText = '<h1>Timed out <i class="fa fa-frown-o"></i></h1>';
}

function onClickOpenComputer() {
    let btn = globalVars.openComputerBtn;
    let btnText = globalVars.openComputerBtnText;

    btn.innerHTML = globalVars.loadingIcon;
    btn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/openMyComputer.php");
    xhr.send();

    let timeout = window.setTimeout(function() {
        btn.innerHTML = timedOutText;
    }, 3000);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                btn.innerHTML = globalVars.checkIcon;
            } else {
                btn.innerHTML = globalVars.timesIcon;
            }
            
            btn.disabled = false;
            window.setTimeout(function() {
                btn.innerHTML = btnText;
            }, 1000);
            window.clearTimeout(timeout);
        }
    };
}

function onClickOpenLights() {
    let btn = globalVars.openLightsBtn;
    let btnText = globalVars.openLightsBtnText;

    btn.innerHTML = globalVars.loadingIcon;
    btn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=open");
    xhr.send();

    let timeout = window.setTimeout(function() {
        btn.innerHTML = timedOutText;
    }, 3000);

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                btn.innerHTML = globalVars.checkIcon;
            } else {
                btn.innerHTML = globalVars.timesIcon;
            }

            btn.disabled = false;
            window.setTimeout(function() {
                btn.innerHTML = btnText;
            }, 1000);
            window.clearTimeout(timeout);
        }
    };

    
}

function onClickCloseLights() {
    let btn = globalVars.closeLightsBtn;
    let btnText = globalVars.closeLightsBtnText;

    btn.innerHTML = globalVars.loadingIcon;
    btn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=close");
    xhr.send();

    let timeout = window.setTimeout(function() {
        btn.innerHTML = timedOutText;
    }, 3000);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true) {
                btn.innerHTML = globalVars.checkIcon;
            } else {
                btn.innerHTML = globalVars.timesIcon;
            }

            btn.disabled = false;
            window.setTimeout(function() {
                btn.innerHTML = btnText;
            }, 1000);
            window.clearTimeout(timeout);
        }
    };
}

window.onload = init