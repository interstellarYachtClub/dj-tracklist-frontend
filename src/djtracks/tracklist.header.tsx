import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Checkbox,
  CheckboxGroup,
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";

const TracklistHeader = (viewColumns: { [key: string]: string }) => {

  const toggleColumns = (columns: { [key: string]: string }) => {
    for (const col in columns){
      if(columns[col] === 'showcol'){
        console.log(col+':'+columns[col])
      }
    }
  }
  return (
    <div>
      <HStack spacing="50px">
        <Menu>
          <MenuButton
            px={2}
            py={1}
            transition="all 0.2s"
            borderRadius="sm"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            Columns
          </MenuButton>
          <MenuList>
            <Checkbox isDisabled defaultChecked>
              Track
            </Checkbox>
            <MenuDivider />
            {toggleColumns(viewColumns)}
            <Checkbox defaultChecked>Artist</Checkbox>
            <MenuDivider />
            <Checkbox defaultChecked>Time</Checkbox>
            <MenuDivider />
            <Checkbox defaultChecked>BPM</Checkbox>
            <MenuDivider />
            <Checkbox defaultChecked>Key</Checkbox>
            <MenuDivider />
            <Checkbox isDisabled defaultChecked>
              Pin
            </Checkbox>
            <Checkbox isDisabled defaultChecked>
              Edit
            </Checkbox>
          </MenuList>
        </Menu>
        <Input placeholder="search / filter" size="sm" />
      </HStack>
    </div>
  );
};
export default TracklistHeader;

//{TEMPDATA.map((track) => formatRow(track))}
