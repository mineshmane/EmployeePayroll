const addEmployee = () => {
        console.log(" caaling add meployee function");
        const fname = $('#fname').val()
        const lname = $('#lname').val()
        const email = $('#email').val()

        let reqData = {
                "first_name": fname,
                "last_name": lname,
                "email": email
        }

        console.log(reqData);

        $.ajax({
                url: 'http://localhost:3000/employees',
                type: 'POST',
                dataType: 'json',
                data: reqData,
                success: function (data, textStatus, xhr) {
                        console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');
                }
        });
}

// using jquery how to bind data 