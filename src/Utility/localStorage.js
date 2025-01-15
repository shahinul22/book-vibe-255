const getStoredBooks = (title) => {
    const storedBooks = localStorage.getItem(title);
    return storedBooks ? JSON.parse(storedBooks) : [];
};

const saveBook = (id, title) => {
    const storedBooks = getStoredBooks(title);
    if (!storedBooks.includes(id)) {
        storedBooks.push(id);
        localStorage.setItem(title, JSON.stringify(storedBooks));
    }
};

const getStoredJobApplication = () => {
    const storedJobApplications = localStorage.getItem('job-application');
    return storedJobApplications ? JSON.parse(storedJobApplications) : [];
};

const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplication();
    if (!storedJobApplications.includes(id)) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
};



export { getStoredBooks, saveBook, getStoredJobApplication, saveJobApplication };
