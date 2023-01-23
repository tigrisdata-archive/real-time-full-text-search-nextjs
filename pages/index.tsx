import Head from "next/head";
import Image from "next/image";
import products from "../db/products.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Real-time full-text seach with Next.js and Tigris demo</title>
        <meta
          name="description"
          content="Real-time full-text seach with Next.js and Tigris demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">
                Shop <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </nav>
        </header>
        <section>
          <div className="container">
            <div className="container bg-white">
              <nav className="navbar navbar-expand-md navbar-light bg-white">
                <div className="container-fluid p-0">
                  {" "}
                  <a className="navbar-brand text-uppercase fw-800" href="#">
                    <span className="border-red pe-2">New</span>Product
                  </a>{" "}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#myNav"
                    aria-controls="myNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {" "}
                    <span className="fas fa-bars"></span>{" "}
                  </button>
                </div>
              </nav>
              <div className="row">
                {products.length ? (
                  products.map((product) => {
                    const stars = Array.from(
                      { length: product.star },
                      (_, i) => <span key={i} className="fas fa-star"></span>
                    );
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3" key={product.name}>
                        <div className="product">
                          {" "}
                          <Image
                            height="320"
                            width="320"
                            src={product.image}
                            alt=""
                          />
                          <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon">
                              <span className="fas fa-expand-arrows-alt"></span>
                            </li>
                            <li className="icon mx-3">
                              <span className="far fa-heart"></span>
                            </li>
                            <li className="icon">
                              <span className="fas fa-shopping-bag"></span>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={
                            product.tag == "new" ? "tag bg-red" : "tag bg-black"
                          }
                        >
                          {product.tag}
                        </div>
                        <div className="title pt-4 pb-1">{product.name}</div>
                        <div className="d-flex align-content-center justify-content-center">
                          {stars}
                        </div>
                        <div className="price">$ {product.price}</div>
                      </div>
                    );
                  })
                ) : (
                  <p className="mt-4" style={{ textAlign: "center" }}>
                    No product available
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
