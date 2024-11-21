import { setSideState } from "./transientState.js"

export const Sides = async () => {
    const sidesFetch = await fetch(`http://localhost:8088/sides`)
    const sides = await sidesFetch.json()
    
    let html = ""

    html += sides.map(side => {
        return `
            <div>
                <input type="radio" name="sideOption" value=${side.id}/> ${side.title}
            </div>
        `
    }).join("")
    
    return html
}

const handleSideOptionChange = (e) => {
    if (e.target.name === "sideOption") {
        const sideId = parseInt(e.target.value)
        setSideState(sideId)
    }
}

document.addEventListener(
    "change",
    handleSideOptionChange
)

