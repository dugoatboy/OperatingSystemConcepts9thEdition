function check_section1_question1() {    
    var ans1 = document.getElementById("q1Answer1");
    var ans2 = document.getElementById("q2Answer2");
    var ans3 = document.getElementById("q3Answer3");
    var ans = 0;

    if(ans1 == "manage hardware" || ans1 == "provides basis for application programs" || ans1 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans2 == "manage hardware" || ans2 == "provides basis for application programs" || ans2 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans3 == "hardware management" || ans3 == "basis for application programs" || ans3 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans >= 3) {
        var s1q2 = document.getElementById("s1q2");
        s1q2.style.display = "block";
    }
}

function check_section1_question2() {
    var ans1 = document.getElementById("s1q2Answer1");
    var ans2 = document.getElementById("s1q2Answer2");
    var ans3 = document.getElementById("s1q3Answer3");
    var ans4 = document.getElementById("s1q4Answer4");
    var ans = 0;

    if(ans1 == "hardware" || ans1 == "operating system" || ans1 == "application programs" || ans1 == "users") {
        ans++;
    }

    if(ans2 == "hardware" || ans2 == "operating system" || ans2 == "application programs" || ans2 == "users") {
        ans++;
    }

    if(ans3 == "hardware" || ans3 == "operating system" || ans3 == "application programs" || ans3 == "users") {
        ans++;
    }

    if(ans4 == "hardware" || ans4 == "operating system" || ans4 == "application programs" || ans4 == "users") {
        ans++;
    }

    if(ans >= 4) {
        var sub3 = document.getElementById("sub2");
        sub2.style.display = "block";
    }
}

function checkQ3() {
    console.log(true);
}