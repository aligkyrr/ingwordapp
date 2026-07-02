export function save(data) {
    localStorage.setItem("progress", JSON.stringify(data));
}

export function load() {
    const data = localStorage.getItem("progress");
    return data ? JSON.parse(data) : null;
}

export function clear() {
    localStorage.removeItem("progress");
}