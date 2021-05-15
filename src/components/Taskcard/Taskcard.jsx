import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import axios from "axios";
import task1image from "./Taskcovers/dataset-cover.jpg";
import task2image from "./Taskcovers/dataset-cover2.jpg";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    padding: "100px",
  },
  root: {
    marginTop: "100px",
    maxWidth: "100%",
  },
  media: {
    height: "100px",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  cardBorder: {
    borderRadius: "4px",
    margin: "50px",
  },
}));

export default function TaskCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [taskdata, setTaskdata] = React.useState([]);

  const fetchtasks = () => {
    axios
      .get(
        "https://seli-api.herokuapp.com/getop/?link=https://www.kaggle.com/uciml/iris"
      )
      .then((res) => {
        const data = res.data.MESSAGE;
        var newtaskdata = taskdata.slice();
        newtaskdata.push(data);
        setTaskdata(newtaskdata);
      });
    axios
      .get(
        "https://seli-api.herokuapp.com/getop/?link=https://www.kaggle.com/nehalbirla/vehicle-dataset-from-cardekho/metadata"
      )
      .then((res) => {
        const data = res.data.MESSAGE;
        var newtaskdata = taskdata.slice();
        newtaskdata.push(data);
        setTaskdata(newtaskdata);
      });
  };

  useEffect(() => {
    fetchtasks();
  }, []);

  return (
    <div className={classes.cards}>
      <Card className={(classes.root, classes.cardBorder)}>
        <CardHeader
          avatar={
            <Avatar aria-label="dataset" className={classes.avatar}>
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Task 1 - Iris Species"
          subheader="April 2nd, 2021"
        />
        <div
          style={{
            display: "flex",
            height: "300px",
            width: "90%",
            marginLeft: "1%",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            className={classes.media}
            image="./Taskcovers/dataset-cover.jpg"
            title="Iris Species"
            height="100px"
            
          />
          {/* Nitin Heres the div where u have to add it */}
          {taskdata.length && (
            <div>
              <h1>{taskdata[0].Licences}</h1>
              {taskdata[0].Tags.map((tag) => (
                <h1>{tag}</h1>
              ))}
              <h1>{taskdata[0].Usability}</h1>
            </div>
          )}
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Classify iris plants into three species in this classic dataset.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              window.open(
                "https://www.kaggle.com/nehalbirla/motorcycle-dataset"
              );
            }}
          >
            View
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={(e) => {
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Button size="small" color="primary">
              Read More
            </Button>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description</Typography>
            <Typography paragraph>
              The Iris dataset was used in R.A. Fisher's classic 1936 paper, The
              Use of Multiple Measurements in Taxonomic Problems, and can also
              be found on the UCI Machine Learning Repository. It includes three
              iris species with 50 samples each as well as some properties about
              each flower. One flower species is linearly separable from the
              other two, but the other two are not linearly separable from each
              other. The columns in this dataset are: Id SepalLengthCm
              SepalWidthCm PetalLengthCm PetalWidthCm Species
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className={(classes.root, classes.cardBorder)}>
        <CardHeader
          avatar={
            <Avatar aria-label="dataset" className={classes.avatar}>
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Task 2 - Vehicle Dataset"
          subheader="April 4th, 2021"
        />
        <div
          style={{
            height: "300px",
            width: "90%",
            marginLeft: "1%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            className={classes.media}
            image="./Taskcovers/dataset-cover2.jpg"
            title="Vehicle dataset"
          />
          {taskdata.length && (
            <div>
              <h1>{taskdata[1].Licences}</h1>
              {taskdata[1].Tags.map((tag) => (
                <h1>{tag}</h1>
              ))}
              <h1>{taskdata[1].Usability}</h1>
            </div>
          )}
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This is the dataset for your regression task.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              window.open(
                "https://www.kaggle.com/nehalbirla/motorcycle-dataset"
              );
            }}
          >
            View
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded2,
            })}
            onClick={(e) => {
              setExpanded2(!expanded2);
            }}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <Button size="small" color="primary">
              Read More
            </Button>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description</Typography>
            This dataset contains information about used cars. This data can be
            used for a lot of purposes such as price prediction to exemplify the
            use of linear regression in Machine Learning. The columns in the
            given dataset are as follows: name year selling_price km_driven fuel
            seller_type transmission Owner For used motorcycle datasets please
            go to{" "}
            <a href="https://www.kaggle.com/nehalbirla/motorcycle-dataset">
              https://www.kaggle.com/nehalbirla/motorcycle-dataset
            </a>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
