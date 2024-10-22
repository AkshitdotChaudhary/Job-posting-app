const Job = require('../modules/jobModel');
const { sendEmail } = require('../utils/emailService');  // Import the email utility

// Post a Job and Send Email to Candidates
const postJob = async (req, res) => {
  const { title, description, experienceLevel, endDate, candidates } = req.body;

  try {
    // Create the job in the database
    const job = await Job.create({
      title,
      description,
      experienceLevel,
      company: req.company._id,  // Get the company ID from the JWT token
      endDate,
    });

    // After job creation, send emails to candidates
    if (candidates && candidates.length > 0) {
      candidates.forEach(async (candidateEmail) => {
        const subject = `New Job Posting: ${title}`;
        const message = `We are excited to inform you about a new job opening for the position of ${title}. \n\nJob Description: ${description} \nExperience Level: ${experienceLevel}`;
        
        await sendEmail(candidateEmail, subject, message);  // Send the email
      });
    }

    res.status(201).json(job);  // Send response after job creation
  } catch (error) {
    res.status(500).json({ message: 'Error posting the job', error: error.message });
  }
};

module.exports = { postJob };
