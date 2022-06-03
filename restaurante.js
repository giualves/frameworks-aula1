const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2l1bGlhbm5vIiwidXVpZCI6IjBhMjM4YjZjLWM1MDQtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsInVzZXJfbmFtZSI6ImZkYy5naXVAZ21haWwuY29tIiwianRpIjoiNTU0ZTE2YzUtZDQ3NC00Y2I5LTg2YzUtY2IzMGQyOGVkODE5IiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.EFIQ7wYmW0efGb4_mymH5ehK-xUz_0bmH6JVV6SYF1U";
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
  }

function adicionarRestaurante() {
    console.log('adicionando restaurante');

    const nome = document.querySelector("#nome").value;
    const taxaFrete = document.querySelector("#taxa").value; // 123

    if (nome === '') {
        alert('Informe os dados do restaurante');
        
        throw "erro";  
        
    }
    
    const body = `{"nome":"${nome}", "taxaFrete":${taxaFrete}}`;
    console.log(body);

    const uuid = localStorage.getItem("uuid");
    if ((uuid === "") || (uuid === "undefined")) {
        fetch("http://127.0.0.1:8080/restaurantes", {
            method: "POST",
            headers: {
                "Authorization": auth,
                "Content-type": "application/json",    
            },
            body: body
        }).then(res => res.json())
          .then(res => {
            console.log(res);  
            alert("Registro salvo com sucesso");      
            window.location.href = "/restaurante.html"
          });        
    } else {
        fetch("http://127.0.0.1:8080/restaurantes/"+uuid, {
            method: "PUT",
            headers: {
                "Authorization": auth,
                "Content-type": "application/json",    
            },
            body: body
        }).then(res => res.json())
        .then(res =>
            {
                console.log(res);  
                alert("Registro salvo com sucesso");      
                window.location.href = "/restaurante.html"                
            })

    }



}

function deletarRestaurante(uuid) { 

    fetch("http://127.0.0.1:8080/restaurantes/"+uuid, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2l1bGlhbm5vIiwidXVpZCI6IjBhMjM4YjZjLWM1MDQtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsInVzZXJfbmFtZSI6ImZkYy5naXVAZ21haWwuY29tIiwianRpIjoiNTU0ZTE2YzUtZDQ3NC00Y2I5LTg2YzUtY2IzMGQyOGVkODE5IiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.EFIQ7wYmW0efGb4_mymH5ehK-xUz_0bmH6JVV6SYF1U",
        }
    }).then(res => res )
    .then(res => {
        console.log(res)
        document.location.reload();
               
    });
        
}

function editarRestaurante(id){
    console.log('editando'+ id)
    localStorage.setItem("uuid", id);
    window.location.href = "/restauranteform.html"

}
  
window.onload = function() {
    console.log("Listar restaurantesss");

    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if (!accessToken) {
        window.location.href = "/dashboard.html";
    }


    const uuid = localStorage.getItem("uuid");
 
    if (window.location.pathname === '/restaurante.html') {
        const ul = document.getElementById('restaurantes');
    
        fetch("http://127.0.0.1:8080/restaurantes", {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2l1bGlhbm5vIiwidXVpZCI6IjBhMjM4YjZjLWM1MDQtMTFlYy05ZDY0LTAyNDJhYzEyMDAwMiIsInVzZXJfbmFtZSI6ImZkYy5naXVAZ21haWwuY29tIiwianRpIjoiNTU0ZTE2YzUtZDQ3NC00Y2I5LTg2YzUtY2IzMGQyOGVkODE5IiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.EFIQ7wYmW0efGb4_mymH5ehK-xUz_0bmH6JVV6SYF1U",
               
            },
        }).then(res => res.json())
          .then(function(data) {
              console.log(data);
              let restaurantes = data;
              console.log(restaurantes);
              return restaurantes.map(function(restaurante) {
                  let div = createNode('div');              
                  div.innerHTML =
                  `
                  <div class="box">
                    <div class="flex-box">    
                        <div class="restaurante">                 
                            ${restaurante.nome}
                        </div>    
                        <button class="button" onclick="editarRestaurante('${restaurante.uuid}')" type="button">Editar</button>
                        <button class="button" onclick="deletarRestaurante('${restaurante.uuid}')" type="button">Deletar</button>
                    </div>                    
                  </div>                
                  `
                  append(ul, div);    
              })
          }).catch(function (error) {
              console.log(error)
          });
    


    }

    


      
 


}