function enterr() {
    var amm = document.getElementById("amount1").value;
    //var statement = "You Have Withdrawn #"
    //alert("You Have Withdrawn #" + amm)
    if (confirm("Are you sure you want to make this transaction?")) {
        if (confirm("Transaction APPROVED!!\n\n You have withdrawn #" + amm + "\n\n If you wish to withdarw again press 'Ok'")) {
            window.location = "enter.html"
        } else {
            window.location = "no.html"
        }
    } else {
        //window.location = "enter.html"
    }
}

function bonn1() {
    if (confirm("Are you sure you want to make this transaction?")) {
        window.location = "1000.html"
    } else {
        //window.location = "enter.html"
    }
}

function bonn2() {
    if (confirm("Are you sure you want to make this transaction?")) {
        window.location = "2000.html"
    } else {
        //window.location = "enter.html"
    }
}

function bonn5() {
    if (confirm("Are you sure you want to make this transaction?")) {
        window.location = "5000.html"
    } else {
        //window.location = "enter.html"
    }
}

function bonn10() {
    if (confirm("Are you sure you want to make this transaction?")) {
        window.location = "10000.html"
    } else {
        //window.location = "enter.html"
    }
}

function bonnO() {
    if (confirm("Are you sure you want to make this transaction?")) {
        window.location = "other.html"
    } else {
        //window.location = "enter.html"
    }
}

function noa() {
    window.location = "index.html"
}

function passAA() {
    var accountDetails = {
        username: "Muyiwa",
        password: "12345",
        username2: "Jessie",
        password2: "97382",
        username3: "Judd",
        password3: "63832"
    }

    var nameA = document.getElementById("name").value;
    var pinA = document.getElementById("pin").value;

    if (nameA == accountDetails.username) {
        if (pinA == accountDetails.password) {
            window.location = "enter.html"
        } else {
            alert("Incorrect Password")
        }
    } else if (nameA == accountDetails.username2) {
        if (pinA == accountDetails.password2) {
            window.location = "enter.html"
        } else {
            alert("Incorrect Password")
        }
    } else if (nameA == accountDetails.username3) {
        if (pinA == accountDetails.password3) {
            window.location = "enter.html"
        } else {
            alert("Incorrect Password")
        }
    } else {
        alert("Name not found")
    }
}