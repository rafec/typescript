interface User {
    name: string,
    email: string,
    address?: string
};

function getUser(): User {
    return {
        name: 'Rafael',
        email: 'rafael@mail.com'
    };
};

function setUser(user: User) {
    //...
};