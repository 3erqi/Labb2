document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => {
            const cocktails = data.drinks;
            const list = document.getElementById('cocktail_list');
            if (cocktails) {
                cocktails.forEach(drink => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <h2>${drink.strDrink}</h2>
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="150">
                        <p><strong>Category:</strong> ${drink.strCategory}</p>
                        <p><strong>Alcoholic:</strong> ${drink.strAlcoholic}</p>
                        <p><strong>Glass:</strong> ${drink.strGlass}</p>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            ${[...Array(15).keys()].map(i => {
                                const ingredient = drink[`strIngredient${i + 1}`];
                                const measure = drink[`strMeasure${i + 1}`];
                                return ingredient ? `<li>${measure ? measure : ''} ${ingredient}</li>` : '';
                            }).join('')}
                        </ul>
                        <p>${drink.strInstructions}</p>
                        <hr>
                    `;
                    list.appendChild(div);
                });
            } else {
                list.innerHTML = '<p>No cocktails found.</p>';
            }
        })
        .catch(error => {
            document.getElementById('cocktail_list').innerHTML = '<p>Error loading cocktails.</p>';
            console.error(error);
        });
});