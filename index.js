//create cats
function cat (breed, build, activityLevel, inside, hair) {
    this.breed = breed;
    this.build = build;
    this.activityLevel = activityLevel;
    this.inside = inside;
    this.hair = hair;

    this.calculatePoints = function(){
       var points = 0;
        if(this.build === 'small'){
            points++;
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
 

//1st git commit                      Breed                Size     Active YES/no, INSIDE/OUTDOOR/BOTH,    hair length

    var americanShorthair = new cat ('American Shorthair','small', 'yes', 'both', 'medium' );
    var americanShorthair = americanShorthair.calculatePoints();
 
    var bengal = new cat ('Bengal','large','no','inside', 'short');
    var bengalPoints = bengal.calculatePoints();

    var domesticShorthair = new cat ('Domestic Shorthair','large','no','inside', 'short');
    var domesticShorthairPoints = domesticShorthair.calculatePoints();
  /*  
    var germanShepherd = new cat ('German Shepherd', 'large', 'yes', 'outside', 'long');
    var germanShepherdPoints = germanShepherd.calculatePoints();
 
    var pug = new cat ('Pug', 'small', 'no', 'inside', 'short');
    var pugPoints = pug.calculatePoints();
 
    var italianGreyhound = new cat ('Italian Greyhound', 'small', 'no', 'inside', 'short');
    var italianGreyhoundPoints = italianGreyhound.calculatePoints();
 
    var maltese = new cat ('Maltese', 'small', 'no', 'inside', 'long')
    var maltesePoints = maltese.calculatePoints();
 
    var bearededCollie = new cat ('Bearded Collie', "large",'yes', 'inside', 'long' );
    var bearededColliePoints = bearededCollie.calculatePoints();
 
    var bullcat = new cat ("Bullcat", "large", 'no', 'inside', 'short');
    var bullcatPoints = bullcat.calculatePoints();

    var whippet = new cat ("Whippet", 'small', 'yes', 'inside', 'short');
    var whippetPoints = whippet.calculatePoints();

    var yorkshireTerrier = new cat("Yorkshire Terrier", 'small', 'yes', 'inside', 'long' )
    var yorkshireTerrierPoints = yorkshireTerrier.calculatePoints();

    var ratTerrier = new cat ("Rat Terrier", 'small', 'yes', 'outside', 'short')
    var ratTerrierPoints = ratTerrier.calculatePoints();

    var bermeseMountaincat = new cat("Bermese Mountain cat", 'large', 'no', 'outside', 'long')
    var bermeseMountaincatPoints = bermeseMountaincat.calculatePoints();

    var greatDane = new cat ("Great Dane", 'large', 'no', 'inside', 'short');
    var greatDanePoints = greatDane.calculatePoints();

    var saintBernard = new cat ("Saint Bernard", 'large', 'no', 'both', 'long');
    var saintBernardPoints = saintBernard.calculatePoints();

    var germanShorthairdePointer = new cat ("German Shorthaired Pointer", 'large', 'yes', 'outside', 'short')
    var germanShorthairedPointerPoints = germanShorthairdePointer.calculatePoints();

    var miniaturePinscher = new cat ("Miniature Pinscher", 'small', 'no', 'outside', 'short');
    var miniaturePinscherPoints = miniaturePinscher.calculatePoints();
*/
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
    var radioList3 = document.getElementsByName("q3");With
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

    if (total === americanShorthair|| total >= 2122 || total <=1312) {
        finalLink.href ="http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx";
        finalLink.textContent = "American Shorthair"
    }
    else if (total === bengalPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/french-bullcat/";
        finalLink.textContent = "bengal"
    }
    else if (total === germanShepherdPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/german-shepherd-cat/";
        finalLink.textContent = "German Shepherd"
    }
 /*
    else if (total === germanShepherdPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/german-shepherd-cat/";
        finalLink.textContent = "German Shepherd"
    }


    /*
    else if (total === germanShepherdPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/german-shepherd-cat/";
        finalLink.textContent = "German Shepherd"
    }
    else if (total === pugPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/pug/";
        finalLink.textContent = "Pug"
    }
    else if (total === italianGreyhoundPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/italian-greyhound/";
        finalLink.textContent = "Italian Greyhound"
    }
    else if (total === maltesePoints || total === 2321) {
        finalLink.href ="https://www.akc.org/cat-breeds/maltese/";
        finalLink.textContent = "Maltese"
    }
    else if (total === bearededColliePoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/bearded-collie/";
        finalLink.textContent = "Bearded Collie "
    }
    else if (total === bullcatPoints || total ===1322 || total ===1112) {
        finalLink.href ="https://www.akc.org/cat-breeds/bullcat/";
        finalLink.textContent = "Bullcat "
    }
    else if (total === whippetPoints) {
        finalLink.href ="https://www.akc.org/cat-breeds/whippet/";
        finalLink.textContent = "Whippet "
    }
    else if (total === yorkshireTerrierPoints || total === 2211 || total === 2311) {
        finalLink.href ="https://www.akc.org/cat-breeds/yorkshire-terrier/";
        finalLink.textContent = "YorkShire Terrier "
    }
    else if (total === ratTerrierPoints || total === 1311 ) {
        finalLink.href ="https://www.akc.org/cat-breeds/rat-terrier/";
        finalLink.textContent = "Rat Terrier "
    }
    else if (total === bermeseMountaincatPoints){
        finalLink.href ="https://www.akc.org/cat-breeds/bernese-mountain-cat/";
        finalLink.textContent = "Bermese Mountain cat "
    } 
    else if (total === greatDanePoints || total === 1222){
        finalLink.href ="https://www.akc.org/cat-breeds/great-dane/";
        finalLink.textContent = "Great Dane "
    } 
    else if (total === saintBernardPoints || total === 2222 ){
        finalLink.href ="https://www.akc.org/cat-breeds/st-bernard/";
        finalLink.textContent = "Saint Bernard "
    }
    else if (total === germanShorthairedPointerPoints || total ===1312) {
        finalLink.href ="https://www.akc.org/cat-breeds/german-shorthaired-pointer/";
        finalLink.textContent = "German Shorthaired Pointer "
     }
    else if (total === miniaturePinscherPoints || total === 1321 ) {
        finalLink.href ="https://www.akc.org/cat-breeds/miniature-pinscher/";
        finalLink.textContent = "Miniature Pinscher "
     }
    */
     resetBtns();
    
    
    
}










