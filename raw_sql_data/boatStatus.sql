CREATE TABLE IF NOT EXISTS boatStatus (
    `boatStatusId` INT,
    `boatStatus` VARCHAR(13) CHARACTER SET utf8
);
INSERT INTO boatStatus VALUES
    (1,'Good'),
    (2,'Bad'),
    (3,'In For Repair');
