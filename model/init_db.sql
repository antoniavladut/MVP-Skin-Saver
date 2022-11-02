DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    productType VARCHAR(100),
    productName VARCHAR(100),
    brandName VARCHAR(100),
    skinType VARCHAR(100),
    expense VARCHAR(100),
    price DECIMAL(5,2),
    descrip VARCHAR(300),
    img VARCHAR(3000)
);

INSERT INTO products (productType, productName, brandName, skinType, expense, price, descrip, img)
VALUES

-- 1
('Cleanser','Hydrating Facial Cleanser (236ml)','CeraVe','Dry','Budget',7.95,'This hydrating  formula contains essential ceramides and hyaluronic acid, removing dirt and oil while increasing the  moisture levels of your skin.', 'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/cleansers/hydrating-facial-cleanser/photos/2022/700x875/cerave_daily_hydrating-cleanser_12oz_front-700x875-v2.jpg?rev=e1fd9f48b18343ab9d2931e0cd92793c'),
-- 2
('Cleanser','Clear Nourishing Cleanser (120ml)','True Botanicals','Dry','Luxury',47.89,'A non-drying, hypoallergenic, balancing facial cleanser that goes to work on congested skin leaving the skin clean and hydrated.', 'https://n.nordstrommedia.com/id/sr3/ed7e42f7-5c6a-4ecd-a9e9-a1f1ce45b7a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196'),
-- 3
('Cleanser','Effaclar Purifying Foaming Gel Cleanser (200ml)','La Roche-Posay','Oily','Budget', 10.81,'This soap-free gel cleanser is designed with oily skin in mind. Formulated with zinc pidolate, it cleanses impurities and reduces the production of excess oil—all without drying out the skin.', 'https://static.thcdn.com/images/large/original/productimg/1600/1600/11091822-1904492013074791.jpg'),
-- 4
('Cleanser','Find Your Balance Oil Control Cleanser (150ml)','Olehenriksen','Oily','Luxury',27.99,'This cleanser helps banish excess oiliness and remove any dead skin cells, leaving you with smoother, healthier and clearer skin.', 'https://i.pinimg.com/originals/5b/22/15/5b2215b46f8263231ed086930e5c8d07.jpg'),
 -- 5
