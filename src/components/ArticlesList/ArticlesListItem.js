import { useDispatch, useSelector } from "react-redux";

export const ArticleListItem = ({ id, title, description, img }) => {
  const dispatch = useDispatch();

  const isLiked = useSelector((state) => state.articleLikedReducer);

  console.log(isLiked);

  return (
    <>
      <div className="article-list">
        <div className="article-list-article">
          <img src={img} className="article-list-article-img " />
          <div className="article-list-article-iformation">
            <div className="article-list-article-title ">{title}</div>
            <div className="article-list-article-description">
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
