import { SUPABASE_KEY, SUPABASE_URL } from "./config.js";

export async function fetchWords() {
    const res = await fetch(SUPABASE_URL, {
        headers: {
            apikey: SUPABASE_KEY,
            Authorization: "Bearer " + SUPABASE_KEY
        }
    });

    if (!res.ok) {
        throw new Error("fetchWords failed: " + res.status);
    }

    return await res.json();
}

export async function addWordAPI(eng, tr) {
    const res = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
            apikey: SUPABASE_KEY,
            Authorization: "Bearer " + SUPABASE_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
        },
        body: JSON.stringify({
            english: eng,
            turkish: tr
        })
    });

    if (res.status >= 200 && res.status < 300) {
        return true;
    }

    const errText = await res.text();
    throw new Error(errText || "Insert failed");
}