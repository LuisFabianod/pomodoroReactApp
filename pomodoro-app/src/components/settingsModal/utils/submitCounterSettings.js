export const submitCounterSettings = (event, setSettingsDidModified, setIsSettingsOpen ) => {
    event.preventDefault();
    setSettingsDidModified(true);
    setIsSettingsOpen(false);

};