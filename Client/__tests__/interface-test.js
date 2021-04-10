
//reportCreate
let data={
 "IncidentID": "1455",
"Location": "xxx",
"Latitude": 35.34242 ,
"Longitude": 34.23432 ,
"Year": "2020",
"Month": "6",
"Day": "9",
"Details": "xxxx",
"Category": "sss"
};

const requstOption={
   
    method: 'POST',
    
    headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',  
    },
    body: JSON.stringify(data),
}
fetch('https://ripple506.herokuapp.com/reportCreate',requstOption).then((response) => response.json())
.then((responseJson) => {      
 console.error(responseJson);  
     }).catch((error) => {     
       console.error(error);    
    });

//getReportByLocation
let data={
"Latitude": 35.34242 ,
"Longitude": 34.23432 ,
"LongitudeDelta": 1,
"LatitudeDelta": 1
};

const requstOption={
    method: 'POST',
    headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',  
    },
    body: JSON.stringify(data),
}
fetch('https://ripple506.herokuapp.com/getReportByLocation',requstOption).then((response) => response.json())
.then((responseJson) => {      
 console.error(responseJson);  
     }).catch((error) => {     
       console.error(error);    
    });


//getReportByDate
let data={
 "BeginYear": "2020",
"BeginMonth": "1",
"BeginDay": "1",
"EndYear": "2021",
"EndMonth": "12",
"EndDay": "3"
};

const requstOption={
   
    method: 'POST',
   
    headers:{
       'Accept': 'application/json',
        
       'Content-Type': 'application/json',  
    },
   
    body: JSON.stringify(data),
}
fetch('https://ripple506.herokuapp.com/getReportByDate',requstOption).then((response) => response.json())
.then((responseJson) => {      
 console.error(responseJson);  
     }).catch((error) => {     
       console.error(error);    
    });



