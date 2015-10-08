
    $("#login").click(function() {
        localStorage.setItem("Username", document.getElementById('Username').value);
        localStorage.setItem("password", document.getElementById('password').value);
      
        window.location.href = "stock%20_market.html";
    });

