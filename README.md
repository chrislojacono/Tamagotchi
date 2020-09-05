# Tamagotchi

This was an individual assignment to build a single page tamagotchi device. The user is supposed to be able to play, feed, fight and let the tamagotchi sleep and the Health scores for each should adjust accordingly

## The Motivation
This was assigned to us to showcase our skills with modularizing our code and also modularizing our styles with SASS. It was a fun challenge using all the things that SASS is capable of while also using logic to operate all the buttons with Javascript accordingly. We began using Webpacks in this project which includes a strict linter.

## BUild Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/1b78317d-1ab5-4a85-ab38-c77863e86f68/deploy-status)](https://app.netlify.com/sites/tamagotchicl/deploys)

## Code Style
ESlintRC

## Screenshots
![Screen Shot 2020-09-03 at 9 14 55 PM](https://user-images.githubusercontent.com/66916708/92310180-70246e00-ef71-11ea-8c4c-f925f0588529.png)
## Tech/Framework
Javascript ES6 and Jquery

## Features
The user is able to feed, fight, play and put the tamagotchi to sleep. The overall health is recorded and displayed. Random numbers are chosen for each button click sending the health up or down accordingly.

## Code Example
``` const playButtons = () => {
  $('#superFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h5>Your fun level is at ${superFun()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
  $('#slightlyFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h5>Your fun level is at ${slightlyFun()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
};
```

## Creator 
Chris LoJacono(https://github.com/chrislojacono)

## Website Deploy
https://tamagotchicl.netlify.app/
