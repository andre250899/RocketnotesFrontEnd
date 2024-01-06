import { Container, Links, Content } from'./styles.js';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

	return (
		<Container>
			<Header/>

			<main>
				<Content>
					<ButtonText title='Excluir Nota'/>

					<h1>
            Introdução ao React
					</h1>

					<p>
            Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
            Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
            A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
					</p>

					<Section title='Links úteis'>
						<Links>
							<li><a href="#">https://www.rocketseat.com.br</a></li>
							<li><a href="#">https://www.rocketseat.com.br</a></li>
						</Links>
					</Section>

					<Section title='Marcadores'>
						<Tag title='express'/>
						<Tag title='node'/>
					</Section>

					<Button title='Voltar'/>
				</Content>
			</main>

		</Container>
	);
}