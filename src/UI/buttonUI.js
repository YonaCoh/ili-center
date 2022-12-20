import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ButtonUI = (props) => {
  const { name, handler } = props;

  return (
    <Card sx={{ maxWidth: 345 }} id="A" onClick={handler}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ButtonUI;

//   <Card sx={{ maxWidth: 345 }} id="A" onClick={chooseWorkout}>
//             <CardActionArea>
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   A
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//           <Card sx={{ maxWidth: 345 }} id="B" onClick={chooseWorkout}>
//             <CardActionArea>
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   B
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
