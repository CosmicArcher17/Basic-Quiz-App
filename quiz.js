var questions = [
    {
        question: "Closest Planet to Sun?",
        ans: [
            { text: 'Mars', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Mercury', correct: true }
        ]
    },
    {
        question: "How many wonders of the world?",
        ans: [
        { text: 3, correct: false },
        { text: 9, correct: false },
        { text: 7, correct: true },
        { text: 2, correct: false }
        ]
    },
    {
        question: "Tallest Mountain?",
        ans: [
        { text: 'Kanchenjunga', correct: false },
        { text: 'Mt.Everest', correct: true },
        { text: 'Mt.Fuji', correct: false },
        { text: 'Kilimanjaro', correct: false }
        ]
    },
    {
        question: "Saturn is the _______ planet from Sun",
        ans: [
        { text: '2nd', correct: false },
        { text: '7th', correct: false },
        { text: '6th', correct:true },
        { text: '3rd', correct: false }
        ]
    },
    {
        question: "How many days in a leap year?",
        ans: [
        { text: '345', correct: false },
        { text: '387', correct: false },
        { text: '365', correct: false },
        { text: '366', correct: true }
        ]
    }
];
var currentques;
var quesno=1;
var qindex=0;
var score=0;
var opts=Array.from(document.getElementsByClassName("answer"));
function next(){  
    currentques=questions[qindex];
    var b=document.getElementById('qname').innerHTML=quesno+"."+currentques.question;
    for(var i=0;i<opts.length;i++){
        if(opts[i].checked && opts[i].value==currentques.ans[i].text && currentques.ans[i].correct==true){
            score++;
        }
    }
    if(qindex<questions.length-1){
        qindex++;
        quesno++;
        disp();
    }
    else{
        document.getElementById("scr").innerHTML="You scored"+" "+score+" "+"points!";
    }


}
function disp(){
    currentques=questions[qindex];
    document.getElementById('qname').innerHTML=quesno+"."+currentques.question;

    document.getElementById('op1').value=currentques.ans[0].text;
    document.getElementById('op1').nextSibling.textContent=currentques.ans[0].text;

    document.getElementById('op2').value=currentques.ans[1].text;
    document.getElementById('op2').nextSibling.textContent=currentques.ans[1].text;

    document.getElementById('op3').value=currentques.ans[2].text;
    document.getElementById('op3').nextSibling.textContent=currentques.ans[2].text;

    document.getElementById('op4').value=currentques.ans[3].text;
    document.getElementById('op4').nextSibling.textContent=currentques.ans[3].text;
    for(var i=0;i<opts.length;i++){
        opts[i].checked=false;
    }
}

function prev(){ 
    qindex--;
    quesno--;
    currentques=questions[qindex];
    var b=document.getElementById('qname').innerHTML=quesno+"."+currentques.question;

    document.getElementById('op1').value=currentques.ans[0].text;
    document.getElementById('op1').nextSibling.textContent=currentques.ans[0].text;

    document.getElementById('op2').value=currentques.ans[1].text;
    document.getElementById('op2').nextSibling.textContent=currentques.ans[1].text;

    document.getElementById('op3').value=currentques.ans[2].text;
    document.getElementById('op3').nextSibling.textContent=currentques.ans[2].text;

    document.getElementById('op4').value=currentques.ans[3].text;
    document.getElementById('op4').nextSibling.textContent=currentques.ans[3].text;

}

