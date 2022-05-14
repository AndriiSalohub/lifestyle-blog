import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ArticlesListItem.css";
import { Link } from "react-router-dom";

export const ArticleListItem = ({
  id,
  title,
  description,
  img,
  path,
  category,
}) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => state.articleLike[id]);
  const likeCounter = useSelector((state) => state.articleLikeCounter[id]);
  const articlePath = useSelector((state) => state.articlePath);
  const currentPage = useSelector((state) => state.category);

  const removeLike = (id) => {
    dispatch({
      type: "DISLIKE",
      id,
    });
  };

  const addLike = (id) => {
    dispatch({
      type: "LIKE",
      id,
    });
  };

  const removeFromLikeCounter = (id) => {
    dispatch({
      type: "REMOVE_FROM_LIKE_COUNTER",
      id,
    });
  };

  const addToLikeCounter = (id) => {
    dispatch({
      type: "ADD_TO_LIKE_COUNTER",
      id,
    });
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#da9d3b",
        contrastText: "#fff",
      },
    },
  });

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
    <>
      <div className="article-list">
        <div className="article-list-article">
          <img src={img} alt="" className="article-list-article-img " />
          <div className="article-list-article-iformation">
            <div className="article-list-article-title ">{title}</div>
            <div className="article-list-article-description">
              {description}
            </div>
            <div className="like-area">
              <span className="like-btn-question">Do you like it?</span>
              <ThemeProvider theme={theme}>
                <Button
                  onClick={() => {
                    isLiked ? removeLike(id) : addLike(id);
                    isLiked ? removeFromLikeCounter(id) : addToLikeCounter(id);
                  }}
                  color="neutral"
                >
                  {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
              </ThemeProvider>
              <span className="like-btn-counter">{likeCounter}</span>
              <span className="read-more-btn">
                <Link
                  onClick={() => {
                    addRoute(id, path);
                    detectCategory(category);
                  }}
                  to={path}
                  className="read-more-btn-link"
                >
                  Read more
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
