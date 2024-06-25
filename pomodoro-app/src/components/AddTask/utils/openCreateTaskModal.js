export const openCreateTaskModal = (isCounterActive, setIsCreateTaskOpen) => {
    if(isCounterActive) return;    
    setIsCreateTaskOpen(true)
}