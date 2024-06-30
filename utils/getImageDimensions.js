const getImageDimensions = (url) => {
    const regex = /(\d+)x(\d+)/;
    const match = url.match(regex);

    if (match) {
        const width = parseInt(match[1], 10);
        const height = parseInt(match[2], 10);
        return { width, height };
    } else {
        return { width: null, height: null };
    }
};

export default getImageDimensions;
