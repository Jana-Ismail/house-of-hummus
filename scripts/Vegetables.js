export const Veggies = async () => {
    const veggiesFetch = await fetch(`http://localhost:8088/vegetables`)
    const veggies = await veggiesFetch.json()
    
    let html = ""

    html += veggies.map(veggie => {
        return `
            <div>
                <input type="radio" name="veggieOption" /> ${veggie.type}
            </div>
        `
    }).join("")
    
    return html
}
