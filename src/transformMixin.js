export const transformMixin = {
    computed: {
        reverseTextComputed() {
            return this.text
                .split("")
                .reverse()
                .join("");
        },
        countLetterComputed() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}