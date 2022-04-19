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
  DrawerBody
} from '@chakra-ui/react';
import { Add, BladesVertical, Music, User} from 'grommet-icons';

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
/*
function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

*/

const MainApp = () => {
  const [mode, setMode] = useState("TRACKLIST");
  const [currentUser, setCurrentUser] = useState('Marc Fife')
  const [viewColumns, setViewColumns] = useState(VIEWCOLUMNSDEFAULT);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')
  return (
    <Container maxW='container.sm' className="app-container" style={{paddingLeft: '4px',paddingRight: '4px'}}>
    <div className='main-header'>
      <Flex>
        <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    <Text> <Icon as={Music} /> OpenTracklist</Text>
    <Spacer/>
    <HStack>
    <span onClick={() => setMode("ABOUT")}>
      <Text>About</Text>
  </span>
  <span onClick={() => setMode("ADDTRACK")}>
      <Text>Add Track</Text>
  </span>
  <span onClick={() => setMode("TRACKLIST")}>
      <Text> My Tracklist
  </Text>
  </span>
  <Text><Icon as={User} />{currentUser}</Text>
  </HStack>
</Flex>
</div>
      {mode === "TRACKLIST" && (
        <>
          <TableComponent />
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
  );
};

export default MainApp;

//<TracklistHeader {...viewColumns} />