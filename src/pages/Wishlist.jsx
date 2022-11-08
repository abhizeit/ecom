import { Box, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import EmptyWishlist from "../components/EmptyWishlist";
import Product from "../components/Product";
import { addToCart, removeFromCart } from "../redux/cart/cart.actions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlist/wishlist.actions";

const Wishlist = () => {
  const { wishlist } = useSelector((store) => store.wishlist);
  const { cartItems } = useSelector((store) => store.cart);
  let { products } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  const handleWishList = (id) => {
    let wishListProduct = wishlist.find((w) => w.id === id);
    wishListProduct
      ? dispatch(removeFromWishlist(wishListProduct))
      : dispatch(addToWishlist(products.find((p) => p.id === id)));
  };
  const handleCart = (id) => {
    let cartProduct = cartItems.find((w) => w.id === id);
    cartProduct?.id === id
      ? dispatch(removeFromCart(cartProduct))
      : dispatch(addToCart({ ...products.find((p) => p.id === id), count: 1 }));
  };
  if (!wishlist.length) {
    return <EmptyWishlist />;
  }

  return (
    <Box w="90%" margin="auto">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={16}>
        {wishlist?.map((product) => (
          <Box key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              inTheCart={cartItems.find((c) => c.id === product.id)}
              handleCart={handleCart}
              handleWishList={handleWishList}
              inThewishList={wishlist.find((w) => w.id === product.id)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Wishlist;
