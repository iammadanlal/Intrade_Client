import axios from "../../services/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCallback } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   let render = true;
  //   fetch("https://fakestoreapi.com/products/category/jewelery")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       if (render) {
  //         setProducts(json);
  //         // alert("done");
  //       }
  //     });
  //   return () => {
  //     render = false;
  //   };
  // }, []);

  const getProducts = useCallback(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  useEffect(() => {
    getProducts();
    return () => {
      setProducts([]);
    };
  }, [getProducts]);

  return (
    <div className="Product">
      <section>
        <div className="container">
          <nav className="bg">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Great articles
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="card">
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">All Categories</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                      <form className="pb-3">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-light" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>

                      <ul className="list-menu text-left">
                        <li>
                          <Link to="#">People </Link>
                        </li>
                        <li>
                          <Link to="#">Watches </Link>
                        </li>
                        <li>
                          <Link to="#">Cinema </Link>
                        </li>
                        <li>
                          <Link to="#">Clothes </Link>
                        </li>
                        <li>
                          <Link to="#">Home items </Link>
                        </li>
                        <li>
                          <Link to="#">Animals</Link>
                        </li>
                        <li>
                          <Link to="#">People </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      to="#"
                      data-toggle="collapse"
                      data-target="#collapse_2"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">Brands </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Mercedes
                          {/* <b className="badge badge-pill badge-light float-right">
                            120
                          </b>{" "} */}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Toyota
                          {/* <b className="badge badge-pill badge-light float-right">
                            15
                          </b>{" "} */}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Mitsubishi
                          {/* <b className="badge badge-pill badge-light float-right">
                            35
                          </b>{" "} */}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Nissan
                          {/* <b className="badge badge-pill badge-light float-right">
                            89
                          </b>{" "} */}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          Honda
                          {/* <b className="badge badge-pill badge-light float-right">
                            30
                          </b>{" "} */}
                        </div>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-9">
              <header className="border-bottom mb-4 p-3">
                <div className="form-inline">
                  <span className="mr-md-auto">
                    {products.length} Items found{" "}
                  </span>
                </div>
              </header>
              <div className="row">
                {products.map((item) => (
                  <div className="col-md-4">
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        <span className="badge badge-danger"> NEW </span>
                        <img src={item.image} />
                        <Link
                          className="btn-overlay"
                          to={`/product/${item.id}`}
                        >
                          <i className="fa fa-search-plus"></i> Quick view
                        </Link>
                      </div>
                      <figcaption className="info-wrap">
                        <div className="fix-height">
                          <Link to={`/product/${item._id}`} className="title">
                            {item.title}
                          </Link>
                          <div className="price-wrap mt-2">
                            <span className="price">${item.price}</span>
                            <del className="price-old">${item.price + 70}</del>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <a class="d-block bg-light p-3" href="#">
                  <h2>Load More</h2>
                </a>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
