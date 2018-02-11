// script.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops',
	dinosaurUpperCased = dinosaur.toUpperCase(),
	textDinosaur = text.replace('Velociraptor', dinosaurUpperCased),
	partOftextDinosaur = textDinosaur.slice(0,72);

console.log(textDinosaur.length/2);
console.log(partOftextDinosaur);


