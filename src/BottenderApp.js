import maAPI from './utils/assistenteAPI';

const profileID = process.env.REACT_APP_PROFILE_ID;


export default async function App(context) {
	await context.setState({ profileData: await maAPI.getProfileData(profileID) });
	await context.sendText(`Você mandou: ${JSON.stringify(context.event.message)}`);
}
