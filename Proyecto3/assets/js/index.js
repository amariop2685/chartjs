console.log("entro a index.js")
const tbody = document.getElementById('tbody');
const key = "d8a95dffe1c704f3993ed8ce88a7a747";

axios.get('http://data.fixer.io/api/latest?access_key='+key)
.then(datosApi => {
  console.log(datosApi);
  
  const xData = datosApi.data.rates;
  const fecha = datosApi.data.date;
  console.log([xData].length);
  const ctx = document.getElementById('myChart');

  const xValues = ["MXN", "USD", "GBP"];
  const yValues = [xData.MXN, xData.USD, xData.GBP];
  
  //Creación de graficas
    new Chart(ctx, {
      type: 'bar',
      data: {
            labels: xValues,
            datasets: [{
              label: [" 1 " + datosApi.data.base + " equivale al " + fecha],
              data: yValues,
              borderWidth: 2,
              borderColor: '#31AA56',
              backgroundColor: '#317F43',
            
            }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
    }
  }
}
    
    });
  })

.catch(error => {
  console.error("axios error", error);
});