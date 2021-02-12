// Configuramos los resolvers

const courses = [
    {
        _id: "1",
        title: '1 Title',
        teacher: '1 Teacher',
        description: '1 Description',
        topic: '1 Topic',
    },
    {
        _id: "2",
        title: '2 Title',
        teacher: '2 Teacher',
        description: '2 Description',
        topic: '2 Topic',
    },
    {
        _id: "3",
        title: '3 Title',
        teacher: '3 Teacher',
        description: '3 Description',
        topic: '3 Topic',
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root ,args, ) => {
            console.log(root, args);
            return courses.find(course => course._id === args._id)
        }
    }
}
