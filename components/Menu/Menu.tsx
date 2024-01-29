import { menuAPI } from '../../api/menu';

export async function Menu() {
	const menu = await menuAPI(0);
	return (
		<main>
			<div>{JSON.stringify(menu)}</div>
		</main>
	);
}