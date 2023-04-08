from swampy.TurtleWorld import *

world = TurtleWorld()
# bob = Turtle()
# print (bob)

# fd(bob, 250)
# lt(bob,50)
# fd(bob, 100)

# for i in range(4):
#     fd(bob, 100)
#     lt(bob)

# recursion : fonksiyonun kendi içinde tekrar çağrılması

# fonksiyon içinde return çalıştıktan sonra fonksiyon sonlanır.

def compare(x,y):
    if (x>y):
        return 1
    elif (x==y):
        return 0
    elif (x<y):
        return -1

result = compare(6,5)
print(result)

def countdown(n):
    if (n <= 0):
        print ('Blastoff!')
    else:
        print (n)
        countdown(n-1)


def print_n(s, n):
    if (n <= 0):
        return
    print (s)
    print_n(s, n-1)


def takeInput():
    response = input('What is your name? \n ')
    repetition = input('How many times do you want to print your name?  \n ')
    print_n(response,int(repetition))


takeInput()

print_n("Hakan",8)

countdown(8)


# exercise code : ben yazdım
def square(t,length):
    t=Turtle()
    print (t)
    t.delay = 0.01 # köşelerde ne kadar süre beklemeli onu belirler
    for i in range(4):
        fd(t, length)
        lt(t)

square('hakan',150) # turtle ın ismi hakan.

#length diye parameter ekledik çizdiği dikdörtgenin uzunluğunun kaç olduğunu belirliyor.

wait_for_user()

# Incremental development
# kodun önce iskeletini yazmak sonra ufak parçalar halinde değiştirmek.


def is_between(x, y, z):
    if((y>=x) and (z>=y)):
        return True
    else:
        return False

print(is_between(5,8,7))



def b(z):
    prod = a(z, z)
    print (z, prod)
    return prod

def a(x, y):
    x = x + 1
    return (x * y)

def c(x, y, z):
    total = x + y + z
    square = b(total)**2
    return square

x = 1
y = x + 1
print (c(x, y+3, x+y))


def ackerman(m,n):
    if (m==0):
        return (n+1)
    elif ((m>0) and (n==0)):
        return ackerman(m-1,1)
    elif ((m>0) and (n>0)):
        return ackerman( (m-1), ackerman(m, (n-1)))

ackerman(5,6)


def last_letter(word):
    return word[-1]

print(last_letter('Merhaba'))

# word[-1] => kelimenin son harfini verir.

def middle(word):
    return word[1:-1]

print(middle('bugün hava çok güzel'))
# 1. ve sonuncu elemanları kaldırdı 
print(middle('ab')) #ilk harf ve son harfi kaldırdı. 2 harf olduğu için hiç bir şey yazmadı


#abs function 

num1 = 5.8
num2 = abs(num1)
print(num2)
num3 = 2**(1/2)
print(num3)
print(abs(num3))

#One way to cut your debugging time is “debugging by bisection.” For example, if there are 100 lines in your program and you check them one at a time, it would take 100 steps.

# Instead, try to break the problem in half. Look at the middle of the program, or near it, for an intermediate value you can check. Add a print statement (or something else that has a verifiable effect) and run the program.


my_tuple = ('a', 'b')
my_list = [1,2,3]

my_dict = {
    'key': 'value'
}

# 'tuple' object does not support item assignment
# my_tuple[0] = 'c'
# print(my_tuple)

fruits = ["apple","banana","orange","strawberry","cherry","melon","watermelon"]
print(fruits[0:3]) # first three elements.
print(fruits[::3]) #every third elements ex: index : 0,3,6,....
print(fruits[::-1]) #negative(reverse) of list
print(fruits[-1]) #last element.
print(fruits[-3]) #3rd last element

index = 0
fruit = fruits[-1]
while index < len(fruit):
    letter = fruit[index]
    print (letter)
    index = index + 1

for fruit in fruits:
    print(fruit)

