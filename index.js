function onClickOpenComputer() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/openMyComputer.php");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true)
            alert("You just tried to open my computer!");
            else 
                alert("Something went wrong!");
        }
    };
}

function onClickOpenLights() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=open");
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true)
                alert("You just tried to open my lights!");
            else 
                alert("Something went wrong!");
        }
    };
}

function onClickCloseLights() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/controlLights.php?control=close");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            if (json.success === true)
                alert("You just tried to close my lights!");
            else 
                alert("Something went wrong!");
        }
    };
}

function init() {
    document.getElementById("openComputerBtn").onclick = onClickOpenComputer;
    document.getElementById("openLightsBtn").onclick = onClickOpenLights;
    document.getElementById("closeLightsBtn").onclick = onClickCloseLights;
}


window.onload = init