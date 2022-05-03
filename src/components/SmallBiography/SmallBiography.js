import React from "react";

import "./SmallBiography.css";

export const SmallBiography = () => {
  return (
    <section className="small-biography">
      <div className="small-biography-quote">
        <div className="small-biography-quote-simbol"></div>
        <div className="small-biography-quote-title">Quote of the week</div>
        <div className="small-biography-quote-text">
          Phasellus fringilla nisl in sem scelerisque, a vestibulum mi
          elementum. Aenean. Nam vestibulum elit vel felis porta posuere. Nullam
          luctus rhoncus ligula a scelerisque. Vestibulum suscipit pulvinar.
        </div>
        <div className="small-biography-quote-author">- Marcus Ettemus</div>
      </div>
      <div className="small-biography-featured-author">
        <div className="small-biography-featured-author-avatar"></div>
        <div className="small-biography-featured-author-subtitle">
          Featured Author
        </div>
        <div className="small-biography-featured-author-title">
          Mark Spencer
        </div>
        <div className="small-biography-featured-author-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit do eiusmod
        </div>
      </div>
    </section>
  );
};
