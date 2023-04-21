/*
RDBMS : Relational DataBase Manage System

Column, Field olarak da adlandırılır.
Row, Record olarak da adlandırılır.,

SQL case sensitive değildir.
Her satırın sonunda ; kullanmak standarttır.

SQL KOMUTLARI

1) Select : dataları çeker.
2) Update : dataları değiştirir.
3) Delete : dataları siler.
4) Insert Into : data ekler.
5) Create Database : database oluşturur.
6) Alter Database :  database in özniteliklerini değiştirir.
7) Create Table : yeni tablo oluşturur.
8) Alter Table : table ı düzenler
9) Drop Table : tabloyu siler
10)Create Index : index oluşturur
11)Drop Index : indexi siler. 

----------------------------
<> : not equal veya != de kullanılıyor olabilir.
BETWEEN : aralık belirtir. ör: 
SELECT * FROM Products
WHERE Price BETWEEN 50 AND 60; --> price ı 50 ile 60 arasında olanları getirir.
LİKE: 
SELECT * FROM Customers
WHERE City LIKE 'e%'; --> e ile başlayan city leri getir.
IN : çoklu koşul için veya || gibi. ör:
SELECT * FROM Customers
WHERE City IN ('Paris','London'); --> city si Paris veya London olan ların tüm columnlarını getir.
AND - OR - NOT Operators: 
Where ile kullanılır .
ör:
SELECT * FROM Customers
WHERE (Country='Germany' AND City='Berlin') OR  (Country='Germany' AND City='München') OR (NOT Country = 'Germany'); 

----------------------------------
SELECT * FROM Customers
ORDER BY Country, CustomerName;

Burada Önce Country nin alfabetik sırasına göre sıralar, sonra aynı Country ler içinde
CustomerName in alfabetik sırasına göre sıralar.
-------------------------------

INSERT INTO yaparken id yi biz belirtmiyoruz, yeni row eklediğimizde id otomatik olarak artıyor.

Insert ederken tüm columnlara değer atamak zorunda değiliz. Değer vermediğimiz Columnlar null olur.

----------------------------------
null recordları getirmek için IS NULL kullanılır.
ör:
SELECT Address FROM Customers WHERE Address IS NULL; --> null olan recordları getirir.

SELECT ProductName,CustomerID FROM Customers WHERE ProductName IS NOT NULL --> 
product name i null olmayan recordları getirir 


SELECT * FROM Customers WHERE CustomerID>10 LIMIT 8;
--> customerid si 10 dan büyük olan ilk 8 recordu getirdi.


SELECT MAX(CustomerID) AS germanyenbuyukid FROM Customers Where Country='Germany'
--> country si germany olan en büyük id yi germanyenbüyükid ismiyle getirdi.



* like operator where den sonra kullanılır.
LIKE Operator	Description
WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%'	Finds any values that start with "a" and are at least 2 characters in length
WHERE CustomerName LIKE 'a__%'	Finds any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"

--> % geriye kalan karakterleri temsil ediyor
_ tek 1 karakteri temsil eder.

SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'a%'; --> a ile başlamayanları getirir.

------------------------------------------------------
IN OPERATOR
or kullanmanın kısa yoludur.

SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK'); --> 'Germany' OR 'France' OR 'UK' yerine böyle de kullanabiliriz.

-------------
SELECT * FROM Products
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;
--> Alfabetik sıraya göre bu iki text arasında olanları getirir.


SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
FROM Customers;

--> Address, PostalCode, City ve Country columnlarındaki recordları araya virgül koyarak birleştirdi ve
Address takma ismiyle getirdi.


inner join 2 tablo arasında ortak column varsa kullanılır.

full outer join yapmak için(mysql de full outer join yok) iki tablo select ile getirilir araya union koyulur 
union iki tabloyu birleştirir , birleştirirken ortak küme 2 kez toplandığı için 
1ini düşürür yani ortak küme 1 kez birleştirilmiş olur duplicate olmaz.
veya
Cross join yapılır


SELECT * FROM Customers
ORDER BY Country, CustomerName;

--> önce country nin alfabetik sıralamasına göre sıraladı sonra countryleri aynı olanlar arasında 
customerName ' e göre sıraladı.

SELECT * FROM Customers  WHERE CustomerName LIKE '_A%' LIMIT 3;
Customer table ından CustomerName inin 2. harfi A olan ilk 3 record'u getirdi


mysql select query sırası:

SELECT column1, column2, ...
FROM table1
WHERE condition1
GROUP BY column1, column2, ...
HAVING condition2
ORDER BY column1, column2, ...
LIMIT number;


** alias ismi verirken birden çok kelimeden oluşuyorsa ör: musteri sayisi bunu quote içine almalıyız
AS 'musteri sayisi' şeklinde

SELECT CustomerName, CONCAT_WS('......... ', Address, PostalCode, City, Country) AS Address
FROM Customers; 

birçok column'ı tek alias olarak address altında topladı CONCAT_WS ilk parametre olarak aralarına ne konulacağını
belirtir. aralarına ......... koydu.

tables lara alias (takma ad) verme :

SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
 */