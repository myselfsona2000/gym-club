function signUp(){

    const userData = {
        user_name: document.getElementById('user_name').value,
        email:document.getElementById('email').value,
        user_pass:document.getElementById('user_pass').value
        
    };

    localStorage.setItem("user_data", JSON.stringify(userData));
    }

    function getData(){
        let user_data =   JSON.parse(localStorage.getItem("user_data"));
        return user_data;
    }

    function signIn(){

        let data = getData();
   
        let user_name = document.getElementById('user_name').value;
        let user_pass = document.getElementById('user_pass').value;
   
        if (data.user_name == user_name && data.user_pass == user_pass) {
         window.location.href = "index.html";
             alert("login success");
            
        } else {
          alert("login fail");
        }
      }

      function logOut(){
        localStorage.removeItem("user_data")
      }
