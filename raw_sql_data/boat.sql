CREATE TABLE IF NOT EXISTS boat (
    `boatId` INT,
    `name` VARCHAR(30) CHARACTER SET utf8,
    `motor` VARCHAR(18) CHARACTER SET utf8,
    `capacity` INT,
    `seating` VARCHAR(15) CHARACTER SET utf8,
    `sound` VARCHAR(23) CHARACTER SET utf8,
    `color` VARCHAR(11) CHARACTER SET utf8,
    `covering` VARCHAR(19) CHARACTER SET utf8,
    `other` VARCHAR(9) CHARACTER SET utf8
);
INSERT INTO boat VALUES
    (1,'24'' Bentley Tritoon 243 Cruise','175HP Suzuki Motor',15,'Leather Seating','Bluetooth Stereo System','Big Red','Playpen Shade','Lilly Pad'),
    (2,'25'' Bentley Tritoon 243 Cruise','200HP Suzuki Motor',15,'Leather Seating','Bluetooth Stereo System','Ol Blue','Double Canopy Shade','Lilly Pad'),
    (3,'24'' Bentley Tritoon 243 Cruise','175HP Suzuki Motor',15,'Leather Seating','Bluetooth Stereo System','Black Betty','Playpen Shade','Lilly Pad');
