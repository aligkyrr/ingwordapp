import * as stateModule from "./state.js";
import { save, clear } from "./storage.js";
import { showWordUI, showAnswerUI, showFinishedUI } from "./ui.js";
import { shuffle } from "./quiz.js";

export function next() {

    if (!Array.isArray(stateModule.state.words)) {
        console.error("words bozuk:", stateModule.state.words);
        return;
    }

    if (stateModule.state.current >= stateModule.state.words.length) {

        if (stateModule.state.wrongWords.length > 0) {
            stateModule.useWrongWords();
            shuffle(stateModule.state.words);
            save(stateModule.state);
            return next();
        }

        showFinishedUI();
        clear();

        setTimeout(() => location.reload(), 1500);
        return;
    }

    const word = stateModule.state.words[stateModule.state.current];

    if (!word || !word.english) {
        console.error("Bozuk veri:", word);
        stateModule.nextWord();
        return next();
    }

    showWordUI(
        word,
        stateModule.state.current + 1,
        stateModule.state.words.length
    );
}

export function known() {
    stateModule.nextWord();
    save(stateModule.state);
    next();
}

export function skip() {
    stateModule.addWrong(stateModule.state.words[stateModule.state.current]);
    stateModule.nextWord();
    save(stateModule.state);
    next();
}

export function resetProgress() {
    clear();
    location.reload();
}

export function showAnswer() {
    const word = stateModule.state.words[stateModule.state.current];
    if (word) showAnswerUI(word);
}