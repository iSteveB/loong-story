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

    let newDate = new Date(timestamp).toLocaleDateString('fr-FR', options);

    return newDate.toString();
};

export const timestampParser = (num) => {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    let date = new Date(num).toLocaleDateString('fr-FR', options);

    return date.toString();
};

export const isEmpty = (obj) => {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== "object") return true;
    for (let key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
  