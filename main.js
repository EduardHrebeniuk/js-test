const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],

};
// Change code above this line
function order(pizzaName, callback, callbackError) {
  for (let name of pizzaPalace) {
    console.log(name)
  }
  if (pizzaName === pizzas.length) {
    callbackError(pizzaName)
  } else {
    callback(pizzaName)
  }
}
// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
