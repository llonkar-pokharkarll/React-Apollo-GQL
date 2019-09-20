export default theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '50px',
		border: '2px solid #e5e5e5',
		// display: 'flex',
		// flexWrap: 'wrap',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	// form: {
	// 	width: '100%',
	// 	marginTop: theme.spacing(1),
	// },
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});
