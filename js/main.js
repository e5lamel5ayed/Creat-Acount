

function validate() {

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;
        var message = document.getElementById("error");

        message.style.color="#fff";
        message.style.textAlign="center";
        message.style.backgroundColor="#c00000";
        message.style.padding="10px";
        message.style.transition="all 1s ease";
        message.style.marginBottom="10px";
        message.style.borderRadius="3px";

        if(name=="" && email=="" && password=="" && confirmpassword=="" )
        {
        message.innerHTML="Please Enter Data";
                return false;
        }
        else if( name.length<5 || name.length>15)
        {
                message.innerHTML="Please Insert 5-15 Character In Username";
                return false;
        }
        else if (email.indexOf("@")=="-1")
        {
                message.innerHTML="Please Enter Valid E-Mail";
                return false;
        }
        else if (password.length<=8)
        {
                message.innerHTML="Please Enter Atleast 8 Character";
                return false;
        }
        else if (password!=confirmpassword)
        {
                message.innerHTML="Please Matched Password";
                return false;
        }
        else
        {
                return true;
        }

}













