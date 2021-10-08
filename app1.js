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
    let userAnswer = prompt('Hello, Do you want to join the Club?');
    
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://st.depositphotos.com/1654249/1263/i/600/depositphotos_12630322-stock-photo-ashamed-3d-man-sitting-over.jpg";
        document.write('<img id="frustrated" src="' + url + '">');
    }
}

//////////////////////////////////////////////////////////////////////////////////////

function findAMake(ford, chevolet, bently){
    console.log('Your Makes are ' + ford + ', ' + chevolet + ', ' + bently +'!');
}

findAMake('hyundai', 'kia', 'mercedes‑benz');
findAMake('audi', 'jeep', 'toyoto');
makePizza('buick', 'acura', 'bmw'); 