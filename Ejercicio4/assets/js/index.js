console.log("entro a index.js")

fetch("https://dev4humans.com.mx/api/Clases/ventas_libros")
.then(response => response.json())
.then(datosApi => {
  console.log(datosApi);
  const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: datosApi.data.labels,
        datasets: [{
          label: '# of votes',
          data: datosApi.data.data,
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
    });
});


    
