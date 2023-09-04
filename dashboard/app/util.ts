function uptimeToString(seconds: number) {
    var date = new Date(0);
    date.setSeconds(seconds);
    return Math.floor(seconds / 86400).toString().padStart(3, "0") + ":" + date.toISOString().substring(11, 19);
}
export { uptimeToString }

function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
export { formatBytes }

function hexToRGBA(hex: string, alpha: number) {
    var r, g, b;
    if (hex.length == 4 && hex[0] == "#") {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7 && hex[0] == "#") {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}
export { hexToRGBA }