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