import React, { useState } from "react";
import Error from "../../lib/Error";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../Hooks/useForm";
import { editProfile } from "../../lib/userApi";
import userImage from "../../../assets/img/profile-user-player.svg";
import Com__SectionProfileStyle from "../Style/Profile/Com__SectionProfileStyle";

const SectionProfile = () => {
	const { user = {}, Edit } = useAuth();
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState("");
	let inputModifier = isEditing ? false : true;
	let buttonModifier = isEditing ? "Save" : "Edit";
	let buttondisplay = "diplay: none;";

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		first_name: "",
		last_name: "",
		username: "",
	});

	const { first_name, last_name, username } = formRegisterValues;

	const handleSubmit = async (e) => {
		e.preventDefault();

		const error = await editProfile(first_name, last_name, username);
		if (error) {
			setError(error);
		}
		return false;
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setIsEditing(!isEditing);
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
					</div>
					<div className='userForm'>
						<h1>Account</h1>
						<p>
							Update your personal data for receive more and best music recomendations
						</p>

						<form className='infAccount' autoComplete='off' onSubmit={handleSubmit}>
							<div className='infAccount__container'>
								<label htmlFor='first_name' className='infAccount__container__name'>
									First Name
								</label>
								<input
									placeholder={isEditing ? first_name : user.first_name}
									type='text'
									value={first_name}
									name='first_name'
									id='first_name'
									onChange={handleRegisterInputChange}
									disabled={inputModifier}
								/>
							</div>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>Last Name</label>
								<input
									placeholder={isEditing ? last_name : user.last_name}
									type='text'
									name='last_name'
									id='last_name'
									value={last_name}
									onChange={handleRegisterInputChange}
									disabled={inputModifier}
								/>
							</div>
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>Your NickName</label>
								<input
									placeholder={isEditing ? username : user.username}
									type='text'
									id='username'
									name='username'
									value={username}
									onChange={handleRegisterInputChange}
									disabled={inputModifier}
								/>
							</div>
							{/* <div className='infAccount__container'>
								<label className='infAccount__container__name'>
									Your Favorite Music
								</label>
								<input
									placeholder={isEditing ? biography : user?.profile?.biography}
									type='text'
									id='biography'
									name='biography'
									value={biography}
									onChange={handleRegisterInputChange}
									disabled={inputModifier}
								/>
							</div> */}
							{/* 
							<div className='infAccount__container'>
								<label className='infAccount__container__name'>
									Your profile image
								</label>
								<input
									type='file'
									accept='.jpg,.png'
									id='picture'
									name='picture'
									value={picture}
									onChange={handleRegisterInputChange}
									disabled={inputModifier}
								/>
							</div> */}

							<div className='form-item' id='email'>
								<input type='hidden' id='email' name='email' value={user.email} />
							</div>
							{!isEditing && (
								<button onClick={handleEdit} type='submit'>
									Edit
								</button>
							)}
							{isEditing && (
								<button className={buttondisplay} type='submit'>
									{buttonModifier}
								</button>
							)}
						</form>
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
