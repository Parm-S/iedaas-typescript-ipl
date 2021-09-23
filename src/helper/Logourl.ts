interface map{
    [key:string]:string
}
const LOGO_URL:map ={
    'chennai-super-kings':require('../assets/csk.png').default,
    'delhi-capitals':require('../assets/dc.png').default,
    'kings-xi-punjab':require('../assets/pk.png').default,
    'kolkata-knight-riders':require('../assets/kkr.png').default,
    'mumbai-indians':require('../assets/mi.png').default,
    'rajasthan-royals':require('../assets/rr.png').default,
    'royal-challengers-bangalore':require('../assets/rcb.png').default,
    'sunrisers-hyderabad':require('../assets/srh.png').default
}

Object.freeze(LOGO_URL);
export default LOGO_URL