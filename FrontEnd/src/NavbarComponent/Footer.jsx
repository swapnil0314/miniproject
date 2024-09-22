import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h4 class="text-uppercase text-color">
                    <i>Car Rental System</i>
                  </h4>

                  <p className="header-logo-color text-dark">
                    Welcome to our world of boundless exploration. Embrace the
                    freedom to wander, discover, and make unforgettable
                    memories. Let's embark on this journey together. Welcome to
                    our community!
                  </p>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 custom-bg-text">
                  <b>Login from here</b>
                </span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    <b> Log in</b>
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center text-color">
            © 2024 Copyright:
            <a class="text-color-3" href="https://motionmint.com/">
             motionmint.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
