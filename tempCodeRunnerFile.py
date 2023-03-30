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
print(list3)