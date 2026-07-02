import { fetchWords } from "./api.js";
import { load } from "./storage.js";
import * as stateModule from "./state.js";
import { shuffle } from "./quiz.js";
import { next } from "./actions.js";
import { known, skip, showAnswer, resetProgress } from "./actions.js";
import { getInputs, clearInputs, toggleAddUI } from "./ui.js";
import { addWordAPI } from "./api.js";

let isAdding = false;

window.addWord = async function () {
    if (isAdding) return;
    isAdding = true;

    const { eng, tr } = getInputs();

    if (!eng || !tr) {
        alert("Boş bırakma");
        isAdding = false;
        return;
    }

    try {
        await addWordAPI(eng, tr);

        alert("Eklendi ✅");
        clearInputs();
        toggleAddUI();
        location.reload()

    } catch (err) {
        alert("Hata ❌ " + err.message);
    }

    isAdding = false;
};

async function init() {
    const saved = load();

    if (saved) {
        stateModule.setState(saved);
        return next();
    }

    const data = await fetchWords();
    const words = Array.isArray(data?.data)

        ? data.data
        : Array.isArray(data)
            ? data
            : [];


    if (words.length === 0) {
        console.error("Kelime listesi boş!");
        return;
    }

    stateModule.setState({
        words,
        current: 0,
        wrongWords: []
    });

    shuffle(stateModule.state.words);
    next();
}

window.known = known;
window.skipWord = skip;
window.toggleAdd = toggleAddUI;
window.showAnswer = showAnswer;
window.resetProgress = resetProgress;

init();