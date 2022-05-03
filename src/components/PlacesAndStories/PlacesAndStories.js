import react from "react";
import "./PlacesAndStories.css";

export const PlacesAndStories = () => {
  return (
    <section className="places-and-stories">
      <div className="places-and-stories-place">
        <h2 className="places-and-stories-place-title">
          Places worth visiting
        </h2>
        <div className="places-and-stories-place-mountains places-and-stories-img">
          <div className="places-and-stories-place-mountains-description places-and-stories-description">
            Fusce lorem ligula
          </div>
        </div>
        <div className="places-and-stories-place-forest places-and-stories-img">
          <div className="places-and-stories-place-forest-description places-and-stories-description">
            Proin sed hendrerit nonummy
          </div>
        </div>
      </div>
      <div className="places-and-stories-story">
        <h2 className="places-and-stories-story-title">True stories</h2>
        <div className="places-and-stories-story-mother places-and-stories-img">
          <div className="places-and-stories-story-mother-description places-and-stories-description">
            Donec tempus urna risus
          </div>
        </div>
        <div className="places-and-stories-story-girl places-and-stories-img">
          <div className="places-and-stories-story-girl-description places-and-stories-description">
            Videamus animi partes quarum
          </div>
        </div>
      </div>
    </section>
  );
};
