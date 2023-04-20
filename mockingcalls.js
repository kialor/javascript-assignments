let users = [
    {
    id: 1,
    name: "John", 
    email: "john@email.com"
    },
    {
    id: 2,
    name: "Sally", 
    email: "sally@email.com"
    }
];

function fetchUserById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    for(let i=0; i<users.length; i++) {
        if (users[i].id === id) {
            resolve(users[i]);
            return;
        }
    }
            reject("id not found");
    }, 1000);
});
}

fetchUserById(1)
    .then((user1) => {
        console.log("Fetched user:", user1);
        return fetchUserById(2);
    })
    .then((user2) => {
        console.log("Fetched user: ", user2);
        // return fetchUserById(3) CHECK TO SEE IF ERROR WORKS
    })
    // .then((user3) => {
    //     console.log("Fetched user: ", user3);
    //     return fetchUserById(3)
    // })
    .catch((error) => {
        console.error("Error fetching user:", error);
    });
