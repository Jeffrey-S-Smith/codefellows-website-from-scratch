let userAnswer = prompt('Are you frustrated?');

if(userAnswer.toLowerCase() == 'yes'){
    let url = "https://st.depositphotos.com/1654249/1263/i/600/depositphotos_12630322-stock-photo-ashamed-3d-man-sitting-over.jpg";
    document.write('<img id="frustrated" src="' + url + '">');
}