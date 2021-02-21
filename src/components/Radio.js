import React, { useState } from "react";

import { firestore, auth } from "database/firebase";
import { Heading } from "@chakra-ui/react";
import { Box, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { Form, Button } from "views/External/Auth/Blocks";

import { RadioGroup, useRadio, useRadioGroup, HStack, VStack, Flex } from "@chakra-ui/react"

import { useCollection, useDocument } from "hooks";

import { Spinner } from "components";

function Radio(props) {

    const { heading, options, init, update} = props

    const formatHeading = (head) => {
      const s = head.split('_')
      return s[0].charAt(0).toUpperCase() + s[0].slice(1)
    }

    return (
        <>
          {/* <VStack> */}
            <HStack justify='space-between'>
            <Heading paddingBottom='5px' alignContent="center" fontSize="17px">{formatHeading(heading)}</Heading>
            <RadioComponent heading={heading} init={init} onChange={update} options={options}/>
            </HStack>
          {/* </VStack> */}
        </>
    )
}

function RadioComponent(props) {

    const {heading, init, onChange} = props

    const [options, setOptions] = useState(props.options)

    const update = (val) => {
      onChange(heading, val)
    }
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: init,
      onChange: update
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
        w='100px'
        textAlign='center'
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "#2E75BD",
            color: "white",
            borderColor: "#8EC2ED",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

export default Radio