export default {
    limitDescription: (words, qtdLetters) => {
        let descriptionMovie = words
        if (descriptionMovie.length > qtdLetters) {
            descriptionMovie = descriptionMovie.substring(0, qtdLetters) + '...'
        }
        return descriptionMovie
    },
    toInt: (number) => {
        let numFixed = Number(number.toFixed(1))
        let numInteger = numFixed * 10
        return numInteger
    }
}