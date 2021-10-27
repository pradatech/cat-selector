//create cats
class cat {
   constructor(breed, build, activityLevel, inside, hair) 
   {
    this.breed = breed;
    this.build = build;
    this.activityLevel = activityLevel;
    this.inside = inside;
    this.hair = hair;

    this.calculatePoints = function()
        {
        var points = 0;
            if(this.build === 'small'){
                points++;    //looks to adds one point to make odd number
                console.log(points);
            } else {
                points += 2;
                
            }

            if(this.activityLevel === 'yes'){
                points +=10;
            } else {
                points += 20;
            }

            if(this.inside === 'inside'){
                points +=100;
            } else if(this.inside === 'outside'){
                points +=200;
            } else {
                points +=300
            }

            if(this.hair === 'short'){
                points += 1000;
            } else {
                points += 2000;
            }         
                    
            return points;
        }
}
}

//1st git commit                      Breed                Size     Active YES/no, INSIDE/OUTDOOR/BOTH,    hair length

    var americanShorthair = new cat ('American Shorthair','small', 'yes', 'both', 'short' );
    var americanPoints = americanShorthair.calculatePoints();
 
    var bengal = new cat ('Bengal','large','no','inside', 'short');
    var bengalPoints = bengal.calculatePoints();

    var domesticShorthair = new cat ('Domestic Shorthair','large','no','inside', 'short');
    var domesticShorthairPoints = domesticShorthair.calculatePoints();

    var maineCoon = new cat ("Maine Coon", 'large', 'no', 'both', 'long');
    var maineCoonPoints = maineCoon.calculatePoints();


  
var finalLink = document.getElementById('final-link');

function restart(){
   document.getElementById("result").classList.add('hidden');
    resetBtns();
}

function resetBtns(){
    total = 0;

//Need What is your budget, low, medium or high



    //question 1  What SIZE
    var radioList = document.getElementsByName("q1");
    for (var i = 0; i < radioList.length; i++) {
        if(radioList[i].checked) {
            radioList[i].checked = false;
        }
    }
//question 2  Would you like an ACTIVE cat 
    var radioList2 = document.getElementsByName("q2");
    for (var i = 0; i < radioList2.length; i++) {
        if(radioList2[i].checked) {
            radioList2[i].checked = false;
        }
    }
//question 3 Inside, Outside or Both
    var radioList3 = document.getElementsByName("q3");
    for (var i = 0; i < radioList3.length; i++) {
        if(radioList3[i].checked) {
            radioList3[i].checked = false;
        }
    }
//question 4: Short hair, or Long
    var radioList4 = document.getElementsByName("q4");
    for (var i = 0; i < radioList4.length; i++) {
        if(radioList4[i].checked) {
            radioList4[i].checked = false;
        }
    }
}


var total = 0;
function result(){
    var q1 = document.getElementById("myQuiz").q1.value;
    var q2 = document.getElementById("myQuiz").q2.value;
    var q3 = document.getElementById("myQuiz").q3.value;
    var q4 = document.getElementById("myQuiz").q4.value;

    
//Question 1
    if (q1 === '1'){
        total++;
    } else {
        total +=2;
    } 

//Question 2
        if(q2 === '1'){
        total+=10;
    } else {
        total +=20
    }

 //Question 3  
    if(q3 === '1'){
        total +=100;
    } else if (q3 ==='2'){
        total +=200;
    } else {
        total +=300;
    }
        
 //Question 4
    if(q4 === '1'){
        total += 1000;
    } else {
     total +=2000;
    }

    
    document.getElementById("result").classList.remove('hidden');

    if (total === americanPoints|| total === 3111 || total ===1312) {
        finalLink.href ="http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx";
        finalLink.textContent = "American Shorthair"
    }
    else if (total === bengalPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/french-bullcat/";
        finalLink.textContent = "bengal"
    }
    else if (total === maineCoonPoints || total === 2222 ){
        finalLink.href ="placeholder URL";
        finalLink.textContent = "Maine Coon"
    }
    
 
     
   resetBtns();
    
    
}










