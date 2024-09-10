// let userScore = 0;
// const answeredQuestions = {};

// const options = document.querySelectorAll(".option");
// const msg = document.querySelector(".msg");
// const points = document.querySelector("#points");
// const btn = document.querySelector(".btn");
// const word=document.querySelector("#user-score");


// const corrAnswers = () => {
//     return { 
//         ques1: "Mt.Everest",
//         ques2: "Hong-Kong",
//         ques3: "Peregrine-Falcon",
//         ques4: "England",
//         ques5: "Amazon-Forest"
//     };
// };


// const storeAnswer = (ques, userChoice) => {
//     answeredQuestions[ques] = userChoice;
// };


// btn.addEventListener("click", () => {
//     const correctAnswers = corrAnswers();
//     userScore = 0;

//     for (let ques in answeredQuestions) {
//         if (answeredQuestions[ques] === correctAnswers[ques]) {
//             userScore++;
//         }
//     }

//     // options.forEach((op) => {
//     //     const questionId = op.closest(".ques").querySelector(".question").getAttribute("id");
//     //     if (answeredQuestions[questionId] === correctAnswers[questionId]) {
//     //         if (op.getAttribute("id") === correctAnswers[questionId]) {
//     //             op.style.color = "green";
//     //         }
//     //     }
//     // });


//     points.innerText = `${userScore}`;
//     points.style.color="darkgreen";
//     word.style.color="darkgreen";
//     msg.innerText = `You got ${userScore} right`;
//     msg.style.color="darkgreen";
//     // msg.style.backgroundColor="lightgreen";

//     options.forEach((op)=>{
//         op.disabled=true;
//     });

//     btn.disabled=true;
    
// });



// options.forEach((op) => {
//     op.addEventListener("click", () => {
//         const userChoice = op.getAttribute("id");
//         const ques = op.closest(".ques").querySelector(".question").getAttribute("id");

//         storeAnswer(ques, userChoice); 
//     });
// });

// function handleColorSelection(colorClass, specialClass) {
//     document.querySelectorAll(`.${colorClass}`).forEach((col) => {
//         col.addEventListener("click", () => {
//             document.querySelector(`.${specialClass}`)?.classList.remove(specialClass);
//             col.classList.add(specialClass);
//         });
//     });
// }

// handleColorSelection("color1", "special1");
// handleColorSelection("color2", "special2");
// handleColorSelection("color3", "special3");
// handleColorSelection("color4", "special4");
// handleColorSelection("color5", "special5");


// document.getElementById("refresh").addEventListener("click", function() {
//     location.reload(); 
// });


let userScore = 0;
const answeredQuestions = {};

const options = document.querySelectorAll(".option");
const msg = document.querySelector(".msg");
const points = document.querySelector("#points");
const btn = document.querySelector(".btn");
const word = document.querySelector("#user-score");

const corrAnswers = () => {
    return { 
        ques1: "Mt.Everest",
        ques2: "Hong-Kong",
        ques3: "Peregrine-Falcon",
        ques4: "England",
        ques5: "Amazon-Forest"
    };
};

const storeAnswer = (ques, userChoice) => {
    answeredQuestions[ques] = userChoice;
};

btn.addEventListener("click", () => {
    const correctAnswers = corrAnswers();
    userScore = 0;

    for (let ques in answeredQuestions) {
        if (answeredQuestions[ques] === correctAnswers[ques]) {
            userScore++;
        }
    }

    points.innerText = `${userScore}`;
    points.style.color = "darkgreen";
    word.style.color = "darkgreen";
    msg.innerText = `You got ${userScore} right`;
    msg.style.color = "darkgreen";

    options.forEach((op) => {
        const questionId = op.closest(".ques").querySelector(".question").getAttribute("id");
        if (op.getAttribute("id") === correctAnswers[questionId]) {
            op.style.color = "green";
        }
        op.disabled = true; 
    });

    btn.disabled = true; 
});

options.forEach((op) => {
    op.addEventListener("click", () => {
        const userChoice = op.getAttribute("id");
        const ques = op.closest(".ques").querySelector(".question").getAttribute("id");

        storeAnswer(ques, userChoice);
    });
});

function handleColorSelection(colorClass, specialClass) {
    document.querySelectorAll(`.${colorClass}`).forEach((col) => {
        col.addEventListener("click", () => {
            document.querySelector(`.${specialClass}`)?.classList.remove(specialClass);
            col.classList.add(specialClass);
        });
    });
}

handleColorSelection("color1", "special1");
handleColorSelection("color2", "special2");
handleColorSelection("color3", "special3");
handleColorSelection("color4", "special4");
handleColorSelection("color5", "special5");

document.getElementById("refresh").addEventListener("click", function() {
    location.reload(); 
});
