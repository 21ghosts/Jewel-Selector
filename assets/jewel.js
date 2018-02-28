var randomTarget = Math.floor(Math.random() * 111) + 19;
var num;
var winCount = 0;
var lossCount = 0;
var previousNum = 0;
var images = [
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c4/Crystal_weekly_event.png/revision/latest?cb=20151122000423',
    'http://vignette2.wikia.nocookie.net/marvel-contestofchampions/images/e/e4/4-Star_Crystal.png/revision/latest?cb=20151122000344',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/2/29/Crystal_generic5.png/revision/latest?cb=20151121235154',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/a/ad/Crystal_generic4.png/revision/latest?cb=20151121235143'];

var randomNum = () => Math.floor(Math.random() * 11) + 1;

var gameStart = () =>
{
    
    $(".jewels").empty();
    $("#target").html("Target: " + randomTarget);

    for(var i = 0; i < 4; i++)
    {
        var jewel = $("<div>");
            jewel.attr({
                "class": 'jewel',
                "data-random": randomNum(),
            });

            jewel.css({"background-image":"url('" + images[i] + "')",
                        "background-size":"cover"});

                        $(".jewels").append(jewel);
    }

    $("#target").html("Total: " + randomTarget);
}


$(document).on("click", ".jewel", function()
{   
    console.log('data-random', $(this).attr('data-random') )
    num = parseInt($(this).attr('data-random'));
    console.log('num', num)
    console.log('before', previousNum)
    previousNum = previousNum + num;
    console.log('after', previousNum)
    $("#total").html("Total: " + previousNum);

   if(previousNum === randomTarget)
   {
       winCount++;
       prevousNum = 0;
       $("#win").html("Win:" + winCount);
       gameStart();
    
   }
   else if(previousNum > randomTarget)
   {
        lossCount++;
        previousNum = 0;
        $("#loss").html("Lost:" + lossCount);
        gameStart();
   }
  
});

gameStart();