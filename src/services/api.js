import axios from 'axios';

export default()=>{
    return axios.create({
        baseURL:'https://geoportal.stadt-koeln.de/arcgis/rest/services/Fahrradverkehr_Ma%C3%9Fnahmen/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson'
       , 
       withCredentials: false,
       headers:{
           Accept:"application/json",
           "Content-Type":"application/json",
       }

    });
}