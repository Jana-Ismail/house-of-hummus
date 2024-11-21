const transientState = {
    entreeId: 0,
    sideId: 0,
    vegetableId: 0
}

export const setEntreeState = (id) => {
    transientState.entreeId = id
    console.log(transientState)
}

export const setSideState = (id) => {
    transientState.sideId = id
    console.log(transientState)
}

export const setVegetableState = (id) => {
    transientState.vegetableId = id
    console.log(transientState)
}

export const clearTransientState = () => {
    transientState.entreeId = 0
    transientState.sideId = 0
    transientState.vegetableId = 0
    console.log(transientState)
}

export const purchaseOrder = async () => {
    await fetch(
        "http://localhost:8088/purchases",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
    )
    const customEvent = new CustomEvent("comboPurchased")
    document.dispatchEvent(customEvent)
}