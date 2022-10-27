DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    productType VARCHAR(100),
    productName VARCHAR(100),
    brandName VARCHAR(100),
    price DECIMAL(5,2)
);

INSERT INTO products (productType, productName, brandName, price)
VALUES
('Cleanser', 'BestCleanser', 'BestBrand', 80.51),
('Sunscreen', 'WorstSunscreen', 'WorstBrand', 20.63);
