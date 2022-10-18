

function sendInfo() {

      let new_phone_data = {
    company: document.getElementById('input_company').value,
    model: document.getElementById('input_model').value,
    price: document.getElementById('input_price').value,
    color: document.getElementById('input_color').value,
    description: document.getElementById('input_description').value,
    memory: document.getElementById('input_memory').value
            };


    async function post_info() {
      try {
        let response = await fetch('http://127.0.0.1:8000/api/v1/products/phones/', {
            method: 'POST',
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
            body: JSON.stringify(new_phone_data)
          })

        let data1 = await response.json();
        return data1;
      }
      catch(error)
      {
        alert(error);
      }
    }


  post_info().then(data1 =>
      {
          document.getElementById('response_from_backend').innerHTML = ('<p> UUID: '
            + data1.uuid + '<br> COMPANY: ' + data1.company +
            '<br>MODEL: '+data1.model+'<br>PRICE: '+data1.price+'</p>');
      })
}

//  ===== ===== ===== ===== ===== ===== ===== ===== =====

function getInfo() {
    async function getData() {
        try {
          let response = await fetch('http://127.0.0.1:8000/api/v1/products/phones/') 
          let data = await response.json();
          return data;
        }
        catch(error){
          alert(error);
        }
      }


  getData().then(data =>
  { var id = prompt("Insert id:");
    for (var i=0; i<data.length;i++){
      for (var [key, value] of Object.entries(data[i]))
      {
        if (key == "uuid" && value == id){
          document.getElementById('id').innerHTML = ('<h2> id = ' + data[i]["uuid"] + '</h2>');
          document.getElementById('company').innerHTML = ('<h2>' + 'company = '+ data[i]["company"]+ '</h2>');
          document.getElementById('model').innerHTML = ('<h2>' + 'model = '+ data[i]["model"]+ '</h2>');
          document.getElementById('price').innerHTML = ('<h2>' + 'price = '+ data[i]['price']+ '</h2>');
          document.getElementById('color').innerHTML = ('<h2>' + 'color = '+ data[i]['color']+ '</h2>');
          document.getElementById('description').innerHTML = ('<h2>' + 'description = '+ data[i]['description']+ '</h2>');
          document.getElementById('memory').innerHTML = ('<h2>' + 'memory = '+ data[i]['memory']+ '</h2>');
      }
      }}

  })
}