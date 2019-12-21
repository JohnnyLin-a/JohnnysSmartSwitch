var globalVars={};

function init() {
    globalVars.loadingIcon = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>`;
    globalVars.checkIcon = `<i class="fa fa-check fa-3x"></i>`;
    globalVars.timesIcon = `<i class="fa fa-times fa-3x"></i>`;

    globalVars.serverErrorText = '<h1>Server error <i class="fa fa-frown-o"></i></h1>';

    showModal();
}

const showModal = () => {
    const now = new Date().toLocaleTimeString("en-GB", { timeZone: "America/Toronto"});
    const hour = parseInt(now.substr(0, now.indexOf(":")));

    if (hour >= 23 || hour <= 7) {
        $("#reminderModal").modal('show');
    }
}

$(document).ready(function(){
    $("button").click(function() {
        switch(this.id) {
            case "openComputerBtn":
                handleGetActionFromButton(
                    "/api/v1/openMyComputer.php", 
                    document.getElementById(this.id)
                );
                break;
            case "openLightsBtn":
                handleGetActionFromButton(
                    "/api/v1/controlLights.php?control=open", 
                    document.getElementById(this.id)
                );
                break;
            case "closeLightsBtn":
                handleGetActionFromButton(
                    "/api/v1/controlLights.php?control=close", 
                    document.getElementById(this.id)
                );
                break;
            default:
        }
    });
});

function handleGetActionFromButton(endpoint,btn) {
    let btnText = btn.innerHTML;

    btn.innerHTML = globalVars.loadingIcon;
    btn.disabled = true;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.send();

    let timeout = window.setTimeout(function() {
        btn.innerHTML = globalVars.serverErrorText;
    }, 2000);

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