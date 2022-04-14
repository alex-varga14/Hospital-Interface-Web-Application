USE CPSC471;

INSERT INTO roles VALUES(1, 'user');
INSERT INTO roles VALUES(2, 'doctor');
INSERT INTO roles VALUES(3, 'patient');
INSERT INTO roles VALUES(4, 'surgeon');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('123', 'johnSmith', '1967-01-10', 'dog123', '165', '172', 'O');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('124', 'jimSmith', '1965-01-10', 'dog12', '185', '190', 'A');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('125', 'janeSmith', '1977-01-10', 'dog1', '135', '152', 'AB');

INSERT INTO EmergencyContacts(name, relationship, phoneNumber, patientID)
VALUES('Barney Smith', 'Father', '403-666-6666', '123');

INSERT INTO Disorders(disorderName, disorderType, patientID)
VALUES('Asthma', 'Respiratory', '123');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1242', 'Hepatitis B', 'Hepatitis', '123');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9782', 'Johnston Group', '2022-04-14', 'Toronto Dominion', '234', '123');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('762', 'Exercise more', '2022-04-14', '80', '37', '123', '1');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('761', 'Drink less', '2022-03-14', '80', '36', '123', '0');

INSERT INTO prescriptions(prescID, instructions, refilDate, medications, patientID)
VALUES('8772', 'Take twice daily', '2022-05-14', 'Puffer', '123');

INSERT INTO doctors(userID, username, dob, password, specialization, patientID)
VALUES('10', 'docman', '1972-01-10', 'docman123', 'Respiratory', '123');

INSERT INTO surgeons(userID, username, dob, password, surgeonType)
VALUES('11', 'surman', '1973-01-10', 'surman123', 'Head');

INSERT INTO facilities(facilityName, facilityType, cityName, countryName)
VALUES('John Hopkins', 'Hospital', 'Baltimore', 'United States');

INSERT INTO operations(operationNum, operationType, time, complete)
VALUES('2314', 'Head', '2022-04-16', '0');
