const host = "http://localhost:8080/";
var token = window.localStorage.getItem("token");
if(token === null || token === ""){
     window.location = "login.html";
}else{
    console.log(token);
$(document).ready(function(){
    readCategory();
    readUsers();
    readProducts();
    
    ///===user=======================
    $("#saveUser").click(function(){
        var name = $("#username");
        var mobile = $("#mobile");
        var email = $("#email");
        var password = $("#pwd");
        var age = $("#age");
        var user = {
            "name":name.val(),
            "password":password.val(),
            "email":email.val(),
            "mobile":mobile.val(),
            "age":age.val()
        };
        var settings = {
            "url": host+"user/save",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "AUTH="+token
            },
            "data": JSON.stringify(user),
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            email.val("");
            mobile.val("");
            age.val("");
            password.val("");
            alert("Success");
            readUsers();
          });
    });
    
    $("#updateUser").click(function(){
        var name = $("#updateUsername");
        var mobile = $("#updateMobile");
        var email = $("#updateEmail");
        var password = $("#updatePwd");
        var age = $("#updateAge");
        var id = $("#uid");
        var user = {
            "userId":id.val(),
            "name":name.val(),
            "password":password.val(),
            "email":email.val(),
            "mobile":mobile.val(),
            "age":age.val()
        };
        var settings = {
            "url": host+"user/update",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "AUTH="+token
            },
            "data": JSON.stringify(user)
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            email.val("");
            mobile.val("");
            age.val("");
            password.val("");
            alert("Success");
            readUsers();
          });
    });
  
  
    ///===product=======================
    $("#savePro").click(function(){
        var name = $("#pName");
        var buy = $("#buy");
        var sell = $("#sell");
        var qty = $("#qty");
        var cat = $("#catSelect");
        var pro = {
            "buyingPrice":buy.val(),
            "sellingPrice":sell.val(),
            "qty":qty.val(),
            "name":name.val(),
            "categoryId":cat.val()
        };
        var settings = {
            "url": host+"product/save",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": "AUTH="+token,
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(pro),
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            qty.val("");
            sell.val("");
            buy.val("");
            cat.val("");
            alert("Success");
            readProducts();
          });
    });
    
    $("#updatePro").click(function(){
        var name = $("#pUpdateName");
        var buy = $("#updateBuy");
        var sell = $("#updateSell");
        var qty = $("#updateQty");
        var cat = $("#updateCatSelect");
        var id = $("#proid");
        var pro = {
            "productId":id.val(),
            "buyingPrice":buy.val(),
            "sellingPrice":sell.val(),
            "qty":qty.val(),
            "name":name.val(),
            "categoryId":cat.val()
        };
        var settings = {
            "url": host+"product/update",
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Authorization": "AUTH="+token,
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(pro),
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            qty.val("");
            sell.val("");
            buy.val("");
            cat.val("");
            alert("Success");
            readProducts();
          });
    });

    ///===productCategory=======================
    $("#cSave").click(function(){
        var name = $("#cName");
        var des = $("#cDescription");
        var cat = {
            "name":name.val(),
            "description":des.val()
        };
        var settings = {
            "url": host+"productCategory/save",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": "AUTH="+token,
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(cat),
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            des.val("");
            alert("Success");
            readCategory();
          });
    });
    
    $("#cUpdate").click(function(){
        var name = $("#cUpdateName");
        var des = $("#UpdateDescription");
        var id = $("#catid");
        var cat = {
            "productCategoryId":id.val(),
            "name":name.val(),
            "description":des.val()
        };
        var settings = {
            "url": host+"productCategory/update",
            "method": "PUT",
            "timeout": 0,
            "headers": {
                "Authorization": "AUTH="+token,
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(cat),
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            name.val("");
            des.val("");
            id.val("");
            alert("Success");
            readCategory();
          });
    });
    
});


function readUsers(){
    var settings = {
        "url": host+"user/getAll",
        "method": "GET",
        "timeout": 0,
        
        "headers": {
            "Content-Type": "application/json",
             "Authorization": "AUTH="+token.trim()
             }
      };

    $.ajax(settings).done(function (response) {
       loadUsers(response);
    });
}

function loadUsers(data){
    console.log(data);
    var tbody = $("#userTbody");
    var line = "";
    data.forEach(user =>{
        var row = "<tr><td>";
        row += user.id+"</td>";
        row += "<td>"+ user.name+"</td>";
        row += "<td>"+ user.email+"</td>";
        row += "<td>"+ user.mobile+"</td>";
        row += "<td>"+ user.age+"</td>";
        row += "<td>";
        row += "<button  type=\"button\" class=\"btn btn-warning btn-sm m-1 user-u\"  data-id=\""+user.id+"\">Update</button>";
        row += "<button  type=\"button\" class=\"btn btn-danger btn-sm m-1 user-d\"  data-id=\""+user.id+"\">Delete</button>";
        row += "</td></tr>";
        line += row;
    });
    tbody.html(line);
    $(".user-u").click(function(){
        var id = $(this).data("id");
        var settings = {
            "url": host+"user/get/"+id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                    "Authorization": "AUTH="+token
                    }
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
            $("#uid").val(id);
            $("#updateEmail").val(response.email);
            $("#updateUsername").val(response.name);
            $("#updateMobile").val(response.mobile);
            $("#updateAge").val(response.age);
          });
    });
    $(".user-d").click(function(){
        var id = $(this).data("id");
        if(confirm("Do you really want to delete this")){
            var settings = {
                "url": host+"user/delete/"+id,
                "method": "DELETE",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "AUTH="+token
                    }
              };

              $.ajax(settings).done(function (response) {
                console.log(response);
                readUsers();
              });
        }
    });
}










}


