import react from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/places">
                            Proin dui sodales imperdiet sit sapien fames ac
                            luctus
                        </Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
                <div className="places-and-stories-place-forest places-and-stories-img">
                    <div className="places-and-stories-place-forest-description places-and-stories-description">
                        <Link to="/places">Proin sed hendrerit nonummy</Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
            </div>
            <div className="places-and-stories-story">
                <h2 className="places-and-stories-story-title">True stories</h2>
                <div className="places-and-stories-story-mother places-and-stories-img">
                    <div className="places-and-stories-story-mother-description places-and-stories-description">
                        <Link to="/stories">Donec tempus urna risus</Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
                <div className="places-and-stories-story-girl places-and-stories-img">
                    <div className="places-and-stories-story-girl-description places-and-stories-description">
                        <Link to="/stories">Videamus animi partes quarum</Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
            </div>
        </section>
    );
};
