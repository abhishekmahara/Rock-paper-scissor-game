let userSCore =0;
let CompScore= 0;

const  genCompchoice = () =>{
    const options=["rock","paper","scissors"];
    const ranInx =Math.floor(Math.random()*3);
    return options[ranInx];

}
const playgame=(userChoice)=>{
    console.log("userchoice = "+ userChoice);
    const compChoice =genCompchoice();
    console.log(compChoice) 

}

const choices =document.querySelectorAll(".choice");

choices.forEach((choice)  => {
    choice.addEventListener("click",()=>{
       const choiceId = choice.getAttribute("id");
       console.log("clicked "+ choiceId) ;


    });
});