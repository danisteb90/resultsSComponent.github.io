let icons = document.querySelectorAll(".section_2 img")
let category = document.querySelectorAll(".section_2-title")
let score = document.querySelectorAll(".section_2 p span")

fetch("data.json").then((response)=>{
    let data = response.json()
    return data
}).then((data)=>{
    icons.forEach((e, i) => {
        e.src = data[i].icon
    })
    category.forEach((e, i)=>{
        e.innerHTML = data[i].category
    })
    score.forEach((e, i)=>{
        e.innerHTML = data[i].score
    })
})