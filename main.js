imgfile = ["https://img.favpng.com/0/0/0/happy-family-cartoon-png-favpng-pj5kBP4VMruatQzS3sdFXNYU2.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrT_adfswKPOyhvS66yfD3ffe96YRbpBgMg&usqp=CAU","https://us.123rf.com/450wm/rastudio/rastudio1710/rastudio171000229/87659173-happy-smiling-multiracial-family-walking-and-having-fun-together-young-cheerful-caucasian-white-moth.jpg?ver=6","https://i.pinimg.com/originals/aa/b7/ad/aab7ad6b71fab7d6a8108c4a93510e18.png"]
text = ["Ranjan Bhakat" , "Rishi Bhakat" , "Rishav Bhakat" , "Rakhi Bhakat"]
var x = 0;
var total = 3;
function repeat() {
    x++
    if (x > total) {
        x = 0;
    }
    var imgtoken = imgfile[x];
    var texttoken = text[x];
    var sound = document.getElementById("audio");
    document.getElementById("nAn").src = imgtoken;
    document.getElementById("namecharset").innerHTML=texttoken;
    sound.play();
}