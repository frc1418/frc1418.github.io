On the [team page](http://1418.team/team) of our website, members of the team have flat pixel portraits of themselves above their bios. Making these is easier than it may look, but the process may be difficult to see at first, so below is a guide.

GIMP, a free & open source photo editor, is used in this guide. You can do it in any capable editor, but GIMP is recommended. You can download it [here](http://www.gimp.org/downloads/).

1. Find a good photo of the member. If you can, just ask the member for a photo of themselves. It's best if this photo has the member in primary view. Just use your best judgement to find the best photo you can. Good places to find photos are the [team Facebook page](https://www.facebook.com/robotics1418/) and individual member pages on various social media.
2. Crop the photo down to a square with only the person's head and shoulders in the frame. Leave a reasonable amount of margin above the person's head.
3. Select the lasso select tool. Turn off antialiasing in tool options and select the person's head and shoulders. Cut this area with `Cmd+X` (or `CTRL+X` on Windows) and delete the layer that still contains the background. Then, paste the member's head and shoulders which you cut/copied earlier in this step back onto the image and reposition so that the body touches the bottom of the image frame (and side, if necessary).
4. If necessary, reposition the pasted area so that it touches the bottom of the frame appropriately.
5. Scale the image down to 64x64 pixels, with _Interpolation: None_. Using interpolation will make your task harder later on since the image will be blurry and will need to be cleaned much more.  
6. Using the pencil tool at size 1 (or 3 for quicker filling), draw over the member's shirt or other clothing using the following colors: `#cf2e2e` for light portions, `#b52828` for middle brightness, and `#942121` for the most shadowed areas. When you're done, it should look like a red, somewhat flattened version of whatever they were wearing before.
7. Perform the same process as above on the person's hair and face (draw over all facial features), but instead of the above red colors, use colors that fit their hair & skin colors the closest. Use a maximum of two colors for their hair and two for their skin.
8. Remove semitransparent pixels around the edges of the person's body. There shouldn't be many if you did the earlier steps correctly, but there's usually a couple.
9. If you plan to use this photo as a profile image or anywhere else besides the team website, scale the image to 512x512 (any large base 2 size works, but 512x is generally the best) with _Interpolation: None_. If the photo is just going to be on the team page, where the images have special CSS properties that prevent them from blurring when scaling up, you can skip this step.
10. Export the file as a PNG image. On our website, we use the name format first-last.png.

