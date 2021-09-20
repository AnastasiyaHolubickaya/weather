export  const converterTemperature = (temp:number, kelvin=false) => {
    let ABSOLUT_ZERO =  -273.15;
    let n = 1.8;
    let FREEZING_POINT_OF_WATER = 32;
    return  (kelvin) ? Math.round(temp - (-ABSOLUT_ZERO)) : Math.round((temp*n)+FREEZING_POINT_OF_WATER);
};