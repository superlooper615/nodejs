CREATE TABLE IF NOT EXISTS boatRentalStatus (
    `boatRentalStatusId` INT,
    `boatRentalStatus` VARCHAR(9) CHARACTER SET utf8
);
INSERT INTO boatRentalStatus VALUES
    (1,'Docked'),
    (2,'Out Bound'),
    (3,'In Bound');
