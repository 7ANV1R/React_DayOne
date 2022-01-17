import React from "react";

import ReplayIcon from "@mui/icons-material/Replay";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "./SwapButton.css";
function SwapButton() {
  return (
    <div className="swap__button">
      <IconButton className="swap__icon_box">
        <ReplayIcon className="repeat__icon" />
      </IconButton>

      <IconButton className="swap__icon_box">
        <ClearIcon className="cross__icon" />
      </IconButton>
      <IconButton className="swap__icon_box">
        <StarIcon className="star__icon" />
      </IconButton>
      <IconButton className="swap__icon_box">
        <FavoriteIcon className="heart__icon" />
      </IconButton>
      <IconButton className="swap__icon_box">
        <FlashOnIcon className="flash__icon" />
      </IconButton>
    </div>
  );
}

export default SwapButton;
