function checkQ1() {    
    var ans1 = document.getElementById("q1Answer1");
    var ans2 = document.getElementById("q2Answer2");
    var ans3 = document.getElementById("q3Answer3");
    var ans = 0;

    if(ans1 = "manage hardware" || "provides basis for application programs" || "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans2 = "manage hardware" || "provides basis for application programs" || "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans3 = "manage hardware" || "provides basis for application programs" || "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans >= 3) {
        var sub2 = document.getElementById("sub2");
        sub2.style.display = "block";
    }
}

function checkQ2() {
    console.log(true);
}

function checkQ3() {
    console.log(true);
}