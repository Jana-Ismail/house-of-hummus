import { Entrees } from "./Entrees.js"
import { PurchaseMeal } from "./Purchase.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const sidesHTML = await Sides()
    const vegetableHTML = await Veggies()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="entreeList">
            <h2>Entrees</h2>
            ${entreesHTML}
        </article>

        <article class="sideList">
            <h2>Sides</h2>
            ${sidesHTML}
        </article>

        <article class="vegetableList">
            <h2>Vegetables</h2>
            ${vegetableHTML}
        </article>

        <article>
            ${PurchaseMeal()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
