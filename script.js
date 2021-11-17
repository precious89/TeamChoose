var name = [];
var gender = [];
var age = [];

function firstNameA() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const autoTeamA = document.getElementById("autoTeamA");

    if (name == "") {
        alert("Name cannot be empty!!");
        return;
    }


    if (age < 20) {
        alert("you are not allowed because you are under 20");
        return;
    }

    autoTeamA.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";

}

function firstNameB() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const autoTeamB = document.getElementById("autoTeamB");

    if (name == "") {
        alert("Name cannot be empty!!");
        return;
    }


    if (age < 20) {
        alert("you are not allowed because you are under 20");
        return;
    }

    autoTeamB.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";

}

