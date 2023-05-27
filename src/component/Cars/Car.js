import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Car = ({carcard}) => {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
<Container maxWidth="lg" border={1} sx={{marginTop:'90px'}}>

<div>
<Typography variant='h3'> Cars</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        border={1}
      >
        <DialogTitle id="alert-dialog-title">
          {<div>
            
            
            <h1>
              this is popup
              push by zuni
            </h1>
            
            </div>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    </div>

    <h1>ok</h1>

             
<Grid container spacing={3} border={1} sx={{ marginTop:'30px', p:2, display:"flex" }}> 

            {
                carcard.map((item) => (
                    
<Grid item lg={3} md={4} sm={6} xs={12} >
                    <Card sx={{ maxWidth: 345, }}>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={item.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="p" color="text.dark">
                                {item.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.place}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small" onClick={() => navigate(item.route)}>Add car</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))
            }

            </Grid>
            </Container>

        </>
    )
}

export default Car