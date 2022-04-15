USE CPSC471;

INSERT INTO roles VALUES(1, 'user');
INSERT INTO roles VALUES(2, 'doctor');
INSERT INTO roles VALUES(3, 'patient');
INSERT INTO roles VALUES(4, 'surgeon');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('1', 'johnSmith', '1967-01-10', 'dog123', '165', '172', 'O');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('2', 'jimSmith', '1965-01-10', 'dog12', '185', '190', 'A');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('3', 'janeSmith', '1977-01-10', 'dog1', '135', '152', 'AB');

INSERT INTO Patients(userID, username, dob, password, weight, height, bloodType)
VALUES('4', 'johnDoe', '2001-12-11', 'password123', '180', '163', 'B');

INSERT INTO EmergencyContacts(name, relationship, phoneNumber, patientID)
VALUES('Barney Smith', 'Father', '403-666-6666', '1');

INSERT INTO EmergencyContacts(name, relationship, phoneNumber, patientID)
VALUES('Big Boy', 'Brother', '403-991-9191', '2');

INSERT INTO EmergencyContacts(name, relationship, phoneNumber, patientID)
VALUES('Isaac Newton', 'Mother', '587-111-1231', '3');

INSERT INTO EmergencyContacts(name, relationship, phoneNumber, patientID)
VALUES('Ratleen Smith', 'Sister', '403-901-8261', '4');

INSERT INTO Disorders(disorderName, disorderType, patientID)
VALUES('Asthma', 'Respiratory', '1');

INSERT INTO Disorders(disorderName, disorderType, patientID)
VALUES('Diabetes', 'Vascular', '2');

INSERT INTO Disorders(disorderName, disorderType, patientID)
VALUES('Pneumonia', 'Respiratory', '3');

INSERT INTO Disorders(disorderName, disorderType, patientID)
VALUES('Emphysema', 'Respiratory', '4');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1242', 'Hepatitis B', 'Hepatitis', '1');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1243', 'Pfizer', 'Covid', '1');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1244', 'Moderna', 'Covid', '2');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1245', 'Dengvaxia', 'Dengue', '2');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1246', 'Polio Gone', 'Polio', '3');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1247', 'HPV Vaccine', 'HPV', '4');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1248', 'Sinovac', 'Covid', '4');

INSERT INTO Vaccines(batchNum, vaccineName, disease, patientID)
VALUES('1249', 'MMRV', 'Measles', '4');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9782', 'Johnston Group', '2022-04-14', 'Toronto Dominion', '234', '1');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9783', 'TD Insurance', '2022-04-21', 'Toronto Dominion', '315', '1');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9784', 'Healthee Inc', '2022-05-11', 'Bank of Montreal', '100', '2');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9785', 'NotAFraud Corp', '2022-05-11', 'Scotiabank', '1000', '3');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9786', 'NotAFraud Corp', '2022-05-12', 'Scotiabank', '1000', '3');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9787', 'Medicare Inc', '2022-05-13', 'Toronto Dominion', '1231', '4');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9788', 'Medicare Inc', '2022-05-14', 'Toronto Dominion', '500', '4');

INSERT INTO bills(billID, insurance, billDate, bank, price, patientID)
VALUES('9789', 'Medicare Inc', '2022-05-25', 'Toronto Dominion', '5000', '4');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('762', 'Exercise more', '2022-04-14', '80', '37', '1', '1');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('761', 'Drink less', '2022-03-14', '80', '36', '1', '0');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('763', 'Drink more vitamins', '2022-03-15', '81', '36', '2', '0');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('764', 'At risk of heart attack', '2022-03-16', '80', '37', '3', '1');

INSERT INTO appointments(apptID, summary, apptDate, bloodPressure, temperature, patientID, requested)
VALUES('765', 'Eat more vegetables and sleep early', '2022-03-17', '80', '37', '4', '0');

INSERT INTO prescriptions(prescID, instructions, refilDate, medications, patientID)
VALUES('8772', 'Take twice daily', '2022-05-14', 'Puffer', '1');

INSERT INTO prescriptions(prescID, instructions, refilDate, medications, patientID)
VALUES('8773', 'Take one after every meal', '2022-05-17', 'Salbutamol', '2');

INSERT INTO prescriptions(prescID, instructions, refilDate, medications, patientID)
VALUES('8774', 'Take two tablets before sleeping', '2022-05-29', 'Cefuroxime', '3');

INSERT INTO prescriptions(prescID, instructions, refilDate, medications, patientID)
VALUES('8775', 'Fast for eight hours before taking', '2022-06-19', 'Remdesivir', '4');

INSERT INTO doctors(userID, username, dob, password, specialization, patientID)
VALUES('5', 'docman', '1972-01-10', 'docman123', 'Respiratory', '1');

INSERT INTO doctors(userID, username, dob, password, specialization, patientID)
VALUES('6', 'doctorpepper', '1954-01-11', 'softdrink123', 'Cardiology', '2');

INSERT INTO doctors(userID, username, dob, password, specialization, patientID)
VALUES('7', 'johnsmith', '1957-03-18', 'gramms2123', 'Ophthalmology', '3');

INSERT INTO doctors(userID, username, dob, password, specialization, patientID)
VALUES('8', 'joejoe', '1990-02-13', 'joe546', 'Respiratory', '4');

INSERT INTO surgeons(userID, username, dob, password, surgeonType)
VALUES('9', 'drstrange', '1971-05-10', 'strange1971', 'Heart');

INSERT INTO surgeons(userID, username, dob, password, surgeonType)
VALUES('10', 'surman', '1973-01-10', 'surman123', 'Head');

INSERT INTO surgeons(userID, username, dob, password, surgeonType)
VALUES('11', 'absmith', '1959-08-11', 'absmithnephro', 'Kidney');

INSERT INTO surgeons(userID, username, dob, password, surgeonType)
VALUES('12', 'cdclark', '1984-09-13', 'clarkhead1203', 'Head');

INSERT INTO facilities(facilityName, facilityType, cityName, countryName)
VALUES('John Hopkins', 'Hospital', 'Baltimore', 'United States');

INSERT INTO facilities(facilityName, facilityType, cityName, countryName)
VALUES('Rockyview Hospital', 'Hospital', 'Calgary', 'Canada');

INSERT INTO facilities(facilityName, facilityType, cityName, countryName)
VALUES('Foothills Medical Center', 'Hospital', 'Calgary', 'Canada');

INSERT INTO facilities(facilityName, facilityType, cityName, countryName)
VALUES('Seattle Grace', 'Hospital', 'Seattle', 'United States');

INSERT INTO operations(operationNum, operationType, time, complete, surgeonID)
VALUES('2314', 'Head', '2022-04-16', '0', '9');

INSERT INTO operations(operationNum, operationType, time, complete, surgeonID)
VALUES('2315', 'Heart', '2022-04-17', '0', '9');

INSERT INTO operations(operationNum, operationType, time, complete, surgeonID)
VALUES('2316', 'Liver', '2022-05-11', '1', '10');

INSERT INTO operations(operationNum, operationType, time, complete, surgeonID)
VALUES('2317', 'Kidney', '2022-06-14', '0', '11');
