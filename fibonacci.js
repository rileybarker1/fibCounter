export default function fibFinder(n) {
    let a = [];
    for (let i = 0; i <= n; i++) {
        i < 2 ? a[i] = i : a[i] = a[i-2] + a[i-1];
    }
    return a[n];
}

