const database = firebase.database().ref();

const allBlogs = document.getElementById("all-blogs"); 
const title_input = document.getElementById("blogTitle");
const username_input = document.getElementById("username");
const blog_input = document.getElementById("blogCont");
const button = document.getElementById("post-btn");

button.onclick = updateDB; 

function updateDB(event) {
    event.preventDefault();

    const title_value = title_input.value; 
    const username_value = username_input.value; 
    const blog_value = blog_input.value; 

    title_input.value = ""; 
    username_input.value = "";
    blog_input.value = "";

    const value = {
        TITLE: title_value, 
        USERNAME: username_value,
        BLOG:blog_value
    }
    database.push(value); 

    console.log(value); 
}

database.on("child_added", addMessageToBoard); 

function addMessageToBoard(rowData) {
    const row = rowData.val(); 
    const Name = row.USERNAME;
    const blog = row.BLOG; 
    const title = row.TITLE;


    const div_element = document.createElement("div");
    const Blogtitle_paragraph = document.createElement("p");
    const Bloguser_paragraph = document.createElement("p"); 
    const BlogCont_paragraph = document.createElement("p"); 

    Blogtitle_paragraph.innerHTML = title;
    Bloguser_paragraph.innerHTML = Name; 
    BlogCont_paragraph.innerHTML = blog;

    Bloguser_paragraph.className = "single-message-username";

    div_element.appendChild(Blogtitle_paragraph);
    div_element.appendChild(Bloguser_paragraph); 
    div_element.appendChild(BlogCont_paragraph);


    div_element.className = "single-message";

    allBlogs.appendChild(div_element); 

    console.log(Blogtitle_paragraph);
}
