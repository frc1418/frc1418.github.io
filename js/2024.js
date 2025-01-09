document.addEventListener("DOMContentLoaded", function () {
    const animationContainer = document.getElementById('animation-container');
    const canvas = document.getElementById('animation-canvas');
    const title = document.getElementById('title');
    const crescendoImg = document.getElementById('Crescendoimg');
    const bigMantis = document.getElementById('big-Mantis');

    const totalFrames = 72;
    const startTitleFrame = 33;
    const endTitleFrame = 37;
    const startCrescendoFrame = 33;
    const endCrescendoFrame = 40;
    const crescendoDissolveFrame = 66;
    const endDissolveFrame = 72;

    let lastScrollY = window.scrollY;
    let imagesLoaded = 0;

    // Create an array to preload images
    const preloadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
        const paddedFrame = String(i).padStart(4, '0');
        const img = new Image();
        img.src = `/images/Note/${paddedFrame}.png`;
        preloadedImages.push(img);

        // Increment counter when each image is loaded
        img.onload = function () {
            imagesLoaded++;
            if (imagesLoaded === totalFrames) {
                // Show everything once all images are loaded
                document.body.classList.remove('loading');
                drawFrame(1); // Draw the initial frame
            }
        };
    }

    // Hide everything until all images are loaded
    document.body.classList.add('loading');

    // Function to load and draw the image on the canvas
    function drawFrame(frame) {
        const paddedFrame = String(frame).padStart(4, '0');
        const img = preloadedImages[frame - 1];

        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // Animate title between frames 33 and 37
    function animateTitle(frame) {
        if (frame >= startTitleFrame && frame <= endTitleFrame) {
            const progress = (frame - startTitleFrame) / (endTitleFrame - startTitleFrame);
            const scale = 1 + progress * 0.02;
            const opacity = 1 - progress;

            title.style.opacity = opacity;
            title.style.transform = `scale(${scale})`;

        } else if (frame < startTitleFrame) {
            title.style.opacity = '1';
        } else if (frame > endTitleFrame) {
            title.style.opacity = '0';
        }
    }

    // Animate crescendo image between frames 33 and 40
    function animateCrescendoImage(frame) {
        if (frame >= 41 && frame <= 65) {
            crescendoImg.style.transform = `scale(1.09)`;
        }
        if (frame >= startCrescendoFrame && frame <= endCrescendoFrame) {
            const progress = (frame - startCrescendoFrame) / (endCrescendoFrame - startCrescendoFrame);
            const scale = 1 + progress * 0.09;
            const opacity = progress;

            crescendoImg.style.transform = `scale(${scale})`;
            crescendoImg.style.opacity = opacity;
            console.log(scale + "scale");
        } else if (frame < startCrescendoFrame) {
            crescendoImg.style.opacity = '0';
        } else if (frame > endCrescendoFrame) {
            crescendoImg.style.opacity = '1';
        }
    }

    // Crescendo dissolve animation
    function dissolveCrescendoImage(frame) {
        const progress = (frame - crescendoDissolveFrame) / (endDissolveFrame - crescendoDissolveFrame);

        if (frame >= crescendoDissolveFrame && frame <= endDissolveFrame) {
            const scale = 1.5 + progress * 0.5;
            const opacity = 1 - progress;

            crescendoImg.style.transform = `scale(${scale})`;
            crescendoImg.style.opacity = opacity;
        }
    }

    // Animate the big header
    function animateBigMantis(scrollPercentage) {
        if (scrollPercentage >= 5.2 && scrollPercentage <= 6.7) {
            const progress = (scrollPercentage - 5.2);
            const scale = 0.8 + progress * 0.25;
            const opacity = progress;

            bigMantis.style.transform = `scale(${scale})`;
            bigMantis.style.opacity = opacity;

        } else if (scrollPercentage > 12) {
            bigMantis.style.opacity = '1';
            bigMantis.style.transform = 'scale(1.298)';
        }
    }

    // Handle the canvas static/relative position logic
    function handleCanvasPosition(scrollPercentage) {
        if (scrollPercentage >= 5) {
            animationContainer.style.left = '1000vw';
        } else {
            animationContainer.style.left = '';
        }
    }

    const tempScrollPosition = window.scrollY;
    if (tempScrollPosition == 0) {
        drawFrame(1);
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;

        const currentFrame = Math.ceil(scrollPercentage / 5 * totalFrames);
        const validFrame = Math.max(1, Math.min(currentFrame, totalFrames));

        drawFrame(validFrame);
        animateTitle(validFrame);
        animateCrescendoImage(validFrame);
        dissolveCrescendoImage(validFrame);
        animateBigMantis(scrollPercentage);
        handleCanvasPosition(scrollPercentage);
        console.log(scrollPercentage);
        console.log("frame:" + validFrame);
    });
});
