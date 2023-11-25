import { Grid, Typography } from "@material-ui/core";
import video from './video.mp4';

const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      
      <video className='videoTag' autoPlay loop muted 
        style={{minWidth: "100%",minHeight: "100vh",maxWidth: "100%",maxHeight: "100vh",objectFit: "cover",
          zIndex: "-1", boxSizing:"border-box",backgroundColor: "rgba(35,45,57,0.8)"}}>
          <source src={video} type='video/mp4' />
      </video>
        <div class="caption header-text"
          style={{ position: "absolute",top: "0",left: "0", bottom: "7px",width: "100%", fontFamily: ""
            }}>

              <div style={{textAlign: "center",position: "absolute",width: "100%",left: "50%",top: "70%",
                            transform: "translate(-50%,-50%)",background:"rgba(0, 0, 139, 1)"}}>
                <Grid item >
                  <Typography variant="h6" style={{fontFamily: "alberus medium",marginTop: "5px",marginBottom: "5px",fontSize: "18px",
                      textTransform: "uppercase",fontWeight: "800",color: "#ffffff",
                      letterSpacing: "0.5px"}}>JOB HUNT MADE EASY </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h2" 
                  style={{fontFamily: "alberus medium",marginTop: "5px",marginBottom:"5px",textTransform: "uppercase",
                  fontWeight: "800",color: "#ffffff",letterSpacing: "1px"}}>
                    YOUR CAREER JOURNEY BEGINS <em style={{fontStyle: "normal",color: "#ed563b",fontWeight: "900"}}>NOW</em>
                  </Typography>
                </Grid>
              </div>
        </div>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;