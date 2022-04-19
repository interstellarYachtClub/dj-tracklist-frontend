export interface DevFlatTrack {
    title: string;
    artist: string;
    album: string;
    format: string;
    time: number;
    year: number;
    bpm: number;
    bitrate: number;
    samplerate: number;
    musickey: number;
    albumcover: string;
}

export interface PlaylistCollection {
    userid: string;
    username: string;
    playlists?: Playlist[];

}

export interface Playlist {
    playlistid: string;
    datecreated: Date;
    datemodified: Date;
    views: number;
    playlistuserid: string;
    playlistname: string;
    tracks?: DevFlatTrack[];
    numberofplaylists: number;
}

export interface DevTrack {
    fakeid: number;
    title: string;
    artist: string;
    album: string;
    format: string;
    time: number;
    year: number;
    bpm: number;
    bitrate: number;
    samplerate: number;
    musickey: string;
    albumcover: string
  }