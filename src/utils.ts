const MaxLen=5;

export function idgen() {
    let id = "";
    const subset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < MaxLen; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }

    return id;
}
