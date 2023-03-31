# key value çiftleridir.
obj =  dict();
print (obj) #{} boş dict oluşturdu

obj2 = {"bir" : 1, "iki": 2, "üç": 3}
print (obj2) #{'bir': 1, 'iki': 2, 'üç': 3}

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

items = obj2.values()
print(items) 