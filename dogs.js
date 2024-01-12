

const dogsUrl = "https://dog.ceo/api/breeds/image/random/10";



  function renderImages(message) {
    const containerDiv = document.getElementById('logic-container-dogs');

    // Clear previous content
    containerDiv.innerHTML = '';

   // Check if the images property is an array
    if (Array.isArray(message)) {
      // Iterate through the images and create img elements
      message.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo;
        imgElement.alt = "";

        // Append the img element to the container
        containerDiv.appendChild(imgElement);
      });
    } else {
      console.error('Images property is not in the expected array format.');
    }
  }

 
  


async function showImages() {

  try {
    const response = await fetch(dogsUrl);


    const data = await response.json();

    console.log(data);

    renderImages(data.message);


  } catch (error) {

    console.error("los perros no estan;", error.message);
  }


};


document.addEventListener('DOMContentLoaded', function () {

  const button = document.getElementById("textDogs");

  button.addEventListener('click',showImages);



});
