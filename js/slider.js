const btn = document.querySelector(".btn");
const Rules = document.querySelector(".Rules");
const exitbtn = document.querySelector(".exitbtn");
const startbtn = document.querySelector(".startbtn");
const quiz = document.querySelector(".html-quiz");
const replay = document.querySelector(".replay")
 const list= document.querySelector('.html-list')
 const secends = document.querySelector('.timeof .secends')
 const counterline = document.querySelector(".html-quiz .dynamic-time")
 
   
 let counter;
 let counternum = 15;
 let userscore = 0;




btn.onclick = () => {
  Rules.classList.add("ActiveChange");
};
exitbtn.onclick = () => {
  Rules.classList.remove("ActiveChange");
};
startbtn.onclick = () => {
  Rules.classList.remove("ActiveChange");
  quiz.classList.add("Activeques");
  showQuestion(0);
  clearInterval(counter)
  starttime(15)

};




function showQuestion(index) {
  let questext = document.querySelector(".html-question");
  const questaxtch = "<span>" +Questions[index].num +"." + Questions[index].question +"</span>";
     questext.innerHTML = questaxtch;

  const queslist = document.querySelector(".html-list");
  const queslistch =
    '<div class="options">'+ Questions[index].everquestion[0] + "</div>"
    +'<div class="options"> '+ Questions[index].everquestion[1] + "</div>"
    +'<div class="options">'+ Questions[index].everquestion[2] + "</div>"
    +'<div class="options">'+ Questions[index].everquestion[3] + "</div>"
  queslist.innerHTML = queslistch;
  const ofnumberdynamic = document.querySelector(".html-footer-dyna");
      const ofnumberdynamicch='<div class="ofnumber">'+Questions[index].num+ ' Of 5'+'</div>'
      ofnumberdynamic.innerHTML=ofnumberdynamicch;
            

      const optioner=list.querySelectorAll('.options')
       for(let cou=0;cou<optioner.length; cou++){
         optioner[cou].setAttribute("onclick" , "optionselected(this)")
       }
       clearInterval(counter)
       starttime(counternum)
   

}



const tikIcon= '<div class="tikIcon"> <i class="fa-solid fa-check"></i> </div>'
const crossIcon= '<div class="crossIcon"> <i class="fa-solid fa-times"></i> </div>'

const nextque=document.querySelector(".next-que")
const resultbox = document.querySelector(".result_box");
const header= document.querySelector('.header')




function resultshow(){
  Rules.classList.remove("ActiveChange");
  quiz.classList.remove("Activeques");
  header.classList.add("hidden")

  const resultcontent = document.querySelector(".got-result")

    if(userscore >0){
      let resultdynamic='<span class="got"> congratulation you have got😍 <p> '+userscore+' </p> out of <p>5</p></span>'
      resultcontent.innerHTML=resultdynamic;
      console.log(resultdynamic);
    }
    
    
}



function optionselected(ans){
        
         console.log(userscore)
        clearInterval(counter)
     const textans = ans.textContent;
      const correctans = Questions[count].answer;
      const alloptions= list.children.length;
      if(textans == correctans){
        ans.classList.add("correct")
        userscore +=1
        console.log("right")
        ans.insertAdjacentHTML('beforeend',tikIcon)
        
      }else{
        ans.classList.add("incorrect")
        ans.insertAdjacentHTML("beforeend" ,crossIcon)
        for(let i=0;i<alloptions;i++){
             if(list.children[i].textContent == correctans){
               list.children[i].setAttribute("class","options correct")
               list.children[i].insertAdjacentHTML("beforeend" ,tikIcon)
             }

        }
      }

      for(let i=0; i<alloptions; i++){
          list.children[i].classList.add("disable")

      }
      nextque.style.display= "block";
}


let count=0;





nextque.onclick=()=>{
  if(count <Questions.length-1){
    count++;
       showQuestion(count)
  }else{
    resultshow()
      console.log("you have complate your task!")
      
  }
  nextque.style.display= "none"
      
}





function starttime(time){
    counter= setInterval(timer,1000);
    function timer(){
      secends.textContent= time;
      time--;
      if(time < 9){
         const zero = secends.textContent;
         secends.textContent= "0" + zero;
      }
      if(time <0){
        setInterval(counter)
        secends.textContent= "00";
      }
    }
}

const quitbtn= document.querySelector(".quit").onclick=()=>{
     window.location.reload()
}

replay.addEventListener("click",()=>{
 
  resultbox.classList.add('dis')


})
 
