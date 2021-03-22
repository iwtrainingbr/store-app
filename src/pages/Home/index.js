import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { API_URL } from '../../config';
import Grid from "@material-ui/core/Grid";
import {Card, CardActionArea, CardContent} from "@material-ui/core";
import Navbar from "../../components/Navbar";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

export default function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [banners, setbanners] = React.useState([]);
    const [maxSteps, setMaxSteps] = React.useState(0);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch(API_URL+'/banners.json')
            .then(response => response.json())
            .then(response => {
                let data = []
                for (let id in response) {
                    response.id = id;
                    data.push(response[id]);
                }
                setbanners(data);
                setMaxSteps(data.length);
            })
        fetch(API_URL+'/categories.json')
            .then(response => response.json())
            .then(response => {
                let data = []
                for (let id in response) {
                    response[id].id = id;
                    data.push(response[id]);
                }
                setCategories(data);
            })
    },[]);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return banners.length === 0 ? <div>Carregando...</div> : (
    <div className={classes.root}>
      <Navbar history={props.history}/>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {banners.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.image} alt={step.description} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{flexDirection: 'column'}}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={false}
        backButton={false}
      />

      <hr style={{marginTop: 40, marginBottom: 40}}/>

      <Grid container spacing={2}>
          {categories.map(cat => (
              <Grid item xs={6}>
                  <Card>
                      <CardActionArea onClick={() => props.history.push(`/categorias/${cat.id}`)}>
                          <CardContent align={"center"}>
                              {cat.name}
                          </CardContent>
                      </CardActionArea>
                  </Card>
              </Grid>
          ))}
      </Grid>

    </div>
  );
}