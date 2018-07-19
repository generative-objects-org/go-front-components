export function getDateFromSlashedDate(slashedDate) {
    let parts = slashedDate.split('/');
    if (parts.length !== 3) return null;

    let day = parseInt(parts[0]),
        month = parseInt(parts[1]),
        year = parseInt(parts[2]);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }

    let monthString = month < 10 ? '0' + month : month.toString();
    let dayString = day < 10 ? '0' + day : day.toString();

    let date = new Date(`${year}-${monthString}-${dayString}T00:00:00Z`);

    if (date instanceof Date && !isNaN(date)) {
        return date;
    }
    return null;
}

export function getDashedDate(dateObject) {
    if (!dateObject || !(dateObject instanceof Date && !isNaN(dateObject)))
        return null;
    return (
        dateObject.getFullYear() +
        '-' +
        ('0' + (dateObject.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + dateObject.getDate()).slice(-2)
    );
}
