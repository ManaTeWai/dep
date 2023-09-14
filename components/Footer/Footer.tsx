import { P } from '../P/P';
import { FooterProps } from './Footer.Props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<P size="medium">OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</P>
			<P size='medium'><a href="#" target='_blank'>Пользовательское соглашение</a></P>
			<P size='medium'><a href='#' target='_blank'>Политика конфиденциальности</a></P>
		</footer>
	);
};