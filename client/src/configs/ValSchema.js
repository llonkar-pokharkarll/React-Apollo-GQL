import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
	current: yup.string().oneOf([ yup.ref('password'), null ], 'password must match'),
	name: yup.string().min(3),
});

export default schema;
