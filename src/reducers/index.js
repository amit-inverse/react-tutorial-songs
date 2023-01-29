const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Barbie Girl', duration: '5:05' },
        { title: 'All Star', duration: '4:55' },
        { title: 'I Want It That Way', duration: '3:05' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};