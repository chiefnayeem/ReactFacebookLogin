import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthUserStore } from '../Global/Stores/AuthUserStore';
import { SetAuthUser } from '../Global/Actions/AuthUserActions';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: 20
  },
  card: {
    minWidth: 350,
    display: "inline-block",
  },
  cardAction: {
    textAlign: "center",
    justifyContent: "center"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  AvatarContainer: {
    textAlign: "center", 
    marginBottom: 20,
  },

  Avatar: {
    width: 60, 
    height: 60, 
    display: "inline-block"
  },

});

export default function ProfileCard() {
  const classes = useStyles();
  const [authUser, setAuthUser] = React.useState(AuthUserStore.getAuthUser());

  React.useEffect(() => {
    AuthUserStore.addChangeListener(() => {
      setAuthUser(AuthUserStore.getAuthUser());
    });

    return () =>  AuthUserStore.removeChangeListener(() => {});
  });

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation={2}>
      <CardContent>
        <div className={classes.AvatarContainer}>
          <Avatar className={classes.Avatar} alt={authUser.name} src={authUser.picture} />
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {authUser.email}
        </Typography>
        <Typography variant="h5" component="h2">
          {authUser.name}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button size="small" variant="contained" color="secondary" onClick={() => {
          SetAuthUser(false, '', '', '', '');
        }}>
          <ExitToAppIcon fontSize="small" />&nbsp; Logout
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
