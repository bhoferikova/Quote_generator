function quoteGenerator(){
    const quotes = {
        " - Thomas Edison" : '"Genius is one percent inspiration and ninety-nine percent perspiration."',
        " - Yogi Berra" : '"You can observe a lot just by watching."',
        " - Abraham Lincoln" : '"A house divided against itself cannot stand."',
        " - Johann Wolfgang von Goethe" : '"Difficulties increase the nearer we get to the goal."',
        " - Byron Pulsifer" : '"Fate is in your hands and no one elses"',
        " - Lao Tzu" : '"Be the chief but never the lord."',
        " - Carl Sandburg" : '"Nothing happens unless first we dream."',
        " - Aristotle" : '"Well begun is half done."',
        " - Yogi Berra" : '"Life is a learning experience, only if you learn."',
        " - Buddha" : '"Peace comes from within. Do not seek it without."',
        " - Pericles" : '"Time is the wisest counsellor of all."',
        " - John Lennon" : '"Love is the flower you\'ve got to let grow."',
        " - Napoleon Hill" : '"You give before you get."',
        " - Socrates" : '"Wisdom begins in wonder."',
        " - Aristotle" : '"Change in all things is sweet."',
        " - Albert Einstein" : '"I never think of the future. It comes soon enough."',
        " - Epictetus" : 'Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort."',
        " - Buddha" : '"Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared."',
        " - Chuck Norris" : '"A lot of times people look at the negative side of what they feel they can\'t do. I always look on the positive side of what I can do."'
    }

    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

function startTime(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML = h+':'+m+':'+s;
    let t = setTimeout(function(){startTime(), 500});
}


function checkTime(i){
    if(i < 10){i = '0' + i};
    return i;
}


function startDate(){
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('date').innerHTML = days[d.getDay()] + ' | ' + [d.getDate()] + '.' + [d.getMonth()+1] + '.' + [d.getFullYear()];
}