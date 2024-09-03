const url = "https://randomuser.me/api/";
const boton = document.getElementById('boton');
const contenido = document.querySelector('#contenido');


// function mostrarData() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//       console.log(data, "data");

//       contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
//                               <p>${data.results[0].name.first} </p>`;
//     })
// }

const mostrarData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data, "data <====");

  contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                                <p> ${data.results[0].phone}</p>
                                <p> ${data.results[0].email}</p>
                                <p> ${data.results[0].gender}</p>
                                <p> ${data.results[0].name.first.lastname + data.results[0].name.last} </p>` ;
};

mostrarData();

boton.addEventListener("click", mostrarData);
