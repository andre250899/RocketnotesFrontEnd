import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import avatarPlaceholder from '../../assets/user-default.png';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Header() {
	const { signOut, user } = useAuth();

	const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

	return (
		<Container>

			<Profile to='/profile'>
				<img src={avatarUrl} 
					alt="imagem do usuário" 
				/>

				<div>
					<span>Bem vindo</span>
					<strong>André Muniz</strong>
				</div>
			</Profile>  

			<Logout onClick={signOut}>
				<RiShutDownLine/>
			</Logout>
      
		</Container>
	);
}