// helpers/attendanceHelper.js

const fs = require('react-native-fs');

const updateAttendance = async (name) => {
  try {
    const attendanceFile = `${fs.DocumentDirectoryPath}/attendance.csv`;

    // Create attendance file if it doesn't exist
    if (!await fs.exists(attendanceFile)) {
      await fs.writeFile(attendanceFile, 'Name,Attendance\n', 'utf8');
    }

    // Read attendance file
    let attendanceData = await fs.readFile(attendanceFile, 'utf8');

    // Check if the student is already marked present
    if (attendanceData.includes(name)) {
      return;
    }

    // Add new attendance record
    attendanceData += `${name},Present\n`;

    // Update attendance file
    await fs.writeFile(attendanceFile, attendanceData, 'utf8');
  } catch (error) {
    console.error(error);
  }
};

export default updateAttendance;
