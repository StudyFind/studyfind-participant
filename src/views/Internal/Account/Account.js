import React, { useState, useEffect } from "react";

import { firestore, auth } from "database/firebase";
import { Flex, Heading, HStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo"
import Preferences from "./Preferences"

import { Form } from "views/External/Auth/Blocks";

import { useCollection, useDocument } from "hooks";

import { Spinner } from "components";



function Account() {

    const [user, loading, error] = useDocument(
        firestore.collection("participants").doc(auth.currentUser.uid)
    )

    const [temp_user, setTemp] = useState(user)

    useEffect(() => {
            setTemp(user)
            console.log('user: ', user)
    }, [user])

    const updateTemp = (key, val) => {
        console.log(key, val)
        if (key in user.filter) {
            temp_user.filter[key] = val
        } else if (key in user.personal_info) {
            temp_user.personal_info[key] = val
        } else {
            temp_user[key] = val
        }
        setTemp(temp_user)        
        console.log('temp user: ', temp_user)
    }

    if (loading || !user || !temp_user) return <Spinner/>

    if (error) return (
        <>
        <Heading size="lg" mb="25px">
            Error!
        </Heading>
    </>
    )

    return (
        <>
            <Heading size="lg" mb="25px">
                Welcome Back, {temp_user.personal_info.name.split(' ')[0]}
            </Heading>
                <HStack align="start">
                <Preferences user={temp_user} update={updateTemp}/>
                <PersonalInfo user={temp_user} update={updateTemp}/>
                </HStack>
        </>
    )
}

export default Account