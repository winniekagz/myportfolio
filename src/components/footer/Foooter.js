import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button ,CardActions} from '@material-ui/core';


import Typography from '@material-ui/core/Typography';
const scrollTo = require('scroll-to');
const styles = theme => ({
  root: {
      
    ...theme.mixins.gutters(),
    
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
      backgroundColor:'#000000',
    // backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  }
});
 
function Footer(props) {
  const { classes } = props;


 
  return (
    //   <div className='footer'>
    <footer className={classes.footer} style={{backgroundColor:"#000000",color:"#FFFFFF"}}> 
      <Paper className={classes.root} elevation={1}style={{backgroundColor:"#000000",color:"#FFFFFF"}}>
          <Typography>created by winfred Kagendo</Typography>
        <Typography variant="h5" component="h3" style={{backgroundColor:"#000000",color:"#FFFFFF"}}>
          React App with Material UI
        </Typography>
        <Typography component="p">
          @2018 All right reserved
        </Typography>
     

      <div className='col-6'>
                    <Typography style={{width:"50%"}}>
                                To view the code of this website click on the button below
                            </Typography>
                            <CardActions >
               <a className="link" style={{background:'#FF8000'}} target="_blank" href="https://github.com/winniekagz/myportfolio">
                    <Button variant="outlined">View  on github</Button></a>
                    </CardActions>
                    </div>

                    
                    </Paper>
                    
               
    </footer>
    //  </div> 
  );
}
 
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Footer);