//veriable lists
var randomTarget = Math.floor(Math.random() * 111) + 19; //randomly selects target number
//var randomTarget = () => Math.floor(Math.random() * 111) + 19;
var previousNum = 0;//this will be total
var num;// numbers that will be added to total as game progresses
var winCount = 0; 
var lossCount = 0;

// images that will be dynamicaly rendered to page
var images = [
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c4/Crystal_weekly_event.png/revision/latest?cb=20151122000423',
    'http://vignette2.wikia.nocookie.net/marvel-contestofchampions/images/e/e4/4-Star_Crystal.png/revision/latest?cb=20151122000344',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/2/29/Crystal_generic5.png/revision/latest?cb=20151121235154',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/a/ad/Crystal_generic4.png/revision/latest?cb=20151121235143'];

var randomNum = () => Math.floor(Math.random() * 11) + 1;// random number that the images will house

// initial game start
var gameStart = () =>
{
    
    $(".jewels").empty();
    //push randomTarget veriable into #target element on html file
    $("#target").html("Target: " + randomTarget);
    //loop through a dynamicaly created space(4) and give each div the attribute randomNum
    for(var i = 0; i < 4; i++)
    {
        var jewel = $("<div>");
            jewel.attr({
                "class": 'jewel',
                "data-random": randomNum(),
            });
            //place images in div with append
            jewel.css({"background-image":"url('" + images[i] + "')",
                        "background-size":"cover"});

                        $(".jewels").append(jewel);
    }

    $("#target").html("Target: " + randomTarget);//diplays target number needed to be reached for game completion
}

//create reset
var reset = () => {
    $(".jewels").empty();
    randomTarget = Math.floor(Math.random() * 111) + 19;// moved this inside
    $("#target").html("Target: " + randomTarget);

    for (var i = 0; i < 4; i++) {
        var jewel = $("<div>");
        jewel.attr({
            "class": 'jewel',
            "data-random": randomNum(),
        });

        jewel.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });

        $(".jewels").append(jewel);
    }

    $("#target").html("Target: " + randomTarget);
}
// game logic
$(document).on("click", ".jewel", function()
{   
    console.log('data-random', $(this).attr('data-random') )
    num = parseInt($(this).attr('data-random'));
    console.log('num', num)
    console.log('before', previousNum)
    previousNum = previousNum + num;
    console.log('after', previousNum)
    $("#total").html("Total: " + previousNum);

   if(previousNum === randomTarget)// if pevious num is equal to random target increment winCount by 1 set previousNum back to zero and run reset
   {
       winCount++;
       prevousNum = 0;
       $("#win").html("Win:" + winCount);
       reset();
    
   }
   else if (previousNum > randomTarget)// if pevious num is greater than random target increment lossCount by 1 set previousNum back to zero and run reset
   {
        lossCount++;
        previousNum = 0;
        $("#loss").html("Lost:" + lossCount);
        reset();
   }
  
});

gameStart();

// Helpful resource:
// Stack Overflow 
// Psychic game;
// Timothy Dusterdieck TA