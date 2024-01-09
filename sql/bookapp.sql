CREATE TABLE books (
	id SERIAL,
	name VARCHAR(255) NOT NULL,
	publisher VARCHAR(255),
	author VARCHAR(255),
	page_count INTEGER,
	published_date DATE,
	price INTEGER
);
INSERT INTO books (name, publisher, author, page_count, published_date, price) VALUES (
'オラクル認定資格教科書','翔泳社', '山本道子', 400, '2020-07-20', 3200);
INSERT INTO books (name, publisher, author,page_count, published_date, price) VALUES (
'徹底攻略 AWS','トレノケート株式会社', '高山裕司',304, '2023-06-21', 2500);