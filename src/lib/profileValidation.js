export const validateNewUser = (first_name, last_name, username, biography) => {
	if (!first_name) {
		return "Your first name is required.";
	}
	if (!last_name) {
		return "Your last name  is required.";
	}
	if (!username) {
		return "Please, tell us what do you want be called.";
	}

	if (!biography)
		return "We need know your music preferences, please fill this field";

	if (password !== password_confirmation) {
		return "Password and confirmation password must match.";
	}

	return validateCredentials(email, password);
};

export const validateCredentials = (email, password) => {
	if (!email || !password) {
		return "Email and password fields are required.";
	}

	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return "Email does not have right format.";
	}

	if (!(password.length >= 8)) {
		return "Password needs at least 8 characters.";
	}

	return null;
};
