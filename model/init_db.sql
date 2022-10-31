DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    productType VARCHAR(100),
    productName VARCHAR(100),
    brandName VARCHAR(100),
    skinType VARCHAR(100),
    expense VARCHAR(100),
    price DECIMAL(5,2),
    descrip VARCHAR(300)
);

INSERT INTO products (productType, productName, brandName, skinType, expense, price, descrip)

VALUES

-- ('Cleanser', 'BestCleanser2', 'BestBrand2', 'Dry', 'Budget', 8.51, 'Best cleanser for dry skin with a budget price'),
-- ('Cleanser', 'BestCleanser1', 'BestBrand1', 'Dry', 'Luxury', 80.51, 'Best cleanser for dry skin with a luxury price'),
-- ('Cleanser', 'BestCleanser3', 'BestBrand3', 'Oily', 'Budget', 12.99, 'Best cleanser for oily skin with a budget price'),
-- ('Cleanser', 'BestCleanser4', 'BestBrand4', 'Oily', 'Luxury', 66.36, 'Best cleanser for oily skin with a luxury price'),
-- ('Moisturizer', 'BestMoisturizer1', 'BestBrand5', 'Dry', 'Budget', 6.51, 'Best moisturizer for dry skin with a budget price'),
-- ('Moisturizer', 'BestMoisturizer2', 'BestBrand6', 'Dry', 'Luxury', 55.55, 'Best moisturizer for dry skin with a luxury price'),
-- ('Moisturizer', 'BestMoisturizer3', 'BestBrand7', 'Oily', 'Budget', 12.99, 'Best moisturizer for oily skin with a budget price'),
-- ('Moisturizer', 'BestMoisturizer4', 'BestBrand8', 'Oily', 'Luxury', 66.36, 'Best moisturizer for oily skin with a luxury price'),
-- ('Sunscreen', 'BestSunscreen1', 'BestBrand9', 'Dry', 'Budget', 6.51, 'Best sunscreen for dry skin with a budget price'),
-- ('Sunscreen', 'BestSunscreen2', 'BestBrand10', 'Dry', 'Luxury', 55.55, 'Best sunscreen for dry skin with a luxury price'),
-- ('Sunscreen', 'BestSunscreen3', 'BestBrand11', 'Oily', 'Budget', 12.99, 'Best sunscreen for oily skin with a budget price'),
-- ('Sunscreen', 'BestSunscreen4', 'BestBrand12', 'Oily', 'Luxury', 66.36, 'Best sunscreen for oily skin with a luxury price');

-- 1
('Cleanser','Hydrating Facial Cleanser (236ml)','CeraVe','Dry','Budget',7.95,'This hydrating  formula contains essential ceramides and hyaluronic acid, removing dirt and oil while increasing the  moisture levels of your skin.'),
-- 2
('Cleanser','Clear Nourishing Cleanser (120ml)','True Botanicals','Dry','Luxury',47.89,'A non-drying, hypoallergenic, balancing facial cleanser that goes to work on congested skin leaving the skin clean and hydrated.'),
-- 3
('Cleanser','Effaclar Purifying Foaming Gel Cleanser (200ml)','La Roche-Posay','Oily','Budget', 10.81,'This soap-free gel cleanser is designed with oily skin in mind. Formulated with zinc pidolate, it cleanses impurities and reduces the production of excess oil—all without drying out the skin.'),
-- 4
('Cleanser','Find Your Balance Oil Control Cleanser (150ml)','Olehenriksen','Oily','Luxury',27.99,'This cleanser helps banish excess oiliness and remove any dead skin cells, leaving you with smoother, healthier and clearer skin.'),
 -- 5
