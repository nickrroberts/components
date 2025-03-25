# Components
This is a list of UI components I've built from scratch. Mostly to learn and also to use in my own projects. If you'd like to try them out, they're available on npm! Setup instructions below.

## Image carousel
```bash
npm install nr-components-carousel`
```

* You'll need to create a container div and use the `id="container` attribute
* After this, simply drop images (`<img src="" alt="">`) into your container and the carousel should pick them up and render them
* If you need to override the default styles, these are the presets:

```
#carousel {
    height: 300px;
    width: 100%;
    overflow: hidden;
    position: relative;
}

#carousel img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
    
}

#carousel img.active {
    opacity: 1;
}

#carousel .active {
    display: block;
}

.chevron {
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    background-blend-mode: multiply;
    top: 50%;
    cursor: pointer;
    display: none;
}

.chevron:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.left-chevron {
    background-image: url('./icons/left-chevron.svg');
    left: 0;
}

.right-chevron {
    background-image: url('./icons/right-chevron.svg');
    right: 0;
}

.navigators {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

#carousel:hover .chevron {
    display: block;
}

#carousel:hover .navigators {
    display: flex;
}

.img-dot {
    background-image: url('./icons/dot.svg');
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;  
    height: 24px;
    background-blend-mode: multiply;
    
}

.img-dot:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.active-navigator {
    background-color: rgba(0, 0, 0, 0.5);
}
```

