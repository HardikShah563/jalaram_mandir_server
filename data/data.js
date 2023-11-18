// creating sample data
const donations = [
    {
        "receiptNo": 1,
        "name": "Pragji Narshi Bhanushali",
        "address": "Bhandup",
        "phoneNo": "1111111111",
        "mode": "cash",
        "amount": 501,
        "receiptDate": "2023-06-11",
        "eventName": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 2,
        "name": "Virchandas Vasanji Somaiya",
        "address": "Bhandup",
        "phoneNo": "1111111111",
        "mode": "cash",
        "amount": 251,
        "receiptDate": "2023-06-11",
        "eventName": "Shri Jalaram Jayanti"
    },
];

const events = [
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "2023-04-10",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "2023-06-12",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "2023-09-13",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "2023-11-19",
    },
    {
        "name": "Julelal Jayanti 2024",
        "time": "5:00",
        "date": "2024-01-10",
    }
];

import bcrypt from "bcryptjs";
const users = [
    {
        "name": "Hardik",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("hardik1234"),
        "isAdmin": true,
    },
    {
        "name": "Tushar",
        "email": "tusharcomtek@gmail.com",
        "password": bcrypt.hashSync("tushar1234"),
        "isAdmin": true,
    },
    {
        "name": "Jalaram Mandir",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("jalaram1234"),
        "isAdmin": false,
    }
];

// exporting sample data
export default {
    donations,
    events,
    users,
}