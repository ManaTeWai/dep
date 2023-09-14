import { Htag } from '../Htag/Htag';
import { SidebarProps } from './Sidebar.Props';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Htag tag="h1">Sidebar</Htag>
		</div>
	);
};