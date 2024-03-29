import { Metadata } from 'next';
import { getPage } from '../../../api/page';
import { menuAPI } from '../../../api/menu';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Страница',
};

export async function generateStaticParams() {
	const menu = await menuAPI(0);
	return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	return (
		<div>
			Страница с alias { params.alias }
		</div>
	);
}