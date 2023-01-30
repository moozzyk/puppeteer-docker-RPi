# puppeteer-docker-RPi

Running puppeteer in a Docker container on Raspberry Pi

Environment:
- Hardware: Raspberry Pi 2 Model B Rev 1.1
- OS: Raspbian GNU/Linux 11 (bullseye)

## Test that the app works without Docker
- clone the repo: `git clone https://github.com/moozzyk/puppeteer-docker-RPi`
- install Chromium: `sudo apt-get update && sudo apt-get install chromium -y`
- install dependencies: `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install`
- run application: `node index.js`: 
  
  <img width="375" alt="image" src="https://user-images.githubusercontent.com/1438884/215398311-2a43a9ea-b269-4fe0-82d6-e9102b519522.png">

## Test that the app works inside a Docker container
- Build the image: `docker build . -t puppeteer-docker`
- Run the application inside a Docker container: `docker run puppeteer-docker`
  
  <img width="469" alt="image" src="https://user-images.githubusercontent.com/1438884/215402947-0ac01558-cfa8-4f31-961b-9021f185945d.png">
