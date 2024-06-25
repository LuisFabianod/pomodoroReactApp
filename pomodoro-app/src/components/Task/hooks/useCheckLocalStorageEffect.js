import { useEffect } from "react";

export const useCheckLocalStorageEffect = (setTasksArray) => {
    useEffect(() => {
        let localStorageTasks = [];

        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);

            if(key.startsWith('Task')){
                localStorageTasks.push(localStorage[key]);
            }
        }
        setTasksArray([...localStorageTasks])
    }, [setTasksArray]);
};
