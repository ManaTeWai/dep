import { Htag } from '../Htag/Htag';
import { HeaderProps } from './Header.Props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<div {...props}>
			<Htag tag='h1'>Header</Htag>
		</div>
	);
};