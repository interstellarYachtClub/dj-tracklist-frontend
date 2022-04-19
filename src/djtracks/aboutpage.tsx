import React from 'react';
import {
    Text 
} from '@chakra-ui/react';

const AboutPage = () => {
    return(
    <>
    <Text fontSize='lg'>
        About
    </Text>
    <Text fontSize='md'>
    <div>Hi! My name is Dave and this project is part of my web development portfolio. The purpose of this application is to allow DJs to easily share their libraries and playlists with other DJs to coordinate the setlist for shows. Another good use case is for streamers to share playlists with their audiences.
        </div>
        <div>In its current iteration, only the front end of is functioning fully but eventually this project should allow users to create accounts, manage their playlists, tracks, and toggle playlists between public and private.
</div>

    </Text>

    <Text fontSize='lg'>
        The Stack
    </Text> 
    <Text fontSize='md'>
    The front end is a react app utilizing typescript and chakra ui. The backend is NestJS with typescript, graphql, and mongoldb.

    </Text>

    </>
    )

}

export default AboutPage;