// add scripts

$(document).on('ready', function() {
  $('#all').html('');
  getLobsters();
});

$('form').on('submit', function(e){
  e.preventDefault();
  //clear message div
  $('#message').html('');
  var payLoad = {
    name: $('#name').val(),
    hobbies: $('#hobbies').val()
  };

  $.post('/lobsters', payLoad, function(data){
    $('#message').html("Added a lobster!");
    getLobsters();
  });
console.log(payLoad);


});



// delete lobster
$(document).on('click','.delete-button',function(){
  $.ajax({
    method: "DELETE",
    url: '/lobster/' + $(this).attr('id')}).done(function(data){
      // $('#all').html('');
      $('#results').html('success!');
      getLobsters();
    });
});


function getLobsters(){
 $('#all').html('');
 $.get('/lobsters',function(data){
   for (var i = 0; i < data.length; i++) {
     $('#all').prepend(
       '<tr>' +
       '<td><a href="#">Name: ' + data[i].name + '&nbsp;&nbsp;&nbsp;</a></td>' +
       '<td>Hobbies: ' + data[i].hobbies + '</td>' +
       '<td><a class="btn btn-danger btn-xs delete-button" id="' + data[i]._id + '" role="button">Delete</a>'  +
       '</tr>'
     );
   }
 });
}
