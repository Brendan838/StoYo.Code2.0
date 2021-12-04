// Collect the folder ids and save them to an array
export const getSavedFolderIds = () => {
    const savedFolderIds = localStorage.getItem("saved_folders")
    ? JSON.parse(localStorage.getItem('saved_folders'))
    : [];

    return savedFolderIds;
};

export const saveFolderIds = (folderIdArr) => {
    if (folderIdArr.length) {
        localStorage.setItem('saved_folders', JSON.stringify(folderIdArr));
    } else {
        localStorage.removeItem('saved_folders');
    }
};

// Collect all saved snippet Ids and save to local storage array
export const getSavedSnippetIds = () => {
    const savedSnippetIds = localStorage.getItem('saved_snippets')
    ? JSON.parse(localStorage.getItem('saved_snippets'))
    : [];

    return savedSnippetsIds;
};

export const saveSnippetIds = (snippetIdArr) => {
    if (snippetIdArr.length) {
        localStorage.setItem('saved_snippets', JSON.stringify(snippetIdArr));
    } else {
        localStorage.removeItem('saved_snippets');
    }
};