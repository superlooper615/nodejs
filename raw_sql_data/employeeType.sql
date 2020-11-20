CREATE TABLE IF NOT EXISTS employeeType (
    `employeeTypeId` INT,
    `employeeType` VARCHAR(10) CHARACTER SET utf8
);
INSERT INTO employeeType VALUES
    (1,'Owner'),
    (2,'Supervisor'),
    (3,'Captain');
