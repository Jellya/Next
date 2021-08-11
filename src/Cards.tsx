import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from "./Card"


let poolItems: { title: string, description: string, comissions: string}[] = [
  {
    title: "Pool #1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    comissions:"2.5%"
  },
  {
    title: "Pool #2",
    description: "Lorem ipsum dolor sit amet.",
    comissions:"1.5%"
  },
  {
    title: "Pool #3",
    description: "Lorem ipsum sit amet.",
    comissions:"5%"
  },
  {
    title: "Pool #4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    comissions:"0.33%"
  }
]


const useStyles = makeStyles({
  paper: {
    padding: 15,
  }
});

export default function Cards() {
  const classes = useStyles();
  return (
    <>
    { poolItems.length !==0 && poolItems.map(item => (
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={classes.paper}>
          <Card 
            titleItem={item.title}
            descriptionItem={item.description}
            comissionItem={item.comissions}
          />
        </Paper>
      </Grid>
    ))}
  </>
  )
}
