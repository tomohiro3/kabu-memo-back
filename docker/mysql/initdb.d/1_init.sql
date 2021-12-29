CREATE TABLE IF NOT EXISTS `m_stocks` (
    `code` int unsigned NOT NULL PRIMARY KEY,
    `company_name` varchar(50) NOT NULL,
    `market` char(2) NOT NULL,
    `industry_33` varchar(20) NOT NULL,
    `industry_17` varchar(20) NOT NULL
);

INSERT INTO
    m_stocks
VALUES
    (1000, 'テスト株式会社', '東1', '海運業', '海運業');

CREATE TABLE IF NOT EXISTS `stock_attributes` (
    `stock_code` int unsigned NOT NULL PRIMARY KEY,
    `is_value` tinyint unsigned,
    `is_price_shiftable` tinyint unsigned,
    CONSTRAINT stock_attributes_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    stock_attributes
VALUES
    (1000, NULL, 1);

CREATE TABLE IF NOT EXISTS `parent_companies` (
    `stock_code` int unsigned NOT NULL,
    `name` varchar(50),
    PRIMARY KEY (`stock_code`),
    CONSTRAINT parent_companies_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    parent_companies
VALUES
    (1000, 'ライブドア');

CREATE TABLE IF NOT EXISTS `share_holders` (
    `stock_code` int unsigned NOT NULL,
    `name` varchar(50),
    PRIMARY KEY (`stock_code`, `name`),
    CONSTRAINT share_holders_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    share_holders
VALUES
    (1000, 'ホリエモン');

CREATE TABLE IF NOT EXISTS `customers` (
    `stock_code` int unsigned NOT NULL,
    `name` varchar(50),
    PRIMARY KEY (`stock_code`, `name`),
    CONSTRAINT customers_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    customers
VALUES
    (1000, 'NASA');

CREATE TABLE IF NOT EXISTS `partner_companies` (
    `stock_code` int unsigned NOT NULL,
    `name` varchar(50),
    PRIMARY KEY (`stock_code`, `name`),
    CONSTRAINT partner_companies_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    partner_companies
VALUES
    (1000, 'トヨタ');

CREATE TABLE IF NOT EXISTS `investing_companies` (
    `stock_code` int unsigned NOT NULL,
    `name` varchar(50),
    PRIMARY KEY (`stock_code`, `name`),
    CONSTRAINT investing_companies_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    investing_companies
VALUES
    (1000, 'NIO');

CREATE TABLE IF NOT EXISTS `theme` (
    `stock_code` int unsigned NOT NULL,
    `value` varchar(20),
    PRIMARY KEY (`stock_code`, `value`),
    CONSTRAINT theme_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    theme
VALUES
    (1000, '宇宙');

CREATE TABLE IF NOT EXISTS `product_categories` (
    `stock_code` int unsigned NOT NULL,
    `value` varchar(20),
    PRIMARY KEY (`stock_code`, `value`),
    CONSTRAINT product_categories_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    product_categories
VALUES
    (1000, 'シリコン');

CREATE TABLE IF NOT EXISTS `product_usecases` (
    `stock_code` int unsigned NOT NULL,
    `value` varchar(20),
    PRIMARY KEY (`stock_code`, `value`),
    CONSTRAINT product_usecases_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    product_usecases
VALUES
    (1000, '月面探索機');

CREATE TABLE IF NOT EXISTS `free_notes` (
    `stock_code` int unsigned NOT NULL,
    `title` varchar(20) NOT NULL,
    `value` text NOT NULL,
    PRIMARY KEY (`stock_code`, `title`, `value`(255)),
    CONSTRAINT free_notes_fk_stock_code FOREIGN KEY (`stock_code`) REFERENCES m_stocks(`code`) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO
    free_notes
VALUES
    (
        1000,
        '子会社設立',
        '半導体製造装置を事業とする子会社をを2022年1月中国にて設立。https://example.com'
    );