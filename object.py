# class içinde constructor function tanımlamak için :
# def __init__(self): kullanılır. self'den sonra parametre olarak oluşturmak istediğimiz attrübutelar yazılır.

class Car:
    def __init__(self,model,year,color):
        self.model = model #buradaki self js deki this ile aynı; objecti temsil ediyor.
        self.year = year
        self.color = color

    def drive(self):
        print("This "+ self.model + " car is driving")

    def stop(self):
        print("This "+ self.model + " car is stopped")



my_car = Car("Ford",2020,"Black")
your_car = Car("Audi",2010,"White")

print(my_car.color)
my_car.drive() #This Ford car is driving

def which_is_new(car1,car2):
    result = ""
    if(car1.year > car2.year):
        result = car2.model +  " is older than " + car1.model
    elif(car2.year > car1.year):
        result = car1.model +  " is older than " + car2.model
    else:
        result = car1.model + "'s year equal to " + car2.model + "'s"

    return result

print(which_is_new(my_car,your_car)) #Audi is older than Ford


car1 = Car("Togg",2022,"White")
car2 = Car("Togg",2022,"White")

print(car1==car2) # objectlerin içeriği aynı olsa da birbirlerine eşit değillerdir.
print(car1 is car2) # == ile aynı şey.

car3 = car1
print(car3==car1) #True
print(car3 is car1)

# oop kodu dry (don't repeat yourself) tutmaya yarar.