# CAPTCHA Solver

A simple web application that loads a CAPTCHA image from a specified URL and provides a mock solving function to simulate CAPTCHA solving.

## Features
- Enter a URL to load an image (defaults to a sample image)
- Loads and displays the CAPTCHA image
- Click "Solve CAPTCHA" to get a simulated solution

## Usage
1. Open `index.html` in a web browser.
2. Enter the CAPTCHA image URL in the input box or leave it as default.
3. Click "Load Image" to fetch and display the image.
4. Click "Solve CAPTCHA" to simulate solving the CAPTCHA.

## Notes
- The CAPTCHA solver is mocked and always returns the same value.
- To implement real CAPTCHA solving, replace `mockCaptchaSolver` with actual OCR integration.

## License

This project is licensed under the MIT License.

## How to Run
- Simply open `index.html` in any modern web browser.
- No server setup required.

## Sample Image
- The default image is embedded as a data URI within the HTML to ensure immediate loading.

## Dependencies
- None.

## Contribution
- Contributions are welcome. Please fork the repository and submit a pull request.

---

*This project is a demonstration of creating a simple web-based CAPTCHA solver interface.*
