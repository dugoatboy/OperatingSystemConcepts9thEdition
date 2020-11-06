function test() {
    var input1 = document.getElementById("s3q5Answer1").value = "a set of software frameworks provided to application developers";
    check_section3_question5();
}
function check_section1_question1() {    
    const answer1 = "CPUs";
    const answer2 = "device controllers";
    const answer3 = "shared memory";
    var input1 = document.getElementById("s1q1Answer1").value;
    var input2 = document.getElementById("s1q1Answer2").value;
    var input3 = document.getElementById("s1q1Answer3").value;

    if (answer1 != input1 && answer1 != input2 && answer1 != input3) {
        return;
    }

    if (answer2 != input1 && answer2 != input2 && answer2 != input3) {
        return;
    }

    if (answer3 != input1 && answer3 != input2 && answer3 != input3) {
        return;
    }

    document.getElementById("s1q2").style.display = "block";
}

function check_section1_question2() {
    const answer1 = "common bus";
    var input1 = document.getElementById("s1q2Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s1q3").style.display = "block";
}

function check_section1_question3() {
    const answer1 = "bootstrap program";
    var input1 = document.getElementById("s1q3Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s1q4").style.display = "block";
}

function check_section1_question4() {
    var answer1 = "hardware"
    var input1 = document.getElementById("s1q4Answer1").value;

    if (answer1 == input1) {
        var s1q5 = document.getElementById("s1q5");
        s1q5.style.display = "block";
    }
}

function check_section1_question5() {
    var answer1 = "ROM";
    
    var input1 = document.getElementById("s1q5Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q6").style.display = "block";
}

function check_section1_question6() {
    var answer1 = "read-only memory";
    
    var input1 = document.getElementById("s1q6Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q7").style.display = "block";
}

function check_section1_question7() {
    var answer1 = "electrically erasable prorammable read-only memory";
    
    var input1 = document.getElementById("s1q7Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q8").style.display = "block";
}

function check_section1_question8() {
    var answer1 = "firmware";
    
    var input1 = document.getElementById("s1q8Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q9").style.display = "block";
}

function check_section1_question9() {
    var answer1 = "system processes";
    var answer2 = "system daemons";
    
    var input1 = document.getElementById("s1q9Answer1").value;

    if (input1 != answer1 && input1 != answer2) {
        return;
    }
    
    document.getElementById("s1q10").style.display = "block";
}

function check_section1_question10() {
    var answer1 = "init";
    
    var input1 = document.getElementById("s1q10Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q11").style.display = "block";
}

function check_section1_question11() {
    var answer1 = "interrupts";
    
    var input1 = document.getElementById("s1q11Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q12").style.display = "block";
}

function check_section1_question12() {
    var answer1 = "hardware";
    
    var input1 = document.getElementById("s1q12Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q13").style.display = "block";
}

function check_section1_question13() {
    var answer1 = "system call";
    var answer2 = "monitor call";
    
    var input1 = document.getElementById("s1q13Answer1").value;

    if (input1 != answer1 && input1 != answer2) {
        return;
    }
    
    document.getElementById("s1q14").style.display = "block";
}

function check_section1_question14() {
    var answer1 = "interrupt vector";
    
    var input1 = document.getElementById("s1q14Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s1q15").style.display = "block";
}

function check_section1_question15() {
    var answer1 = "stack";
    
    var input1 = document.getElementById("s1q15Answer1").value;

    if (input1 != answer1) {
        return;
    }
    
    document.getElementById("s2q1").style.display = "block";
}

function check_section2_question1() {
    var answer1 = "main memory";

    var input1 = document.getElementById("s2q1Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q2").style.display = "block";
}

function check_section2_question2() {
    var answer1 = "byte";

    var input1 = document.getElementById("s2q2Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q3").style.display = "block";
}

function check_section2_question3() {
    var answer1 = "load";

    var input1 = document.getElementById("s2q3Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q4").style.display = "block";
}

function check_section2_question4() {
    var answer1 = "store";

    var input1 = document.getElementById("s2q4Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q5").style.display = "block";
}

function check_section2_question5() {
    var answer1 = "small";
    var answer2 = "volatile"

    var input1 = document.getElementById("s2q5Answer1").value;
    var input2 = document.getElementById("s2q5Answer2").value;

    if (answer1 != input1 && answer1 != input2) {
        return;
    }

    if (answer2 != input1 && answer2 != input2) {
        return;
    }

    document.getElementById("s2q6").style.display = "block";
}

function check_section2_question6() {
    var answer1 = "secondary storae";

    var input1 = document.getElementById("s2q6Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q7").style.display = "block";
}

function check_section2_question7() {
    var answer1 = "magnetic disk";

    var input1 = document.getElementById("s2q7Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q8").style.display = "block";
}

function check_section2_question8() {
    var answer1 = "volatile storage";

    var input1 = document.getElementById("s2q8Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q9").style.display = "block";
}

function check_section2_question9() {
    var answer1 = "nonvolatile storage";

    var input1 = document.getElementById("s2q9Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s2q10").style.display = "block";
}

function check_section2_question10() {
    var answer1 = "cache";

    var input1 = document.getElementById("s2q10Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s3q1").style.display = "block";
}

function check_section3_question1() {
    var answer1 = "device controllers";

    var input1 = document.getElementById("s3q1Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s3q2").style.display = "block";
}

function check_section3_question2() {
    var answer1 = "device driver";

    var input1 = document.getElementById("s3q2Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("s3q3").style.display = "block";
}

function check_section3_question3() {
    var answer1 = "direct memory access";

    var input1 = document.getElementById("s3q3Answer1").value;

    if (answer1 != input1) {
        return;
    }

    document.getElementById("success").style.display = "block";
}