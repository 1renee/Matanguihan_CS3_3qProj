document.addEventListener("DOMContentLoaded", function() {
    // get references to the elements we need
    const buttonLogin = document.getElementById("button-login");
    const buttonSignup = document.getElementById("button-signup");
    const buttonBack = document.getElementById("button-back");
    const loginbuttonBack = document.getElementById("loginbutton-back");
    const buttonWrapper = document.getElementById("button-wrapper");
    const signupformWrapper = document.getElementById("signupform-wrapper");
    const loginformWrapper = document.getElementById("loginform-wrapper");
    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");
    const signupConfirmButton = document.getElementById("signup-confirm-button");
    const loginConfirmButton = document.getElementById("login-confirm-button");
  
    let users = []; // to store the user data
  
    // add event listeners to the buttons
    buttonLogin.addEventListener("click", function() {
      buttonWrapper.style.display = "none";
      loginformWrapper.style.display = "block";
    });
  
    buttonSignup.addEventListener("click", function() {
      buttonWrapper.style.display = "none";
      signupformWrapper.style.display = "block";
    });
  
    buttonBack.addEventListener("click", function() {
      buttonWrapper.style.display = "block";
      signupformWrapper.style.display = "none";
    });
  
    loginbuttonBack.addEventListener("click", function() {
      buttonWrapper.style.display = "block";
      loginformWrapper.style.display = "none";
    });
  
    signupConfirmButton.addEventListener("click", function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        localStorage.setItem('users', JSON.stringify(users));
        users.push({username: username, password: password});
        console.log(users);
        signupformWrapper.style.display = "none";
        buttonWrapper.style.display = "block";
      });
      
    loginConfirmButton.addEventListener("click", function() {
      const username = usernameInput.value;
      const password = passwordInput.value;
      if (username === '' && password === '') {
        console.log('Invalid Username and Password!');
        alert('Invalid Username and Password!');
      } else if (username === '') {
        console.log('Invalid Username!');
        alert('Invalid Username!');
      } else if (password === '') {
        console.log('Invalid Password!');
        alert('Invalid Password!');
      } else {
        const isRegistered = users.some(user => user.username === username && user.password === password);
        if (isRegistered) {
          console.log(`Welcome ${username}!`);
          alert(`Welcome ${username}!`);
          window.location.href = "Li_Matanguihan_2qProj/index.html";
        } else {
          console.log('Invalid username or password!');
          alert('Invalid username or password!');
        }
      }
      usernameInput.value = '';
      passwordInput.value = '';
    });
  });
  