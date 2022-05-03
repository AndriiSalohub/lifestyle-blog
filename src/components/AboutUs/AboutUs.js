import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-us-inform">
          <div className="about-us-inform-title about-us-title">About us</div>
          <div className="about-us-inform-text about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </div>
          <div className="about-us-inform-pale-text about-us-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidat.
          </div>
        </div>
        <div className="about-us-authors">
          <div className="about-us-authors-title about-us-title">Authors</div>
          <div className="about-us-authors-first-author authors">
            <div className="about-us-authors-first-author-photo authors-photo"></div>
            <div className="about-us-authors-first-author-info">
              <div className="about-us-authors-first-author-name author-name">
                Bryan D. Preston
              </div>
              <div className="about-us-authors-first-author-description author-description">
                Lorem ipsum dolor sit amet, consecte tur adipisicing elit
              </div>
            </div>
          </div>
          <div className="about-us-authors-second-author authors">
            <div className="about-us-authors-second-author-photo authors-photo"></div>
            <div className="about-us-authors-second-author-info">
              <div className="about-us-authors-second-author-name author-name">
                Tatiana R. Kovalsky
              </div>
              <div className="about-us-authors-second-author-description author-description">
                Lorem ipsum dolor sit amet, consecte tur adipisicing elit
              </div>
            </div>
          </div>
          <div className="about-us-authors-third-author authors">
            <div className="about-us-authors-third-author-photo authors-photo"></div>
            <div className="about-us-authors-third-author-info">
              <div className="about-us-authors-third-author-name author-name">
                Albert W. Steavenson
              </div>
              <div className="about-us-authors-third-author-description author-description">
                Lorem ipsum dolor sit amet, consecte tur adipisicing elit
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-become-an-author">
          <div className="about-us-become-an-author-title about-us-title">
            Become an author
          </div>
          <div className="about-us-become-an-author-text about-us-text">
            Morbi eget dictum lectus, eget porttitor erat. Vestibulum dictum
            lacus id turpis egestas mattis. Vestibulum ac leo ultrices, porta
            libero malesuada, mollis sed.
          </div>
          <div className="about-us-become-an-author-pale-text about-us-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </div>
          <button className="about-us-become-an-author-read-more-btn">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
