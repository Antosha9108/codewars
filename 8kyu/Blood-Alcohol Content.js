function bloodAlcoholContent(drinks, weight, sex, time) {
    let A = drinks.ounces * (drinks.abv);

    let ratio = sex === 'male' ? 0.73 : 0.66;

    return Math.round((((A * 5.14 * ratio) / weight) - 0.015 * time) * 10000) / 10000
}

function bloodAlcoholContent(drinks, weight, sex, time) {
    let A = drinks.ounces * (drinks.abv);

    let ratio = sex === 'male' ? 0.73 : 0.66;

    return Number((((A * 5.14 * ratio) / weight) - 0.015 * time).toFixed(4))
}