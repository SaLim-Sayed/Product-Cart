import { IProduct } from "../interface";

export const addItemToShoppingCart = (
  cartItems: IProduct[],
  product: IProduct
) => {
  const exists = cartItems.find((item) => item.id == product.id);
  console.log(exists);

  if (exists) {
    return cartItems.map((item) =>
      item.id == product.id ? { ...item, qty: item.qty + 1 } : item
    );
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    return [...cartItems, { ...product, qty: 1 }];
  }
};
