import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/product.actions";
import { useNavigate, useSearchParams } from "react-router-dom";

import Product from "../components/Product";

import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlist/wishlist.actions";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../redux/cart/cart.actions";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Pagination from "../components/Pagination";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useSelector((store) => store.product);
  const { wishlist } = useSelector((store) => store.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleWishList = (id) => {
    let wishListProduct = wishlist.find((w) => w._id === id);
    wishListProduct
      ? dispatch(removeFromWishlist(wishListProduct))
      : dispatch(addToWishlist(products.find((p) => p._id === id)));
  };
  const handleCart = (id) => {
    let cartProduct = cartItems.find((w) => w.product._id === id);
    cartProduct
      ? navigate("/checkout")
      : dispatch(
          addToCart({ ...products.find((p) => p._id === id), quantity: 1 })
        );
  };

  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getProducts(page));
    setSearchParams({ page });
  }, [page]);
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  const hanldePage = (val) => {
    setPage(page + val);
  };

  return (
    <Box width="90%" m="auto">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={16}>
        {products?.map((product) => (
          <Box key={product._id}>
            <Product
              _id={product._id}
              title={product.title}
              image={product.image}
              price={product.price}
              inTheCart={cartItems.find((c) => c.product._id === product._id)}
              handleCart={handleCart}
              handleWishList={handleWishList}
              inThewishList={wishlist.find(
                (w) => w.product._id === product._id
              )}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Pagination handlePage={hanldePage} page={page} />
    </Box>
  );
};
export default Home;
