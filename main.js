const block = document.querySelector(".testDiv")
window.onload = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        data.map(item => {
            const div = document.createElement("div")
            div.setAttribute("class", "dataBlock")

            const name = document.createElement("p")
            name.classList.add("dataName")
            name.innerText = item.name

            const age = document.createElement("p")
            age.classList.add("dataAge")
            age.innerText = item.age

            const image = document.createElement("img")
            image.setAttribute("src", `${item.photo}`)

            div.append(name, age, image)
            block.append(div)
        })
    }
}

const poem = new XMLHttpRequest()
poem.open("GET" ,"data.json")
poem.setRequestHeader("Content-Type", "application/json")

poem.send()

poem.onload = () => {
    console.log(JSON.parse(poem.response))
}
