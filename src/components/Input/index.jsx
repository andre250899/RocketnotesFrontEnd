import { Container } from './styles';

export function Input({ icon: Icon = false, ...rest }) {
	return (
		<Container>
			{Icon && <Icon size={20} />}
			<input {...rest} />
		</Container>
	);
}