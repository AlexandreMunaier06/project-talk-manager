function randomString(length) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        result += caracteres.charAt(indice);
    }
    return result;
}

module.exports = randomString;