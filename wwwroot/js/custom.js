$(document).ready(function () {
    ShowEmployeeData();
});

function ShowEmployeeData() {
    $.ajax({
        url: '/Ajax/EmployeeList',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.state + '</td>';
                object += '<td>' + item.city + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td><a href="#" class="btn btn-primary" onclick="Edit(' + item.id + ')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.id + ')">Delete</a> </td>';
                object += '<tr>';


            });
            $('#table_data').html(object);

        },
        error: function () {
            alert("Data can't retrieved..");
        }

    });
};

$('#btnAddEmployee').click(function () {
    clearTextBox();
    $('#EmployeeModal').modal('show');
    $('#EmpId').hide();
    $('#btnSave').css('display', 'block');
    $('#btnUpdate').css('display', 'none');
    $('#empHeading').text('AddEmployee');

});

function AddEmployee() {
    var objdata = {
        Name: $('#Name').val(),
        State: $('#State').val(),
        City: $('#City').val(),
        Salary: $('#Salary').val()

    };
    $.ajax({
        url: '/Ajax/AddEmployee',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Saved');
            clearTextBox();
            ShowEmployeeData();
            HideModalPopUp();
        },
        error: function () {
            alert("Data can't Saved");
        }
    });
}

function HideModalPopUp()
{
    $('#EmployeeModal').modal('hide');
} 


$('#btnCloseMark').click(function () {
    $('#EmployeeModal').modal('hide');
})

$('#btnClose').click(function () {
    $('#EmployeeModal').modal('hide');
})



    function clearTextBox() {
        $('#Name').val('');
        $('#State').val('');
        $('#City').val('');
        $('#Salary').val('');
        $('#Id').val('');
    }



function Delete(id) {
    if (confirm('Are You sure ,you want to delete this record '))
    { 

        $.ajax({
            url: '/Ajax/Delete?id=' + id,
            success: function () {
                alert('Record Deleted!');
                ShowEmployeeData();
            },
            error: function () {
                alert('Data cant be deleted');
            }
        })
    }
}

function Edit(id) {
    
    $.ajax({
        url: '/Ajax/Edit?id=' + id,
        type : 'Get',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $('#EmployeeModal').modal('show');
            $('#Id').val(response.id);
            $('#Name').val(response.name);
            $('#State').val(response.state);
            $('#City').val(response.city);
            $('#Salary').val(response.salary);
            $('#btnSave').css('display', 'none');
            $('#btnUpdate').css('display', 'block');
            $('#empHeading').text('UpdateEmployee');

            //$('#btnSave').hide();
            //$('btnUpdate').show();
            
        },
        error: function () { 
        alert('Data Not Found');
    }

    
})
}

function UpdateEmployee() {
    var objData = {
        Id: $('#Id').val(),
        Name: $('#Name').val(),
        State:$('#State' ).val(),
        City:$('#City' ).val(),
        Salary: $('#Salary' ).val(),

    }
$.ajax({
    url: 'Ajax/Update',
    type: 'Post',
    data: objData,
    contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
    dataType: 'json',
    success: function () {
        alert('Data Updated');
        clearTextBox();
        ShowEmployeeData();
        HideModalPopUp();
    },
    error: function () {
        alert("Data can't Updated");
    }
});


}


