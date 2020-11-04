import {makeStyles} from "@material-ui/core/styles";
import hrJediLogo from "../../images/EV.jpg";

const profileStyles = (avatar) => ({
  imageInput :{
    width: 250,
  }
});

export const useProfileStyles = makeStyles(profileStyles, {name: "Profile"});