print(dir(fruits)) # attributes of fruits list    
print(help(fruits) # description of fruits list's attributes and methods

print("apple" in fruits) # return boolean. if fruits list contains apple , return true and if not return false.      

fruits[0] = "pineapple"
# in list we can set index of list to another value after the initialization of list
fruits.append("grape")
# to add element to end of the list

fruits.insert(2, "mango") # add mango to fruits list's index of 2 

#string slices

string = "elmasuyu"
sliced_string = string[0:4] # like array slice
print(string[2:]) #prints characters which in  after the index of 2 

# unlike arrays , strings ara immutable , we cant change letter of string.

#  string[0] = "i"  #TypeError: 'str' object does not support item assignment

#we can create a string that variation on the original and then we can modify this.
new_string = 'i' + string[1:]
print (new_string)


word = 'banana'
new_word = word.upper()
print (new_word)


index = word.find('n')
print (index)
 
#in operator

print('n' in word) 
#print true because word variable contains n letter.
print('nana' in word) 


# list operations

a = [1,2,3]
b = [4,5,6]
c = a + b 
print(c) # [1, 2, 3, 4, 5, 6]

print(a * 3) # [1, 2, 3, 1, 2, 3, 1, 2, 3]
# a listesini 3 tekrarlı yazdırır.

t = ['a', 'b', 'c', 'd', 'e', 'f']
t[1:3] = ['x', 'y']
print (t) #['a', 'x', 'y', 'd', 'e', 'f']

t.append('h') #sonuna ekledi
print(t)

# list methodları void dir. yani bir şey döndürmez. 
# w = t.sort() bu şekilde kullanılamaz.
w = t
w.extend([1,2])
#w.sort() #TypeError: '<' not supported between instances of 'int' and 'str'
print(w) #['a', 'x', 'y', 'd', 'e', 'f', 'h', 1, 2]

silinen_eleman = w.pop(2) # indexi 2 olan item ı list den sildi
# pop() a parameter vermezsek son item ı siler.
print(w)
print(silinen_eleman) # y

# silinen elemanın en olduğuna ihtiyacımız yoksa del de kullanabiliriz.

# t.del(t[1])  syntax error.
# doğru kullanım:
del t[4]
print(t)

t.remove('d') # değerini bildiğimiz elemanı silmek istediğimizde remove kullanırız.
print(t)

#stringi, her harfini içeren list haline dönüştürme: list methodu ile (built-in method) yapılır.

str = "istanbul üniversitesi"
letters = list(str)
print (letters) #boşluğu da eleman olarak alır
#['i', 's', 't', 'a', 'n', 'b', 'u', 'l', ' ', 'ü', 'n', 'i', 'v', 'e', 'r', 's', 'i', 't', 'e', 's', 'i']

words = str.split(" ") #boşluk gördüğünde elemanları ayır demek.
#eğer arada örneğin  -- olsaydı splitin parametresine -- yazardık.
print(words)

# join methodu splitin tam tersidir. split stringin elemanlarını ayırır, listeye dönüştürür;
# join bir list in elemanlarını birleştirip stringe çevirir.

words2 = ["türkiye","hırvatistan","hollanda","almanya"]
concatenatedWords = "-".join(words2) #araya - ekleyerek list elemanlarını birleştirdi ve stringe dönüştürdü.
print(concatenatedWords)

str1 = "abc"
str2 = "abc"
print(str1 is str2) #true burada aynı objecti refere ederler. "abc" şeklinde tek object var.

list1 = ["a","b","c"]
list2 = ["a","b","c"]
list3 = list2 


print(list1 is list2) #false, burada birbirine eşdeğer farklı 2 objecti refere ederler
#list ler eşdeğer(equivalent) olsa da birebir aynı(identical) değillerdir.

print(list2 is list3) #true. burada aynı objecti temsil eden 2 referans var, tek object var.

# eğer list2 yi değiştirirsek otomatik olarak list3 de değişir. çünkü list3 farklı bir object tutmuyor,
# list2 nin sahip olduğu objecti refere ediyor

list2[0] = "f"
print(list3) #['f', 'b', 'c']

#list methodlarının çoğu string methodlarının tam aksine yeni bir değer oluşturmaz.
#string methodlarında yeni string oluşturulur ve orijinaline dokunulmaz.

#original listin değişmesini önlemek için o listin bir kopyasını oluştur ve işleme kopyadan devam et.

# Dictionaries
# key value çiftleridir.
obj =  dict();
print (obj) #{} boş dict oluşturdu

obj2 = {"bir" : 1, "iki": 2, "üç": 3} #{'bir': 1, 'iki': 2, 'üç': 3}
#print(dir(obj2))
#print(help(obj2))
print (obj2.get("bir")) 
print(obj2.keys()) #dict_keys(['bir', 'iki', 'üç']) => sadece key leri yazdırdı.

for key in obj2.keys():
    print(key,obj2[key])
#bir 1
#iki 2
#üç 3


obj2["iki"] = "two" # dictionary de önceden bulunan key'in value sunu değiştirebiliriz.
print (obj2) #{'bir': 1, 'iki': 'two', 'üç': 3}


# yeni key-value çifti ekleyebiliriz.
obj2["dört"] = 4 
print(obj2) #{'bir': 1, 'iki': 'two', 'üç': 3, 'dört': 4}

# dictionary lerde value ya erişmek için listlerde olduğu gibi index kullanılamaz.
# key ile erişiriz value'ya.
# dict de itemlerin sırası(order) karışabilir. ama bu probleme yol açmaz çünkü key ile erişiriz value'ya.

#print(obj2["beş"]) #KeyError: 'beş' böyle bir key yok.

length_of_dict = len(obj2) 
print(length_of_dict) #4

arr = []
for key in obj2:
    arr.append(obj2[key])


print(arr) #[1, 'two', 3, 4]

has_dict_3 =  3 in obj2
print (has_dict_3) #false

has_dict_üç = "üç" in obj2
print(has_dict_üç) #true

# dict deki herhangi bir key in varolup olmadığını kontrol etmek için in kullanılır.
# ama value'yu kontrol etmez, key i kontrol eder.

# value ların var olup olmadığını kontrol etmek için dict.values() ile value lar bir değişkene atanır
# sonra herhangi bir değerin var olup olmadığı kontrol edilebilir. 
items = obj2.values()
print(items) #dict_values([1, 'two', 3, 4])

###################### tuples ##############################
#tuples sonradan değiştirilemez.
my_tuple = ('a','r','d','a')
print(my_tuple)
print(my_tuple[2])
# my_tuple[2] = 'e' => tuple elemanı değiştirilemez.
my_tuple = ('A',) + my_tuple[1:] #('A', 'r', 'd', 'a') bu şekilde değiştirilebilir.
print(my_tuple)
print(type(my_tuple)) #<class 'tuple'>

one_element_tuple = ('a')
print(type(one_element_tuple)) #<class 'str'> #yanlış sonuç verir
print(type(('a',))) #<class 'tuple'> => yine tek eleman var ama virgül olduğu için tuple türünde oluyor.
#eğer tek elemanlı tuple tanımlıyorsak sonuna virgül koymalıyız.

my_tuple_2 = tuple('arda güler')
print(my_tuple_2) #('a', 'r', 'd', 'a', ' ', 'g', 'ü', 'l', 'e', 'r') otomatik olarak ayırır.
print(len(my_tuple_2))


name,surname ,age = ('Hakan','Yarman',21)
print(name,surname,age)
print(surname)

