import React, {useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";

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

