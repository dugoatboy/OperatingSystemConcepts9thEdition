function checkQ1() {    
    var ans1 = document.getElementById("q1Answer1");
    var ans2 = document.getElementById("q2Answer2");
    var ans3 = document.getElementById("q3Answer3");

    var answers = ["hardware management", "user/computer intermediary", "provides a basis for applications"];
    
    if (answers.find(ans1) == null) {
        return;
    }

    if (answers.find(ans2) == null) {
        return;
    }

    if (answers.find(ans3) == null) {
        return;
    }
    
    var sub2 = document.getElementById("sub2");
    sub2.style.display = "block";
}

function checkQ2() {
    console.log(true);
}

function checkQ3() {
    console.log(true);
}