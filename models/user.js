import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const schema = mongoose.Schema;

const UserSchema = new schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	joinDate: {
		type: Date,
		default: Date.now,
	},
	favorites: {
		type: [ schema.Types.ObjectID ],
		ref: 'Recipe',
	},
});

UserSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
		return next;
	}
	bcrypt.genSalt(10, (error, salt) => {
		if (error) {
			return next(error);
		}
		bcrypt.hash(this.password, salt, (error, hash) => {
			if (error) {
				return next(error);
			}
			this.password = hash;
			next();
		});
	});
});

export const User = mongoose.model('User', UserSchema);
