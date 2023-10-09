import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import CoursesIcon from './icons/Cources.svg';
import ServicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Books.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';

const FirstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {

	const buildFirstLevel = () => {
		return (
			<>
				{ FirstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={'/${menu.route}'}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory;
							})}>
								{ menu.icon }
								<span>{ menu.name }</span>
							</div>
						</a>
					</div>
				)) }
			</>
		);
	};

	const buildSecondLevel = () => {
		return
	};

	const buildThirdLevel = () => {
		return
	};

	return (
		<div className={styles.menu}>
			{ buildFirstLevel() }
		</div>
	);
};