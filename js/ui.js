function getEls() {
    return {
        wordEl: document.getElementById("word"),
        progressEl: document.getElementById("progress"),
        addBoxEl: document.getElementById("addBox"),
        engInputEl: document.getElementById("engInput"),
        trInputEl: document.getElementById("trInput")
    };
}

export function showWordUI(word, index, total) {
    if (!word) return;

    const { wordEl, progressEl } = getEls();
    if (!wordEl || !progressEl) return;

    wordEl.innerText = word.english || "???";
    progressEl.innerText = `${index} / ${total}`;
}

export function showAnswerUI(word) {
    if (!word) return;

    const { wordEl } = getEls();
    if (!wordEl) return;

    wordEl.innerText = `${word.english} - ${word.turkish}`;
}

export function showFinishedUI() {
    const { wordEl, progressEl } = getEls();
    if (!wordEl || !progressEl) return;

    wordEl.innerText = "Tüm kelimeler bitti 🎯";
    progressEl.innerText = "";
}

export function toggleAddUI() {
    const { addBoxEl } = getEls();
    if (!addBoxEl) return;

    addBoxEl.classList.toggle("hidden");
}

export function clearInputs() {
    const { engInputEl, trInputEl } = getEls();
    if (!engInputEl || !trInputEl) return;

    engInputEl.value = "";
    trInputEl.value = "";
}

export function getInputs() {
    const { engInputEl, trInputEl } = getEls();

    return {
        eng: engInputEl?.value.trim() || "",
        tr: trInputEl?.value.trim() || ""
    };
}