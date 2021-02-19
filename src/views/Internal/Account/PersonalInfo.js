import React, { useState } from "react";

import { firestore, auth } from "database/firebase";
import { Heading } from "@chakra-ui/react";
import { Box, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { Form, Button } from "views/External/Auth/Blocks";

import { RadioGroup, useRadio, useRadioGroup, HStack, Flex } from "@chakra-ui/react"

import { useCollection, useDocument } from "hooks";

import { Spinner, Radio, Textarea } from "components";

import DOB from "./DOB"

function PersonalInfo(props) {

    const {user, update} = props

    return (
        <Box w="350px" bg="white" borderWidth="1px" rounded="md">
        <Form>
        <Heading fontSize="22px">{"Personal Info"}</Heading>
            <DOB init={user.personal_info.birthdate} update={update}></DOB>
            <Radio heading={"sex"} options={["Male", "Female"] } init={user.personal_info.sex} update={update}></Radio>
            <Heading fontSize="16px">Availability</Heading>
            <Textarea></Textarea>
        <Button>Save</Button>
        </Form>
    </Box>
    )
}

export default PersonalInfo