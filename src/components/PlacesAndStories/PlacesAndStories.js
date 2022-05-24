import react from "react";
import { Link } from "react-router-dom";
import "./PlacesAndStories.css";
import { useDispatch } from "react-redux";

export const PlacesAndStories = () => {
    const dispatch = useDispatch();

    const addRoute = (id, path) => {
        dispatch({
            type: "ADD_PATH",
            id,
            path,
        });
    };

    const detectCategory = (category) => {
        dispatch({
            type: "CATEGORY",
            category,
        });
    };

    return (
        <section className="places-and-stories">
            <div className="places-and-stories-place">
                <h2 className="places-and-stories-place-title">
                    Places worth visiting
                </h2>
                <div className="places-and-stories-place-mountains places-and-stories-img">
                    <div className="places-and-stories-place-mountains-description places-and-stories-description">
                        <Link
                            onClick={() => {
                                addRoute(12, "fusce-lorem-ligula");
                                detectCategory("places");
                            }}
                            to="/places/fusce-lorem-ligula"
                        >
                            Proin dui sodales imperdiet sit sapien fames ac
                            luctus
                        </Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
                <div className="places-and-stories-place-forest places-and-stories-img">
                    <div className="places-and-stories-place-forest-description places-and-stories-description">
                        <Link
                            onClick={() => {
                                addRoute(11, "proin-sed-hendrerit-nonummy");
                                detectCategory("places");
                            }}
                            to="/places/proin-sed-hendrerit-nonummy"
                        >
                            Proin sed hendrerit nonummy
                        </Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
            </div>
            <div className="places-and-stories-story">
                <h2 className="places-and-stories-story-title">True stories</h2>
                <div className="places-and-stories-story-mother places-and-stories-img">
                    <div className="places-and-stories-story-mother-description places-and-stories-description">
                        <Link
                            onClick={() => {
                                addRoute(16, "donec-tempus-urna-risus");
                                detectCategory("stories");
                            }}
                            to="/stories/donec-tempus-urna-risus"
                        >
                            Donec tempus urna risus
                        </Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
                <div className="places-and-stories-story-girl places-and-stories-img">
                    <div className="places-and-stories-story-girl-description places-and-stories-description">
                        <Link
                            onClick={() => {
                                addRoute(15, "videamus-animi-partes-quarum");
                                detectCategory("stories");
                            }}
                            to="/stories/videamus-animi-partes-quarum"
                        >
                            Videamus animi partes quarum
                        </Link>
                    </div>
                    <div className="places-and-stories-background"></div>
                </div>
            </div>
        </section>
    );
};
