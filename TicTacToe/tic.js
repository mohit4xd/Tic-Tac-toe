const cell = document.querySelectorAll(".cells");
const plr1 = document.querySelector(".trn");
const plr2 = document.querySelector(".trn2");
const sbmt = document.querySelector("#again");
const player1 = 'X';
const player2 = 'O';
let turn = true;
var a = [];
var b = [];
var cc = [];


//selecting cell  and proving 1 player chance alternative 
//and at the same time disbale  the once slected cell
// disbale c;ass in css

cell.forEach(c => {
    c.onclick = () => {
        if (turn == true) {
            a.push(c.id)
            c.classList.add('disable');
            c.style.color = "blue";
            changeColor();
            c.innerText = player1;
            turn = false;
            console.log(a, c.id);
            // if ((a.includes('c1')&& a.includes('c2')&&a.includes('c3'))||
            // (a.includes('c4')&& a.includes('c5')&&a.includes('c6'))||
            // (a.includes('c7')&& a.includes('c8')&&a.includes('c9'))||
            // (a.includes('c1')&& a.includes('c4')&&a.includes('c7'))||
            // (a.includes('c2')&& a.includes('c5')&&a.includes('c8'))||
            // (a.includes('c3')&& a.includes('c6')&&a.includes('c9'))||
            // (a.includes('c1')&& a.includes('c5')&&a.includes('c9'))||
            // (a.includes('c7')&& a.includes('c5')&&a.includes('c7'))) {
            //     console.log("WINNER  is Player A");
            //     sbmt.innerHTML=`
            //     <button class="btn" onclick="location.reload()">TRY AGAIN</button>`;

            // }
            // if (cheackWinA()) {
            //     cheackWinA();
            // }
            // else{
            //     gameover();
            // }
              cheackWinA();
              gameover();
        }
        else if (turn == false) {
            b.push(c.id)
            c.classList.add('disable');
            c.style.color = "aqua";
            changeColor();
            c.innerText = player2;
            turn = true;
            cheackWinB();
            //    if ((b.includes('c1')&& b.includes('c2')&&b.includes('c3'))||
            //     (b.includes('c4')&& b.includes('c5')&&b.includes('c6'))||
            //     (b.includes('c7')&& b.includes('c8')&&b.includes('c9'))||
            //     (b.includes('c1')&& b.includes('c4')&&b.includes('c7'))||
            //     (b.includes('c2')&& b.includes('c5')&&b.includes('c8'))||
            //     (b.includes('c3')&& b.includes('c6')&&b.includes('c9'))||
            //     (b.includes('c1')&& b.includes('c5')&&b.includes('c9'))||
            //     (b.includes('c7')&& b.includes('c5')&&b.includes('c7'))) {
            //         console.log("WINNER  is Player B");
            //         cc.push('WINNER')
            //         return;
            //     }



            console.log(b, c.id);
            document.getElementById

        }
        console.log(c);

    }

})
console.log(plr2.innerHTML)


function changeColor() {
    if (turn == true) {
        plr1.classList.add('on');
        plr2.classList.remove('on');
    } else {
        plr2.classList.add('on');
        plr1.classList.remove('on');
    }
}

const blr = document.querySelector(".wrapper");  

function cheackWinA() {
    if ((a.includes('c1') && a.includes('c2') && a.includes('c3')) ||
        (a.includes('c4') && a.includes('c5') && a.includes('c6')) ||
        (a.includes('c7') && a.includes('c8') && a.includes('c9')) ||
        (a.includes('c1') && a.includes('c4') && a.includes('c7')) ||
        (a.includes('c2') && a.includes('c5') && a.includes('c8')) ||
        (a.includes('c3') && a.includes('c6') && a.includes('c9')) ||
        (a.includes('c1') && a.includes('c5') && a.includes('c9')) ||
        (a.includes('c7') && a.includes('c5') && a.includes('c3'))) {
        console.log("WINNER  is Player A");
        sbmt.innerHTML = `
        <button class="btn" onclick="location.reload()">TRY AGAIN</button>
        <br>
        <p id="lst">WINNER IS PLAYER A<p>`;


        blr.classList.add('blur')
        cell.forEach(e=>{
            e.classList.add('disable');
        })
   


}

}
function cheackWinB() {
    if ((b.includes('c1') && b.includes('c2') && b.includes('c3')) ||
        (b.includes('c4') && b.includes('c5') && b.includes('c6')) ||
        (b.includes('c7') && b.includes('c8') && b.includes('c9')) ||
        (b.includes('c1') && b.includes('c4') && b.includes('c7')) ||
        (b.includes('c2') && b.includes('c5') && b.includes('c8')) ||
        (b.includes('c3') && b.includes('c6') && b.includes('c9')) ||
        (b.includes('c1') && b.includes('c5') && b.includes('c9')) ||
        (b.includes('c7') && b.includes('c5') && b.includes('c3'))) {
        console.log("WINNER  is Player B");
        sbmt.innerHTML = `
        <button class="btn" onclick="location.reload()">TRY AGAIN</button>
        <br>
        <p id="lst">WINNER IS PLAYER B<p>`;
        blr.classList.add('blur')
        

        cell.forEach(e=>{
            e.classList.add('disable');
        })
    }
}

function gameover() {
    if ((a.includes('c1') && a.includes('c3') && a.includes('c4') && a.includes('c6')&& a.includes('c8'))||
    (b.includes('c1') && b.includes('c3')  && b.includes('c4')&& b.includes('c6')&& b.includes('c8') )||
    (b.includes('c2') && b.includes('c7')  && b.includes('c4')&& b.includes('c6')&& b.includes('c9') )||
    (a.includes('c2') && a.includes('c7')  && a.includes('c4')&& a.includes('c6')&& a.includes('c9') )||
    (a.includes('c2') && a.includes('c1')  && a.includes('c7')&& a.includes('c6')&& a.includes('c8') )||
    (a.includes('c2') && a.includes('c3')  && a.includes('c4')&& a.includes('c8')&& a.includes('c9') )||
    (a.includes('c2') && a.includes('c1')  && a.includes('c6')&& a.includes('c8')&& a.includes('c7') )||
    (a.includes('c3') && a.includes('c1')  && a.includes('c4')&& a.includes('c8')&& a.includes('c9') )
)
    {sbmt.innerHTML = `
        <button class="btn" onclick="location.reload()">TRY AGAIN</button>
        <br>
        <p id="lst">GAME OVER<p>`;


        blr.classList.add('blur')
        cell.forEach(e=>{
            e.classList.add('disable');
        })}
}

