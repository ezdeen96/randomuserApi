import React,{Component} from 'react'
import axios from 'axios'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardHeader,
  IconButton,
  Avatar,
  Grid,    
} from "@material-ui/core";
async function getUsers() {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
const delteperson=(id)=>{ 
  const filterPerson=this.state.users.filter((user)=>user.id.value != id)
 this.setState(filterPerson)
}
class Screen2 extends Component {
 
  state = {
    users: []
     }
 componentDidMount =()=>{
      getUsers().then(response => {
      this.setState({
      users: response.data.results
      });
    });
  };
  render() {
  return (
    <Grid container spacing={{ xs: 12, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {Array.from(Array(1)).map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
       <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "white",color:"black",textAlign:'center'}}> {this.state.users.filter(user=>user.dob.age).sort((prev,next)=>prev.dob.age-next.dob.age).map((user,index)=>
      <>
        <CardHeader 
         style={{textAlign:"left",backgroundColor:'red'}}
         avatar={
         <Avatar  aria-label="recipe" >
         {user.name.first.charAt(0)+""+user.name.last.charAt(0)}
         </Avatar> 
         }
         title={user.name.first+" "+user.name.last}
         >
         </CardHeader>
         <CardContent> 
         <Typography variant="span" color="text.secondary">
         Gender: {user.gender}
         </Typography>
         <hr></hr>
         <Typography variant="span" color="text.secondary">
         Age: {user.dob.age}
         </Typography>
         <hr></hr>
         <Typography variant="span" color="text.secondary">
         Email: {user.email}
         </Typography>
         <hr></hr>
         <div>
           <Button variant="outlined" color="error" onClick={()=>delteperson(index)}>
           Delate
           </Button>
          </div>  
        </CardContent>
        </> 
         )}
         </Card>
    </Grid>
  ))}
</Grid>
           
   );}}

export default Screen2;
