obj2 = {"bir" : 1, "iki": 2, "üç": 3} #{'bir': 1, 'iki': 2, 'üç': 3}
#print(dir(obj2))
#print(help(obj2))
print (obj2.get("bir")) 
print(obj2.keys()) #dict_keys(['bir', 'iki', 'üç']) => sadece key leri yazdırdı.

for key in obj2.keys():
    print(key,obj2[key])

