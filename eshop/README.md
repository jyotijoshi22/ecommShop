# ecommShop

e-commerce shop using React
The project is a demo e-commerce site using Google Firestore, the React library, and React-Bootstrap.

## MVP:

The project has following structure:

Home Page

- Grid of products
- Carousel of featured products
  Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
  All products are stored in Firestore, and is storing the following information:

* quantity
* variants (could be colors, sizes, etc)
* price per unit
* name
* image url
* favourited or not (boolean)
  The data is fetched by the frontend and there should be NO static product data in the react application

BONUS FEATURES:
Using Firestore and react, the project has create a cart system.
Add logic to prevent users from adding items to cart that are no longer in stock.

Cart page have the following:

- List of products in cart
- ability to change quantity of products in cart
- ability to remove items from cart
