import React, { useState, useEffect } from "react";

import { firestore, auth } from "database/firebase";
import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { Form, Button } from "views/External/Auth/Blocks";

import { useCollection, useDocument } from "hooks";

import styled from "styled-components";

import DOB from "./DOB"

import { Spinner, Radio, Textarea, Input } from "components";
import { set } from "lodash";



function Account() {

    const testing = true

    const [user, snapshot, setUser, loading, error] = useDocument(
        firestore.collection("participants").doc(auth.currentUser.uid)
    )

    const [changed, setChanged] = useState(false)

    const updateUser = (key, val) => {
        console.log(key, val)
        if (key in user.filter) {
            user.filter[key] = val
        } else if (key in user.personal_info) {
            user.personal_info[key] = val
        } else {
            user[key] = val
        }
        setChanged(true)
        console.log('user: ', user)
    }

    const onSave = () => {
        console.log(user)
        firestore.collection('participants').doc(user.id).set(user)
    }

    if (loading || !user) return <Spinner/>

    if (error) return (
        <>
        <Heading size="lg" mb="25px">
            Error!
        </Heading>
    </>
    )

    return (
            <>
            <Form onSubmit={() => {}}>
                <HStack justifyContent='space-between'>
                <Heading size="lg" mb="25px">
                    Welcome Back, {user.personal_info.name.split(' ')[0]}
                </Heading>
                {changed ? (<HStack>
                            <Button colorScheme='red' onClick={() => {console.log('cancel')}}>Cancel</Button>
                            <Button onClick={onSave}>Save</Button>
                            </HStack>) : (<></>)}
                </HStack>
                <Box bg="white" borderWidth="1px" rounded="md">
                    <Form>
                    <Heading paddingBottom='5px' borderBottomWidth='1px' fontSize="22px">Search Preferences</Heading>
                    {Object.entries(user.filter).map((pref) => {
                    const heading = pref[0]
                    const val = pref[1]
                    return(
                        <Radio key={heading} update={updateUser} heading={heading} init={val} options={["Yes", "No"]}></Radio>
                    )
                    })}
                    </Form>
                </Box>
                <Box bg="white" borderWidth="1px" rounded="md">
                    <Form>
                    <Heading paddingBottom='5px' borderBottomWidth='1px' fontSize="22px">{"Personal Info"}</Heading>
                        <Radio heading={"sex"} options={["Male", "Female"] } init={user.personal_info.sex} update={updateUser}></Radio>
                        <Heading fontSize="17px">{user.personal_info.birthdate}</Heading>
                        <Input type="date" value={user.personal_info.birthdate}></Input>
                        <Heading fontSize="17px">Availability</Heading>
                        <Textarea value={user.personal_info.availability} limit={500} name='availability' onChange={updateUser} placeholder="Put a little something about your weekly availability"></Textarea>
                    </Form>
                </Box>
            </Form>
        </>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-gap: 1rem;
`;

export default Account