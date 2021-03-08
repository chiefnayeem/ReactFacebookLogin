import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { SetAuthUser } from '../Global/Actions/AuthUserActions';
import FacebookLogin from 'react-facebook-login';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: 20
  },
  card: {
    minWidth: 350,
    display: "inline-block",
  },
  cardContent: {
    padding: "50px !important",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  fbLoginBtn: {
    width: 0,
    height: 0,
    position: "absolute",
    opacity: 0,
  }

});

export default function LoginCard() {
  const classes = useStyles();

  const fbLoginResponse = (response) => {
    console.log(response);
    SetAuthUser(true, response.userId, response.name, response.email, response.picture.data.url);
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation={2}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          Login With Facebook
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          You must login first to continue!
        </Typography>

        <br/>

        <FacebookLogin
          appId={"140322611307384"}
          autoLoad={false}
          cookie={false}
          fields={"name, email, picture"}
          onClick={() => console.log("Clicked on the facebook login component!")}
          callback={fbLoginResponse}
          buttonStyle={{padding: "0", background: "transparent", border: 0, outline: 0}}
          textButton={<Button size="small" variant="contained" color="primary"><FacebookIcon fontSize="small" />&nbsp; Login</Button>}
        />
      </CardContent>
    </Card>
    </div>
  );
}
