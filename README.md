This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.
## Intro & Usage
This Ionic app allows users to look for current weather condition in a particular city across the world. The app was fetched API weather provided by Apixu and was tested on Android studio. The app looks like the image in the screenshot folder.

For usage:

To run the app, run following commands:

1. npm install

Web browser:
2. ionic serve

or 

Android studio:
2. ionic cordova run android

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

