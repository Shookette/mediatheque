import React from 'react';
import initFirebase from "./FirebaseLoader";

const WithFirestore = (props: any) => {
    initFirebase();

    return (
     <>{props.children}</>
    );
}

export default WithFirestore