const imgElement = document.getElementById('captcha-img');
const loadBtn = document.getElementById('load-btn');
const solveBtn = document.getElementById('solve-btn');
const resultDiv = document.getElementById('result');
const urlInput = document.getElementById('url-input');

// Function to convert image URL to base64 data URI
function fetchImageAsDataURI(url) {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    })
    .catch(() => null);
}

// Load image when clicking 'Load Image'
loadBtn.addEventListener('click', () => {
  const url = urlInput.value;
  fetchImageAsDataURI(url).then(dataURI => {
    if (dataURI) {
      imgElement.src = dataURI;
    } else {
      alert('Failed to load image from URL');
    }
  });
});

// On page load, set default image
window.addEventListener('DOMContentLoaded', () => {
  // Default to attached sample.png data URI
  // Note: The sample image data URI is truncated in the index.html for brevity
});

// Mock CAPTCHA solving function
function mockCaptchaSolver(imageDataURL) {
  // In a real scenario, send imageDataURL to a server or OCR API
  // Here, we just simulate with a fixed string
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ABC123');
    }, 1000); // simulate delay
  });
}

// Handle solve button
solveBtn.addEventListener('click', () => {
  const imageData = imgElement.src;
  resultDiv.textContent = 'Solving...';
  mockCaptchaSolver(imageData).then(solution => {
    resultDiv.textContent = 'CAPTCHA Solution: ' + solution;
  });
});