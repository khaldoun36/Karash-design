const normalizePath = (path) => {
    const parts = path.replace(/\/+$/, '').split('/'); // Split and remove trailing slashes
    if (
        parts.length > 1 &&
        parts[parts.length - 1] === parts[parts.length - 2]
    ) {
        parts.pop(); // Remove duplicate if found
    }
    return parts.join('/'); // Reconstruct the path
};

export default normalizePath;
