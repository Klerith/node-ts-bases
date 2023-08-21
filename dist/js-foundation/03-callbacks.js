"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user);
}
exports.getUserById = getUserById;
