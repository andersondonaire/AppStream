export const getLangue = () => {
    let lang = navigator.language || navigator.userLanguage;
    return lang? lang : 'en-US';
}

