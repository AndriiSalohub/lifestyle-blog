import React from "react";
import { useSelector } from "react-redux";
import { articlesArray } from "components/ArticlesList/articlesArray";
import "./SingleArticleInput.css";

export const SingleArticleInput = () => {
    const titleName = useSelector((state) => state.articlePath);

    if (articlesArray[titleName[1] - 1].tag === "design") {
        return (
            <>
                <div className="single-article-input">
                    <div className="single-article-input-title">
                        Vivamus posuere dui in congue fringilla elemen tum
                        eleifend ligula quis nulla.
                    </div>
                    <div className="single-article-input-first-block-text text-block">
                        <div className="single-article-input-first-block-text-first-paragraph text-block-paragraph">
                            Lorem ipsum dolor sit amet sapien leo ac augue nec
                            tincidunt vehicula, dui lectus, pellentesque auctor
                            velit. Mauris in wisi. Aenean ac sapien. Cras ut
                            erat. Nulla nec elementum vitae, vulputate aliquam
                            euismod quam interdum elementum. Morbi quis nulla id
                            nulla dictum ante. Donec eu neque tristique vitae,
                            pede. Aliquam feugiat mattis faucibus. Sed justo at
                            tellus. Ut sodales sapien quis nibh nulla quam nunc,
                            fringilla aliquet.
                        </div>
                        <div className="single-article-input-first-block-text-second-paragraph text-block-paragraph">
                            Ut eget quam molestie justo at nibh lacus, euismod
                            purus eu sem sit amet pede. In accumsan orci. Proin
                            aliquam enim ut leo. In hac habitasse platea
                            dictumst. Duis neque ac erat. Integer eros vulputate
                            at, bibendum vel, wisi. Mauris eros diam magna
                            neque, fringilla et, erat. Sed eros. Mauris aliquet
                            quis, justo. Vivamus posuere dui. In congue
                            fringilla id, elementum eleifend, ligula. Ut eget
                            magna. Donec tempus nulla. Aliquam gravida eros
                            sagittis malesuada. Donec nonummy, mi. Donec in
                            faucibus ligula. Ut sit amet, sodales dui at metus.
                        </div>
                    </div>
                    <div className="single-article-input-images">
                        <div className="single-article-input-images-first images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_stories_3-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-second images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_stories_2-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-third images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_blog_hot_2-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-fourth images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_stories_1-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-fifth images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_people_4-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-sixth images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_people_3-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-seventh images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_people_2-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                        <div className="single-article-input-images-eighth images-number">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_blog_hot_1-350x350.jpg"
                                alt=""
                                className="input-images"
                            ></img>
                        </div>
                    </div>
                    <div className="single-article-input-sub-title">
                        Nunc dictum, metus non accumsan congue, felis ex
                        consequat lectus, vitae euismod leo lectus vel diam.
                        Aliquam ullamcorper, nisi id lacinia tincidunt, elit
                        amet. Aenean sed tempor felis! Nam laoreet dui at libero
                        finibus interdum! Maecenas diam velit, molestie vitae
                        fringilla ultricies, ultrices eu tortor? Vivamus metus.
                    </div>
                    <div className="single-article-input-second-block-text text-block">
                        <div className="single-article-input-second-block-text-first-paragraph text-block-paragraph">
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </div>
                        <div className="single-article-input-second-block-text-second-paragraph text-block-paragraph">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora
                            incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat.
                        </div>
                    </div>
                    <div className="single-article-input-background-full-title">
                        <p className="single-article-input-background-full-title-text">
                            Integer tempor id metus et tincidunt. Vestibulum
                            pellentesque non massa a fringilla. Mauris aliquet
                            tortor sed ex dignissim venenatis.
                        </p>
                    </div>
                    <div className="single-article-input-third-block-text text-block">
                        <div className="single-article-input-third-block-text-first-paragraph text-block-paragraph">
                            Tempor auctor, ante ipsum consectetuer at, viverra
                            accumsan, libero odio a dolor tellus vulputate leo
                            sed ante. Vestibulum ante pellentesque quis,
                            pellentesque sagittis vel, consequat wisi. Proin
                            posuere. Quisque at nulla. Maecenas eleifend mauris
                            rhoncus suscipit. Suspendisse nulla dictum accumsan
                            sed, euismod pede, nec dui. Morbi placerat vehicula
                            neque. Praesent in vestibulum sed, vestibulum id,
                            elit. Aenean mollis orci. Nullam justo facilisis
                            pharetra. Suspendisse sed dolor sit amet dignissim
                            massa. Duis mauris consequat sapien mauris vehicula
                            ut, consectetuer adipiscing eget, bibendum pede.
                            Vestibulum semper convallis. Praesent elit aliquet
                            at, vehicula elit consequat auctor non, arcu. In
                            vitae ante. Mauris magna sit amet, massa.
                        </div>
                        <div className="single-article-input-third-block-text-second-paragraph text-block-paragraph">
                            Phasellus a laoreet luctus, ante ipsum consectetuer
                            adipiscing ligula. Lorem ipsum primis in accumsan
                            sit amet, consectetuer massa. Curabitur ac pede.
                            Lorem ipsum primis in risus. Vivamus nibh. Etiam et
                            libero. Nullam vulputate sagittis, nunc vel ligula
                            accumsan tincidunt. Maecenas semper risus dolor sit
                            amet, tempor interdum eu, tempor pede quis leo.
                            Maecenas bibendum quis, lacinia aliquet. Quisque
                            vitae metus. Donec congue. Proin faucibus orci
                            luctus et nisl. Sed diam eu odio. Morbi.
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (articlesArray[titleName[1] - 1].tag === "framework") {
        return (
            <>
                <div className="single-article-framework">
                    <div className="single-article-framework-title framework-title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do dolore magna aliqua. Ut enim ad minim veni
                        sit amet Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do dolore magna aliqua. Ut enim ad
                        minim.
                    </div>
                    <div className="single-article-framework-first-block-text text-block">
                        <div className="single-article-framework-first-block-text-first-paragraph text-block-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </div>
                        <div className="single-article-framework-first-block-text-second-paragraph text-block-paragraph">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat.
                        </div>
                    </div>
                    <div className="single-article-framework-big-img-block">
                        <div className="single-article-framework-big-img-block-img">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_postdetails_1_2.jpg"
                                alt=""
                            ></img>
                            <div className="single-article-framework-big-img-block-img-description img-description">
                                Donec eleifend in metus malesuada sem a massa
                            </div>
                        </div>
                    </div>
                    <div className="single-article-framework-quote-block">
                        <div className="single-article-framework-quote-block-quote">
                            „Lorem modi tempora incidunt ut labore et dolore
                            magnam.”
                        </div>
                        <div className="single-article-framework-quote-block-text text-block">
                            <div className="single-article-framework-quote-block-text-first-paragraph first-paragraph">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur magni
                                dolores eos qui ratione voluptatem sequi
                                nesciunt.
                            </div>
                            <div className="single-article-framework-quote-block-text-second-paragraph second-paragraph">
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat.
                            </div>
                        </div>
                    </div>
                    <div className="single-article-framework-second-title framework-title">
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco
                    </div>
                    <div className="single-article-framework-small-text-block text-block">
                        Phasellus sit amet nunc sed leo convallis malesuada.
                        Aliquam justo augue, egestas et iaculis sed, ultrices et
                        nisi. Suspendisse potenti. Nam volutpat nunc amet. Morbi
                        lacus ex, dignissim et dui eu, commodo lobortis tortor!
                        Proin eleifend orci purus, ac sollicitudin nibh molestie
                        sed. Aliquam erat volutpat. Duis posuere beatae vitae
                        dicta sunt explicabo.
                    </div>
                    <div className="single-article-framework-img-block">
                        <div className="single-article-framework-img-block-first-img">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_blog_hot_4.jpg"
                                alt=""
                            ></img>
                            <div className="single-article-framework-img-block-first-img-description img-description">
                                Donec eleifend in metus malesuada sem a massa
                            </div>
                        </div>
                        <div className="single-article-framework-img-block-second-img">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/05/home_lifestyle_blog_people_1.jpg"
                                alt=""
                            ></img>
                            <div className="single-article-framework-img-block-second-img-description img-description">
                                Nulla laoreet scelerisque tortor in fringilla
                                sapien
                            </div>
                        </div>
                    </div>
                    <div className="single-article-framework-second-block-text text-block">
                        <div className="single-article-framework-second-block-text-first-paragraph text-block-paragraph">
                            Omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem.
                        </div>
                        <div className="single-article-framework-second-block-text-second-paragraph text-block-paragraph">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat.Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia .
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (articlesArray[titleName[1] - 1].tag === "themforest") {
        return (
            <>
                <div className="single-article-themforest">
                    <div className="single-article-themforest-title framework-title">
                        Cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                    </div>
                    <div className="single-article-themforest-first-text-block text-block">
                        <div className="single-article-themforest-first-text-block-first-paragraph first-paragraph">
                            <span className="big-letter">L</span> nsert your
                            content hereorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim.
                        </div>
                        <div className="single-article-themforest-first-text-block-second-paragraph second-paragraph">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudan tium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat volup tatem. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                        </div>
                    </div>
                    <div className="single-article-themforest-full-img">
                        <img
                            src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_postdetails_2_2.jpg"
                            alt=""
                        ></img>
                        <div className="single-article-themforest-full-img-text">
                            „Lorem modi tempora incidunt ut labore et dolore
                            magnam moditeora incidunt ut labore et dolore
                            magnam.”
                        </div>
                    </div>
                    <div className="single-article-themforest-second-title framework-title">
                        Praesent nec sapien mauris dui non augue. Nulla mi non
                        magna. Fusce blandit ultrices posuere in, ipsum. Fusce
                        facilisis dignissim faucibus, tortor a nulla. Integer
                        convallis viverra, enim aliquam odio. Suspendisse semper
                        sollicitudin.
                    </div>
                    <div className="single-article-themforest-second-text-block text-block">
                        <div className="single-article-themforest-second-text-block-first-paragraph first-paragraph">
                            Etiam at turpis. Etiam tempor auctor, ante ipsum
                            consectetuer at, viverra accumsan, libero odio a
                            dolor tellus vulputate leo sed ante. Vestibulum ante
                            pellentesque quis, pellentesque sagittis vel,
                            consequat wisi. Proin posuere. Quisque at nulla.
                            Maecenas eleifend mauris rhoncus suscipit.
                            Suspendisse nulla dictum accumsan sed, euismod pede,
                            nec dui. Morbi placerat vehicula neque. Praesent in
                            vestibulum sed, vestibulum id, elit. Aenean mollis
                            orci. Nullam justo facilisis pharetra. Suspendisse
                            sed dolor sit amet dignissim massa. Duis mauris
                            consequat sapien mauris vehicula ut, consectetuer
                            adipiscing eget, bibendum pede. Vestibulum semper
                            convallis. Praesent elit aliquet at, vehicula elit
                            consequat auctor non, arcu.
                        </div>
                        <div className="single-article-themforest-second-text-block-second-paragraph second-paragraph">
                            Etiam ullamcorper. Nam purus. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per
                            inceptos hymenaeos. Pellentesque sed porta dolor sit
                            amet, sodales quam ac arcu. In gravida pulvinar.
                            Donec gravida feugiat lectus vulputate at, convallis
                            varius. In lacinia porta. Ut bibendum vel, lacinia
                            id, congue at, pretium erat sem volutpat a,
                            tristique ut, lectus. Nullam risus ut justo at
                            turpis et quam. Ut id eleifend adipiscing mauris.
                            Pellentesque habitant morbi tristique bibendum a,
                            mauris. Nunc a adipiscing dictum eu, dapibus tellus.
                            Ut eget quam molestie justo at nibh lacus, euismod
                            purus eu sem sit amet pede.
                        </div>
                    </div>
                    <div className="single-article-themforest-half-block">
                        <div className="single-article-themforest-half-block-background">
                            <img
                                src="https://themes.muffingroup.com/be/lifestyle/wp-content/uploads/2014/03/home_lifestyle_postdetails_2_2.jpg"
                                alt=""
                            ></img>
                        </div>
                        <div className="single-article-themforest-half-block-text">
                            Laoreet dignissim nec metus. Integer lectus
                            elementum dui eu vehicula egestas augue
                        </div>
                    </div>
                    <div className="single-article-themforest-third-title framework-title">
                        Lorem ipsum dolor sit amet sapien leo ac augue nec
                        tincidunt vehicula, dui lectus, pellentesque auctor
                        velit.
                    </div>
                    <div className="single-article-themforest-third-text-block text-block">
                        <div className="single-article-themforest-third-text-block-first-paragraph first-paragraph">
                            Mauris in wisi. Aenean ac sapien. Cras ut erat.
                            Nulla nec elementum vitae, vulputate aliquam euismod
                            quam interdum elementum. Morbi quis nulla id nulla
                            dictum ante. Donec eu neque tristique vitae, pede.
                            Aliquam feugiat mattis faucibus. Sed justo at
                            tellus. Ut sodales sapien quis nibh nulla quam nunc,
                            fringilla aliquet. Quisque in quam purus, vehicula
                            eget, condimentum tempor, sapien quis tortor.
                        </div>
                        <div className="single-article-themforest-third-text-block-second-paragraph second-paragraph">
                            In sodales rutrum, urna felis, malesuada fames ac
                            erat. Integer tristique, augue varius eu, faucibus
                            massa lacinia quam interdum vehicula. Nunc tristique
                            tempus nulla. Pellentesque habitant morbi tristique
                            bibendum sem, sed fermentum sem at quam.
                        </div>
                    </div>
                    <div className="single-article-themforest-small-quote">
                        Praesent nec sapien mauris dui non augue. Nulla mi non
                        magna. Fusce blandit ultrices posuere in, ipsum. Fusce
                        facilisis dignissim faucibus, tortor a nulla. Integer
                        convallis viverra, enim aliquam odio. Suspendisse semper
                        sollicitudin. Praesent et ultrices posuere cubilia.
                    </div>
                    <div className="single-article-themforest-fourth-text-block text-block">
                        <div className="single-article-themforest-fourth-text-block-first-paragraph first-paragraph">
                            Mauris magna sit amet, massa. Phasellus a laoreet
                            luctus, ante ipsum consectetuer adipiscing ligula.
                            Lorem ipsum primis in accumsan sit amet,
                            consectetuer massa. Curabitur ac pede. Lorem ipsum
                            primis in risus. Vivamus nibh. Etiam et libero.
                            Nullam vulputate sagittis, nunc vel ligula accumsan
                            tincidunt. Maecenas semper risus dolor sit amet,
                            tempor interdum eu, tempor pede quis leo. Maecenas
                            bibendum quis, lacinia aliquet. Quisque vitae metus.
                            Donec congue. Proin faucibus orci luctus et nisl.
                            Sed diam eu odio. Morbi.
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
