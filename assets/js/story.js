/**
 * Me Conte uma História - Story Engine
 * Manages the slide progression, text rendering, speaker class styling, and navigation.
 */

let currentSceneIndex = 0;
let storyScenes = [];

/**
 * Cache of already-created Image objects, keyed by image filename.
 * Reuses preloaded images and avoids redundant downloads.
 * @type {Map<string, HTMLImageElement>}
 */
const imageCache = new Map();

/**
 * Preloads the next `count` images ahead of `startIndex` into the image cache.
 * Skips images that are already cached or missing a filename.
 * @param {number} startIndex - The scene index to start looking ahead from.
 * @param {number} [count=2] - How many upcoming scenes to preload.
 */
function preloadAheadFrom(startIndex, count = 2) {
    for (let offset = 1; offset <= count; offset++) {
        const targetIndex = startIndex + offset;
        if (targetIndex >= storyScenes.length) break;

        const filename = storyScenes[targetIndex].image;
        if (!filename || imageCache.has(filename)) continue;

        const img = new Image();
        img.src = filename;
        imageCache.set(filename, img);
    }
}

/**
 * Initializes the story with scenes data.
 * @param {Array<{text: string, image: string, style?: string}>} scenesList
 */
function initStory(scenesList) {
    storyScenes = scenesList;
    currentSceneIndex = 0;

    // Bind event listeners
    const nextDialogButton = document.getElementById('next-dialog-button');
    if (nextDialogButton) {
        nextDialogButton.addEventListener('click', nextScene);
    }

    // Allow spacebar or enter key to advance dialogues
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            // Prevent scrolling behavior of spacebar
            event.preventDefault();
            nextScene();
        }
    });

    // Render first scene and immediately preload the next ones
    renderScene();
}

/**
 * Renders the current scene based on currentSceneIndex.
 * Image and text update in the same call; the image is typically
 * already cached from the previous scene's lookahead preload.
 */
function renderScene() {
    if (currentSceneIndex >= storyScenes.length) {
        return;
    }

    const scene = storyScenes[currentSceneIndex];

    // Update scene image — if it was preloaded, the browser serves it from
    // memory cache immediately, keeping it in sync with the text update below.
    const sceneImageElement = document.getElementById('scene-image');
    if (sceneImageElement) {
        if (scene.image) {
            sceneImageElement.src = scene.image;
            sceneImageElement.style.display = 'block';
        } else {
            sceneImageElement.src = '';
            sceneImageElement.style.display = 'none';
        }
    }

    // Update text and style class
    const dialogTextElement = document.getElementById('dialog-text');
    if (dialogTextElement) {
        dialogTextElement.textContent = scene.text;

        // Reset and apply style class
        dialogTextElement.className = 'dialog-text';
        const styleClass = scene.style || 'default';
        dialogTextElement.classList.add(styleClass);
    }

    // Preload the next 2 images in the background so they are ready
    // in the browser cache before the user clicks again.
    preloadAheadFrom(currentSceneIndex);
}

/**
 * Advances to the next scene or redirects back to the main map if finished.
 */
function nextScene() {
    currentSceneIndex++;

    if (currentSceneIndex < storyScenes.length) {
        renderScene();
    } else {
        // End of story, go back to main map
        window.location.href = '../index.html';
    }
}

