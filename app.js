const quizdata = [
    {
        question: " Q1: What is the value of π (pi) to two decimal places?",
        options: [
            " a) 3.12",
            " b) 3.14",
            " c) 3.15",
            " d) 3.16"
        ],
        correct: 1,
    },
    {
        question: " Q2: What is the square root of 144?",
        options: [" a) 10", " b) 11", " c) 12", " d) 13"],
        correct: 2,
    },
    {
        question: " Q3: If a triangle has sides of 3 cm, 4 cm, and 5 cm, it is a:",
        options: [
            " a) Right triangle",
            " b) Isosceles triangle",
            " c) Equilateral triangle",
            " d) Scalene triangle"
        ],
        correct: 0,
    },
    {
        question: " Q4: What is the result of 7 × 8?",
        options: [
            " a) 54",
            " b) 56",
            " c) 58",
            " d) 60"
        ],
        correct: 1,
    },
    {
        question: " Q5: The perimeter of a square with a side length of 5 cm is:",
        options: [
            " a) 15 cm",
            " b) 20 cm",
            " c) 25 cm",
            " d) 30 cm"
        ],
        correct: 1,
    },
    {
        question: " Q6: What is 15% of 200?",
        options: [
            " a) 20",
            " b) 25",
            " c) 30",
            " d) 35"
        ],
        correct: 2,
    },
    {
        question: " Q7: What is the value of 2^5?",
        options: [
            " a) 16",
            " b) 32",
            " c) 64",
            " d) 128"
        ],
        correct: 1,
    },
    {
        question: " Q8: Which of the following is a prime number?",
        options: [
            " a) 16",
            " b) 21",
            " c) 23",
            " d) 25"
        ],
        correct: 2,
    },
    {
        question: " Q9: If a = 10 and b = 5, what is the value of a - b?",
        options: [
            " a) 3",
            " b) 5",
            " c) 10",
            " d) 15"
        ],
        correct: 1,
    },
    {
        question: " Q10: The area of a rectangle with a length of 8 cm and width of 3 cm is:",
        options: [
            " a) 11 cm²",
            " b) 20 cm²",
            " c) 24 cm²",
            " d) 30 cm²"
        ],
        correct: 2,
    },
];

// step2
const quiz = document.querySelector("quiz")
//let name 2 = document.queryselector("name")

const answerel = document.querySelectorAll(".answer");
const [questionelem, option1, option2, option3, option4,] =
    document.querySelectorAll(
        "#question", "#option1", "#option2", "#option3", "#option4");
const submitbtn = document.getElementById("submit");
let currentquiz = 0;
let score = 0;
// let name1 = prompt("enter you name")
name2.innerhtml = name1
//step3

function math() {
    var word1 = prompt("enter your name")
    alert("welcome" + "" + word1 + "" + "Best Wishes")
    const loadquiz = () => {
        const { question, options } = quizdata[currentquiz];
        console.log(question);
        questionelem.innerText = question;
        options.forEach((currentoption, index) => window[`option${index + 1}`].innerText = currentoption)
    };


    loadquiz();

    // step4

    const getoption = () => {
        let ans;
        answerel.forEach((currentoption, index) => {
            if (currentoption.checked) {
                ans = index;
            }
        })
        console.log(`Answer selected: ${ans}`); // For debugging
        return ans;

    }
    const deselectedanwser = () => {
        answerel.forEach((curelm) => curelm.checked = false);
    }
    submitbtn.addEventListener('click', () => {
        const selected = getoption();
        console.log(selected);

        if (selected == quizdata[currentquiz].correct) {
            score = score + 1
        }

        currentquiz++
        if (currentquiz < quizdata.length) {
            deselectedanwser();
            loadquiz();

        } else {
            quiz.innerHTML = `
            <div class="result">
            <h2> your score: ${score}/${quizdata.length} correct Answer</h2>
            <p>congratulations on completing the quiz! <i class="fa-solid fa-trophy"></i></p>
            <button class="reload-button" onclick="location.reload()">play Again</button>
            </div>
            `;
        }

    });
}
math();




// second subject






