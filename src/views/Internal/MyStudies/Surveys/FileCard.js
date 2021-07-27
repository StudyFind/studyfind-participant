import styled from "styled-components";
import { Box, Flex, Divider, Text, Icon, Tooltip } from "@chakra-ui/react";
import { FaFilePdf, FaTrashAlt } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function FileCard({ file, handleDelete }) {
  return (
    <Box borderRadius="6px" borderWidth="1px">
      <a href={file.link} target="_blank" rel="noopener noreferrer">
        <Flex
          justify="center"
          align="center"
          h="100px"
          bg="white"
          borderTopLeftRadius="6px"
          borderTopRightRadius="6px"
        >
          <Icon as={FaFilePdf} color="gray.400" h="30px" w="30px" />
        </Flex>
      </a>
      <Divider />
      <Box p="15px" bg="gray.50" borderBottomLeftRadius="6px" borderBottomRightRadius="6px">
        <Tooltip label={file.name}>
          <Name color="gray.600" fontSize="14px" fontWeight="500">
            <a href={file.link} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </Name>
        </Tooltip>
        <Flex justify="space-between" align="center">
          <Text color="gray.400" fontSize="14px">
            {file.date}
          </Text>
          <Flex gridGap="6px" align="center">
            <Tooltip label="Delete File">
              <Box>
                <Icon
                  as={FaTrashAlt}
                  fontSize="12px"
                  color="gray.400"
                  _hover={{ color: "red.400" }}
                  onClick={() => handleDelete(file.name)}
                  pointerEvents="all"
                />
              </Box>
            </Tooltip>
            <Tooltip label="Open File">
              <a href={file.link} target="_blank" rel="noopener noreferrer">
                <Box>
                  <Icon
                    as={ExternalLinkIcon}
                    fontSize="14px"
                    color="gray.400"
                    _hover={{ color: "blue.400" }}
                    pointerEvents="all"
                  />
                </Box>
              </a>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

const Name = styled(Text)`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export default FileCard;
