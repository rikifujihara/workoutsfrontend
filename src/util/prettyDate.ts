export function prettyDate (timeString: string) {
    const timestamp = new Date(timeString);
    const formatted = timestamp.toLocaleString();
    return formatted;
}
