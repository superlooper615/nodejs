CREATE TABLE IF NOT EXISTS employeeStatus (
    `employeeStatusId` INT,
    `employeeStatus` VARCHAR(19) CHARACTER SET utf8
);
INSERT INTO employeeStatus VALUES
    (1,'Active'),
    (2,'Inactive'),
    (3,'Pending'),
    (4,'Terminated'),
    (5,'Resigned'),
    (6,'Pending Termination'),
    (7,'Temporary Inactive');
