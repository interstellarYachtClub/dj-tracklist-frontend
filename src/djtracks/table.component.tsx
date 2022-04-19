import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
} from "@chakra-ui/react";
import TrackModal from './trackmodal.component';
import RowModal from './rowmodal.component';
import SAMPLEDATA from '../data/sample-data';
import MakeMinutes from './makeminutes-func';
//T Y P E S  I N T E R F A C E S

interface DevTrack {
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

interface Track {
  trackid?: string;
  title: string;
  artist: string;
  album?: string;
  format: Format;
  time?: number;
  year?: number;
  bpm: number;
  mixingkey?: MixingKey;
  albumart?: string;
}

type Format = {
  filetype: string;
  bitrate?: number;
  samplerate?: number;
};

type MixingKey = {
  issharporflat: boolean;
  musickey: MusicKey;
  camelotkey: CamelotKey;
};

enum MusicKey {
  // 'G#min / 1A',
  Dsmin = "D#min",
  // 'D#min / 2A',
  Asmin = "A#min",
  // 'A#min / 3A',
  //   'Fmin / 4A',
  //   'Cmin / 5A',
  //   'Gmin / 6A',
  //   'Dmin / 7A',
  //   'Amin / 8A',
  //   'Emin / 9A',
  //   'Bmin / 10A',
  //   'F#min / 11A',
  //   'C#min / 12A',
  //   'Bmaj / 1B',
  //   'F#maj / 2B',
  //   'C#maj / 3B',
  //   'G#maj / 4B',
  //   'D#maj / 5B',
  //   'A#maj / 6B',
  //   'Fmaj / 7B',
  //   'Cmaj / 8B',
  //   'Gmaj / 9B',
  Dmaj = "Dmaj",
  Amaj = "Amaj",
  Emaj = "Emaj",
}

enum CamelotKey {
  ck1A = "1A",
  ck2A = "2A",
  ck3A = "3A",
  ck10B = "10B",
  ck12B = "12B",
}

//SAMPLEDATA

// T E S T  D A T A
const TEMPDATA = [
  {
    id: "000123456",
    title: "Sun Models feat. Madelyn Grant (Original Mix)",
    artist: "ODESZA",
    album: "In Return",
    format: {
      filetype: "wav",
      bitrate: 1411,
      samplerate: 44100,
    },
    mixingkey: {
      issharporflat: false,
      musickey: MusicKey.Emaj,
      camelotkey: CamelotKey.ck12B,
    },
    time: 160000,
    year: 2014,
    bpm: 120,
    albumcover: "",
  },
  {
    id: "001123456",
    title: "Days Go By (Original Mix)",
    artist: "Dirty Vegas",
    album: "Days Go By",
    format: {
      filetype: "aiff",
      bitrate: 1411,
      samplerate: 44100,
    },
    mixingkey: {
      issharporflat: false,
      musickey: MusicKey.Dmaj,
      camelotkey: CamelotKey.ck10B,
    },
    time: 432146,
    year: 2003,
    bpm: 127,
    albumcover: "",
  },
];
//C O M P O N E N T S

const TrackRow = (props: DevTrack) => {
  return (
    <Tr>
      <Td>{props.title}<Badge>{props.format}</Badge></Td>
      <Td>{props.artist}</Td>
      <Td>{props.bpm}</Td>
      <Td>
        {props.musickey}
      </Td>
      <Td><TrackModal {...props}/></Td>
    </Tr>
  );
};

const totalTime = (list: DevTrack[]) => {
  let totaltime = 0;
  list.forEach(li => {
    totaltime = totaltime+li.time;
  })
  return totaltime;
}

const formatRow = (track: DevTrack): JSX.Element => {
  return <TrackRow {...track} />;
};

const formatRowModal = (track: DevTrack): JSX.Element => {
  return <RowModal {...track} />;
};

const TableComponent = () => {
  return (
    <>
    <div>
    </div>
      <TableContainer>
        <Table variant="striped" size="sm" colorScheme="white" style={{width:'100%'}}>
          <Thead>
            <Tr>
              <Th >Track</Th>
              <Th >Artist</Th>
              <Th >BPM</Th>
              <Th >Key</Th>
            </Tr>
          </Thead>
          {/* <Tbody>{SAMPLEDATA.map((track) => formatRow(track))}</Tbody> */}
          <Tbody>{SAMPLEDATA.map((track) => formatRowModal(track))}</Tbody>
          <TableCaption>Total Time: {MakeMinutes(totalTime(SAMPLEDATA))} - Last updated April '22</TableCaption>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
