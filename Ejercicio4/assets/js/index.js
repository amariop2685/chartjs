console.log("entro a index.js")
const tbody = document.getElementById('tbody');
fetch("https://dev4humans.com.mx/api/Clases/ventas_libros")
.then(response => response.json())
.then(datosApi => {
  console.log(datosApi);
  const ctx = document.getElementById('myChart');

  const labels = datosApi.data.labels;
  const data = datosApi.data.data;
  

  //Creación de graficas
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de ventas diarias',
          data: data,
          borderWidth: 1,
          borderColor:[
            "#3677D4",
            "#5FD436",
            "#D436C5",
            "#D43636",
            "#D1D436"
            
          ],

          backgroundColor:[
            "#3677D4",
            "#5FD436",
            "#D436C5",
            "#D43636",
            "#D1D436"
          ]
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
    //Creación de datos de tabla

    tbody.innerHTML = "";

    labels.forEach((label, index) => {
      console.log(index);
      
      
      tbody.innerHTML += `
      <tr ${data[index] > 50 ? 'class="table-danger fw-bold"' : ''}>
      <th>${index + 1}</th>
      <th>${label}</th>
      <th>${data[index]}</th>
      </tr>
    `;
        // const tr = document.createElement("tr");
        // if(data[index]>50){
        //   tr.classList.add("table-danger");
        // }
       
        
        // tr.innerHTML += `
        //     <td>${index + 1}</td>
        //     <td>${label}</td>
        //     <td>${data[index]}</td>
        //     `;
        //     tbody.appendChild(tr);
    });

  });

    
