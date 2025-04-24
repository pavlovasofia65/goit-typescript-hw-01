type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}
function createOrUpdateUser(initialValues: Partial<User>): User{
    const defaultValues: User = {
        name: '',
        surname: '',
        email: '',
        password: ''
    }
    return {
        ...defaultValues,
        ...initialValues
    }
}
const user = createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});