import Artist from '../models/Artist.js';
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    userName,
    bio,
    phoneNumber,
    BirthDate,
    city,
    profilePic,
  } = req.body;
  try {
    const existingUser = await Artist.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'user already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Artist.create({
      name: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
      userName: userName,
      bio: bio,
      phoneNumber: phoneNumber,
      BirthDate: BirthDate,
      city: city,
      profilePic: profilePic,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Artist.findOne({ email });
    if (!existingUser) return res.status(400).send("user doesn't exist");

    const isPassword = await bcrypt.compare(password, existingUser.password);
    if (!isPassword) return res.status(400).send('password is incorrect');

    res.status(200).json(existingUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
