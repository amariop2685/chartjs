console.log("entro a index.js")
const tbody = document.getElementById('tbody');
const key = "d8a95dffe1c704f3993ed8ce88a7a747";

axios.get('http://data.fixer.io/api/latest?access_key='+key)
.then(datosApi => {
  console.log(datosApi);


  const ctx = document.getElementById('myChart');

  const labels = datosApi.data.base;
  const data = datosApi.data.rates;
  
  //Creación de graficas
    new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'EUR',
              data: data,
              borderWidth: 1
        
      }]
    },
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

.catch(error => {
  console.error("axios error", error);
})
    })
  });