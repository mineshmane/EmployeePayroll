// document reday use

$.ajax({
    url: 'http://localhost:3000/employees',
    type: 'GET',
    dataType: 'json',
    success: function (data, textStatus, xhr) {
            console.log(data);

            // inner html table in jquery 
    },
    error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
    }
});

// } ready function finitsh 