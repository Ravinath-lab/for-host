var ip = "104.198.28.198:8080";
var token  = window.localStorage.getItem("token");
if(token === null || token === ""){
    window.location = "login.html";
}
function Addkeyword() {
    var keyword = $("#Keyword").val();
    var description = $("#Description").val();

    if (keyword != '') {

        var key = {
            name: keyword,
            description: description
        }

        $.ajax({
            url: 'http://' + ip + '/keyword/save',
            type: "post",
            dataType: 'json',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+token
            },
            data: JSON.stringify(key),
            error: function (error) {
                alert(error);

            },
            success: function (r) {
                alert("Successfully Added");

                $("#Keyword").val(null);
                $("#Description").val(null);
                loadkeyword();
            }
        });
    }


}



function loadkeyword() {
    $.ajax({
        url: 'http://' + ip + '/keyword/getAll',
        type: "get",
        dataType: 'json',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+token
            },
        error: function (error) {
            alert(error);
        },
        success: function (r) {
            $("#tbody").empty();
            var json = [];
            for (var item in r) {
                var rowdata = r[item];

                var raw = '<tr>\n\
                <td>' + rowdata.keywordId + '</td>\n\
                <td>' + rowdata.name + '</td>\n\
                <td>' + rowdata.description + '</td>\n\
                <td><button id="update" value="'+ rowdata.keywordId + '" onclick="updatedata(this);" class="btn btn-warning">update</button>&nbsp;&nbsp;<button  onclick="deletedata(this);" value="' + rowdata.keywordId + '" class="btn btn-danger">Delete</button></td>\n\
                </tr>';
//                var line = {"id":rowdata.keywordId,"name": rowdata.name, "description" :rowdata.description};
//                json[i] = line;
                $("#tbody").append(raw);
            }
            $('#keywordtable').DataTable();


        }
    });

}

//function deletedata(e) {
//
//    var del = e.value;
//    alert(del);
//    $.ajax({
//        url: 'http://' + ip + '/keyword/delete/' + del,
//        type: "delete",
//        dataType: 'text',
//        headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json',
//                "Authorization": "Bearer "+token
//            },
//        error: function (error) {
//            alert(error);
//
//        },
//        success: function (r) {
//            alert("Successfully Deleted");
//            loadkeyword();
//        }
//    });
//}

function deletedata(e) {

    var del = e.value;
   
    $.ajax({
        url: 'http://' + ip + '/keyword/delete/' + del,
        type: "delete",
        dataType: 'text',


        error: function (error) {
            alert(error);

        },
        success: function (r) {
            alert("Successfully Deleted");
            $("#Keyword").val(null);
            $("#Description").val(null);



            $("#addtext").text("ADD KEYWORD");
            $("#submit").text("Add Keyword");
            $("#submit").attr('onclick', "Addkeyword();");
            loadkeyword();
        }
    });
}

function updatedata(e) {

    var id = e.value;
    alert(id);
    $.ajax({
        url: 'http://' + ip + '/keyword/' + id,
        type: "get",
        dataType: 'JSON',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+token
            },
        error: function (error) {
            alert(error);

        },
        success: function (r) {

            $("#Keyword").val(r.name);
            $("#Description").val(r.description);

            $("#addtext").text("UPDATE KEYWORD");
            $("#submit").text("Update Keyword");
            $("#submit").attr('onclick', "Updatekeyword(" + id + ");");


        }
    });
}
function Updatekeyword(id) {


    var keyword = $("#Keyword").val();
    var description = $("#Description").val();

    if (keyword != '') {

        var key = {
            keywordId: id, name: keyword,
            description: description
        };

        $.ajax({
            url: 'http://' + ip + '/keyword/update',
            type: "PUT",
            dataType: 'json',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer "+token
            },
            data: JSON.stringify(key),
            error: function (error) {
                alert(error);

            },
            success: function (r) {
                alert("Successfully Updated");

                $("#Keyword").val(null);
                $("#Description").val(null);



                $("#addtext").text("ADD KEYWORD");
                $("#submit").text("Add Keyword");
                $("#submit").attr('onclick', "Addkeyword();");

                loadkeyword();
            }
        });
    }
}
