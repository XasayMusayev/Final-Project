const booksFormApi = axios.get("http://localhost:3000/api/books")

let list = '';

booksFormApi.then((e) => {
    const booksInfo = e.data
    console.log(e.data);
    booksInfo.forEach(item => {
 
        list+= `
        <div id="cards_all">
            <div class="card">
                 <div class="image"><img class="image2" src="${item.imageUrl}" alt="bookphoto"></div>
                
                    <div  class="bookinfo">
                    <h4>${item.title}</h4>
                    <p class="info">Author</p>
                    <p>${item.author}</p>
                    <p class="info">Type</p>
                    <p>${item.genre}</p>
                    <p class="info">Layout</p>
                    <p>${item.bookCover}</p>
                    <p>${item.price} $ </p>
                    </div>

            </div>
        </div>  
        `
       
    })

    document.getElementById('cards_all').innerHTML= list;
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








