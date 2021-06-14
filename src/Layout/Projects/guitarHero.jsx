import { Image } from "../Common/Masonry";

const GuitarHero = ({ title }) => {
	const imagePath = "/img/gh/";
	const guitarheroImages = [
		{
			lowRes: "gh-controller-720-low.jpg",
			hiRes: "gh-controller-high-min.jpg",
			description: "Finished Guitar Hero Controller External",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "gh-internals-720-min.jpg",
			hiRes: "gh-internals-720-min.jpg",
			description: "Finished Guitar Hero Controller Internal",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "gh-pcb-720-min.jpg",
			hiRes: "gh-pcb-720-min.jpg",
			description: "Prototype Pcb",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "gh-switch-720-min.jpg",
			hiRes: "gh-switch-720-min.jpg",
			description: "Keyboard switches on prototype pcb",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "gh-arduino-720-min.jpg",
			hiRes: "gh-arduino-720-min.jpg",
			description: "Arduino Leonardo",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Description</h2>
				<p>
					I had an old PS2 wireless Guitar Hero Guitar that didn't work anymore.
					I started playing Clone Hero on PC, which is a fan made version of
					Guitar Hero that is designed to support song charts from Rock Band,
					Guitar Hero, and custom ones made by the community. To get this guitar
					to work on PC I removed the original circuit board and replaced it
					with a prototype board and connected it to an Arduino Leonardo. The
					Arduino Leonardo is then connected to the PC to function as a
					controller.
				</p>
				<h2>Gallery</h2>
				<br className="clear" />
				<div className="masonry">
					{guitarheroImages.map((image, index) => {
						return (
							<Image
								key={index}
								path={imagePath}
								lowRes={image.lowRes}
								highRes={image.hiRes}
								description={image.description}
								author={image.author}
								year={image.year}
							/>
						);
					})}
				</div>
				<br className="clear" />
				<h2>Arduino Leonardo Code</h2>
				<pre>
					<code>
						{`#include ${"<"}Joystick.h${">"}

const int BoardLED = 13;

const int numButtons = 9;
const int startPin = 4;

Joystick_ Joystick(JOYSTICK_DEFAULT_REPORT_ID,JOYSTICK_TYPE_GAMEPAD,
  numButtons, 0,         // Button Count, Hat Switch Count
  true, true, false,     // X and Y, but no Z Axis
  false, false, false,   // No Rx, Ry, or Rz
  false, false,          // No rudder or throttle
  false, false, false);  // No accelerator, brake, or steering

void setup() {
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(6, INPUT_PULLUP);
  pinMode(7, INPUT_PULLUP);
  pinMode(8, INPUT_PULLUP);
  pinMode(9, INPUT_PULLUP);
  pinMode(10, INPUT_PULLUP);
  pinMode(11, INPUT_PULLUP);
  pinMode(12, INPUT_PULLUP);
  pinMode(BoardLED, OUTPUT);

  Serial.begin(9600);

  // Initialize Joystick Library
  Joystick.begin();
  Joystick.setXAxisRange(-(1023-499), (1023-499));
  Joystick.setYAxisRange(-(511), (511));
}

// Last state of buttons
int lastButtonState[numButtons] = {0,0,0,0,0,0,0,0,0};
int LEDState = LOW;

void loop() {
  // Digital
  int offset = 0;
  for (int index = 0; index &lt; numButtons; index++)
  {
    int currentButtonState = !digitalRead(index+offset + startPin);
    if (currentButtonState != lastButtonState[index])
    {
      Joystick.setButton(index, currentButtonState);
      lastButtonState[index] = currentButtonState;
    }
  }

  // Analog
  int sensorValue = analogRead(A0);
  Joystick.setXAxis(sensorValue-499);
  int tiltValue = analogRead(A1);
  Joystick.setYAxis(tiltValue/2);
  
  delay(10);
}`}
					</code>
				</pre>
			</article>
		</>
	);
};

export default GuitarHero;
