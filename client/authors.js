
const authorsFromApi = axios.get("http://localhost:3000/api/authors")



let alist = '';


authorsFromApi.then((x) => {
    const authorsinfo = x.data
    console.log(x.data);

    authorsinfo.forEach(itemm =>{
        alist+= `
        <div id="author_s">
             <h2 class="adi">${itemm.name}</h2>
             <div class="authorpp"><img src="${itemm.imgUrl}" alt="AuthorsPhoto"></div>
             <p>${itemm.biography}</p>
        </div>     

        `
        
    })
    document.getElementById('cards_all').innerHTML= alist;


})

const logInBtn = document.querySelector(".loginbtn");
const closeLogIn = document.querySelector(".close-btn2")
const loginBotn = document.querySelector(".hh5")
const navList = document.querySelector(".navigation");
const signUp = document.querySelector(".h5")
const closeSignUp = document.querySelector(".close-btn")
const signUpForm = document.querySelector(".signupmodal")
const signUpBtn = document.querySelector(".signupbtn");
const logInForm = document.querySelector(".loginmodal")
const bookBas=document.querySelector(".bookss")




closeSignUp.addEventListener("click", () => {


    signUpForm.style.display = "none"
})

signUp.addEventListener("click", () => {
    signUpForm.style.display = "block"
    logInForm.style.display = "none"
})

closeLogIn.addEventListener("click", () => {
    logInForm.style.display = "none"
})

loginBotn.addEventListener("click", () => {
    logInForm.style.display = "block"
    signUpForm.style.display = "none"
})



signUpBtn.addEventListener("click", () => {

    axios.post("http://localhost:3000/api/books/signup", {
        name: document.querySelector("#inputname").value,

        surname: document.querySelector("#inputsurname").value,

        mail: document.querySelector("#inputmail").value,

        password: document.querySelector("#inputpassword").value

    }).then(() => {
        document.querySelector(".succ").style.display = "block";
    })
        .catch(() => {
            document.querySelector(".errr").style.display = "block";
            document.querySelector(".formsignup").reset();

        })

})

logInBtn.addEventListener("click", () => {

    axios.post("http://localhost:3000/api/books/login", {


        mail: document.querySelector("#loginmail").value,
        password: document.querySelector("#loginpassword").value

    }).then(() => {

        localStorage.setItem("email", document.querySelector("#loginmail").value)
        localStorage.setItem("password", document.querySelector("#loginpassword").value)

        document.querySelector(".suc").style.display = "block";
        
        document.querySelector(".loginmodal").style.display = "none"
        signUp.style.display = "none"
        loginBotn.style.display = "none"
        const newNav = `
        <p class="loginmaill">${document.querySelector("#loginmail").value}</p>
        <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
        <div class="logout"><a class="dash" href="./MyBook.html">Log out</a></div>`;

        navList.insertAdjacentHTML("beforeend", newNav);
        document.querySelector(".logout").addEventListener("click", () => {
        
            localStorage.clear()
 
          })
       
        
    })

  
        .catch(() => {
            document.querySelector(".err").style.display = "block";
            document.querySelector(".formlogin").reset();

        })
})

