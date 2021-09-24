# colour-generator
A module that outputs equally distributed colours in hexadecimal format.

![Colour Generator Logo](miscellaneous/colour-generator-logo.png)

## About
The idea for this module roots back to a while ago when I had to implement a way to generate roles of different equally distributed colours on Discord. I thought that it might be of use to some people.
- Question: How to generate colours that are equally distributed over the colour spectrum? It turns out that this idea is not as trivial as it seems. Indeed, some colour formats are simpler to deal with than others. This module uses a hsv format as it allows us to use radians and trigonometry to find equally spaced points on a circle. We then convert it back to rgb and finally to hexadecimal format.

Special thanks to [Finn Rayment](https://github.com/rayment) for the help!
