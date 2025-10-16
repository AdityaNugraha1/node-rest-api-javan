const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

let users = [
    { id: '1', name: 'Budi Santoso', email: 'budi.santoso@example.com' },
    { id: '2', name: 'Siti Aminah', email: 'siti.aminah@example.com' }
];

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
});

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Successfully retrieved all users.',
        data: users
    });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: `User with ID ${id} not found.`
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'User found.',
        data: user
    });
};

exports.createUser = (req, res) => {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid input.',
            errors: error.details.map(err => err.message)
        });
    }

    const newUser = {
        id: uuidv4(),
        name: value.name,
        email: value.email
    };

    users.push(newUser);

    res.status(201).json({
        status: 'success',
        message: 'User created successfully.',
        data: newUser
    });
};