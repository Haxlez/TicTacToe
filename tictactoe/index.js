const box = document.querySelectorAll(".box")
const x = "x"
const circle = "circle"
let firstTurn
const winComb = [
        // Rows
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
]


box.forEach(function(box){
    box.addEventListener("click", (e) =>{
        const item = e.target
        firstTurn = !firstTurn
        if (firstTurn){
            item.classList.add(circle)
        } else {
            item.classList.add(x)
        }
        checkWin()
    }, { once : true })
})

function checkWin(){
    winComb.every(winComb =>{
        if(winComb = true) {
            alert("U WIN")
            return
        } else {
            alert("DRAW")
            return
        }

    })
}

