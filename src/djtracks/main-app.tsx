import React, { useState } from "react";
import TracklistHeader from "./tracklist.header";
import TableComponent from "./table.component";
import AboutPage from './aboutpage';
import NewTrack from './newtrack';
import { useDisclosure } from "@chakra-ui/react";
import { Container,
  Icon, 
  HStack, 
  Flex,
  Spacer,
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Center
} from '@chakra-ui/react';
import { Add, BladesVertical, Menu,  Music, User} from 'grommet-icons';
import { addPointerEvent } from "framer-motion";

const defaultColumns: string[] = [
  "track",
  "artist",
  "bpm",
  "key",
  "format",
  "pin",
  "edit",
];

const VIEWCOLUMNSDEFAULT: {[key: string]: string} = {
  artistcol: 'showcol',
  bpmcol: 'showcol',
  formatcol: 'showcol',
};

const MainApp = () => {
  const [mode, setMode] = useState("TRACKLIST");
  const [currentUser, setCurrentUser] = useState('Marc Fife')
  const [currentPlaylist, setCurrentPlaylist] = useState('Example Playlist')
  const [viewColumns, setViewColumns] = useState(VIEWCOLUMNSDEFAULT);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')
  return (
    <Box>
    <div className='main-header'>
      <Flex>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className="app-drawer">
          <DrawerHeader borderBottomWidth='1px'><Flex><Text> OpenTracklist.io</Text><Spacer/><Icon as={Music} /></Flex></DrawerHeader>
          <DrawerBody>
  <Flex onClick={() => setMode("ADDTRACK")}>
      <Text onClick={onClose}>Add Track</Text><Spacer/><Icon as={Add}/>
  </Flex>
  <Flex onClick={() => setMode("TRACKLIST")}>
      <Text onClick={onClose}> My Tracklist
  </Text> <Spacer/> <Icon as={BladesVertical} />
  </Flex>
  <div onClick={() => setMode("ABOUT")}>
      <Text onClick={onClose}>About</Text>
  </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    <HStack>
    <span className='main-menu' onClick={onOpen}>
        <Icon as={Menu}/>
      </span>
  <Text><Icon as={User} />{currentUser}</Text>
  
  </HStack>
</Flex>
</div>
<div className="main-window">

<Container maxW='container.sm' className="app-container" style={{paddingLeft: '0px',paddingRight: '0px'}}>
      {mode === "TRACKLIST" && (
        <>
        <div className="tracklist-header"><Text fontSize='xl'>{currentPlaylist.toUpperCase()}</Text></div>
        <Box borderWidth='1px' borderRadius='lg'>
          <TableComponent />
          </Box>
        </>
      )}

      {mode === "ADDTRACK" && (
        <>
          <NewTrack/>
        </>
      )}

{mode === "ABOUT" && (
        <>
          <AboutPage/>
        </>
      )}
    </Container>
    </div>
    </Box>
  );
};

export default MainApp;

//<TracklistHeader {...viewColumns} />