import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/product.actions";

import Product from "../components/Product";

import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlist/wishlist.actions";
import { addToCart, removeFromCart } from "../redux/cart/cart.actions";
import LoadingSkeleton from "../components/LoadingSkeleton";

const Home = () => {
  const { products, isLoading } = useSelector((store) => store.product);
  const { wishlist } = useSelector((store) => store.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

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

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <Box width="90%" m="auto">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={16}>
        {products?.map((product) => (
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
export default Home;
