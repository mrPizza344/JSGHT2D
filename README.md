# JSGHT2D
Javascript Game Helper ToolKit For 2D Games- a set of js files to use in your webgame
There are 3 components currently:
1. The KeyBoard Component- Input Handler
2. The Collision Component- Basic Rect and Collision functions
3. The Audio Component- Basic audio loading and playing

These components started out as helper files for a game I made called Digital Duel(https://Digital-Duel--jacobrogers.repl.co), and they are essentally unchanged exept for the fact that audio.js has a looping variable in the constructor.
Basic CollisBox Objects
Sample Rect:
var rect={x:28,y:50,width:10,height:10};
I will explain the variables in this object.
x- The x coord. of the top left corner
y- like x but with the y coord.
width- the width(side-to-side length) of the rectangle
height- the height(up-and-down length) of the rectangle

Sample Circle:
var circle={x:43,y:28,radius:65};
I will explain the variables in this object.
x- The x coord. of the center
y- the y coord. of the center
radius- the distance(in px.,of course) from the center of the circle to the edge

The collision functions were taken from MDN
The original audio object was from w3schools
The keyboard functions were taken from a blog post.

Future Updates
--------------

- Add graphics component
- Add GameImage object
- Improve current code
