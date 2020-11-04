const soohee={
    name: "soohee",
    age:23,
    gender:"female"
};

const resolvers = {
    Query:{
        person:()=>soohee
    }
};

export default resolvers;
