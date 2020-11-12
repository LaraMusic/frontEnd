import React, { useState } from "react";
import Error from "../../lib/Error";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../Hooks/useForm";
import userImage from "../../../assets/img/user.jpg";
import Com__SectionProfileStyle from "../Style/Profile/Com__SectionProfileStyle";

const SectionProfile = () => {
	const { user = {} } = useAuth();
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState("");

	const [formRegisterValues, handleRegisterInputChange, reset] = useForm({
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		biography: "",
		password: "",
		password_confirmation: "",
	});

	const {
		first_name,
		last_name,
		username,
		email,
		biography,
		password,
		password_confirmation,
	} = formRegisterValues;

	const handleSubmit = async (e) => {
    e.preventDefault();
  
    if(isEditing) {
         setIsEditing(false);
         //llamar api con datos
    } else {
      setIsEditing(true)
    }

		const error = await signUp(
			first_name,
			last_name,
			username,
			email,
			biography,
			password,
			password_confirmation
		);
		if (error) {
			setError(error);
		}
		return false;
	};

	return (
		<>
			{error && <Error message={error} />}
			{user && (
				<section id='sectionProfile'>
					<div className='userInf'>
						<div>
							<img className='userInf__photo' src={userImage} alt={user.username} />
						</div>
						<h2>{user.username} </h2>
						{/* <h4>Change Password</h4> */}
					</div>
					<div className='userForm'>
						<h1>Account</h1>
						<p>
							Update your personal data for receive more and best music recomendations
						</p>

						<form className='infAccount' autoComplete='off' onSubmit={handleSubmit}>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>First Name</label>
								<input
									placeholder={user.first_name}
									type='text'
									value={email}
									onChange={handleRegisterInputChange}
									{!isEditing ? 'disabled' : '' }
								/>
							</div>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>Last Name</label>
								<input placeholder={user.last_name} type='email' readonly />
							</div>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>Your NickName</label>
								<input placeholder={user.username} type='text' readonly />
							</div>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>
									Your Favourite Music
								</label>
								<input placeholder={user?.profile?.biography} type='text' readonly />
							</div>
						</form>
						<button>Edit</button>
					</div>
					<style jsx Com__SectionProfileStyle>
						{Com__SectionProfileStyle}
					</style>
				</section>
			)}
		</>
	);
};

export default SectionProfile;
