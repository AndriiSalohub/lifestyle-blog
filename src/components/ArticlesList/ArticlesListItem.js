import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ArticlesListItem.css";

export const ArticleListItem = ({ id, title, description, img }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => state.articleLike[id]);
  const likeCounter = useSelector((state) => state.articleLikeCounter[id]);

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
