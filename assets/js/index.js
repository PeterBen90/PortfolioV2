// Loading Animation

const loadingAnimationTime = 2000;

const showMainAnimation = (parent) => {
	const boxContainer = document.createElement("div");
	boxContainer.style.overflow = "hidden";
	const box = document.createElement("div");
	box.classList.add("box", "flex");
	parent.appendChild(boxContainer);
	boxContainer.appendChild(box);
	const quote = ["Hello,", "my", "name", "is", "Peter"];
	let delay = 0;
	// Add all the words
	for (let word in quote) {
		let text = document.createElement("span");
		text.textContent = quote[word];
		text.classList.add("animate-slideup");
		delay = delay + 22;
		text.style.animationDelay = delay + "ms";
		box.appendChild(text);
	}
	const lastAnimationTime = 1000 + delay; // in ms
	// Add full stop
	let text = document.createElement("div");
	text.classList.add("fs", "flex");
	text.style.animationDelay = lastAnimationTime - 100 + "ms";
	box.appendChild(text);
};

const revealCurtain = (parent) => {
	const curtain = document.createElement("div");
	curtain.classList.add("flex", "curtain");
	parent.appendChild(curtain);
	const progressBar = document.createElement("div");
	progressBar.classList.add("progressBar");
	curtain.appendChild(progressBar);
	progressBar.classList.add("progressGrow-animation");
	return curtain;
};

const init = () => {
	const container = document.getElementById("main");
	const curtain = revealCurtain(container);
	setTimeout(() => {
		container.removeChild(curtain);
		showMainAnimation(container);
	}, loadingAnimationTime + 100);
};

init();

// Menu

function menuOnClick() {
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
	document.getElementById("menu-items").classList.toggle("hidden");
}

//Viewheight Fix

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
