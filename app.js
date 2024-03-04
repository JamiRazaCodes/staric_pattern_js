//pattern 1 
var triangle = ""

for (let i=1; i<=6; i++){
    for (let j=0; j<i; j++){
        triangle += "*";
    }
    triangle += "\n"
}

console.log(triangle)

//pattern 2
var revTriangle = ""

for (let i=1; i<=6; i++){
    for (let j=0; j<=6-i; j++){
        revTriangle += "*";
    }
    revTriangle += "\n"
}

console.log(revTriangle)

//pattern3
var hill = ""

for(i=1; i<=6; i++){
    for(j=1; j<=6-i; j++){
     hill += " "
    }
    for(k=0; k<2*i-1; k++){
        hill += "*";
    }

    hill +="\n";
}
     console.log(hill)

//pattern4
var revHill = ""

for(i=6; i>=1; i--){
    for(j=1; j<=6-i; j++){
     revHill += " "
    }
    for(k=0; k<2*i-1; k++){
        revHill += "*";
    }

    revHill +="\n";
}
     console.log(revHill)

     
//pattern5
var diamond = ""

for(i=1; i<=6; i++){
    for(j=1; j<=6-i; j++){
     diamond += " "
    }
    for(k=0; k<2*i-1; k++){
        diamond += "*";
    }

    diamond +="\n";
}
   
for(i=6; i>=1; i--){
    for(j=1; j<=6-i; j++){
     diamond += " "
    }
    for(k=0; k<2*i-1; k++){
        diamond += "*";
    }

    diamond +="\n";
}
     console.log(diamond)