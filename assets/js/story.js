/**
 * Tell me a History - Story Engine
 * Manages the slide progression, text rendering, speaker class styling, and navigation.
 */

let currentSceneIndex = 0;
let storyScenes = [];

/**
 * Initializes the story with scenes data.
 * @param {Array<{text: string, image: string, speaker: string}>} scenesList 
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
    
    // Update text and style class styling
    const dialogTextElement = document.getElementById('dialog-text');
    if (dialogTextElement) {
        dialogTextElement.textContent = scene.text;
        
        // Clean previous styling classes
        dialogTextElement.className = 'dialog-text';
        
        // Use custom style/speaker if provided, otherwise default
        const styleClass = scene.style || 'default';
        dialogTextElement.classList.add(styleClass);
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
