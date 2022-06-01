CREATE VIEW PatientAppointments AS 
SELECT COUNT(appointments) as A, patient.userID
FROM patients
JOIN appointments on patients.userID = appointments.patientID
GROUP BY patient.userID;

