export class UpdateAPI{
  

  getUpdate(){
  let api='https://api.rootnet.in/covid19-in/stats/';
  var updateObj={
    total:1,
    confirmedCasesIndian:1,
    confirmedCasesForeign:1,
    discharged:1,
    deaths:1,

  };
  fetch(api)
        .then(function(response){
            let data=response.json();
            return data;
        }).then(function(data){
            updateObj.total=data.data.summary.total;
            updateObj.confirmedCasesIndian=data.data.summary.confirmedCasesIndian;
            updateObj.confirmedCasesForeign=data.data.summary.confirmedCasesForeign;
            updateObj.discharged=data.data.summary.discharged;
            updateObj.deaths=data.data.summary.deaths;
        })
        
   return updateObj; 

  }
}