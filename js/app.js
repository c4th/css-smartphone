/*
 * Modules
 */

app = {

	/*
	 * Chargement du DOM
	 */
	init: function() {
		console.info("app.init")

		app.clock()

		$("#home-button").on("click", app.launch)

	},
	launch: function() {
		console.info("app.launch")

		if ( $("#home-screen").attr("class") == "hidden" ) {
			$("#overlay").fadeOut()
			$("#home-screen").fadeIn().removeClass("hidden").addClass("visible")	

			$("#infos").animate({
				top: "100px"
			}, 500)
		} else {
			$("#home-screen").fadeOut(function() {
				$(this).removeClass("visible").addClass("hidden")
			})
			$("#overlay").fadeIn()

			$("#infos").animate({
				top: "150px"
			}, 500)
		}

	},
	clock: function() {
		console.info("app.clock")

		/* Current date */
		var days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
		var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

			// création d'un nouvel objet
		var newDate = new Date() 

			// retourne la date actuelle à partir de l'objet
		newDate.setDate(newDate.getDate()) 

		var currentDay = days[newDate.getDay()]
		var currentDayNum = newDate.getDate()
		var currentMonth = months[newDate.getMonth()]
		var currentYear = newDate.getFullYear()

			// Date assemblée en une string
		var currentDate = currentDay + " " + currentDayNum + " " + currentMonth + " " + currentYear
		$("#date").html(currentDate)

		setInterval( function() {
			var currentMinutes = new Date().getMinutes()
			currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes
			$("#minutes").html(currentMinutes)	

			var currentHours = new Date().getHours()
			currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours
			$("#hours").html(currentHours)		

			var currentTime = currentHours + ":" + currentMinutes
			$("#tiny-clock").html(currentTime)

		}, 1000)
	}
}



/*
 * Chargement du DOM
 */
$(function() {
	app.init()
})