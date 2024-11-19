import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="entreeList">
            <h2>entrees</h2>
            ${entreesHTML}
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