('Cleanser','Gentle Foaming Cleanser (236ml)','Cetaphil','Combination','Budget',12.76,'This instantly foaming, gentle daily cleanser rinses away dirt, oil and make-up without stripping skin of its natural moisture balance. Skin feels soft, fresh and comfortable.', 'https://cdn.shopify.com/s/files/1/0493/6381/2514/products/CetaphilGentleFoamingCleanser_1024x.jpg?v=1652780718'),
-- 6
('Cleanser','Blueberry Bounce Gentle Cleanser (160ml)','Glow Recipe','Combination','Luxury',33.92,'Packed with antioxidant-rich blueberry extract, hyaluronic acid, and a blend of lactic and glycolic acids, this lightweight gel wash is the key to clear and radiant skin, as well as minimized pores.','https://static.thcdn.com/images/large/original//productimg/1600/1600/13317618-3314913520809793.jpg'),
-- 7
('Cleanser','Milky Jelly Cleanser (177ml)','Glossier','Normal','Budget',18.95,'A nourishing, pH-balanced gel face wash that is kind to every skin type under the sun. Its light, cushiony formula is subtle enough not to irritate sensitive skin but effective enough to give you a clean slate. ', 'http://cdn.shopify.com/s/files/1/0635/0797/products/5E6A331C-93E2-496C-920D-97FF11C3D5F7_grande.jpg?v=1643000253'),
-- 8
('Cleanser','The Rice Wash Cleanser (120ml)','Tatcha','Normal','Luxury',37.91,'A PH-neutral, daily cream cleanser that gently washes away impurities without stripping skin—leaving it hydrated, feeling soft, and looking luminous.','https://assets.tatcha.com/large/images/Awards-Badging/Product-Images/TheRiceWash_PPage_1200x1200.jpg'),
-- 9
('Moisturizer','Moisturising Cream (340ml)','CeraVe','Dry','Budget',10.99,'This moisturiser is packed with barrier-supporting ceramides and moisture-binding hyaluronic acid, and will deliver enough hydration to soothe even the driest complexions.','https://cdn.contentspeed.ro/slir/w600/nordpharm.websales.ro/cs-content/cs-photos/products/original/cerave-crema-hidratanta-pentru-fata-corp-piele-uscata-si-foarte-uscata-340ml_6225_1_1635840506.jpg'),
-- 10
('Moisturizer','Ultra Repair Cream Intense Hydration (170ml)','First Aid Beauty','Dry','Luxury',37.91,'A fast-absorbing, rich moisturizer formulated with colloidal oatmeal, that provides instant and long-term hydration for dry, distressed skin.', 'https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFOZDJrTXVmeEwuX1NMMTUwMF8uanBn.jpg'),
-- 11
('Moisturizer','Hydro Boost Water Gel Moisturizer (50ml)','Neutrogena','Oily','Budget',11.64,'An oil-free, water-gel moisturiser that intensively replenishes skin, leaving it supple with a youthful bounce.', 'https://ntg-catalog.imgix.net/products/6811047XX/alt_1.jpg?fm=webp&auto=format&w=1200&h=1443&fit=crop'),
-- 12
('Moisturizer','Ultra Facial Oil-Free Gel Cream (125ml)','Kielhs','Oily','Luxury',57.15,'This fast-absorbing, alcohol-free gel cream moisturiser helps reduce shine and minimize pores, for skin that looks and feels hydrated, refreshed and balanced.', 'https://www.kiehls.ro/on/demandware.static/-/Sites-kie-master-catalog/default/dw720f9811/Products/Skincare/10003/125-kiehls-face-cream-ultra-facial-oil-free-gel-cream-125ml-000-3605972453174-front.jpeg'),
-- 13
('Moisturizer','Dew Point Moisturizing Gel Cream (60ml)','Versed','Combination','Budget',15.48,'The lightweight gel-cream formula contains aloe leaf juice and green tea and disappears into your skin, leaving it feeling refreshed, never greasy.', 'https://i.pinimg.com/736x/28/47/44/284744dcaad026da40ade27aae953585.jpg'),
-- 14
('Moisturizer','Re-Quench Water Cream (50ml)','StriVectin','Combination','Luxury',51.94,'The oil-free formula is infused with electrolytes and hyaluronic acid, delivering a weightless, balanced hydration for an energised, glowing complexion.', 'https://cdn.fragrancenet.com/images/photos/900x900/365904.jpg'),
-- 15
('Moisturizer','Vitamin E Moisture Cream (50ml)','The Body Shop','Normal','Budget',18.47,'Buttery soft, non-irritating and dermatologically tested, this moisturising cream is enriched with hyaluronic acid and raspberry seed oil.','https://thebodyshop.ro/image/cache/data/produse/skin%20care/WebImages_1051991%20Vitamin%20E%20Moisture%20Cream%2048H%2050ml_INVMEPS002_m_z-640x640.jpg'),
-- 16
('Moisturizer','Superfood Air-Whip Moisture Cream (50ml)','Youth To The People','Normal','Luxury',47.87,'Packed with kale, spinach, and green tea to deliver vitamins and antioxidants into the skin, leaving it feeling plump and hydrated.','https://m.media-amazon.com/images/I/61kWySchXVL._AC_SL1500_.jpg'),
-- 17
('Sunscreen','Hydrating Mineral Sunscreen SPF50 (75ml)','Cerave','Dry','Budget',16.06,'A lightweight, oil-free face lotion with mineral sunscreen filters that protects agains UVA and UVB rays, while restoring the skin barrier thanks to its soothing and hydrating ingredients.','https://i5.walmartimages.com/asr/13345e43-768a-41e8-b887-e3206889b026.49c472e7ab616e6c35c3b12399fe688c.jpeg'),
-- 18
('Sunscreen','Water Drench SPF45 (50ml)','Peter Thomas Roth','Dry','Luxury',54.67,'This water-resistant chemical sunscreen absorbs immediately, and leaves you with hydrated, dewy skin due to ingredients such as ceramides and hyaluronic acid.','https://images-na.ssl-images-amazon.com/images/I/61BQcFYSVkL._AC_UL600_SR600,600_.jpg'),
-- 19
('Sunscreen','Clear Face Broad Spectrum SPF 50 (88ml)','Neutrogena','Oily','Budget',16.05,'Perfect for the face due to being oil-free and non-comedogenic, this liquid sunscreen lotion has a water-light texture that leaves a weightless, matte finish so skin can breathe.','https://ntg-catalog.imgix.net/products/6811282-MAIN.jpg?fm=webp&auto=format&w=1200&h=1443&fit=crop'),
-- 20
('Sunscreen','Unseen Sunscreen SPF40 (50ml)','Supergoop!','Oily','Luxury',35.00,'This is an oil-free, weightless formula that guards against not only UVA and UVB rays, but also blue light. It has a matte finish and clear, scentless consistency.','https://www.sephora.com/productimages/sku/s2354207-main-zoom.jpg?imwidth=315'),
-- 21
('Sunscreen','Sheer Mineral Face Liquid Sunscreen SPF 50 (50ml)','Cetaphil','Combination','Budget',11.92,'Its super lightweight texture contains zinc oxide to help protect from the sun rays, in addition to skin-calming and moisturizing ingredients. Its formula also features oil-absorbing silicones that leave your skin feeling smoother.','https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cet/cet11000/l/7.jpg'),
-- 22
('Sunscreen','UV Clear Broad-Spectrum SPF 46 (48ml)','EltaMD','Combination','Luxury',38.76,'An effective combination of chemical and mineral sunscreen ingredients that protects you from UVA and UVB rays while leaving your complexion brighter and more radiant.','http://cdn.shopify.com/s/files/1/0467/8120/2585/products/UV-Clear-no-band_1_1_1200x1200.jpg?v=1646781279'),
-- 23
('Sunscreen','Anthelios Invisible Shaka Fluid SPF 50 (50ml)','La Roche-Posay','Normal','Budget',17.95,'This liquid-to-powder finish is water, sweat and sand resistant, and protects from both UVA and UVB rays while keeping your skin hydrated.','https://lify.ro/3776-large_default/-anthelios-shaka-fluid-spf50--protectie-foarte-ridicata-pentru-fata-flacon-50-ml-la-roche-posay.jpg'),
-- 24
('Sunscreen','Daily Brightening UV Defense Sunscreen SPF 30 (30ml)','SkinCeuticals','Normal','Luxury',55.64,'A lightweight, residue-free formula that combines broad-spectrum UV protection with a potent blend of discoloration-correcting and hydrating ingredients for a brighter, more even complexion.','https://www.skinceuticals.com/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw56636153/Products/Daily-Brightening-UV-Defense-Sunscreen-SPF-30-3606000578579-SkinCeuticals.jpg');
