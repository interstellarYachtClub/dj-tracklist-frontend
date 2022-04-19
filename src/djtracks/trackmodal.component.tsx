import React from 'react';
import { Button,
    Input,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Stack,
    HStack,
    Text,
    Badge,
    Divider,
    Avatar,
    Image,
    Center,
    Icon
 } from '@chakra-ui/react';
 import {DevTrack} from './interfaces';
 import MakeMinutes from './makeminutes-func';
 import { Edit, Tag } from 'grommet-icons';
import { url } from 'inspector';

const TrackModal = (props: DevTrack) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}><Icon as={Tag} /></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="track-modal" >
            <div className="track-modal-background" style={{
              backgroundImage:`url(${props.albumcover})`
              }}></div>
            <ModalHeader>{props.artist} - Track Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                  <Center>
                  <Text fontSize='md'>{props.title}</Text>
                  </Center>
                  <Center>
                  <HStack>
                      <Text fontSize='lg'>
                  <Badge colorScheme='green'>{props.bpm+` bpm`}</Badge>
                  <Badge colorScheme='blue'>{props.musickey}</Badge>
                  <Badge>{MakeMinutes(props.time)}</Badge>
                  </Text>
                  </HStack>
                  </Center>
                  <Center>
                      <Image
                      boxSize='150px'
                      objectFit='cover'
                      src={props.albumcover}
                      alt='album cover'
  />
  </Center>
  <Center>
  <Text fontSize='md'>{props.album}</Text><Text>--</Text><Text fontSize='md'>{props.year}</Text>
  </Center>
                  <Divider/>
                  <Center>
                      <HStack>
                          <Text>Format: {props.format}</Text>
                          <Text>Bitrate: {props.bitrate}</Text>
                          <Text>Samplerate: {props.samplerate}</Text>

                      </HStack>
                  </Center>
</Stack>
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              <Button variant='ghost'><Icon as={Edit} /></Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default TrackModal;