const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../Model/userSchema");
const secretKey =  process.env.JWT_SECRET;

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const user = new User({
        username,
        email,
        password: newPassword,
    });
    await user.save();
    const token = jwt.sign({ username }, secretKey);
    res.json({ success: true, token });
};

const login = (req, res) => {
    const { username } = req.body;
    const user = User.findOne({ username: username });
    if (user) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
        res.json({ success: true, token });
    } else {
        alert("Invalid Credentials!");
        res.json({ success: false, message: "Invalid Credentials!" });
    }
};

module.exports = { signup, login };
