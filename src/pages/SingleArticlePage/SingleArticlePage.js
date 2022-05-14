import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { articlesArray } from "components/ArticlesList/articlesArray";

export const SingleArticlePage = () => {
  const dispatch = useDispatch();
  const titleName = useSelector((state) => state.articlePath);

  return (
    <>
      <h1 className="single-article-page">
        {articlesArray[titleName[1] - 1].title}
      </h1>
    </>
  );
};
