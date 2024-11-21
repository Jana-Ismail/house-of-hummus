import { setEntreeState } from "./transientState.js"

export const Entrees = async () => {
    const entreesFetch = await fetch(`http://localhost:8088/entrees`)
    const entrees = await entreesFetch.json()
    
    
    document.addEventListener(
        "change",
        handleEntreeChange
    )
    
    let entreeOptions = ""
    entreeOptions += entrees.map(entree => {
        // console.log(entree.id)
        return `
        <div>
        <input type="radio" name="entree-option" value=${entree.id} data-entreeId="${entree.id}"/> ${entree.name}
        </div>
        `
    }).join("")
    
    return entreeOptions
}

const handleEntreeChange = (e) => {
    if (e.target.name === "entree-option") {
        const entreeId = parseInt(e.target.value)
        setEntreeState(entreeId)
    }
}
