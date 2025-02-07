const data = [
    {
        question: " Q1 : The largest planet in our solar system is:",
        options: [
            " a) Earth",
            " b) Mars",
            " c) Jupiter",
            " d) Saturn"
        ],
        correct: 2,
    },
    {
        question: " Q2: Which country is known as the Land of the Rising Sun?",
        options: [" a) China", " b) Japan", " c) South Korea", " d) Thailand"],
        correct: 1,
    },
    {
        question: " Q3: What is the capital city of Australia?",
        options: [" a) Sydney", " b) Melbourne", " c) Canberra", " d) Perth"],
        correct: 2,
    },
    {
        question: " Q4: The Great Wall of China was primarily built to:",
        options: [
            " a) Mark borders",
            " b) Boost tourism",
            " c) Protect from invasions",
            " d) Improve trade routes"
        ],
        correct: 2,
    },
    {
        question: " Q5: Which is the smallest continent by land area?",
        options: [" a) Antarctica", " b) Europe", " c) South America", " d) Australia"],
        correct: 3,
    },
    {
        question: " Q6: The process of converting gas into liquid is known as:",
        options: [
            " a) Evaporation",
            " b) Condensation",
            " c) Sublimation",
            " d) Freezing"
        ],
        correct: 1,
    },
    {
        question: " Q7: Who invented the light bulb?",
        options: [
            " a) Nikola Tesla",
            " b) Albert Einstein",
            " c) Thomas Edison",
            " d) Alexander Graham Bell"
        ],
        correct: 2,
    },
    {
        question: " Q8: What is the primary language spoken in Brazil?",
        options: [" a) Spanish", " b) Portuguese", " c) French", " d) English"],
        correct: 1,
    },
    {
        question: " Q9: In which year did the Titanic sink?",
        options: [
            " a) 1912",
            " b) 1905",
            " c) 1923",
            " d) 1898"
        ],
        correct: 0,
    },
    {
        question: " Q10: What is the chemical symbol for water?",
        options: [" a) O2", " b) H2O", " c) CO2", " d) HO"],
        correct: 1,
    },
];

// step2
const quiz2 = document.querySelector(".quiz")

const answerel2 = document.querySelectorAll(".answer");
const [questionelem2, option1e, option2n, option3g, option4l] =
    document.querySelectorAll(
        "#question", "#option1", "#option2", "#option3", "#option4");
const submitbtn2 = document.getElementById("submit");
let currentquiz2 = 0;
let scoree = 0;
// let name2 = prompt("enter your name")
name3.innerHTML = name2
// step3


function gk() {
    var word = prompt("enter your name")
    let name = alert("Welcome" + " " + word + " " + "Best of luck")

    const loadquiz2 = () => {
        var { question, options } = data[currentquiz2];
        console.log(question);
        questionelem2.innerText = question;
        options.forEach((currentoption, index) => window[`option${index + 1}`].innerText = currentoption)
    };


    loadquiz2();

    // step4

    const getoption2 = () => {
        let ans;
        answerel2.forEach((currentoption, index) => {
            if (currentoption.checked) {
                ans = index;
            }
        })
        console.log(`Answer selected: ${ans}`); // For debugging
        return ans;

    }
    const deselectedanwser2 = () => {
        answerel2.forEach((curelm) => curelm.checked = false);
    }
    submitbtn2.addEventListener('click', () => {
        const selected2 = getoption2();
        console.log(selected2);

        if (selected2 == data[currentquiz2].correct) {
            scoree = scoree + 1
        }

        currentquiz2++
        if (currentquiz2 < data.length) {
            deselectedanwser2();
            loadquiz2();

        } else {
            quiz2.innerHTML = `
        <div class="result">
        <h2> your score: ${scoree}/${data.length} correct Answer</h2>
        <p>congratulations on completing the quiz! <i class="fa-solid fa-trophy"></i></p>
        <button class="reload-button" onclick="location.reload()">play Again</button>
        </div>
        `;
        }

    });
}
gk();
