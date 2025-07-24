const question =document.querySelector('.question')

const num = document.querySelectorAll('.num div')

class Quest{
    constructor(quest, answer, wrong1, wrong2, wrong3, wrong4){
        this.quest = quest;
        this.answer = answer;
        this.answer_array = [
            answer, 
            wrong1,
            wrong2,
            wrong3,
            wrong4
        ]
    }

    display(){
        const random = this.answer_array.sort(()=> Math.random()-0.5)
        for(let i = 0; i < random.length; i += 1)
            {
                num[i].innerHTML = random[i]
        }
        question.innerHTML = this.quest
    }


}

let quest1 = new Quest('5 + 3 = ?', '8', '7', '9', '10', '11')
let quest2 = new Quest('6 x 9 = ?', '54', '50', '55', '60', '65')
let quest3 = new Quest('9 + 3 = ?', '12', '11', '13', '14', '15')
let quest4 = new Quest('24 : 4 = ?', '6', '5', '7', '8', '9')

quest1.display()

let list_quest = [quest1, quest2,quest3,quest4]

let current = 0

for(let i = 0; i < num.length; i += 1) {
    num[i].addEventListener('click', function() {
        list_quest[current].display()
        current ++;
    })
}