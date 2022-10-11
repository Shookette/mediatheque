import initFirebase from "./FirebaseLoader";
import { ReactNode, FC } from 'react'

type Props = { children: ReactNode }

const WithFirestore: FC<Props> = ({ children }) => {
    initFirebase();

    return (
     <>{children}</>
    );
}

export default WithFirestore