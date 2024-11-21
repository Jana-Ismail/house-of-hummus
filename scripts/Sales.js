export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())

    let salesDivs = sales.map(sale => {
        return `
            <div>Order #${sale.id}</div>
        `
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

