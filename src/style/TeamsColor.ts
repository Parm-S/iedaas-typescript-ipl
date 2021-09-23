import { createUseStyles } from "react-jss";
interface color {
    [key:string]:{}
}
const data:color = {
    'chennai-super-kings':{
        background: 'linear-gradient( 136deg,#fdb913,#f85c00)',
     },
    'delhi-capitals':{
        background: 'linear-gradient(136deg ,#004c93,#0358a7)',
     },
    'kings-xi-punjab':{
      background: 'linear-gradient(136deg,#aa4545,#740f0b)',
    },
    'kolkata-knight-riders':{
      background: 'linear-gradient(136deg,#70458f,#3d2057)',
    },
    'mumbai-indians':{
      background: 'linear-gradient( 136deg,#005da0,#003a63)',
   
    },
    'rajasthan-royals':{
      background: 'linear-gradient( 136deg,#2d4d9d,#172e5e)',
    },
    'royal-challengers-bangalore':{
      background: 'linear-gradient(136deg,#000,#464646)',
    },
    'sunrisers-hyderabad':{
        background: 'linear-gradient(136deg,#fb643e,#b81c25)',
    },

}
const useTeamColor =createUseStyles(data);

export default useTeamColor;