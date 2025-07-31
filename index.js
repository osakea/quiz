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
let quest5 = new Quest('15 - 7 = ?', '8', '7', '6', '9', '10')
let quest6 = new Quest('7 x 8 = ?', '56', '48', '64', '54', '60')
let quest7 = new Quest('81 : 9 = ?', '9', '8', '7', '6', '10')
let quest8 = new Quest('14 + 6 = ?', '20', '18', '22', '21', '19')
let quest9 = new Quest('20 - 13 = ?', '7', '6', '5', '8', '9')
let quest10 = new Quest('5 x 6 = ?', '30', '25', '35', '20', '40')
let quest11 = new Quest('49 : 7 = ?', '7', '6', '8', '9', '10')
let quest12 = new Quest('18 + 5 = ?', '23', '22', '24', '25', '21')
let quest13 = new Quest('32 - 17 = ?', '15', '16', '14', '13', '12')
let quest14 = new Quest('9 x 4 = ?', '36', '32', '28', '30', '40')
let quest15 = new Quest('64 : 8 = ?', '8', '7', '6', '9', '10')

let list_quest = []

list_quest.push(quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15)


let current = 0

let quest_answer = 0
let quest_correct = 0

let main = document.querySelector('main')
let section = document.querySelector('section')

for(let i = 0; i < num.length; i += 1) {
    num[i].addEventListener('click', function() {
        
        if(this.innerHTML == list_quest[current].answer){ 
            this.style.backgroundColor = 'green'
            quest_correct ++;
            setTimeout(() => {
                this.style.backgroundColor = 'white'
            }, 500);
        }else{
            this.style.backgroundColor = 'red'
            setTimeout(() => {
                this.style.backgroundColor = 'white' 
            }, 200);
        }
        console.log(current);
        
        if(current >= 14) {
            console.log('hide');
            
            section.style.display = 'flex'
            main.style.display = 'none'
        }
        current ++; 
        quest_answer ++;

        list_quest[current].display() 

        
        
    })


}

let restart = document.querySelector('.restart')

restart.addEventListener('click', function() {
    section.style.display = 'none'
    main.style.display = 'flex'
    current = 0
})

list_quest[0].display()