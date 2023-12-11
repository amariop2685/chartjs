console.log("entro a index.js")
const tbody = document.getElementById('tbody');
const headers = new Headers();
headers.append('Content-Type', "application/json")
headers.append('Authorization', "9faa4f2eed9b6c5f9a748d54ed32cc90")
fetch("https://dev4humans.com.mx/api/Clases/ventas_variadas",


{
  method:'GET',
  headers: headers
})


.then(response => response.json())
.then(datosApi => {
  console.log(datosApi);
  const ctx = document.getElementById('myChart');

  const labels = datosApi.data.labels;
  const datasets = datosApi.data.datasets;
  

  //Creación de graficas
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    //Creación de datos de tabla

    tbody.innerHTML = "";

    labels.forEach((label, index) => {
      console.log(index);
      
      const data = datasets[0];
      tbody.innerHTML += `
      <tr ${data.data[index] >= 100 ? 'class="table-danger"' : ''}>
      <th>${index + 1}</th>
      <th>${label}</th>
      <th>${data.data[index]}</th>
      </tr>
    `;
        const tr = document.createElement("tr");
        if(data[index]>50){
          tr.classList.add("table-danger");
        }
       
        
        tr.innerHTML += `
            <td>${index + 1}</td>
            <td>${label}</td>
            <td>${data[index]}</td>
            `;
            tbody.appendChild(tr);
    });

  });

    
