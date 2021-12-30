let card = document.getElementById("card")
let attack = document.getElementById("attack")
let power = document.getElementById("power")
let endurance = document.getElementById("endurance")
let weaknessElement = document.getElementById("weaknessElement")
let strengthElement = document.getElementById("strengthElement")
let imageUrl = document.getElementById("imageUrl")
let gridSection = document.getElementById("gridSection")
let myJSON = {}

class Monster {
    constructor(name, attack, power, endurance, weakness, strength, image) {
        this.name = name
        this.attack = attack
        this.power = power
        this.endurance = endurance
        this.weakness = weakness
        this.strength = strength
        this.image = image
    }
    createCard() {
        let article = document.createElement("article")
        article.innerHTML = `
        <div class="upperPart"><h1>${this.name}</h1></div>
        <div class="powerEndurance"><span>Power: ${this.power}</span><span>Endurance: ${this.endurance}</span></div>
        <div class="imagePart"><img src="${this.image}" alt="${this.name}"/></div>
        <div class="elementPart"><p>Strength: ${this.strength}</p><p>Weakness: ${this.weakness}</p></div>
        <div class="specialAttack"><p>Special Attack: ${this.attack}</p></div>
        `
        gridSection.append(article)
    }
}

function summonMonster() {
    var monster = new Monster(card.value, attack.value, power.value, endurance.value, weaknessElement.value, strengthElement.value, imageUrl.value)
    monster.createCard()
    myJSON += JSON.stringify(monster)
    console.log(myJSON)
}

function saveJSON() {
    myJSON = JSON.stringify(monster)
}