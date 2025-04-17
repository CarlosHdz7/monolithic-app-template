import { Col, Container, Row } from '@components/atoms/grid';
import Typography from '@components/atoms/typography';
import { classNamesModule } from '@utils/classNamesModule';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

const formStyles = classNamesModule(styles, 'form');

const Home: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Container>
				<Row>
					<Col offsetSm={2} sm={8}>
						<Container className={formStyles}>
							<Row>
								<Col sm={12}>
									<Typography variant='h1'>
										{t('pages.home.welcome')}
									</Typography>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<Typography variant='body1'>
										{t('pages.home.description')}
									</Typography>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
