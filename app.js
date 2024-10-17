const prompt = require('prompt-sync')(); 
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
const decision = prompt('We are going on a road trip!')
const decision1 = prompt('Lets turn left to drive to the beach or right to drive to city?      ')
if(decision1 === 'left    '){
    console.log('Lets go to the beach    ') 
} else if(decision1 === 'right      '){
    console.log('Lets go to the city     ')
}
const decision2 = prompt('Should we drive a suv, a sports car or a truck?     ')
if(decision2 === 'suv') {
    console.log('You will be driving a range rover     ')
} else if( decision2 === 'sports car'){
    console.log('You will be driving a ferrari    ')
} else {
    console.log('You will be driving a Ford f-150    ')
}
const decision3 = prompt('lets fill the tank up, you can use 87, 90, 93.    ')
if(decision3 === '87'){
    console.log('Good decision    ')
} else if(decision3 === '90'){
    console.log('Great decision  ')
} else {
    console.log('Please to ensure your car uses this type of fuel       ')
}
const decision4 = prompt('Do you want to take the highway and pay tolls or would you like to do the scenic route?       ')
if(decision4 === 'highway'){
    console.log('Ensure to have your tag to pay tolls or expect to be mailed a bill      ')
} else {
    console.log('This route will be longer but you will see alot of landmarks      ')
}
const decision5 = prompt('Do you want to play some music for your trip?    ')
if(decision5 === 'yes'){
    console.log('lets play music      ')
    }
const decision6 = prompt('What kind of music do you want to play?       ')
    if(decision6 === 'r&b'){
        console.log('Luther Vandross - My love      ')
    }else if(decision6 ==='pop'){
        console.log('Shake it off - Taylor Swift      ')
    } else if(decision6 ==='afro-beats'){
        console.log('Fireboy-Dml - What if       ')
    } else if(decision6 === 'gosple'){
        console.log('Kirk Franklin - I Smile       ')
    } else if(decision6 === "reggae"){
        console.log('Sean Paul - Im still in love with you    ')
    } else {
        console.log('lets travel in silence!     ')
    }
const decision7 = prompt('We are almost there, how was your road trip?     ')
    if(decision7 === 'Good'){
        console.log('Give us a rating?    ')
    } else if(decision7 === 'Great'){
        console.log('Give us a rating?    ')
    }else if(decision7 === 'bad'){
        console.log('Give us a rating?     ')
    }
    const decision8 = prompt( 'Give us a rating from 1, 2, 3, 4, 5!     ')
    {
    console.log('Thanks for the rating!')}







