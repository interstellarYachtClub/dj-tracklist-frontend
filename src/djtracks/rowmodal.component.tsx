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
    Icon,
    Tr,
    Td
 } from '@chakra-ui/react';
 import {DevTrack} from './interfaces';
 import MakeMinutes from './makeminutes-func';
 import { Edit, Tag } from 'grommet-icons';

const RowModal = (props: DevTrack) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Tr onClick={onOpen}>
      <Td className="track-cell">{props.title}<Badge>{props.format}</Badge></Td>
      <Td className="track-cell">{props.artist}</Td>
      <Td className="track-cell">{props.bpm}</Td>
      <Td className="track-cell">{props.musickey}</Td>
        </Tr>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="track-modal" style={{
              backgroundImage:`url(${props.albumcover})`
              }}>
            <ModalHeader className="track-modal-header">Track Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="track-modal-background">
              <Stack spacing={0} className="track-modal-info">
                  <Center>
                      <Text fontSize='xs' className="metalabel">Title: </Text><Text fontSize='lg'>{props.title}</Text>
                  
                  </Center>
                  <Center>
                  <Text fontSize='xs' className="metalabel">Artist: </Text><Text fontSize='md'>{props.artist}</Text>
                  </Center>
                  <Center>
                  <Text fontSize='xs' className="metalabel">Album: </Text><Text fontSize='md'>{props.album}</Text><Text fontSize='xs' className="metalabel"> - </Text><Text fontSize='md'>{props.year}</Text>
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
                      <HStack>
                          <Text>Format: {props.format}</Text>
                          <Text>Bitrate: {props.bitrate}</Text>
                          <Text>Samplerate: {props.samplerate}</Text>

                      </HStack>
                  </Center>
</Stack>
            </ModalBody>
  
            <ModalFooter className="track-modal-footer">
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

export default RowModal;