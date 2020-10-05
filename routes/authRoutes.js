const passport = require("passport"); //original passport npm module

module.exports = (app) => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			//google => internal identifier of GoogleStrategy
			scope: ["profile", "email"], //asking Google to give the access to this user's profile and email.
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
