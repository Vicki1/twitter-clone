$(document).ready(function () {
    console.log("this is connected");

    var tweetSubmit = $('#tweet-submit');
    var textArea1 = $('#text-area1');
    var tweetCompose = $('.tweet-compose');
    var characterCount = $('#char-count');
    var content = $('.content');
    var tweet= $('.tweet');
    tweetSubmit.hide();
    characterCount.hide();

    textArea1.on('click', function () {
        tweetSubmit.show();
        characterCount.show();
    });

    tweetCompose.on('click', function () {
        $(this).css('height', '5em');
    })



    var maxLength = 140;
    textArea1.keyup(function () {
        var length = $(this).val().length;
        length = maxLength - length;
        characterCount.text(length);
        if (length < 0) {
            tweetSubmit.toggleClass('button:disabled');
            tweetSubmit.prop("disabled", true);
        } else if (length <= 10) {
            characterCount.css("color", "red");
            tweetSubmit.prop("disabled", true);
            tweetSubmit.prop("disabled", false);
        } else {
            characterCount.css("color", "#999");
            tweetSubmit.prop("disabled", false);
        }


    })
var tweetText= $('.tweet-text');

tweetSubmit.on('click', function(){
   result = textArea1.val();
    tweetText.html(result);


  

  $('#stream').prepend(
      '<div class="tweet">'+
        '<div class="content">'+
          '<img class="avatar" src="img/alagoon.jpg" />'+
          '<strong class="fullname">Your Name Here </strong>'+
          '<span class="username">@YourNameHere</span>'+
          '<p class="tweet-text">'+ $(".tweet-compose").val() +'</p>'+


          '<div class="tweet-actions">'+
            '<ul>'+
              '<li><span class="icon action-reply"></span> Reply</li>'+
              '<li class="retweet"><span class="icon action-retweet"></span> Retweet</li>'+
              '<li><span class="icon action-favorite"></span> Favorite</li>'+
              '<li><span class="icon action-more"></span> More</li>'+
            '</ul>'+
          '</div>'+

          '<div class="tweet-actions-container">'+
          '<div class="stats">'+
            '<div class="retweets">'+
              '<p class="num-retweets">30</p>'+
              '<p>RETWEETS</p>'+
            '</div>'+
            '<div class="favorites">'+
              '<p class="num-favorites">6</p>'+
              '<p>FAVORITES</p>'+
            '</div>'+
            '<div class="users-interact">'+
              '<div>'+
                '<img src="img/vklimenko.jpg" />'+
                '<img src="img/funwatercat.jpg" />'+
              '</div>'+
            '</div>'+
            '<div class="time">'+
              '1:04 PM - 19 Sep 13'+
            '</div>'+
          '</div>'+
          '<div class="reply">'+
            '<img class="avatar" src="img/alagoon.jpg" />'+
            '<textarea class="tweet-compose" placeholder="Reply to @HarvardBiz"/></textarea>'+
          '</div>'+
        '</div>'+

        '</div>'+
      '</div>'
    )


  
  
  //newTweetBox.prependTo('#stream');
    //$('$content').val().prependTo(".tweet");
})


$('.tweet-actions').hide();

   $('content').hover( 
function(){ 
 $(this, '.tweet-actions').show();
},
function(){ 
  $(this, '.tweet-actions').hide();
})



  




}) // this is the end of the document

/* document.getElementById("subscription_order_form").submit();

 tweetSubmit.get(0).submit();*/