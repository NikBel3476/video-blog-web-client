import { NextPage } from 'next';
import InputText from '../../components/inputs/InputText';
import RegistrationForm from '../../components/forms/RegistrationForm/RegistrationForm';

const RegistrationPage: NextPage = () => {
	return (
		<main>
			<RegistrationForm />
		</main>
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default RegistrationPage;
