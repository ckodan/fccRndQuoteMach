$(document).ready(function () {
  function getData() {
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      cache: false,
      success: function (a) {
        $('#quote').append(a[0].content + '<p>&mdash; ' + a[0].title + '</p>');
      },
    });
  }

  getData();
  $('#btn1').click(function () {
    $('#quote p').empty();
    getData();
  });
});

$('#btn2').click(function (e) {
  //alert('cao cao');
  var str = $('#quote:first').text();
  var textToTweet = str;
  if (textToTweet.length > 140) {
    alert('Tweet should be less than 140 Chars');
  }else {
    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
    window.open(twtLink, '_blank');
  } console.log(str);
});
