const dabba = [
    {
        questions:"The practice of separating the user from true inner workings of an application through well known interfaces is known as _______ ",
        a: "Polymorphism",
        b:"Inheritance",
        c:"Encapsulation",
        d:"Abstraction",
        ans: "ans3"
    },
    {
        questions:"The practice of creating objects based on pre-defined classes is often regarded as _____",
        a: "Object  creation",
        b:"Class creation",
        c:"Object instantiation",
        d:"Class instantiation",
        ans: "ans4"
    },
    {
        questions:"Which of the following scopes is not supported by PHP?",
        a: "Friendly ",
        b:"Public ",
        c:"Private",
        d:"Static",
        ans: "ans1"
    },
    {
        questions:"Which of the following type of class allows only one object of it to be created?",
        a: "Virtual class",
        b:"Abstract class ",
        c:"Singleton class",
        d:"Friend class",
        ans: "ans3"
    },
    {
        questions:"Which of the following is the right way to define a constant?",
        a: "constant PI = “3.1415”; ",
        b:"const $PI = “3.1415”;",
        c:"constant PI = ‘3.1415’;",
        d:"const PI = ‘3.1415’;",
        ans: "ans4"
    },
    {
        questions:"Which of the following statements is correct?",
        a: "Base class pointer cannot point to derived class. ",
        b:"Derived class pointer cannot point to base class.",
        c:"Pointer to derived class cannot be created.",
        d:"Pointer to base class cannot be created.",
        ans: "ans2"
    },
    {
        questions:"Which of the following is not the member of class?",
        a: "Static function",
        b:"	Friend function",
        c:"Const function",
        d:"	Virtual function",
        ans: "ans2"
    },
    {
        questions:"Which of the following concepts means determining at runtime what method to invoke?",
        a: "Data hiding",
        b:"Dynamic Typing",
        c:"	Dynamic binding",
        d:"Dynamic loading",
        ans: "ans3"
    },
    {
        questions:"Which of the following term is used for a function defined inside a class?",
        a: "Member Variable",
        b:"	Member function",
        c:"Class function",
        d:"Classic function",
        ans: "ans2"
    },
    {
        questions:"How many instances of an abstract class can be created?",
        a: "0",
        b:"1",
        c:"2",
        d:"3",
        ans: "ans1"
    },
]

let que = document.querySelector('.question');
let option1= document.querySelector('#option1');
let option2= document.querySelector('#option2');
let option3= document.querySelector('#option3');
let option4= document.querySelector('#option4');
let submit = document.querySelector('.submit'); 
let answers = document.querySelectorAll('.answers');
let finalscore = document.querySelector('#score');
let queCount = 0;
let score=0;
const loadQue = ()=>{
    let quelist = dabba[queCount]
    que.innerText = quelist.questions;
    option1.innerText = quelist.a;
    option2.innerText = quelist.b;
    option4.innerText = quelist.d;
    option3.innerText = quelist.c;
}
loadQue();
const getCheckAnswer = ()=>{
    let answer;
     answers.forEach((curr) => {
        if(curr.checked){
            answer = curr.id;
        }
    });
    return answer;
}
const deselectAll = ()=>{
    answers.forEach((curr)=>{
        if(curr.checked){
            curr.checked = false;
        }
    })
}
submit.addEventListener('click',()=>{
    const checkAnwswer =  getCheckAnswer();
   
   if(checkAnwswer === dabba[queCount].ans){ 
     score++;
   }
   deselectAll();
   queCount++;
   if(queCount< dabba.length){
       loadQue();
   }
   else{
       finalscore.classList.remove('scoreArea');
       if(score>=9){
           finalscore.innerHTML = `<h4> Congratulation you scored full:- ${score}/${dabba.length} 🏅 </h4>
                                  <button class="btn" onclick="location.reload()">Again? 💯</button>`;
       }
       else if(score>=6 && score<9){
        finalscore.innerHTML = `<h4> Your score is average.Can be improved ${score}/${dabba.length} 🤟 </h4>
        <button class="btn" onclick="location.reload()">Try once more? 👍 </button>`;
       }
       else{
        finalscore.innerHTML = `<h4> Your score is low.You need practice ${score}/${dabba.length} 😅 </h4>
        <button class="btn" onclick="location.reload()">Try Again 👍 </button>`;
   }
}
})

