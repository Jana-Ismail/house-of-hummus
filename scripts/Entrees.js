export const Entrees = async () => {
    const entreesFetch = await fetch(`http://localhost:8088/entrees`)
    const entrees = await entreesFetch.json()
    
    let entreeOptions = ""
    entreeOptions += entrees.map(entree => {
        return `
            <input type="radio" name="entree-option"/>${entree.name}
        `
    }).join("")

    return entreeOptions
}