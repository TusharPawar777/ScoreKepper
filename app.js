const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1_button = document.querySelector('#p1_button')
const p2_button = document.querySelector('#p2_button')
const reset = document.querySelector('#reset')
const selector = document.querySelector('#selector')
let count1 = 0;
let count2 = 0;
let winningScore = 0;
let isWinningScore = false;

p1_button.addEventListener('click', () => {
    if (winningScore == 0) {
        return;
    }
    if (isWinningScore !== true) {
        count1++;
        if (count1 === winningScore) {
            isWinningScore = true;
            player1.classList.add('has-text-success');
            player2.classList.add('has-text-danger');
            p1_button.disabled=true;
            p2_button.disabled=true;
        }

        player1.textContent = count1;
    }

})
p2_button.addEventListener('click', () => {
    if (winningScore == 0) {
        return;
    }
    if (isWinningScore !== true) {
        count2++;
        if (count2 === winningScore) {
            isWinningScore = true;
            player2.classList.add('has-text-success');
            player1.classList.add('has-text-danger');
            p1_button.disabled=true;
            p2_button.disabled=true;
        }

        player2.textContent = count2;
    }


})

selector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();
})



reset.addEventListener('click',Reset);

function Reset()
{
    count1 = 0;
    count2 = 0;
    player1.textContent = count1;
    player2.textContent = count2;
    isWinningScore = false;
    player1.classList.remove('has-text-success','has-text-danger');
    player2.classList.remove('has-text-success','has-text-danger');
    p1_button.disabled=false;
    p2_button.disabled=false;

}
