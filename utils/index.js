// Shortering text for title and other thing
export const textShortering = (text, length) => {
    if (text) {
        if (text.length > +length) {
            text = `${text.slice(0, length + 1)}...`;
        }
        return text;
    }
}