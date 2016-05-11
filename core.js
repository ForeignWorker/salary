$(document).ready(function () {
	//init the calendar
	$('#calendar').clndr({
			template:
			'<div class="z-depth-2">' +
            '<div class="controlls lighten-3 colored">' +
                "<div class='waves-effect clndr-previous-button material-icons controlls-button'>&#xE408;</div>" +
            	"<div class='month controlls-month'><%= month %> <%= year %></div>" +
                "<div class='waves-effect clndr-next-button material-icons controlls-button'>&#xE315;</div>" +
            '</div>' +
        "<table>" +
            "<thead>" +
                "<tr class='header-days lighten-3 colored'>" +
                "<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
                    "<td class='header-day'><%= daysOfTheWeek[i] %></td>" +
                "<% } %>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<% for(var i = 0; i < numberOfRows; i++){ %>" +
                "<tr>" +
                "<% for(var j = 0; j < 7; j++){ %>" +
                "<% var d = j + i * 7; %>" +
                    "<td class='waves-effect colored lighten-4 <%= days[d].classes %>'>" +
                        "<div class='day-contents'><%= days[d].day %></div>" +
                    "</td>" +
                "<% } %>" +
                "</tr>" +
            "<% } %>" +
            "</tbody>" +
        "</table>" +
        '</div>',
        weekOffset: 1,
        daysOfTheWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        classes: {
        	today: 'today colored lighten-3'
        },
        clickEvents: {
        	onMonthChange: function(month) {
        		COLOR_CHANGE();
        	}
        }
		});
	//init the calendar colors
		COLOR_CHANGE();
		$('#set').click(function (e) {
			var input = $('#hours');
			var date = sessionStorage.getItem('date');
			e.preventDefault();
			
	});
});



