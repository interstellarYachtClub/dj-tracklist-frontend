import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Flex,
  Select,
  RadioGroup,
  Radio,
  Button
} from "@chakra-ui/react";

const defaultData: Object = {
  id: "",
  title: "",
  artist: "",
  format: "",
  time: 0,
  year: 0,
  bpm: 0,
  bitrate: 0,
  samplerate: 0,
  musickey: "",
  albumcover: "",
};

const NewTrack = () => {
  const [formData, setFormData] = useState(defaultData);
  return (
    <form>
      <FormControl isRequired>
        <FormLabel htmlFor="newtracktitle">Track Title</FormLabel>
        <Input id="newtracktitle" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="newtrackartist">Artist</FormLabel>
        <Input id="newtrackartist" />
      </FormControl>

      <HStack>
        <FormControl isRequired>
          <FormLabel htmlFor="newtrackalbum">Album</FormLabel>
          <Input id="newtrackalbum" />
        </FormControl>
        <FormControl w="200px">
          <FormLabel htmlFor="newtrackyear">Year</FormLabel>
          <NumberInput max={2022} min={1899}>
            <NumberInputField id="newtrackyear" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </HStack>

      <HStack>
        <FormControl w="200px">
          <FormLabel htmlFor="newtrackbpm">BPM</FormLabel>
          <NumberInput max={999} min={1}>
            <NumberInputField id="newtrackbpm" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl w="200px">
          <FormLabel htmlFor="newtrackmusickey">Key / Camelot Key</FormLabel>
          <Select id="newtrackmusickey" placeholder="Select Musical Key">
            <option>1A / Ab minor </option>
          </Select>
        </FormControl>
        <FormControl w="200px">
          <FormLabel htmlFor="newtracktime">Time</FormLabel>
          <Input id="newtracktime" type="newtracktime" />
        </FormControl>
      </HStack>

      <FormControl as="fieldset" isRequired>
        <FormLabel as="legend"> Encoding Format</FormLabel>
        <RadioGroup>
          <HStack spacing="8px">
            <Radio value="AIFF">aiff</Radio>
            <Radio value="FLAC">flac</Radio>
            <Radio value="MP3">mp3</Radio>
            <Radio value="WAV">wav</Radio>
            <Radio value="Other">other</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <HStack>
        <FormControl>
          <FormLabel htmlFor="newtrackbitrate">Bitrate</FormLabel>
          <Select id="newtrackbitrate" placeholder="Select Bitrate">
            <option>Low Quality</option>
            <option>MP3</option>
            <option>Flac</option>
            <option>CD</option>
            <option>Lossless+</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="newtracksamplerate">Samplerate</FormLabel>
          <Select id="newtracksamplerate" placeholder="Select Samplerate">
            <option>44,100 Hz</option>
            <option>48,000 Hz</option>
            <option>96,000 Hz</option>
          </Select>
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel htmlFor="newtrackalbumcover">Album Cover</FormLabel>
        <Input id="newtrackalbumcover" />
        <FormHelperText>Paste a URL to a jpg or png </FormHelperText>
      </FormControl>
      <Button colorScheme='gray' variant='outline'>Add Track</Button>
    </form>
  );
};

export default NewTrack;
