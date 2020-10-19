function getRequest(uri, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            let jsonData = JSON.parse(this.responseText);
            callback(jsonData);
        }
    };
    xhttp.open("GET", uri, true);
    xhttp.setRequestHeader("Accept", "application/json");
    //TODO add cookie support
    xhttp.send();
}

function postRequest(uri, data, callback = null) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    stringifiedData = JSON.stringify(data);
    xhttp.open("POST", uri, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Content-Length", stringifiedData.length);
    //TODO add cookie support
    xhttp.send(stringifiedData);
}