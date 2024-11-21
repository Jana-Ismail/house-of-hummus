import { clearTransientState, purchaseOrder } from "./transientState.js"

export const PurchaseMeal = () => {
    return `             
        <button id="purchase">Purchase Combo</button>
    `
}

const handlePurchaseClick = (e) => {
    if (e.target.id === "purchase") {
        purchaseOrder()
        clearTransientState()
    }
}

document.addEventListener(
    "click",
    handlePurchaseClick
)
