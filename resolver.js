const { v4: uuidv4 } = require('uuid');

class userClass {
    constructor(id, {
        name, department
    }) {
        this.id = id
        this.name = name
        this.department = department
    }
};

const userData = {}; //key-value pair {id:{id:...}}

exports.resolvers = {
    getUser: ({ id }) => {
        return new userClass(id, userData[id])
    },
    createUser: ({ input }) => {
        let id = uuidv4();
        userData[id] = input;
        return new userClass(id, input)

    }
}