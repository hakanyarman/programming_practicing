
class Car:
    def __inti__(self,model,year,color):
        self.model = model #buradaki self js deki this ile aynı; objecti temsil ediyor.
        self.year = year
        self.color = color

    def drive():
        print("This "+ self.model + " car is driving")

    def stop():
        print("This "+ self.model + " car is stopped")



my_car = Car("Ford",2020,"Black")

print(my_car)
