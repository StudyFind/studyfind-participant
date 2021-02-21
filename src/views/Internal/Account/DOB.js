import React, { useState } from "react";

import { firestore, auth } from "database/firebase";
import { Heading } from "@chakra-ui/react";
import { Box, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { Form, Button } from "views/External/Auth/Blocks";

import { useCollection, useDocument } from "hooks";

import { Spinner } from "components";

function DOB(props) {

    const {init, update} = props

    const [date, setDate] = useState("2/20/2021");

    const onChange = (adate) => {
        console.log(adate)
        setDate(adate)
        update("birthdate", adate)
    }

    return (
        <>
            <Heading fontSize="17px">Birth Date</Heading>
            <Input type="date" defaultValue={date} onChange={date => {onChange(date.target.value)}}></Input>
        </>
    )
}

export default DOB