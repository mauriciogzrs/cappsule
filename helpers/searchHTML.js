exports.noResults = () => '<div><div class="result-card uk-card uk-card-default uk-card-body uk-card-small"><p class="no-results">Nothing was found. Try with another search.</p></div></div>';

exports.productCard = () => '<a href="${product.link}"><div class="result-card uk-card uk-card-default uk-card-small"><div class="uk-card-header"><img src="${product.image}"></div><div class="uk-card-body"><h4>${product.title}</h4><p>${product.pharma}</p><p>$ ${product.price} MXN</p></div></div></a>';