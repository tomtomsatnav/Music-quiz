scoreNumber = 0;

const scores = "Score: " + scoreNumber;
const Questions = [{
    id: 0,
    q: "What year did Atlas by Parkway Drive come out?",
    a: [{ text: "2011", isCorrect: false },
        { text: "2010", isCorrect: false },
        { text: "2012", isCorrect: true },
        { text: "2009", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the lead singer of Bring Me The Horizons name?",
    a: [{ text: "James Hetfield", isCorrect: false, isSelected: false },
        { text: "Corey Taylor", isCorrect: false },
        { text: "Lars Ulrich", isCorrect: false },
        { text: "Oli Sykes", isCorrect: true }
    ]
},
{
    id: 2,
    q: "Which of the following bands does not have a self titled album?",
    a: [{ text: "Rammstein", isCorrect: false },
        { text: "Slipknot", isCorrect: false },
        { text: "Testament", isCorrect: true },
        { text: "Deftones", isCorrect: false }
    ]

}

]

start = true;

function iterate(id) {

result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");
const score = document.getElementById("score");

question.innerText = Questions[id].q;
score.innerText = scores;

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(9, 11, 167)";
    op2.style.backgroundColor = "rgb(7, 37, 56)";
    op3.style.backgroundColor = "rgb(7, 37, 56)";
    op4.style.backgroundColor = "rgb(7, 37, 56)";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(7, 37, 56)";
    op2.style.backgroundColor = "rgb(9, 11, 167)";
    op3.style.backgroundColor = "rgb(7, 37, 56)";
    op4.style.backgroundColor = "rgb(7, 37, 56)";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(7, 37, 56)";
    op2.style.backgroundColor = "rgb(7, 37, 56)";
    op3.style.backgroundColor = "rgb(9, 11, 167)";
    op4.style.backgroundColor = "rgb(7, 37, 56)";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(7, 37, 56)";
    op2.style.backgroundColor = "rgb(7, 37, 56)";
    op3.style.backgroundColor = "rgb(7, 37, 56)";
    op4.style.backgroundColor = "rgb(9, 11, 167)";
    selected = op4.value;
})

const checkAnswer = document.getElementsByClassName("checkAnswer");

checkAnswer[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
id = 0;

next.addEventListener("click", () => {
start = false;
if (id <= 1) {
    id++;
    iterate(id);
    console.log(id);
} else if (id == 2) {
    window.location.href = "highScores.html";
}
})