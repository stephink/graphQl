const { buildSchema } = require('graphql')

exports.schema = buildSchema(`
    type user {
        id:ID
        name:String
        department:department
    }

    type department {
        deptId:ID
        name:departmentName
    }
    enum departmentName {
        Sales
        Accounts
        Development
    }
    
    type Query {
        getUser(id: ID): user
    }
    
    input userInput {
        id:ID
        name:String!
        department:departmentInput!

    }

    input departmentInput {
        deptId:ID
        name:departmentName!
    }
    
    type Mutation {
        createUser(input: userInput): user
    }
`);



// ! is set the feild mandatory
// input key word is used for input data
// Mutation keyword use to make change or add data 
// Query keyword is used to fetch data 