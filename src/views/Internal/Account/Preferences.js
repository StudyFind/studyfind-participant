import React, { useState } from "react";

import { firestore, auth } from "database/firebase";
import { Heading } from "@chakra-ui/react";
import { Box, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { Form, Button } from "views/External/Auth/Blocks";

import { RadioGroup, useRadio, useRadioGroup, HStack, Flex, VStack } from "@chakra-ui/react"

import styled from "styled-components";

import { useCollection, useDocument } from "hooks";

import { Spinner, Radio } from "components";

function Preferences(props) {

  const {user, update} = props

    return (
        <>
        <Box bg="white" borderWidth="1px" rounded="md">
            <Form>
            <Heading fontSize="22px">Search Preferences</Heading>
              <Flex>
            <Grid>
            {Object.entries(user.filter).map((pref) => {
              const heading = pref[0]
              const val = pref[1]
              return(
                <Radio update={update} heading={heading} init={val} options={["Yes", "No"]}></Radio>
              )
            })}
            </Grid>
            </Flex>
            <Button>Save</Button>
            </Form>
        </Box>
        </>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-gap: 1rem;
`;
  

export default Preferences