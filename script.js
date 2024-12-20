let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turnX ? "X" : "O";
            box.disabled = true;
            checkWinner();
            turnX = !turnX;
        }
    });
  
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner: ", pos1Val);
            highlightWinner(pattern);
            disableAllBoxes();
            return;
        }
    }
};

const highlightWinner = (pattern) => {
    pattern.forEach(index => {
        boxes[index].classList.add("winner");
    });
};

const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("winner");
    });
    turnX = true;
});
