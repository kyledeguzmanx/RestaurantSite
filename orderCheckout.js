var app = new Vue ({
    el: '#app',
    data() {
        return {
          burgers: [
            {
              id: 1,
              name: "The Classic American",
              description: "A double cheese burger with lettuce, pickels, and tomatoes topped with our not-so secret sauce.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fb1.jpg?v=1637903577752",
              price: "$10.99",
              options: 
              {
                lettuce: null,
                pickles: null,
                tomatoes: null,
                sauce: null
              }
            },
            {
              id: 2,
              name: "The House Burger",
              description: "A cheese burger with lettuce, grilled onions, and crispy bacon. Served with a lightly toasted brioche bun.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fb2.jpg?v=1637903572872",
              price: "$9.99",
              options: 
              {
                lettuce: null,
                onions: null,
                bacon: null
              }
            },
            {
              id: 3, 
              name: "The Double Decker",
              description: "A double cheese burger with pickles, roasted tomatoes, and grilled onions topped with our not-so secret sauce.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fb3.jpg?v=1637903564896",
              price: "$11.99",
              options: 
              {
                pickles: null,
                tomatoes: null,
                onions: null,
                sauce: null
              }
            },
            {
              id: 4,
              name: "The Triple Decker",
              description: "A 3x3 cheese burger with lettuce, tomatoes, pickels, and avocado crema. Served with a lightly toasted brioche bun.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fb4.jpg?v=1637903559195",
              price: "$13.99",
              options: 
              {
                lettuce: null,
                tomatoes: null,
                pickles: null,
                avocado: null
              }  
            }
          ], // End of burgers
        
          fries: [
            {
              id: 1,
              name: "Cajun Fries",
              description: "Crispy hand-cut French Fries seasoned with a special cajun blend.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fa1.jpg?v=1637904432987",
              price: "$3 - $5",
              options: 
              {
                size: null
              }
            },
            {
              id: 2,
              name: "Garlic Fries",
              description: "Crispy hand-cut French fries tossed in garlic aioli and topped with cheese.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fa3.jpg?v=1637904445409",
              price: "$4 - $6",
              options: 
              {
                size: null,
                cheese: null
              }
            },
            {
              id: 3,
              name: "Sweet Potato Fries",
              description: "Crispy hand-cut Sweet Potato fries seasoned with salt, pepper, and garlic.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fa2.jpg?v=1637904438041",
              price: "$3 - $5",
              options: 
              {
                size: null,
              }
            },
            {
              id: 4,
              name: "House Tater Tots",
              description: "A basket of crispy old-fashioned tator tots seasoned with our secret House Blend.",
              image: "https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fa4.jpg?v=1637904778497",
              price: "$4 - $6",
              options: 
              {
                size: null,
              }
            }
          ],
          
          drinks: [
            {
              id: 1,
              name: "HERSHEY's Chocolate Shake",
              description: "A HERSHEYs chocolate shake topped with 2 cookies and a chocolate cake pop.",
              image: 'https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fd1.jpg?v=1637905053914',
              price: "$4 - $6",
              options: 
              {
                size: null,
                whipCream: null
              }
            },
            {
              id: 2,
              name: "Strawberry Shake",
              description: "A sweet strawberry shake blended with a dash of white chocolate. Toppe with whipped cream.",
              image: 'https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fd4.jpg?v=1637905041676',
              price: "$3 - $5",
              options: 
              {
                size: null,
                whipCream: null
              }
            },
            {
              id: 3,
              name: "Iced Mocha",
              description: "An Iced Mocha made with Stumptown Cold Brew Original Coffee, chocolate syrup, and milk.",
              image: 'https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fd3.jpg?v=1637905045550',
              price: "$3 - $5",
              options: 
              {
                size: null,
              }
            },
            {
              id: 4,
              name: "Vanilla Shake",
              description: "A classic Pure Vanilla shake made with Bassetts Ice Cream and milk. Topped with whipped cream and sprinkles.",
              image: 'https://cdn.glitch.me/dea4e612-30de-4cea-b227-75f53191de9f%2Fd2.jpg?v=1637905049584?%2F',
              price: "$3 - $5",
              options: 
              {
                size: null,
                whipCream: null
              }
            }
          ],
          
          modalBurger: {},
          modalFry: {},
          modalDrink: {},
          cart: [],
          stripeCart: [],
          orderError: false,
          stripeInstance: Stripe("pk_test_51K6nYAAWSbGdzVq3R25rGARK9HhcTYyki7yBqtIlrabq9ZEgjySTeM3uCKEXwnRyveAJK9lRmabMCRA3QP7uziIc004FjY5r0J"),
          
          
          
        } // End of return
    }, // End of data
  
    // Watch and Mount from Vue Docs; allows for cart to hold value when switching pages
  
    watch: {
      cart(newValue, oldValue) {
        localStorage.setItem("cart", JSON.stringify(newValue));
      },
      stripeCart(newValue, oldValue) {
        localStorage.setItem("stripeCart", JSON.stringify(newValue));
      },
    },
    mounted() {
      if (localStorage.getItem('cart')) {
        try {
          this.cart = JSON.parse(localStorage.getItem('cart'));
        } catch(e) {
          localStorage.removeItem('cart');
        }
      }
      if (localStorage.getItem('stripeCart')) {
        try {
          this.stripeCart = JSON.parse(localStorage.getItem('stripeCart'));
        } catch(e) {
          localStorage.removeItem('stripeCart');
        }
      } 
    },
  
    methods: {
      
      //Used to allow burger modals to follow loop of burger cards
      setModalBurger (burger) {
        
        this.modalBurger = burger;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addBurgerModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledCartButton").hidden = false;
      
      }, //End of setModalBurger
      
      burgerValidation (burger, modalBurger) {
        
        // burger 1 - Classic American
        
        if (modalBurger.name == "The Classic American") {
          if (burger.options.lettuce && burger.options.pickles && burger.options.tomatoes && burger.options.sauce) {
            this.orderError = false;
            document.getElementById("addBurgerModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // burger 2 - House Burger
        
        if (modalBurger.name == "The House Burger") {
          if (burger.options.lettuce && burger.options.onions && burger.options.bacon) {
            this.orderError = false;
            document.getElementById("addBurgerModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // burger 3 - Double Decker
        
        if (modalBurger.name == "The Double Decker") {
          if (burger.options.pickles && burger.options.tomatoes && burger.options.onions && burger.options.sauce) {
            this.orderError = false;
            document.getElementById("addBurgerModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // burger 4 - Triple Decker
        
        if (modalBurger.name == "The Triple Decker") {
          if (burger.options.lettuce && burger.options.tomatoes && burger.options.pickles && burger.options.avocado) {
            this.orderError = false;
            document.getElementById("addBurgerModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
      }, // End of burger validation method
      
      addBurgerToCart (burger, modalBurger) {
        // creates order
        let order = {
          name: modalBurger.name,
          image: modalBurger.image
        }
        
        //checks to see if product has unique ingredient and then adds as a property to current order object
        
        // Classic American
        
        if (modalBurger.name == "The Classic American") {
          order.lettuce = burger.options.lettuce;
          order.pickles = burger.options.pickles;
          order.tomatoes = burger.options.tomatoes;
          order.sauce = burger.options.sauce;
          this.description = [("Lettuce: " + order.lettuce), ("Pickles: " + order.pickles), ("Tomatoes: " + order.tomatoes), ("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.stripePrice = 'price_1K6nrPAWSbGdzVq3bbDPNWxs';
          order.displayPrice = 10.99;
        }
        
        // House Burger
        
        if (modalBurger.name == "The House Burger") {
          order.lettuce = burger.options.lettuce;
          order.onions = burger.options.onions;
          order.bacon = burger.options.bacon;
          this.description = [("Lettuce: " + order.lettuce), ("Onions: " + order.onions), ("Bacon: " + order.bacon)];
          order.orderDescription = this.description;
          order.stripePrice = 'price_1K6nt1AWSbGdzVq3Gevn9rKz';
          order.displayPrice = 9.99;
        }
        
        // Double Decker
        
        if (modalBurger.name == "The Double Decker") {
          order.pickles = burger.options.pickles;
          order.tomatoes = burger.options.tomatoes;
          order.onions = burger.options.onions;
          order.sauce = burger.options.sauce;
          this.description = [("Pickles: " + order.pickles), ("Tomatoes: " + order.tomatoes), ("Onions: " + order.onions), ("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.stripePrice = 'price_1K6nttAWSbGdzVq3BZvkPtnk';
          order.displayPrice = 11.99;
        }
        
        // Triple Decker
        
        if (modalBurger.name == "The Triple Decker") {
          order.pickles = burger.options.pickles;
          order.tomatoes = burger.options.tomatoes;
          order.lettuce = burger.options.lettuce;
          order.avocado = burger.options.avocado;
          this.description = [("Lettuce: " + order.lettuce), ("Onions: " + order.onions), ("Bacon: " + order.bacon)];
          order.orderDescription = this.description;
          order.stripePrice = 'price_1K6nunAWSbGdzVq3AtimTkEd';
          order.displayPrice = 13.99;
        }
        
        // adds order to cart and to stripe cart
        this.cart.push(order);
        console.log(this.cart);
        console.log(localStorage);
        this.orderToStripe(order);
        this.resetItem(burger, modalBurger);
        
        
      }, //End of add burger to cart
      
      // FRIES SECTION 
      
      //Used to allow burger modals to follow loop of burger cards
      setModalFry (fry) {
        
        this.modalFry = fry;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addFryModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledCartButton").hidden = false;
      
      }, //End of setModalFry
      
      fryValidation (fry, modalFry) {
        
        // Fry 1 - Cajun Fries
        
        if (modalFry.name == "Cajun Fries") {
          if (fry.options.size) {
            this.orderError = false;
            document.getElementById("addFryModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledFryCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Fry 2 - Garlic Fries
        
        if (modalFry.name == "Garlic Fries") {
          if (fry.options.size && fry.options.cheese) {
            this.orderError = false;
            document.getElementById("addFryModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledFryCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Fry 3 - Garlic Fries
        
        if (modalFry.name == "Sweet Potato Fries") {
          if (fry.options.size) {
            this.orderError = false;
            document.getElementById("addFryModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledFryCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Fry 4 - House Tater Tots
        
        if (modalFry.name == "House Tater Tots") {
          if (fry.options.size) {
            this.orderError = false;
            document.getElementById("addFryModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledFryCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
      }, // End of fry validation method
      
      addFryToCart (fry, modalFry) {
        // creates order
        let order = {
          name: modalFry.name,
          image: modalFry.image,
          size: fry.options.size
        }
        
        //checks to see if product has unique ingredient and then adds as a property to current order object 
        
        if (modalFry.name == "Cajun Fries") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6o6PAWSbGdzVq30QQyeXTE';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6o76AWSbGdzVq3jFwCyOqA';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6o7VAWSbGdzVq3TrZhokoX';
            order.displayPrice = 5;
          }
        }
        
        if (modalFry.name == "Garlic Fries") {
          order.cheese = fry.options.cheese
          this.description = [("Size: " + order.size), ("Cheese: " + order.cheese)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6o8QAWSbGdzVq3zSYVCsfT';
            order.displayPrice = 4;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6o8uAWSbGdzVq3vEQFE10p';
            order.displayPrice = 5;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6o9DAWSbGdzVq3l68SEOcP';
            order.displayPrice = 6;
          }
        }
        
        if (modalFry.name == "Sweet Potato Fries") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oAqAWSbGdzVq3vpEfeXTO';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oBeAWSbGdzVq3yFYH3WJl';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oC0AWSbGdzVq3xLXuNwlB';
            order.displayPrice = 5;
          }
        }
        
        if (modalFry.name == "House Tater Tots") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oFkAWSbGdzVq3Dm7d6ufD';
            order.displayPrice = 4;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oGUAWSbGdzVq3aHjz0mI4';
            order.displayPrice = 5;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oGqAWSbGdzVq3TK5G6iGm';
            order.displayPrice = 6;
          }
        }
        
        // adds order to cart and to stripe cart
        this.cart.push(order);
        this.orderToStripe(order);
        this.resetItem(fry, modalFry);     
        
      }, //End of add fry to cart
      
      // DRINKS SECTION
      
      //Used to allow burger modals to follow loop of burger cards
      setModalDrink (drink) {
        
        this.modalDrink = drink;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addDrinkModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledDrinkCartButton").hidden = false;
      
      }, //End of setModalFry
      
      drinkValidation (drink, modalDrink) {
        
        // Drink 1 - HERSHEY's Chocolate Shake
        
        if (modalDrink.name == "HERSHEY's Chocolate Shake") {
          if (drink.options.size) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 2 - Strawberry Shake
        
        if (modalDrink.name == "Strawberry Shake") {
          if (drink.options.size) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 3 - HERSHEY's Chocolate Shake
        
        if (modalDrink.name == "Iced Mocha") {
          if (drink.options.size) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 4 - Vanilla Shake
        
        if (modalDrink.name == "Vanilla Shake") {
          if (drink.options.size) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
      }, // End of drink validation method
      
      addDrinkToCart (drink, modalDrink) {
        // creates order
        let order = {
          name: modalDrink.name,
          image: modalDrink.image,
          size: drink.options.size
        }
        
        //checks to see if product has unique ingredient and then adds as a property to current order object
        
        // Drink 1 - HERSHEY's Chocolate Shake
        
        if (modalDrink.name == "HERSHEY's Chocolate Shake") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oIqAWSbGdzVq38mMHFX1Y';
            order.displayPrice = 4;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oJaAWSbGdzVq3VBokVHQd';
            order.displayPrice = 5;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oJyAWSbGdzVq34hbw8hJh';
            order.displayPrice = 6;
          }
        }
        
        // Drink 2 - Strawberry Shake
        
        if (modalDrink.name == "Strawberry Shake") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oLYAWSbGdzVq3WtCTuDYF';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oMEAWSbGdzVq39bAryvOi';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oMYAWSbGdzVq3UFQVlmAI';
            order.displayPrice = 5;
          }
        }
        
        // Drink 3 - Iced Mocha
        
        if (modalDrink.name == "Iced Mocha") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oN6AWSbGdzVq3K0HwCrHZ';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oNiAWSbGdzVq3QvcG2IR6';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oOOAWSbGdzVq3MxtyFFPl';
            order.displayPrice = 5;
          }
        }
        
        // Drink 4 - Vanilla Shake
        
        if (modalDrink.name == "Vanilla Shake") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K6oOtAWSbGdzVq31jmOgMBM';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K6oPKAWSbGdzVq3AwkjYoch';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K6oPjAWSbGdzVq3IuQm0JVV';
            order.displayPrice = 5;
          }
        }
        
        // adds order to cart and to stripe cart
        this.cart.push(order);
        this.orderToStripe(order);
        this.resetItem(drink, modalDrink);     
        
      }, //End of add drink to cart
      
      
    /////////// OTHER METHODS ////////////////////
      
      // Resets Item
      
      resetItem (item, modalItem) {
        for (let option in item.options) {
          item.options[option] = null;
        }
      },
      
      // deletes specified item from cart on checkout page
      
      deleteItem (index) {
        this.cart.splice(index, 1);
        this.stripeCart.splice(index, 1);
      },  
      
    /////////// STRIPE SECTION //////////////////
      
      // Converts cart into a stripe cart that Stripe API can use for checkout
      
      orderToStripe (order) {
        
        let stripeProduct = {
          price: order.stripePrice,
          quantity: 1
        };
        
        this.stripeCart.push(stripeProduct);
        
      }, // End of orderToStripe
      
      
      stripeCheckout () {
        
        var stripe = this.stripeInstance;
        
        stripe.redirectToCheckout({
        lineItems: this.stripeCart,
        mode: 'payment',
        successUrl: 'https://comp484-final-group-project1.glitch.me/orderSuccess.html',
        cancelUrl: 'https://comp484-final-group-project1.glitch.me/CheckoutPage.html',
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
      },
      
      // clears cart if payment was successful 
      clearCart: function () {
        localStorage.clear();
        console.log ("clear test");
      },
      
      
    } // End of methods
})