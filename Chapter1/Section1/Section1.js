function check_section1_question1() {    
    var ans1 = document.getElementById("s1q1Answer1").value;
    var ans2 = document.getElementById("s1q1Answer2").value;
    var ans3 = document.getElementById("s1q1Answer3").value;
    var ans = 0;

    if(ans1 == "hardware management" || ans1 == "provides basis for application programs" || ans1 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans2 == "hardware management" || ans2 == "provides basis for application programs" || ans2 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans3 == "hardware management" || ans3 == "provides basis for application programs" || ans3 == "acts as intermediary between the user and the hardware") {
        ans++;
    }

    if(ans >= 3) {
        var s1q2 = document.getElementById("s1q2");
        s1q2.style.display = "block";
    }
}

function check_section1_question2() {
    var ans1 = document.getElementById("s1q2Answer1").value;
    var ans2 = document.getElementById("s1q2Answer2").value;
    var ans3 = document.getElementById("s1q2Answer3").value;
    var ans4 = document.getElementById("s1q2Answer4").value;
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
        var s1q3 = document.getElementById("s1q3");
        s1q3.style.display = "block";
    }
}

function check_section1_question3() {
    var answer1 = "provides the basic computing resources for the system"
    var input1 = document.getElementById("s1q3Answer1").value;

    if (answer1 == input1) {
        var s1q4 = document.getElementById("s1q4");
        s1q4.style.display = "block";
    }
}

function check_section1_question4() {
    var answer1 = "defines the ways in which the computer's resources are used to solve the user's problems"
    var input1 = document.getElementById("s1q4Answer1").value;

    if (answer1 == input1) {
        var s1q5 = document.getElementById("s1q5");
        s1q5.style.display = "block";
    }
}

function check_section1_question5() {
    var answer1 = "personal computer"
    var answer2 = "mainframe terminal"
    var answer3 = "workstation"
    var answer4 = "mobile devices"
    
    var input1 = document.getElementById("s1q5Answer1").value;
    var input2 = document.getElementById("s1q5Answer2").value;
    var input3 = document.getElementById("s1q5Answer3").value;
    var input4 = document.getElementById("s1q5Answer4").value;

    if (input1 != answer1 || input1 != answer2 || input1 != answer3 || input1 != answer4) {
        return;
    }

    if (input2 != answer1 || input2 != answer2 || input2 != answer3 || input2 != answer4) {
        return;
    }

    if (input3 != answer1 || input3 != answer2 || input3 != answer3 || input3 != answer4) {
        return;
    }

    if (input4 != answer1 || input4 != answer2 || input4 != answer3 || input4 != answer4) {
        return;
    }
    
}