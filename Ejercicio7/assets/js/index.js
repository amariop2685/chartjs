console.log("entro a index.js")
const tbody = document.getElementById('tbody');

axios.get('https://dev4humans.com.mx/api/Clases/personajes')
.then(datosApi => {

  const ctx = document.getElementById('myChart');

  const labels = datosApi.data.data.labels;
  const data = datosApi.data.data.data;
  

  //Creación de graficas
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
            label : 'Promedio Ventas Diarias',
            data: data,
            borderWidth: 1,
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
    //Creación de datos de tabla

    // tbody.innerHTML = "";

    // labels.forEach((label, index) => {
    //   console.log(index);
      
    //   const data = datasets[0];
    //   tbody.innerHTML += `
    //   <tr ${data.data[index] >= 100 ? 'class="table-danger"' : ''}>
    //   <th>${index + 1}</th>
    //   <th>${label}</th>
    //   <th>${data.data[index]}</th>
    //   </tr>
    // `;
    //     const tr = document.createElement("tr");
    //     if(data[index]>50){
    //       tr.classList.add("table-danger");
    //     }       
        
    //     // tr.innerHTML += `
    //     //     <td>${index + 1}</td>
    //     //     <td>${label}</td>
    //     //     <td>${data[index]}</td>
    //     //     `;
    //     //     tbody.appendChild(tr);
    // });


    
