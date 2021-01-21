const icons = [
	{
		'name': 'cat',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'crow',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'dog',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'dove',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'dragon',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'horse',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'hippo',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'fish',
		'prefix': 'fa-',
		'type': 'Animals',
		'family': 'fas',
	},
	{
		'name': 'carrot',
		'prefix': 'fa-',
		'type': 'Fruits & Vegetables',
		'family': 'fas',
	},
	{
		'name': 'apple-alt',
		'prefix': 'fa-',
		'type': 'Fruits & Vegetables',
		'family': 'fas',
	},
	{
		'name': 'lemon',
		'prefix': 'fa-',
		'type': 'Fruits & Vegetables',
		'family': 'fas',
	},
	{
		'name': 'pepper-hot',
		'prefix': 'fa-',
		'type': 'Fruits & Vegetables',
		'family': 'fas',
	},
	{
		'name': 'user-astronaut',
		'prefix': 'fa-',
		'type': 'People',
		'family': 'fas',
	},
	{
		'name': 'user-graduate',
		'prefix': 'fa-',
		'type': 'People',
		'family': 'fas',
	},
	{
		'name': 'user-ninja',
		'prefix': 'fa-',
		'type': 'People',
		'family': 'fas',
	},
	{
		'name': 'user-secret',
		'prefix': 'fa-',
		'type': 'People',
		'family': 'fas',
	},
];

const iconsContainer = document.getElementById('icons-container');
const colors = ['blue', 'orange', 'purple'];

icons.forEach((element) => {
	const {name, prefix, type, family} = element;
	let uppercaseName = name.toUpperCase();
	let color;
	if (type === 'Animals') {
		color = colors[0];
	} else if (type === 'Fruits & Vegetables') {
		color = colors[1];
	} else if (type === 'People') {
		color = colors[2];
	}

	iconsContainer.innerHTML += `
	<div>
		<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
		${uppercaseName}
	</div>
	`;
});
