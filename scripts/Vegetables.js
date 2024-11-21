import { setVegetableState } from "./transientState.js"

export const Veggies = async () => {
    const veggiesFetch = await fetch(`http://localhost:8088/vegetables`)
    const veggies = await veggiesFetch.json()
    
    let html = ""

    html += veggies.map(veggie => {
        return `
            <div>
                <input type="radio" name="veggieOption" value=${veggie.id} /> ${veggie.type}
            </div>
        `
    }).join("")
    
    return html
}

const handleVegetableOptionChange = (e) => {
    if (e.target.name === "veggieOption") {
        const vegetableId = parseInt(e.target.value)
        setVegetableState(vegetableId)
    }
}

document.addEventListener(
    "change",
    handleVegetableOptionChange
)
