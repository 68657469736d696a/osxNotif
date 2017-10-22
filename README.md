# osxNotif
A plugin for cordova to send local notifications using the notification center on mac osx<br><br>
*Supports only the osx platform*

## Installation
Install the latest head version:

    $ cordova plugin add https://github.com/sdverkoelen/osxNotif.git


## Usage
The plugin creates an object `cordova.plugins.osxNotif` and is accessible after *deviceready* has been fired. This object contains a single function `show(title, subtitle)` as shown in the following example

```js
document.addEventListener('deviceready', function () {
  cordova.plugins.osxNotif.show("Your title", "Your subtitle");
}, false);
```

## Quirks
Your application icon will be cached in the notification center. Therefore an update of your icon might not be visible inmediatly. Incrementing your build number will trigger the notification center to update the icon.
