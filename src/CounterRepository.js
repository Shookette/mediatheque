import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const getDocRef = (id = 'counter') => {
    const db = getFirestore();
    return doc(db, 'counters', id)
}

const getCounter = async () => {
    const result = await getDoc(getDocRef());

    if (result.exists()) {
        return result.data().value;
    } else {
        return 0;
  }
};

const increaseCounter = async () => {
    const updatedCounter = await getCounter() + 1;
    setDoc(getDocRef, { value : updatedCounter});

    return updatedCounter;
}

export {
    getCounter,
    increaseCounter
}



