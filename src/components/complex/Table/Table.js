import { useColor } from "hooks";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

// headers is an array of strings of length x
// headers is a 2D array of children of length y and sublength x

function Table({ headers, data, ...rest }) {
  const borderColor = useColor("gray.200", "gray.700");
  const headCellBackgroundColor = useColor("gray.100", "gray.800");
  const bodyCellBackgroundColor = useColor("white", "gray.900");

  return (
    <ChakraTable {...rest}>
      <Thead>
        <Tr>
          {headers.map((text, i) => (
            <Th
              key={i}
              fontSize="12px"
              borderWidth="1px"
              borderColor={borderColor}
              background={headCellBackgroundColor}
            >
              {text}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, i) => (
          <Tr key={i}>
            {row.map((cell, j) => (
              <Td
                key={j}
                padding="8px 12px"
                borderWidth="1px"
                borderColor={borderColor}
                background={bodyCellBackgroundColor}
                nowrap
              >
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
