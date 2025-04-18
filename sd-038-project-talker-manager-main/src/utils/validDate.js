const isValidDate = (dateStr) => {
    // Regex para validar o formato dd/mm/aaaa
    const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regex.test(dateStr)) return false;

    // Validação real da data (evita coisas como 31/02/2024)
    const [day, month, year] = dateStr.split('/').map(Number);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
};

module.exports = isValidDate;
