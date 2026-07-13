/**
 * Me Conte uma História - Motor de histórias
 * Controla a progressão de cenas, renderização de texto e navegação.
 */

let currentSceneIndex = 0;
let storyScenes = [];

// Guarda referências às imagens já iniciadas para reutilizá-las e evitar downloads duplicados.
// A chave é o nome do arquivo; o valor é um HTMLImageElement já com src definido.
const imageCache = new Map();

/**
 * Pré-carrega silenciosamente as próximas `count` cenas a partir de `startIndex`.
 * Criar um HTMLImageElement com src já dispara o download no browser mesmo sem inserir no DOM.
 * Isso garante que a imagem esteja no cache quando renderScene() for chamado.
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

function initStory(scenesList) {
    storyScenes = scenesList;
    currentSceneIndex = 0;

    const nextDialogButton = document.getElementById('next-dialog-button');
    if (nextDialogButton) {
        nextDialogButton.addEventListener('click', nextScene);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault(); // Evita o scroll padrão do Espaço
            nextScene();
        }
    });

    renderScene();
}

function renderScene() {
    if (currentSceneIndex >= storyScenes.length) {
        return;
    }

    const scene = storyScenes[currentSceneIndex];

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

    const dialogTextElement = document.getElementById('dialog-text');
    if (dialogTextElement) {
        dialogTextElement.textContent = scene.text;
        dialogTextElement.className = 'dialog-text';
        dialogTextElement.classList.add(scene.style || 'default');
    }

    preloadAheadFrom(currentSceneIndex);
}

function nextScene() {
    currentSceneIndex++;

    if (currentSceneIndex < storyScenes.length) {
        renderScene();
    } else {
        window.location.href = '../index.html';
    }
}
