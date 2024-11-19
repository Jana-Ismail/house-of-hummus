export const Sides = async () => {
    const sidesFetch = await fetch(`http://localhost:8088/sides`)
    const sides = await sidesFetch.json()
    
    let html = ""

    html += sides.map(side => {
        return `
            <div>
                <input type="radio" name="sideOption" /> ${side.title}
            </div>
        `
    }).join("")
    
    return html
}

