import classes from "../components/MuscleGroup.module.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUI = (props) => {
  return (
    <div onClick={props.function} id={props.element.name}>
      <Card
        sx={{ maxWidth: 345 }}
        className={`${classes[props.element.isDone]}`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.images[props.element.name]}
            alt={props.element.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.element.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardUI;
