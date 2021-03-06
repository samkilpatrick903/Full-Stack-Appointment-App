const { Appointments } = require("../models")

const appointments = 
[
 {
        "id": 1,
        "description": "Surgerizing",
        "location": "",
        "subject": "In Surgery",
        "calendar": "Doctor Hernandez ",
        "start": new Date(2021, 09, 23, 9, 0, 0),
        "end": new Date(2021, 09, 23, 16, 0, 0)
    },
    {
        "id": 2,
        "description": "",
        "location": "",
        "subject": "In Patient Counseling",
        "calendar": "Doctor Saguilan",
        "start": new Date(2021, 09, 24, 10, 0, 0),
        "end": new Date(2021, 09, 24, 15, 0, 0)
    },
    {
        "id": 3,
        "description": "",
        "location": "",
        "subject": "In Patient Counseling",
        "calendar": "Doctor Kilpatrick",
        "start": new Date(2021, 09, 27, 11, 0, 0),
        "end": new Date(2021, 09, 27, 13, 0, 0)
    },
    {
        "id": 4,
        "description": "",
        "location": "",
        "subject": "Golfing",
        "calendar": "Doctor Stephens",
        "start": new Date(2021, 09, 23, 16, 0, 0),
        "end": new Date(2021, 09, 23, 18, 0, 0)
    },
    {
        "id": 5,
        "description": "",
        "location": "",
        "subject": "In Surgery",
        "calendar": "Doctor Alvarez",
        "start": new Date(2021, 09, 25, 15, 0, 0),
        "end": new Date(2021, 09, 25, 17, 0, 0)
    },
   {
        "id": 6,
        "description": "",
        "location": "",
        "subject": "Seminar",
        "calendar": "Doctor Stephens",
        "start": new Date(2021, 09, 26, 14, 0, 0),
        "end": new Date(2021, 09, 26, 16, 0, 0)
    }
]
module.exports = appointments