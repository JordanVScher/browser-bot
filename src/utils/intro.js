const introMsg = {
	messages: [
		{
			content: 'Hi',
		},
		{
			content: 'Click a button',
		},
	],
	action: {
		type: 'button',
		action: [
			{
				text: 'One',
				value: 'one',
			},
			{
				text: 'Two',
				value: 'two',
			},
		],
	},
};

module.exports = introMsg;
