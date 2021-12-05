import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect } from "react";
import axios from "services/axios";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import tw from "twin.macro";

// assets
import NotFoundSvg from "../../Assets/images/not-found.svg";

// helper components
const ContinueShopping = () => {
  return (
    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
      <p>
        or{" "}
        <button
          type="button"
          className="text-indigo-600 font-medium hover:text-indigo-500"
          // onClick={() => setOpen(false)}
        >
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  );
};

const QuantityBox = tw.div`border rounded-sm w-20 h-8 mx-4 flex justify-between items-center`;
const QuantityIcon = tw.span`flex w-6 h-full bg-gray-200 items-center justify-center`;

export default function Cart() {
  const [open, setOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cart && cartProducts) {
      const cartMap = cart.items.map((item) => {
        let pitem =
          cartProducts[cartProducts.findIndex((p) => item.productId === p._id)];
        let mapData = {
          id: pitem._id,
          name: pitem.title,
          price: item.price,
          quantity: item.quantity,
          href: `/product/${pitem._id}`,
          color: "",
          imageSrc: pitem.image[0],
          imageAlt: pitem.description,
        };
        return mapData;
      });
      setProducts(cartMap);
      setTotal(cart.subTotal);
    }
  }, []);

  const removeFromCart = async (id) => {
    // console.log(id);
    const cart = await JSON.parse(localStorage.getItem("cart"));
    const cartProducts = await JSON.parse(localStorage.getItem("cartProducts"));
    if (cart) {
      const items = await cart.items.filter((i) => i.productId !== id);
      cart.items = items;
      // console.log(items);
      if (cart.items.length === 0) {
        cart.subTotal = 0;
      } else {
        const product = items.filter((i) => i.productId === id)[0];
        cart.subTotal -= product.quantity * product.price;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (cartProducts) {
      let cartProds = await cartProducts.filter((i) => i._id !== id);
      // console.log(cartProds);
      localStorage.setItem("cartProducts", JSON.stringify(cartProds));
    }
    window.location.reload();
  };

  const handleQuantityChange = (quantity, change, productId) => {
    if (quantity === 1 && change === -1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const cart_product_index = cartProducts.findIndex(
      (product) => product._id === productId
    );
    const state_product_index = products.findIndex(
      (product) => product.id === productId
    );
    if (cart_product_index > -1 && state_product_index > -1) {
      let tempProducts = products;
      tempProducts[state_product_index].quantity += change;
      let totalChange = tempProducts[state_product_index].price * change;
      setTotal(total + totalChange);
      cart.subTotal += totalChange;
      cart.items[cart_product_index].quantity += change;
      localStorage.setItem("cart", JSON.stringify(cart));
      setProducts(tempProducts);
      // window.location.reload();
    }
  };

  return (
    <Fragment>
      <div className="inset-0 overflow-hidden bg-gray-500 bg-opacity-75">
        <div className="inset-0 overflow-hidden my-5">
          <Fragment>
            <div className="relative inset-0 transition-opacity" />
          </Fragment>

          <div className="inset-y-0 right-0 px-10 max-w-full flex">
            <Fragment>
              <div className="w-screen">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  {products.length ? (
                    <Fragment>
                      <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </div>
                          {/* <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div> */}
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li key={product.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex-1 py-2 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          Rs. {product.price}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <p className="flex items-center text-gray-500">
                                        Qty
                                        <QuantityBox>
                                          <QuantityIcon
                                            tw="hover:cursor-pointer"
                                            onClick={() =>
                                              handleQuantityChange(
                                                product.quantity,
                                                -1,
                                                product.id
                                              )
                                            }
                                          >
                                            <MinusIcon tw="h-4 w-4" />
                                          </QuantityIcon>
                                          {product.quantity}
                                          <QuantityIcon
                                            tw="hover:cursor-pointer"
                                            onClick={() =>
                                              handleQuantityChange(
                                                product.quantity,
                                                1,
                                                product.id
                                              )
                                            }
                                          >
                                            <PlusIcon tw="h-4 w-4" />
                                          </QuantityIcon>
                                        </QuantityBox>
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            removeFromCart(product.id)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>Rs. {total}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <ContinueShopping />
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="flex-1 py-6 px-4 sm:px-6">
                        <div className="flex justify-center items-center flex-column">
                          <img
                            width="200px"
                            src={NotFoundSvg}
                            alt="Not Found"
                          />
                          <p className="font-medium text-indigo-600 text-xl">
                            Cart is empty!
                          </p>
                          <p>
                            Look like you haven't added anything to your cart
                            yet.
                          </p>
                          <ContinueShopping />
                        </div>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