('Cleanser','Gentle Foaming Cleanser (236ml)','Cetaphil','Combination','Budget',12.76,'This instantly foaming, gentle daily cleanser rinses away dirt, oil and make-up without stripping skin of its natural moisture balance. Skin feels soft, fresh and comfortable.'),
-- 6
('Cleanser','Blueberry Bounce Gentle Cleanser (160ml)','Glow Recipe','Combination','Luxury',33.92,'Packed with antioxidant-rich blueberry extract, hyaluronic acid, and a blend of lactic and glycolic acids, this lightweight gel wash is the key to clear and radiant skin, as well as minimized pores.'),
-- 7
('Cleanser','Milky Jelly Cleanser (177ml)','Glossier','Normal','Budget',18.95,'A nourishing, pH-balanced gel face wash that is kind to every skin type under the sun. Its light, cushiony formula is subtle enough not to irritate sensitive skin but effective enough to give you a clean slate. '),
-- 8
('Cleanser','The Rice Wash Cleanser (120ml)','Tatcha','Normal','Luxury',37.91,'A PH-neutral, daily cream cleanser that gently washes away impurities without stripping skin—leaving it hydrated, feeling soft, and looking luminous.'),
-- 9
('Moisturizer','Moisturising Cream (340ml)','CeraVe','Dry','Budget',10.99,'This moisturiser is packed with barrier-supporting ceramides and moisture-binding hyaluronic acid, and will deliver enough hydration to soothe even the driest complexions.'),
-- 10
('Moisturizer','Ultra Repair Cream Intense Hydration (170ml)','First Aid Beauty','Dry','Luxury',37.91,'A fast-absorbing, rich moisturizer formulated with colloidal oatmeal, that provides instant and long-term hydration for dry, distressed skin. '),
-- 11
('Moisturizer','Hydro Boost Water Gel Moisturizer (50ml)','Neutrogena','Oily','Budget',11.64,'An oil-free, water-gel moisturiser that intensively replenishes skin, leaving it supple with a youthful bounce.'),
-- 12
('Moisturizer','Ultra Facial Oil-Free Gel Cream (125ml)','Kielhs','Oily','Luxury',57.15,'This fast-absorbing, alcohol-free gel cream moisturiser helps reduce shine and minimize pores, for skin that looks and feels hydrated, refreshed and balanced.'),
-- 13
('Moisturizer','Dew Point Moisturizing Gel Cream (60ml)','Versed','Combination','Budget',15.48,'The lightweight gel-cream formula contains aloe leaf juice and green tea and disappears into your skin, leaving it feeling refreshed, never greasy.'),
-- 14
('Moisturizer','Re-Quench Water Cream (50ml)','StriVectin','Combination','Luxury',51.94,'The oil-free formula is infused with electrolytes and hyaluronic acid, delivering a weightless, balanced hydration for an energised, glowing complexion.'),
-- 15
('Moisturizer','Vitamin E Moisture Cream (50ml)','The Body Shop','Normal','Budget',18.47,'Buttery soft, non-irritating and dermatologically tested, this moisturising cream is enriched with hyaluronic acid and raspberry seed oil.'),
-- 16
('Moisturizer','Superfood Air-Whip Moisture Cream (50ml)','Youth To The People','Normal','Luxury',47.87,'Packed with kale, spinach, and green tea to deliver vitamins and antioxidants into the skin, leaving it feeling plump and hydrated.'),
-- 17
('Sunscreen','Hydrating Mineral Sunscreen SPF50 (75ml)','Cerave','Dry','Budget',16.06,'A lightweight, oil-free face lotion with mineral sunscreen filters that protects agains UVA and UVB rays, while restoring the skin barrier thanks to its soothing and hydrating ingredients.'),
-- 18
('Sunscreen','Water Drench SPF45 (50ml)','Peter Thomas Roth','Dry','Luxury',54.67,'This water-resistant chemical sunscreen absorbs immediately, and leaves you with hydrated, dewy skin due to ingredients such as ceramides and hyaluronic acid.'),
-- 19
('Sunscreen','Clear Face Broad Spectrum SPF 50 (88ml)','Neutrogena','Oily','Budget',16.05,'Perfect for the face due to being oil-free and non-comedogenic, this liquid sunscreen lotion has a water-light texture that leaves a weightless, matte finish so skin can breathe.'),
-- 20
('Sunscreen','UnseenSunscreen SPF40 (50ml)','Supergoop!','Oily','Luxury',35.00,'This is an oil-free, weightless formula that guards against not only UVA and UVB rays, but also blue light. It has a matte finish and clear, scentless consistency.'),
-- 21
('Sunscreen','Sheer Mineral Face Liquid Sunscreen SPF 50 (50ml)','Cetaphil','Combination','Budget',11.92,'Its super lightweight texture contains zinc oxide to help protect from the sun rays, in addition to skin-calming and moisturizing ingredients. Its formula also features oil-absorbing silicones that leave your skin feeling smoother.'),
-- 22
('Sunscreen','UV Clear Broad-Spectrum SPF 46 (48ml)','EltaMD','Combination','Luxury',38.76,'An effective combination of chemical and mineral sunscreen ingredients that protects you from UVA and UVB rays while leaving your complexion brighter and more radiant.'),
-- 23
('Sunscreen','Athelios Invisible Shaka Fluid SPF 50 (50ml)','La Roche-Posay','Normal','Budget',17.95,'This liquid-to-powder finish is water, sweat and sand resistant, and protects from both UVA and UVB rays while keeping your skin hydrated.'),
-- 24
('Sunscreen','Daily Brightening UV Defense Sunscreen SPF 30 (30ml)','SkinCeuticals','Normal','Luxury',55.64,'A lightweight, residue-free formula that combines broad-spectrum UV protection with a potent blend of discoloration-correcting and hydrating ingredients for a brighter, more even complexion.');
