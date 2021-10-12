import React, {useEffect} from 'react'
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
    height: 0,
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

  cardImage: {height:"auto", width:"370px"},
}));





export default function ProjectCard() {
	const classes = useStyles();
  	const [projectdata, setProjectdata] = React.useState([]);
	const fetchtasks = () => {
    axios
      .get(
        "https://dac-api.herokuapp.com/repo?name=Task2-Vehicle-Price-Prediction"
      )
      .then((res) => {
        const data = res.data.MESSAGE;
        var newprojectdata =projectdata.slice();
        newprojectdata.push(data);
        setProjectdata(newprojectdata);
	console.log("This is inside axios",newprojectdata)
      });
  };

  useEffect(() => {
    fetchtasks();
    console.log("This is project data",projectdata)
  }, []);
	return (
		<div>
			
		</div>
	)
}

