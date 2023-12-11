console.log("entro a index.js")
const tbody = document.getElementById('tbody');
const key = "d8a95dffe1c704f3993ed8ce88a7a747";

axios.get('http://data.fixer.io/api/latest?access_key='+key)
.then(datosApi => {
  console.log(datosApi);
  

  const ctx = document.getElementById('myChart');

  const xData = datosApi.data.rates;
  const fecha = datosApi.data.date;
  

  const xValues = ["MXN", "USD", "GBP", "CAD"];
  const yValues = [xData.MXN, xData.USD, xData.GBP, xData.CAD];
  


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
              backgroundColor: '#87DE34',
            
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
    xValues.forEach((label, index) => {
      console.log(index);
      const tr = document.createElement("tr");
      if(yValues[index]>50){
        tr.classList.add("table-danger");
        tr.classList.add("fw-bold");
      }      
      tr.innerHTML += `
          <td>${index + 1}</td>
          <td>${label}</td>
          <td>${yValues[index]}</td>
      `;
      tbody.appendChild(tr);
    });

  })
  .catch(error => {
    console.error("axios error", error);
  });

    // //Creación de datos de tabla

    // tbody.innerHTML = "";

    // xValues.forEach((label, index) => {
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