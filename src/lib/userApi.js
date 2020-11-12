import { post, patchEditProfile } from "../lib/request";
import redirect from "../lib/redirect";
import { validateEditUser, validateNewUser } from "./validation";

//Register
export const createUser = async (
	first_name,
	last_name,
	username,
	email,
	biography,
	password,
	password_confirmation
) => {
	try {
		const response = await post("/api/v1/users/signup/", {
			first_name,
			last_name,
			username,
			email,
			password,
			password_confirmation,
			profile: { biography },
		});
		return response;
	} catch (error) {
		return error.response && error.response.status === 422
			? "Email is already taken."
			: "Unknown error. Please try again";
	}
};

export const signUp = async (
	username,
	first_name,
	last_name,
	email,
	biography,
	password,
	password_confirmation
) => {
	const error = validateNewUser(
		username,
		first_name,
		last_name,
		email,
		biography,
		password,
		password_confirmation
	);
	if (error) {
		return error;
	}

	const res = await createUser(
		username,
		first_name,
		last_name,
		email,
		biography,
		password,
		password_confirmation
	);
	if (!res.data) {
		return res;
	}
	redirect("/welcome");
	return null;
};

//Profile

export const editUser = async (first_name, last_name, username) => {
	try {
		const response = await patchEditProfile(username, {
			first_name,
			last_name,
			username,
		});

		console.log(response);
		return response;
	} catch (error) {
		return error.response && error.response.status === 422
			? "Email is already taken."
			: "Unknown error. Please try again";
	}
};

export const editProfile = async (first_name, last_name, username) => {
	// const error = validateEditUser(first_name, last_name, username, biography);
	// if (error) {
	// 	return error;
	// }
	const res = await editUser(first_name, last_name, username);
	if (!res.data) {
		return res;
	}
	return null;
};
