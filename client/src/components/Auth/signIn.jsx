// import React from 'react';
// // import Recipes from '../queries/queryComponent';

// function signIn() {
// 	return (
// 		<div>
// 			<h1>signIn</h1>
// 		</div>
// 	);
// }

// export default signIn;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from './myStyle';
import schema from '../../configs/ValSchema';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {},
			dialogError: true,
			touched: {},
		};
	}

	handleTextChange = e => {
		const { touched } = this.state;
		touched[e.target.name] = true;
		this.setState(
			{
				touched,
				[e.target.name]: e.target.value,
			},
			this.validation,
		);
	};

	validation = () => {
		const { email, password } = this.state;
		schema
			.validate({ email, password }, { abortEarly: false })
			.then(res => {
				this.setState({
					dialogError: false,
					error: {},
				});
			})
			.catch(err => {
				const parsedError = [];
				err.inner.map(item => {
					if (!parsedError[item.path]) {
						parsedError[item.path] = item.message;
					}
					return null;
				});

				this.setState({
					error: parsedError,
					dialogError: true,
				});
			});
	};

	render() {
		const { error, dialogError, touched } = this.state;
		const { classes } = this.props;
		const { email, password } = error;
		const emailField = 'email' in error && 'email' in touched;
		const passwordField = 'password' in error && 'password' in touched;
		const emailHelper = emailField ? email : '';
		const passwordHelper = passwordField ? password : '';

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Login
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							onClick={this.handleTextChange}
							onChange={this.handleTextChange}
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							error={emailField}
							helperText={emailHelper}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<MailIcon />
									</InputAdornment>
								),
							}}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							onClick={this.handleTextChange}
							onChange={this.handleTextChange}
							label='Password'
							type='password'
							error={passwordField}
							helperText={passwordHelper}
							id='password'
							autoComplete='current-password'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<VisibilityOff />
									</InputAdornment>
								),
							}}
						/>

						<Button
							type='submit'
							disabled={dialogError}
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(SignIn);
