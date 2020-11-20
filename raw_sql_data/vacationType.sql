CREATE TABLE IF NOT EXISTS vacationType (
    `vacationTypeId` INT,
    `vacationType` VARCHAR(15) CHARACTER SET utf8
);
INSERT INTO vacationType VALUES
    (1,'Travel'),
    (2,'Sick'),
    (3,'Appointment'),
    (4,'Attending Event'),
    (5,'Personal Issue'),
    (6,'Emergency');
