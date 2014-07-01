$(document).ready ( function () {
    $('#button').click ( function () {
       var toAdd = $('input[name=checkListItem]').val(); 
       $('.list').append('<div class="item"><input type="checkbox" name="check-'+toAdd+'" >' + toAdd + '</div>');
       $('input[name=checkListItem]').val('');
    });
});

$(document).on('click','.item input', function() {
   $(this).parent().fadeOut('slow');
});
