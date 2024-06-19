import axios from "axios";
import { useState } from "react";
import {v4 as uuid} from "uuid";


// hook to flip state from false to true (flipping cards)
const useFlip = () => {
    const [ face, setFace ] = useState(true);

    const flipCard = () => {
        setFace(!face);
    }
    return [ face, flipCard]
};

// hook to initialize empty array and use Axios
const useAxios = () => {
    const [ data, setData ] = useState([]);

    const addData = async (url) => {
        const response = await axios.get(url);
        setData([...data, { ...response.data, id: uuid() }]);
    };

    return [ data, addData ]
};

export { useFlip, useAxios };