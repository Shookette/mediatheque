import initFirebase from "./FirebaseLoader";

function WithFirestore(props) {
    initFirebase();

    return (
     <>{props.children}</>
    );
}

export default WithFirestore