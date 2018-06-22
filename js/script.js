"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
"scene1": "patient.png",
"scene2": "bar.jpg",
"scene3": "scene1.jpg"
};

// Define the Characters
const characters = {
	"a": {
		"Name": "Aylin",
		"Color": "#5bcaff",
		"Face": "aylin_erzählend.png"
	}
	,
	"er": {
		"Name": "Erzieherin",
		"Color": "#5bcaff"
	}
	,
	"k1": {
		"Name": "Erzieherin",
		"Color": "#5bcaff"
	}
	,
	"f": {
		"Name": "Finn",
		"Color": "#5bcaff",
		"Face": "finn_erzählend.png"
	}
	,
	"m": {
		"Name": "Melina",
		"Color": "#5bcaff",
		"Face": "melina_erzählend.png"
	}
	,
	"e": {
		"Name": "Erzähler",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
	
	"e Deinen ersten Arbeitstag im Kindergarten hast du schon fast geschafft! Es ist schon Mittag und es gibt Essen."
	// Bild 1
	
	, "er Schaut mal Kinder, heute gibt’s Spaghetti Bolognese! Guten Appetit, lasst es euch schmecken."
	, "k1 Ähh, der ist voll komisch, der isst gar keine Soße! Ätschi, Nudelkopf."
	, "er Was ist denn hier los, hör auf damit! Das haben wir doch schon so oft gehabt. Manche Kinder mögen Fleisch und manche essen keines."
	
	, "scene scene2 fadeIn"
	
	, "a Hey, wie war eigentlich dein erster Tag in Kindergarten?"
	, "er Boah, war echt anstrengend. Beim Mittagessen haben sich zwei Kinder fast geprügelt."
	, "m Was war denn los?"
	, "er Das eine hat keine Soße zu den Nudeln gegessen, weil da Fleisch drin war. Das andere hat sie dann beleidigt und ausgelacht. Und das war wohl nicht das erste Mal. Jetzt überlegen alle Erzieher, ob es jetzt mittags nur noch fleischlos gibt."
	, "a Ich hab sowas auch schon erlebt, bei mir hat das ja religiöse Gründe. Bei uns ist es nämlich so: Schweinefleisch geht gar nicht und die anderen Tiere müssen besonders geschlachtet werden."
	, "f Das ist ja mega aufwendig, warum macht ihr das denn?"
	, "a Das Fleisch muss halt halal sein, das steht im Koran. Was ist die persönlich-spirituelle Begründung? Wenn ich darauf achte, dann merke, dass ich mit meinem Gott verbunden bin. Und wenn alle anderen Muslime das auch machen, dann fühle ich mich mit denen zusammengehörig. Wir sind zu einer Gemeinschaft verbunden."
	, "f Ich weiß nicht, ob ich das immer durchhalten könnte."
	, "a Das geht schon, man muss sich nur dran gewöhnen. Letzte Woche zum Beispiel war ich mit Freunden grillen, da hab ich Lamm mitgebracht. Das ist erstens kein Stress und zweitens richtig lecker."
	, "m Das ist ja fast wie bei uns. Auch wir haben Gebote, um in Kontakt mit Gott zu bleiben. Immer, wenn ich etwas esse, überlege ich vorher, ob das koscher ist und denk dabei an Gott."
	, "a Und koscher ist, was in der Tora steht?"
	, "m Ja, genau. Also auch kein Schweinefleisch und wir essen auch nichts, wo Milch drin ist, zusammen mit Fleisch. Sehr streng gläubige Juden essen sogar kein Fleisch aus Töpfen, wo Milch drin war. "
	, "f Werden bei euch die Tiere nicht auch anders geschlachtet und müssen ausbluten?"
	, "m Ja, denn in der Tora steht, dass das Blut Sitz der Seele ist. Und das dürfen Menschen nicht essen, denn das gehört Gott. Wenn ich das mache, hab ich eine Verbindung zu meinen Verwandten und auch allen Juden, die früher gelebt haben. Die das auch gemacht haben und sind Gott begegnet. Das erzählt auch die Tora."
	, "f Da macht ihr euch ja echt Mühe. Bei uns ist das nicht so ausgeprägt. Ich kenn das so, dass wir am Karfreitag fasten. Damit erinnern wir uns an den Tag, an dem Jesus gekreuzigt wurde. Mein Onkel macht das noch so, dass er jeden Freitag kein Fleisch ist. Das ist auch zur Erinnerung die Kreuzigung. Da sehen wir, dass Gottes Liebe selbst da nicht aufgehört hat, wo es ihn das Leben gekostet hat."
	, "m So was wie Fasten kenn ich auch.",
	, "a Ja, ich auch, aber das bei euch, Finn, ist ja schon ziemlich speziell. Gibt’s auch was, was ihr normal bei jedem Essen macht?"
	, "f Auch wir denken an Gott beim Essen. Aber bei uns gibt’s auch Blutwurst. Wir sprechen dann ein Dankgebet. Bei jedem Essen denken wir an Gott und sprechen ein kurzes Gebet als Dank dafür, dass er letztlich für unser Essen verantwortlich ist."
	
	// Bild 3
	
	, "e Nach einem langen Abend der Freunde steht am nächsten Tag das Treffen der Erzieher*innen an. Die Frage ist, ob man fleischloses Essen verpflichtend für alle Kinder machen soll. Deine Anleiterin fragt dich kurz vor dem Treffen, was du denn dazu denkst. Wofür setzt du dich ein?"

	,"end"
	]
};