
//Fulfill the first requirement by using an array of quotes
var myArrayOfQuotes = [
  
  "Altruism is a thing that exists. - John",
  "Get up. Dress up. Show up. Never give up.",
  "Zero. One. Two. Many."
];


function any(items) {
  return items[Math.floor(Math.random()*items.length)];
}

$(document).ready(function()
  {
    $("#getQuote").on("click", function()
       {
      $(".quote").html(any(myArrayOfQuotes));
      $(".quote").addClass("animated shake");
      }); 
     $("#tweet").click (function()
    {
      window.open("http://twitter.com/intent/tweet?text=" + $(".quote").text());
    });
    });


