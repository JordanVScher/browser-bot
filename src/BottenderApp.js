export default async function App(context) {
	await context.sendText(`Você mandou: ${JSON.stringify(context.event.message)}`);
	await context.setState({ teste: 'foobar', event: context.event });
}
