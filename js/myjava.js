// burger= document.querySelector('.burger-icon');
// myLogo=document.querySelector('.logo');
// myNavList=document.querySelector('.nav-list');


// burger.addEventListner('click',()=>{
     
// })


function changeText(){
    const msg=document.getElementById('welcomePara');
    msg.innerHTML=`"Sometimes, challenges and struggles are exactly what we need in our lives...
    May you welcome every effort, every struggle, 
    and every challenge...May you open your wings and fly!"`;
}


function mouseUp(){
    document.getElementById('welcomePara').style.backgroundColor="rgb(48, 121, 131)";
}



// const mybutton= document.getElementById('sbtn');
const  printvalue =() =>{
    const firstname= document.getElementById('namef').value;
    console.log(`first name is ${firstname}`);
    const lname= document.getElementById('namel').value;
    const email= document.getElementById('email').value;
    const cnumber= document.getElementById('cnumber').value;
    const mybutton= document.getElementById('sbtn');

    const finalResult=document.getElementById('result1');
    finalResult.innerHTML=
    `Firstname  of user is: ${firstname}
    Lastname  of user is: ${lname}
    Email  of user is: ${email}
    Contact Number of user is: ${cnumber}`
};