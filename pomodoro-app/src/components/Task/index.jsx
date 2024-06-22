import { useContext } from "react";
import { TasksContext } from "../../Context/TasksContext";

export const Task = () => {
    const { tasksArray } = useContext(TasksContext);

    return (
        tasksArray.length >= 1 &&
        tasksArray.map((task, index) => (
            <div className="task-wrapper" key={index}>
                <div className="task-title-wrapper">
                    <p className="task-title">{task}</p>
                </div>
                <div className="task-options-wrapper">
                    <img src="" alt="erase-task-button" className="erase-task-button"/>
                    <img src="" alt="edit-task-button"  className="edit-task-button"/>
                </div>
            </div>
        ))
    );
}
