import { getDiceRollArray } from './utils.js'

// constructor
function Character(data) {
    // this.elementId = data.elementId
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)

    this.getDiceHtml = function (diceCount){
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this

        const diceHtml = this.getDiceHtml(diceCount)
        // .join() above used to avoid commas
    
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${diceHtml} 
                </div>
            </div>  
        ` 
    }
}

export default Character