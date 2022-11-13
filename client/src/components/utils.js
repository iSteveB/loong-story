export const dateParser = (date) => {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    let timestamp = Date.parse(date);

    let newDate = new Date(timestamp).toLocaleDateString('fr-FR', options)

    return newDate.toString();
};
