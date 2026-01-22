# pijsk
Raspberry pi javascript site that runs a slideshow for use with a browser in kiosk mode. 

## Install
Run any browser (i.e. chromium) in kiosk mode using the local html file as an argument.
e.g. ```chromium --kiosk /home/user/foo/bar/index.hml```

## Dependencies
You'll need java to run the dynamic slide updater.

## How to load photos
Any photos to appear on the slideshow go into resources/images/
Once the photos have been put into this directory, from the root of the cloned repo, run:
```java BuildSlides```
this will update the website to have the list of image filenames on the page. You'd then need to reload your kiosk browser session to update the list.
