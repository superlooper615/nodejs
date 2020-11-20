CREATE TABLE IF NOT EXISTS vacationStatus (
    `vacationStatusId` INT,
    `vacationStatus` VARCHAR(11) CHARACTER SET utf8
);
INSERT INTO vacationStatus VALUES
    (1,'New Request'),
    (2,'Pending'),
    (3,'Approved'),
    (4,'Declined'),
    (5,'Canceled'),
    (6,'Closed');
