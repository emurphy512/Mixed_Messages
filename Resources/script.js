const movieArray = [
    ["A Charlie Brown Christmas:"],
    ["It's A Wonderul Life:"],
    ["Elf:"],
    ["Home Alone:"],
    ["The Muppet Christmas Carol:"],
    ["How The Grinch Stole Christmas:"],
    ["National Lampoon's Christmas Vacation:"],
    ["Love Actually:"],
    ["Miracle On 34th Street:"],
    ["A Christmas Story:"]
];

const quoteArray = [
    ["\"I never thought it was such a bad little tree. It's not bad at all, really. Maybe it just needs a little love.\""],
    ["\"Every time a bell rings, an angel gets his wings.\""],
    ["\"You'll shoot your eye out!\""],
    ["\"Guys, I'm eating junk and watching rubbish! You better come out and stop me!\""],
    ["\"It's in the singing of the street corner choir. It's going home and getting warm by the fire. It's true where ever you find love it feels like Christmas\""],
    ["\"Then the Grinch thought of something he hadn't before! 'Maybe Christmas,' he thought, 'doesn't come from a store. Maybe Christmas … perhaps … means a little bit more!\""],
    ["\"We’re kicking off our fun, old-fashioned family Christmas by heading out into the country in the old front-wheel drive sleigh to embrace the frosty majesty of the winter landscape and select that most important of Christmas symbols.\""],
    ["\"If you look for it, I've got a sneaky feeling you'll find that love actually is all around.\""],
    ["\"I Believe... I Believe... It's Silly, But I Believe.\""]
];

const characterArray = [
    ["-Dasher"],
    ["-Dancer"],
    ["-Prancer"],
    ["-Vixon"],
    ["-Comet"],
    ["-Cupid"],
    ["-Donner"],
    ["-Blitzen"],
    ["-Santa Claus"],
    ["-Mrs. Claus"]
];

function getRudolphAnswer(){
    const a = Math.floor(Math.random() * movieArray.length);
    const b = Math.floor(Math.random() * quoteArray.length);
    const c = Math.floor(Math.random() * characterArray.length);
    const section1 = movieArray[a];
    const section2 = quoteArray[b];
    const section3 = characterArray[c];
    //combine into Rudolph's answer
    const rudolphAnswer = `<br><br> ${section1} <br><br> ${section2} <br><br> ${section3}`;
    //print Rudolph's answer to screen
    document.getElementById("reveal").innerHTML = `${rudolphAnswer}`;
};

function showSanta(){
    document.getElementById('santa').style.display = 'block';
}