import { Col, Container, Row } from '@components/atoms/grid';
import Typography from '@components/atoms/typography';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Container>
				<Row>
					<Col offsetSm={2} sm={8}>
						<Container>
							<Row>
								<Col sm={12}>
									<Typography variant='h1'>
										{t('pages.about.welcome')}
									</Typography>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<Typography variant='body1'>
										{t('pages.about.description')}
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

export default About;
