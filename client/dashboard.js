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
})

closeLogIn.addEventListener("click", () => {
    logInForm.style.display = "none"
})

loginBotn.addEventListener("click", () => {
    logInForm.style.display = "block"
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
        <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

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







const booksList = document.querySelector(".table-body")
const authorsList = document.querySelector(".authors-table-body")
const usersList = document.querySelector(".table-body-users")
const infoMail = localStorage.getItem("email")
const infoPass = localStorage.getItem("password")
const navListdash = document.querySelector(".navigation");
const signUpdash = document.querySelector(".h5")
const loginBotndash = document.querySelector("hh5")
const addBook = document.querySelector(".lasttd");
const addAuthor = document.querySelector(".lasttdd");
const dashWrapper = document.querySelector(".dashwrapper")
let checkArr = [];
let checkArrr = [];

addAuthor.addEventListener("click", () => {

    const authorRow = `
            <div class="authormodal">
            <div class="authormodaldiv">
                <div class="close-btn-author">X</div>
                <form class="formauthorpublish">
                    <input type="text" class="inputauthor"  placeholder="#id" disabled>
                    <input type="text" class="inputauthor" id="name" placeholder="Name and Surname">
                    <input type="text" class="inputauthor" id="url" placeholder="ImageUrl">
                    <input type="text" class="inputauthor" id="bio" placeholder="Biography">
                    <div class="btnpublishauthor">Publish</div>
                </form>
            </div>
            
        </div>
    
    `
    dashWrapper.insertAdjacentHTML("afterbegin", authorRow)

    document.querySelector(".authormodal").style.display = "block"

    document.querySelector(".btnpublishauthor").addEventListener("click", () => {
        axios.post("http://localhost:3000/api/authors", {

            name: document.querySelector("#name").value,
            imgUrl: document.querySelector("#url").value,
            biography: document.querySelector("#bio").value
        }).then(
            
        )

    })

 


    document.querySelector(".close-btn-author").addEventListener("click", () => {

        document.querySelector(".authormodal").style.display = "none"
    })


})

addBook.addEventListener("click", () => {
    const bookRow = `
                <div class="publishdiv">
                    <div class="publish">
                        <div class="close-btnn">x</div>
                        <form class="publishform">
                            <input class="formpublish" type="text" placeholder="#id" disabled>
                            <input class="formpublish" id="title" type="text" placeholder="Title">
                            <input class="formpublish" id="author" type="text" placeholder="Book Author">
                            <input class="formpublish" id="publisher" type="text" placeholder="Publisher">
                            <input class="formpublish" id="price" type="text" placeholder="Enter Price">
                            <input class="formpublish" id="url" type="text" placeholder="Enter IMG URL">
                            <div class="genres">Genres:
                                <div>
                                    <input type="checkbox" class="inputs" value="Drama" id="drama" >Drama
                                    <input type="checkbox" class="inputs" value="Classics" id="drama">Classics
                                    <input type="checkbox" class="inputs" value="Novel" id="drama">Novel
                                    <input type="checkbox" class="inputs" value="History" id="drama">History
                                    <input type="checkbox" class="inputs" value="Children" id="drama">Children
                                    <input type="checkbox" class="inputs" value="Biography" id="drama">biography
                                    <input type="checkbox" class="inputs" value="Fivtion" id="drama">Fivtion
                                    <input type="checkbox" class="inputs" value="Animal" id="drama">Animal
                                    <input type="checkbox" class="inputs" value="Detective" id="drama">Detective
                                    <input type="checkbox" class="inputs" value="Fantasy" id="drama">Fantasy
                                    <input type="checkbox"  class="inputs" value="Espionage" id="drama">Espionage
                                </div>

                            </div>
                            <input class="formpubli" id="synopsis" type="text" placeholder="Enter Short Description">
                            <div class="radiodiv">Book Cover:
                                <input type="radio" id="coverhard" name="cover" checked>
                                <label for="coverhard" class="hard">Hard</label>
                                <input type="radio" id="coversoft" name="cover">
                                <label for="coversoft">Soft</label>
                                </div>
                            <input class="formpublish" id="date" type="text" placeholder="Published In">
                            <input class="formpublish" id="sold" type="text" placeholder="Units Sold">
                            <div class="btnpublish">Publish</div>
                        </form>
                        
                    </div>
                </div>
    `
    dashWrapper.insertAdjacentHTML("afterbegin", bookRow)

    document.querySelector(".publishdiv").style.display = "block"
    document.querySelector(".btnpublish").addEventListener("click", () => {

        const checkInputs = document.getElementsByClassName("inputs")

        for (let i = 0; i < checkInputs.length; i++) {
            if (checkInputs[i].checked) {
                checkArr.push(checkInputs[i].value)
            }

        }

        axios.post("http://localhost:3000/api/books", {

            title: document.querySelector("#title").value,
            author: document.querySelector("#author").value,
            publishDay: document.querySelector("#date").value,
            imageUrl: document.querySelector("#url").value,
            price: document.querySelector("#price").value,
            publisher: document.querySelector("#publisher").value,
            sold: document.querySelector("#sold").value,
            synopsis: document.querySelector("#synopsis").value,
            bookCover: document.querySelector("#coverhard").checked ? "Hard" : "Soft",
            genre: checkArr

        }).then(
          
        )
    })

    document.querySelector(".close-btnn").addEventListener("click", () => {
        document.querySelector(".publishdiv").style.display = "none"
    })

})

if (localStorage.length > 0) {
    axios.post("http://localhost:3000/api/books/login", {


        mail: localStorage.getItem("email"),
        password: localStorage.getItem("password")

    }).then(() => {

        document.querySelector(".suc").style.display = "block";
        document.querySelector(".loginmodal").style.display = "none"
        signUpdash.style.display = "none"
        loginBotndash.style.display = "none"
        const newNav = `
        <p class="loginmaill">${localStorage.getItem("email")}</p>
        <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
        <div class="logout"><a class="dash" href="./MyBook.html">Log out</a></div>`;

        navListdash.insertAdjacentHTML("beforeend", newNav);
        //Buraaaaa log outtt
        document.querySelector(".logout").addEventListener("click", () => {

            localStorage.clear()

        })

    })
}

function renderBookCard(bookList) {
    booksList.innerHTML = ""
    bookList.map(book => {
        const bookHTML = `
        <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>$${book.price}</td>
        <td>${book.genre}</td>
        <td>${book.bookCover}</td>
        <td class="lasttdd" >
            <img class="icons" id="book-${book.id}" src="../assets/photos/delete-icon-13.jpg" alt="">
            <img class="icons" id="edit-${book.id}"  src="../assets/photos/ff3fa44f1e75c25cd7b11bf8a8392d74.png" alt="">
         </td>
    </tr>
        `
        booksList.insertAdjacentHTML('beforeend', bookHTML)
        document.getElementById("book-" + book.id).addEventListener("click", () => {

            axios.delete(`http://localhost:3000/api/books/${book.id}`).then()


        })
        document.getElementById("edit-" + book.id).addEventListener("click", () => {

            axios.get(`http://localhost:3000/api/books/${book.id}`).then(bookk => {

                const bookRow = `
                <div class="publishdiv">
                    <div class="publish">
                        <div class="close-btnn">x</div>
                        <form class="publishform">
                            <input class="formpublish" type="text" id="oldid" placeholder="#id" disabled>
                            <input class="formpublish" id="title" type="text" placeholder="Title">
                            <input class="formpublish" id="author" type="text" placeholder="Book Author">
                            <input class="formpublish" id="publisher" type="text" placeholder="Publisher">
                            <input class="formpublish" id="price" type="text" placeholder="Enter Price">
                            <input class="formpublish" id="url" type="text" placeholder="Enter IMG URL">
                            <div class="genres">Genres:
                                <div>
                                    <input type="checkbox" class="salam" value="Drama"  >Drama
                                    <input type="checkbox" class="salam" value="Classics" >Classics
                                    <input type="checkbox" class="salam" value="Novel" >Novel
                                    <input type="checkbox" class="salam" value="History" >History
                                    <input type="checkbox" class="salam" value="Children" >Children
                                    <input type="checkbox" class="salam" value="Biography" >biography
                                    <input type="checkbox" class="salam" value="Fiction" >Fiction
                                    <input type="checkbox" class="salam" value="Animal" >Animal
                                    <input type="checkbox" class="salam" value="Detective" >Detective
                                    <input type="checkbox" class="salam" value="Fantasy" >Fantasy
                                    <input type="checkbox" class="salam" value="Espionage" >Espionage
                                </div>

                            </div>
                            <input class="formpubli" id="synopsis" type="text" placeholder="Enter Short Description">
                            <div class="radiodiv">Book Cover:
                                <input type="radio" id="coverhard" name="cover" checked>
                                <label for="coverhard" class="hard">Hard</label>
                                <input type="radio" id="coversoft" name="cover">
                                <label for="coversoft">Soft</label>
                                </div>
                            <input class="formpublish" id="date" type="text" placeholder="Published In">
                            <input class="formpublish" id="sold" type="text" placeholder="Units Sold">
                            <div class="btnpublish">Edit</div>
                        </form>
                        
                    </div>
                </div>
             `
                dashWrapper.insertAdjacentHTML("afterbegin", bookRow)
                document.querySelector(".publishdiv").style.display = "block"
                document.querySelector("#title").value = bookk.data.title
                document.querySelector("#author").value = bookk.data.author
                document.querySelector("#date").value = bookk.data.publishDay
                document.querySelector("#url").value = bookk.data.imageUrl
                document.querySelector("#price").value = bookk.data.price
                document.querySelector("#publisher").value = bookk.data.publisher
                document.querySelector("#sold").value = bookk.data.sold
                document.querySelector("#synopsis").value = bookk.data.synopsis
                document.querySelector("#oldid").value = bookk.data.id
                // document.querySelectorAll(`input[type = "checkbox"]`).value=bookk.data.genre
                bookk.data.genre.map((item) => {
                    const salam = document.querySelectorAll(`input[type = "checkbox"]`)

                    for (let i = 0; i < salam.length; i++) {

                        if (salam[i].value === item) {
                            salam[i].checked = true
                            break;

                        }
                    }
                })
                document.querySelector(".btnpublish").addEventListener("click", () => {

                    bookk.data.title = document.querySelector("#title").value
                    bookk.data.author = document.querySelector("#author").value
                    bookk.data.publishDay = document.querySelector("#date").value
                    bookk.data.imageUrl = document.querySelector("#url").value
                    bookk.data.price = document.querySelector("#price").value
                    bookk.data.publisher = document.querySelector("#publisher").value
                    bookk.data.sold = document.querySelector("#sold").value
                    bookk.data.synopsis = document.querySelector("#synopsis").value
                    bookk.data.id = document.querySelector("#oldid").value,
                        bookk.data.bookCover = document.querySelector("#coverhard").checked ? "Hard" : "Soft"

                    const checkInputs = document.getElementsByClassName("salam")

                    for (let i = 0; i < checkInputs.length; i++) {
                        if (checkInputs[i].checked) {
                            checkArr.push(checkInputs[i].value)
                        }

                    }
                    bookk.data.genre = checkArr
                    axios.post("http://localhost:3000/api/books", {
                        id: bookk.data.id,
                        title: bookk.data.title,
                        author: bookk.data.author,
                        publishDay: bookk.data.publishDay,
                        imageUrl: bookk.data.imageUrl,
                        price: bookk.data.price,
                        publisher: bookk.data.publisher,
                        sold: bookk.data.sold,
                        synopsis: bookk.data.synopsis,
                        bookCover: bookk.data.bookCover,
                        genre: checkArr

                    }).then(

                        renderBookCard(bookList)
                    )
                })
                document.querySelector(".close-btnn").addEventListener("click", () => {
                    document.querySelector(".publishdiv").style.display = "none"
                })
            })
        })
    })
}
// getBooks(); 
document.querySelector(".books-tablee").style.display = "block"

document.querySelector("#authordisplay").addEventListener("click", () => {
    document.querySelector(".books-tablee").style.display = "none"
    document.querySelector(".users-table").style.display = "none"
    document.querySelector(".authors-tablee").style.display = "block"
    document.querySelector("#booksdisplay").style.borderBottom = "none"
    document.querySelector("#usersdisplay").style.borderBottom = "none"
    document.querySelector("#authordisplay").style.borderBottom = "1px solid green"
})
document.querySelector("#usersdisplay").addEventListener("click", () => {
    document.querySelector(".books-tablee").style.display = "none"
    document.querySelector(".users-table").style.display = "block"
    document.querySelector("#booksdisplay").style.borderBottom = "none"
    document.querySelector("#usersdisplay").style.borderBottom = "1px solid green"
    document.querySelector(".authors-tablee").style.display = "none"
    document.querySelector("#authordisplay").style.borderBottom = "none"
})
document.querySelector("#booksdisplay").addEventListener("click", () => {
    document.querySelector("#booksdisplay").style.borderBottom = "1px solid green"
    document.querySelector(".books-tablee").style.display = "block"
    document.querySelector("#usersdisplay").style.borderBottom = "none"
    document.querySelector(".users-table").style.display = "none"
    document.querySelector(".authors-tablee").style.display = "none"
    document.querySelector("#authordisplay").style.borderBottom = "none"
})
function getUsers() {

    axios.get("http://localhost:3000/api/users").then(users => {

        renderUserList(users.data)
    })
}
function renderUserList(userList) {
    userList.map(user => {
        const bookHTML = `
        <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.mail}</td>
        <td>${user.password}</td>
    </tr>
        `
        usersList.insertAdjacentHTML('beforeend', bookHTML)
    })
}
getUsers()


function getAuthors() {
    // document.querySelector(".spinnerR").style.display = "block"
    axios.get("http://localhost:3000/api/authors").then(authors => {
        // document.querySelector(".spinnerR").style.display = "none"
        renderAuthorscard(authors.data)
    })
}

function renderAuthorscard(authorList) {



    authorList.innerHTML = ""
    authorList.map(author => {
        const authorHTML = `
        <tr>
        <td>${author.id}</td>
        <td>${author.name}</td>
        <td>${author.biography}</td>
        <td>$${author.imgUrl}</td>
       
        <td class="lasttdd" >
            <img class="icons" id="author-${author.id}" src="../assets/photos/delete-icon-13.jpg" alt="">
            <img class="icons" id="edit-${author.id}"  src="../assets/photos/ff3fa44f1e75c25cd7b11bf8a8392d74.png" alt="">
         </td>
    </tr>
        `
        authorsList.insertAdjacentHTML('beforeend', authorHTML)
        document.getElementById("author-" + author.id).addEventListener("click", () => {

            axios.delete(`http://localhost:3000/api/authors/${author.id}`).then()


        })
    })
}

getAuthors();

