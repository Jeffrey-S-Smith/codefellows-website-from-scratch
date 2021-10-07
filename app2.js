let userName = prompt('Please enter your name!');
console.log(userName);

if(userName == 'Jeffrey'){
  document.write('<h2>Welcome Lord ' + userName + '</h2>');
} else {
  document.write('<h2>Welcome ' + userName + '</h2>');
}