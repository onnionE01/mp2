const userAccount_API = "../../../api/userAccount.php";

getUserID();

function getUserID()
{
    $.ajax({
        "url" : userAccount_API + "?getUserID",
        "success" : function(response) {
            let jsonParse=JSON.parse(response); 
            let num = jsonParse.records.length; 
            var inputContact=$("#inputContact").val();
            var inputContact=$("#inputPassword").val();
            var i=0;
            while (i<num) {
                if (jsonParse.records[ContactNum] === inputContact) {
                    if (jsonParse.records[Password] === inputPassword) {
                        $response["code"] = SUCCESS;
                        $response["description"] = "Successfully Login";
                        $_SESSION["loggedin-user"] = jsonParse.records[User_ID];
                        window.location.href = "../../../dashboard/userdashboard/";
                    }
                }
                i++;
            }

        }
    })
}