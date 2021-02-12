// Configuramos los Mutations

module.exports = {

    createCourse: (root, { input }) => {
        console.log(input);
        return input
    },

    createStudent: (root, { input }) => {
        console.log(input);
        return input
    }

}
