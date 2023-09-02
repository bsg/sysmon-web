function uptimeToString(seconds: number) {
    var date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substring(11, 19);
}

export {uptimeToString}