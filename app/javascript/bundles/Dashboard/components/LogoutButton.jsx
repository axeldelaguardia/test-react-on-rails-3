import React from "react";

const LogoutButton = () => {
	return (
		<form action="/logout" method="delete">
			<input type="hidden" name="authenticity_token" value={document.querySelector('meta[name="csrf-token"]').content} />
			<input type="hidden" name="_method" value="delete" />
			<input type="submit" value="Logout" />
		</form>
	);
}

export default LogoutButton;