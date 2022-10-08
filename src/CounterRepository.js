import { getFirestore, doc, getDoc } from "firebase/firestore";

const getCounter = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'counters', 'counter');
    const result = await getDoc(docRef);

    if (result.exists()) {
        return result.data();
    } else {
        return 0;
    }
};

export {
    getCounter
}



