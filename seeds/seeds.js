$(document).ready(function () {
    var appointments = new Array();
    var appointment1 = {
        id: "id1",
        description: "Surgerizing",
        location: "",
        subject: "In Surgery",
        calendar: "Doctor Hernandez ",
        start: new Date(2021, 09, 23, 9, 0, 0),
        end: new Date(2021, 09, 23, 16, 0, 0)
    }
    var appointment2 = {
        id: "id2",
        description: "",
        location: "",
        subject: "In Patient Counseling",
        calendar: "Doctor Saguilan",
        start: new Date(2021, 09, 24, 10, 0, 0),
        end: new Date(2021, 09, 24, 15, 0, 0)
    }
    var appointment3 = {
        id: "id3",
        description: "",
        location: "",
        subject: "In Patient Counseling",
        calendar: "Doctor Kilpatrick",
        start: new Date(2021, 09, 27, 11, 0, 0),
        end: new Date(2021, 09, 27, 13, 0, 0)
    }
    var appointment4 = {
        id: "id4",
        description: "",
        location: "",
        subject: "Golfing",
        calendar: "Doctor Stephens",
        start: new Date(2021, 09, 23, 16, 0, 0),
        end: new Date(2021, 09, 23, 18, 0, 0)
    }
    var appointment5 = {
        id: "id5",
        description: "",
        location: "",
        subject: "In Surgery",
        calendar: "Doctor Alvarez",
        start: new Date(2021, 09, 25, 15, 0, 0),
        end: new Date(2021, 09, 25, 17, 0, 0)
    }
    var appointment6 = {
        id: "id6",
        description: "",
        location: "",
        subject: "Seminar",
        calendar: "Doctor Stephens",
        start: new Date(2021, 09, 26, 14, 0, 0),
        end: new Date(2021, 09, 26, 16, 0, 0)
    }
    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    // prepare the data
    var source =
    {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: appointments
    };
    var adapter = new $.jqx.dataAdapter(source);
    $("#scheduler").jqxScheduler({
        date: new $.jqx.date(2021, 09, 23),
        width: 700,
        height: 500,
        source: adapter,
        view: 'weekView',
        showLegend: true,
        ready: function () {
            $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
        },
        resources:
        {
            colorScheme: "scheme05",
            dataField: "calendar",
            source: new $.jqx.dataAdapter(source)
        },
        appointmentDataFields:
        {
            from: "start",
            to: "end",
            id: "id",
            description: "description",
            location: "place",
            subject: "subject",
            resourceId: "calendar"
        },
        views:
        [
            'dayView',
            'weekView',
            'monthView'
        ]
    });
});