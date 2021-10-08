console.log("Happy Coding!");
/////////////////////////////////////////////////////////////////////
function getUserName(){
    let userName = prompt('Please enter your name!');
console.log(userName);

if(userName == 'Jeffrey'){
  document.write('<h2>Welcome Back '  + userName + '</h2>');
} else {
  document.write('<h2>Welcome to my site' + userName + '</h2>');
}
return userName;
}

///////////////////////////////////////////////////////////////////////////////


function joinFrustratedClub(){
    let userAnswer = prompt('Hello, Do you want to join the Frustrated Club Yes is the only good answer?');
    while (userAnswer.toLowerCase() != "yes") {
      userAnswer = prompt('Hello, Do you want to join the Frustrated Club Yes is the only good answer?');
    }

    if(userAnswer.toLowerCase() == 'yes'){
      let numberPic = prompt("How many picture do you want to see!");
      for (let i = 0; i<numberPic; i++) {
        let url = "https://st.depositphotos.com/1654249/1263/i/600/depositphotos_12630322-stock-photo-ashamed-3d-man-sitting-over.jpg";
        document.write('<img id="frustrated" src="' + url + '">');
      }
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////

function findAMake(ford, chevolet, bently){
    console.log('Your Makes are ' + ford + ', ' + chevolet + ', ' + bently +'!');
}

findAMake('hyundai', 'kia', 'mercedes‑benz');
findAMake('audi', 'jeep', 'toyoto');
findAMake('buick', 'acura', 'bmw'); 

//////////////////////////////////////////////////////////////////////////////////

function howDoYouRate(){
  let userRate = prompt('How do you rate your fustration, Rate your frustration 1 - 5?');
  while (userAnswer.toLowerCase() != "yes") {
    userAnswer = prompt('Hello, Do you want to join the Frustrated Club Yes is the only good answer?');
  }

  if(userAnswer.toLowerCase() == 'yes'){
      let url = "https://st.depositphotos.com/1654249/1263/i/600/depositphotos_12630322-stock-photo-ashamed-3d-man-sitting-over.jpg";
      document.write('<img id="frustrated" src="' + url + '">');
  }
}

/*Get requirement 2 working and you can resubmit for full credit.*/