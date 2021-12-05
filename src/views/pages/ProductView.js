import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { useParams } from "react-router";
import axios from "services/axios";
import { useCallback } from "react";

const Container = tw.div``;
const TwoColumn = tw.div`flex flex-col lg:flex-row max-w-screen-xl mx-auto py-16 md:py-16`;
const LeftColumn = tw.div` lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div` mt-12 lg:mt-0 flex flex-col text-left`;

const IllustrationContainer = tw.div`flex justify-center items-center max-w-3xl lg:max-w-none p-4 md:p-8 rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl`;

const imageCss = { maxHeight: 460 };

const Heading = tw.h1`font-black text-xl md:text-2xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 mx-auto lg:mx-0`;

const QuantityBox = tw.div`border rounded-lg w-32 h-12 my-4 flex justify-between items-center`;
const QuantityIcon = tw.span`flex w-10 h-full bg-gray-200 items-center justify-center`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-white focus:shadow-outline focus:outline-none transition duration-300 mr-4`;

const AdditionalDetails = tw.ul`rounded-lg bg-gray-100 p-4 my-4`;
const List = tw.li`my-2`;
const ListKey = tw.span`text-gray-700`;
const ListValue = tw.span`text-gray-500`;

// const data = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductView() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = useCallback(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong!");
      });
  }, [id]);

  useEffect(() => {
    getData();
    return () => {
      setData({});
    };
  }, [getData]);

  // cart
  const cart = JSON.parse(localStorage.getItem("cart"));

  // quantity management
  const [quantity, setQuantity] = useState(getDefaultQuantity());

  const handleQuantityChange = (change) => {
    if (quantity === 1 && change === -1) {
      return;
    }
    setQuantity(quantity + change);
  };

  // item check in cart
  function isItemPresent() {
    if (!cart) return false;
    return cart.items.findIndex((item) => item.productId === id) > -1
      ? true
      : false;
  }

  // get item quantity
  function getDefaultQuantity() {
    if (!isItemPresent()) return 1;
    let item =
      cart.items[cart.items.findIndex((item) => item.productId === id)];
    return item.quantity;
  }

  // add to cart
  const AddItemToCart = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts) {
      cartProducts.push(data);
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    } else {
      localStorage.setItem("cartProducts", JSON.stringify([data]));
    }
    if (!cart) {
      const cartObj = {
        items: [
          {
            productId: id,
            quantity: quantity,
            price: data.price,
          },
        ],
        subTotal: data.price * quantity,
      };
      localStorage.setItem("cart", JSON.stringify(cartObj));
      window.location.reload();
    } else {
      cart.items.push({
        productId: id,
        quantity: quantity,
        price: data.price,
      });
      cart.subTotal += data.price * quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    }
  };

  return (
    <>
      {data.rating ? (
        <AnimationRevealPage>
          <Container>
            <TwoColumn>
              <LeftColumn>
                <IllustrationContainer>
                  <img css={imageCss} src={data.image} alt="Hero" />
                </IllustrationContainer>
              </LeftColumn>
              <RightColumn>
                <Heading>{data.title}</Heading>
                <Paragraph>{data.description}</Paragraph>
                <div tw="mt-4 lg:mt-0 lg:row-span-3">
                  <h2 tw="sr-only">Product information</h2>
                  <p tw="text-3xl text-gray-900">
                    Rs {data.price}{" "}
                    <span tw="text-2xl text-gray-700">Incl GST</span>
                  </p>
                  <p tw="text-lg text-gray-500">Rs {data.price} Excl. GST</p>

                  {/* Reviews */}
                  <div tw="mt-6">
                    <h3 tw="sr-only">Reviews</h3>
                    <div tw="flex items-center">
                      <div tw="flex items-center">
                        ({data?.rating?.rate})
                        {[0, 1, 2, 3, 4].map((rating) =>
                          data?.rating?.rate > rating ? (
                            <div tw="h-5 w-5 relative">
                              <StarIcon
                                key={rating}
                                tw={
                                  "absolute top-0 left-0 text-gray-400 h-5 w-5 flex-shrink-0"
                                }
                                aria-hidden="true"
                              />
                              <StarIcon
                                key={rating}
                                tw={
                                  "absolute top-0 left-0 text-gray-900 h-5 w-5 flex-shrink-0"
                                }
                                aria-hidden="true"
                                clipPath={`view-box inset(0 ${
                                  rating + 1 > data?.rating?.rate
                                    ? 100 - (data?.rating?.rate - rating) * 100
                                    : 0
                                }% 0 0)`}
                              />
                            </div>
                          ) : (
                            <StarIcon
                              key={rating}
                              tw={"text-gray-400 h-5 w-5 flex-shrink-0"}
                              aria-hidden="true"
                            />
                          )
                        )}
                      </div>
                      <p tw="sr-only">{data.rating.rate} out of 5 stars</p>
                      <a
                        href={"#"}
                        tw="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {data.rating.count} reviews
                      </a>
                    </div>
                  </div>
                </div>
                {!isItemPresent() ? (
                  <QuantityBox>
                    <QuantityIcon
                      tw="hover:cursor-pointer"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <MinusIcon tw="h-5 w-5" />
                    </QuantityIcon>
                    {quantity}
                    <QuantityIcon
                      tw="hover:cursor-pointer"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <PlusIcon tw="h-5 w-5" />
                    </QuantityIcon>
                  </QuantityBox>
                ) : (
                  <div tw="my-4">
                    Item is already added in cart,
                    <br />
                    Quantity: {quantity}
                    <br />
                    Please click on below button to see cart.
                  </div>
                )}
                <Actions>
                  {!isItemPresent() ? (
                    <PrimaryButton as="a" href={"#"} onClick={AddItemToCart}>
                      Add to Cart
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton as="a" href={"/cart"}>
                      Go to Cart
                    </PrimaryButton>
                  )}
                </Actions>
                <AdditionalDetails>
                  <List>
                    <ListKey>Brand</ListKey>:{" "}
                    <ListValue>Les Spark Technologies</ListValue>
                  </List>
                  <List>
                    <ListKey>Brand</ListKey>:{" "}
                    <ListValue>Les Spark Technologies</ListValue>
                  </List>
                </AdditionalDetails>
              </RightColumn>
            </TwoColumn>
          </Container>
        </AnimationRevealPage>
      ) : null}
    </>
  );
}
