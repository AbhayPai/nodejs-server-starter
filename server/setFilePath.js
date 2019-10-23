const setFilePath = (config) => {
    let filePath = config.path.join(
        __dirname,
        '..',
        'public',
        config.req.url === '/' ? 'index.html' : config.req.url
    );

    return filePath;
};

module.exports = setFilePath;