const Company = require('../modules/companyModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Company Registration
const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if company already exists
  const companyExists = await Company.findOne({ email });
  if (companyExists) {
    return res.status(400).json({ message: 'Company already exists' });
  }

  // Create new company
  const company = await Company.create({
    name,
    email,
    password,
  });

  if (company) {
    // Send verification email (optional)
    // Using nodemailer to send an email here
    // await sendVerificationEmail(company.email);

    res.status(201).json({
      _id: company._id,
      name: company.name,
      email: company.email,
      token: generateToken(company._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid company data' });
  }
};

// Company Login
const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  const company = await Company.findOne({ email });

  if (company && (await bcrypt.compare(password, company.password))) {
    res.json({
      _id: company._id,
      name: company.name,
      email: company.email,
      token: generateToken(company._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

module.exports = { registerCompany, loginCompany };
