export let state = {
    words: [],
    current: 0,
    wrongWords: []
};

export function setState(newState) {
    state.words = Array.isArray(newState?.words) ? newState.words : [];
    state.current = typeof newState?.current === "number" ? newState.current : 0;
    state.wrongWords = Array.isArray(newState?.wrongWords) ? newState.wrongWords : [];
}

export function nextWord() {
    state.current++;
}

export function addWrong(word) {
    if (word) state.wrongWords.push(word);
}

export function useWrongWords() {
    state.words = [...state.wrongWords];
    state.wrongWords = [];
    state.current = 0;
}