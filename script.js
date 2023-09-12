
const bton = document.getElementById("enviar");

/*fetch('https://jsonplaceholder.typicode.com/users.')
  .then(response => response.json())
  .then(data => console.log(data));
*/
bton.addEventListener("click", function(e){
  e.preventDefault()
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const date = document.getElementById("date").value;

    const datosJSON = {
        nombre: name,
        apellido: lastname ,
        fechadeNacimiento: date,
      };

      fetch('https://jsonplaceholder.typicode.com/users', {
        method:"post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosJSON),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });