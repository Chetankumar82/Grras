let movietype = process.argv[2];
let likemovies=true;

if(likemovies){
    if(movietype=="comedy"){
        console.log("Comedy");
    }
    if(movietype=="action"){
        console.log("Action");
    }
    if(movietype=="horror"){
        console.log("Horror");
    }
}
else{
    console.log("General");
}