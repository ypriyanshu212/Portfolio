// let buttons = document.querySelectorAll(".btn");

// buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {

//         // Remove active from all
//         buttons.forEach((b) => {
//             b.classList.remove("active");
            
//         });

//         // Add active to clicked button
//         btn.classList.add("active");
//     });
// });




const skills =[
     {id:1,name:"comunication",role:""},
    {id:2,name:"problem",role:"solving"},
    {id:3,name:"priyanshu",role:"dev"},
    {id:4,name:"priyanshu",role:"dev"},
// {id:5,name:"priyanshu",role:"dev"},
]
document.getElementById('skills').innerHTML =
skills.map(i=>(
    `
   <div class="sub_div">
    <h1>${i.id}</h1>
    <h2>${i.name}</h2>
    <h3>${i.role}</h3>
    </div>
    `
)).join("");

const projects =[
    {id:1,name:"Marksheet",role:"Generator"},
    {id:2,name:"portfolio",role:""},
    {id:3,name:"priyanshu",role:"dev"},
    {id:4,name:"priyanshu",role:"dev"},
    {id:5,name:"priyanshu",role:"dev"},
]
document.getElementById('projects').innerHTML =
projects.map(i=>(
    `
    <div class="sub_div">
    <h1>${i.id}</h1>
    <h2>${i.name}</h2>
    <h3>${i.role}</h3>
    </div>
    `
)).join("");

// const data = [
//     {id:1, name:"priyanshu", role:"dev"},
//     {id:2, name:"rahul", role:"designer"},
//     {id:3, name:"amit", role:"tester"},
// ];

// const container = document.getElementById("user");

// data.forEach(item => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//     <div class="sub-div">
//         <h2>${item.id}</h2>
//         <p>${item.name}</p>
//         <h3>${item.role}</h3>
//         </div>
//     `;

//     container.appendChild(card);
// });
