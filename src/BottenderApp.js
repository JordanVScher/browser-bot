import maAPI from './utils/assistenteAPI';
import flow from './utils/flow';
import attach from './utils/attach';

const profileID = process.env.REACT_APP_PROFILE_ID;


export default async function App(context) {
	await context.setState({ profileData: await maAPI.getProfileData(profileID) });
	await context.sendText(`Você mandou: ${JSON.stringify(context.event.message)}`);

	const { message } = context.event;
	if (message.type === 'button') {
		const { value } = message;
		if (value === 'teste') {
			await context.setState({ dialog: 'teste' });
		} else {
			await context.setState({ dialog: value });
		}
	}


	switch (context.state.dialog) {
	case 'greetings':
		await context.sendText(flow.greetings.text1.replace('<USERNAME>', 'cidadão'));
		await attach.sendMsgFromAssistente(context, 'greetings', [flow.greetings.text2]);
		// await dialogs.sendMainMenu(context, flow.mainMenu.firstTime);
		break;

	default:
		break;
	}
}
