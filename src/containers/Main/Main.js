import { Articles } from "components/Articles/Articles";
import { SmallBiography } from "components/SmallBiography/SmallBiography";
import { PeoplesLife } from "components/PeoplesLife/PeoplesLife";
import { PlacesAndStories } from "components/PlacesAndStories/PlacesAndStories";
import { AboutUs } from "components/AboutUs/AboutUs";
import "./Main.css";

export const Main = () => {
  return (
    <>
      <main className="main">
        <Articles />
        <SmallBiography />
        <PeoplesLife />
        <PlacesAndStories />
        <AboutUs />
      </main>
    </>
  );
};
