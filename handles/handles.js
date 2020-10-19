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
    xhttp.open("POST", uri, true);
    http.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}