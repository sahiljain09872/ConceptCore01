import User from "../models/User.js";

// @desc    Get current user
export const getCurrentUser = (req, res) => {
  res.json(req.user); // req.user is already populated by auth middleware
};

// @desc    Update own profile
export const updateCurrentUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, email },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Delete own account
export const deleteCurrentUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
