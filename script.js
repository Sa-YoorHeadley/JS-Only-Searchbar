const characterList = document.getElementById("character-list")
let characters = []

const loadCharacters = async () =>{
    try{
        const res = await fetch("http://hp-api.herokuapp.com/api/characters")
        characters = await res.json()
        console.log(characters)
        displayCharacters(characters)
    }
    catch(error){
        console.log(error)
    }
}

function displayCharacters(characters){
    characters = characters.filter(character =>{
        return character.image != ""
    })
    characters.forEach(character =>{

        let listItem = document.createElement("li")
        listItem.classList.add("character")

        let name = document.createElement("h2")
        name.classList.add("name")
        name.innerText = `Name: ${character.name}`
        
        let house = document.createElement("p")
        house.classList.add("house")
        house.innerText = `House: ${character.house}`
        
        let patronus = document.createElement("p")
        patronus.classList.add("patronus")
        patronus.innerText = `Patronus: ${character.patronus}`
        
        let image = document.createElement("img")
        image.classList.add("image")
        image.setAttribute("src", character.image)

        listItem.append(name)
        listItem.append(house)
        listItem.append(patronus)
        listItem.append(image)

        characterList.append(listItem)
    })
}
loadCharacters()