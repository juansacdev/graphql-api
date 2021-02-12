// Configuramos los Mutations

module.exports = {
    createCourse: (root, { input }) => {
        console.log(input);
        return input
    }
}
