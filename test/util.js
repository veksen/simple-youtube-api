const assert = require('assert');
const YouTube = require('../src/index');

exports.checkUnknownVideo = (video) => assert(video instanceof YouTube.Video, 'result is not an instance of Video');
exports.checkUnknownPlaylist = (playlist) => assert(playlist instanceof YouTube.Playlist, 'result is not an instance of Playlist');
exports.checkUnknownChannel = (channel) => assert(channel instanceof YouTube.Channel, 'result is not an instance of Channel');

exports.checkUnknown = (thing) => {
    assert(thing instanceof YouTube.Video || thing instanceof YouTube.Playlist || thing instanceof YouTube.Channel, 'result is not a YouTube structure');
};

exports.isNull = (result) => assert.deepStrictEqual(result, null, 'result is not null');
exports.throws = [
    result => assert.fail(`resolved with ${result}`),
    error => assert(error instanceof Error, 'does not reject with an Error'),
];

exports.checkVideo = (video, id) => {
    exports.checkUnknownVideo(video);
    assert.equal(video.id, id, `video ID "${video.id}" does not match "${id}"`);
    assert.equal(video.url, `https://www.youtube.com/watch?v=${id}`, `video url "${video.url}" does not match expected format`);
    assert.equal(video.shortURL, `https://youtu.be/${id}`, `video short url "${video.shortURL}" does not match expect format`);
};
exports.checkPlaylist = (playlist, id) => {
    exports.checkUnknownPlaylist(playlist);
    assert.equal(playlist.id, id, `playlist ID "${playlist.id}" does not match expected "${id}"`);
    assert.equal(playlist.url, `https://www.youtube.com/playlist?list=${id}`, `playlist url "${playlist.url}" does not match expected format`);
};
exports.checkChannel = (channel, id) => {
    exports.checkUnknownChannel(channel);
    assert.equal(channel.id, id, `channel ID "${channel.id}" does not match expected "${id}"`);
    assert.equal(channel.url, `https://www.youtube.com/channel/${id}`, `channel url "${channel.url}" does not match expected format`);
};

exports.checkVideos = (videos, length = 5) => {
    assert(Array.isArray(videos), 'results are not an array');
    assert.equal(videos.length, length, `expected length "${length}" but got "${videos.length}"`);
    for(const v of videos) exports.checkUnknownVideo(v);
};
exports.checkPlaylists = (playlists, length = 5) => {
    assert(Array.isArray(playlists), 'results are not an array');
    assert.equal(playlists.length, length, `expected length "${length}" but got "${playlists.length}"`);
    for(const p of playlists) exports.checkUnknownPlaylist(p);
};
exports.checkChannels = (channels, length = 5) => {
    assert(Array.isArray(channels), 'results are not an array');
    assert.equal(channels.length, length, `expected length "${length}" but got "${channels.length}"`);
    for(const c of channels) exports.checkUnknownChannel(c);
};
