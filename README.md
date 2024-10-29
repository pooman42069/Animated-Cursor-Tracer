# Info

This is a simple project i made in school to draw an animated cursor tracer for your website:

Made by Lukey.

For an example visit:
https://www.dropclub.lol

## Installation

Link the script any-where in your html project

```html
<script src="script.js"></script>
```

## Config

To edit the animation of the tracer follow the comments in the stylesheet

```css
/* Style of the tracer behind the cursor */

.tracer {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.089);
    position: absolute;
    border-radius: 50%;
    pointer-events: none;

    /* Speed of the animation; */

    animation: crainbowGlow 0.7s infinite alternate;

    /* You may need to change the delay of when the tracer gets removed */

    transition: opacity 0.5s ease;
}

/* You can change the color's and other features of the cursor*/

@keyframes crainbowGlow {
    0% { width: 10px; height: 10px; background: rgb(0, 179, 255); }

    /* To add more color's and aspect's to the animation, create more keyframe's like this; */

    /*50% {"ADD HERE"} */
    100% { width: 0px; height: 0px; background: rgb(204, 0, 255); }
}
```

To also change the time it takes to remove the tracer edit line 14 in the script.js to your desired delay

```javascript
    setTimeout(() => {
        tracer.remove();
    }, 500);
    });
```

## Conclusion

For any project's using my script feel free to showcase your website <3

Made by Lukey.

