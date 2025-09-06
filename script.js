let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const com = document.querySelector("#com");

const gencompchoice = () => {
  let option = ["rock", "paper", "scissor"];
  let genIdx = Math.floor(Math.random() * 3);
  return option[genIdx];
};

const drawgame = () => {
  console.log("game was draw");
  msg.innerHTML = "Game was Draw";
  msg.style.backgroundColor = "#000037";
};

const winner = (userwin, userChoice, comChoice) => {
  if (userwin) {
    console.log("you win");
    msg.innerHTML = `you win! your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
    user.innerHTML = ++userscore;
  } else {
    console.log("you lost");
    msg.innerHTML = `you lost! computer ${comChoice} beats ${userChoice}`;

    com.innerHTML = ++comscore;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
  console.log("user choice = ", userChoice);

  const comChoice = gencompchoice();

  console.log("com choice = ", comChoice);

  if (userChoice === comChoice) {
    drawgame();
    msg.innerHTML = " Game was Draw";
  } else {
    let userwin = true;
    if (userChoice === "paper") {
      userwin = comChoice === "rock" ? true : false;
    } else if (userChoice == "rock") {
      userwin = comChoice === "scissor" ? true : false;
    } else {
      userwin = comChoice === "paper" ? true : false;
    }
    winner(userwin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
