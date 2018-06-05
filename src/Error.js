class YouTubeError extends Error {
    constructor(endpoint, body) {
        super(body.message || body);

        this.endpoint = endpoint;
        this.body = body;
    }
}

module.exports = YouTubeError;
