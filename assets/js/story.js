/**
 * Tell me a History - Story Engine
 * Manages the slide progression, text rendering, speaker class styling, and navigation.
 */

let currentSceneIndex = 0;
let storyScenes = [];

/**
 * Initializes the story with scenes data.
 * @param {Array<{text: string, image: string, speaker: string}>} scenes 
 */
function initStory(scenes) {
    storyScenes = scenes;
    currentSceneIndex = 0;
    
    // Bind event listeners
    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
        btnNext.addEventListener('click', nextScene);
    }
    
    // Allow spacebar or enter key to advance dialogues
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            // Prevent scrolling behavior of spacebar
            event.preventDefault();
            nextScene();
        }
    });

    // Render first scene
    renderScene();
}

/**
 * Renders the current scene based on currentSceneIndex.
 */
function renderScene() {
    if (currentSceneIndex >= storyScenes.length) {
        return;
    }
    
    const scene = storyScenes[currentSceneIndex];
    
    // Update background scene image
    const sceneImg = document.getElementById('scene-img');
    if (sceneImg) {
        if (scene.image) {
            sceneImg.src = scene.image;
            sceneImg.style.display = 'block';
        } else {
            sceneImg.src = '';
            sceneImg.style.display = 'none';
        }
    }
    
    // Update text and speaker class styling
    const dialogText = document.getElementById('dialog-text');
    if (dialogText) {
        dialogText.textContent = scene.text;
        
        // Clean previous speaker classes
        dialogText.className = 'dialog-text';
        
        if (scene.speaker) {
            dialogText.classList.add(scene.speaker);
        }
    }
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
