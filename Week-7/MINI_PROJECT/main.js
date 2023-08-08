// OpenAI API credentials
// const API_KEY = "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";
const sendBtn = document.querySelector("#generate-btn");
const inputElement = document.querySelector("#user-input");
const imageSection = document.querySelector("#generate-image")

// Cache object for storing API response
// const cache = {};

const getImages = async () => {
  // Check if the response is already cached
  // Need to right the code of cahce

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      'Content-Type': "application/json",
    },
    body: JSON.stringify({
      "prompt": inputElement.value,
      "n": 2,
      "size": "512x512"
    })
  };

  try {
    // const response = await fetch('https://api.openai.com/v1/images/generations', options);
    const imageData = await response.json();
    console.log('Received data:', imageData); // Display the received data 
    imageData?.data.forEach(imageObject =>{
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');

      const imageElement = document.createElement('img');
      imageElement.setAttribute('src', imageObject.url);

      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    })
  } catch (error) {
    console.log('Error:', error);
  }
};

sendBtn.addEventListener('click', getImages);

