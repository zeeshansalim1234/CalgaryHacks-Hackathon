
class Dog:
    def __init__(self,name,age):
        self.name=name
        self.age=age#attribute is created
    def get_name(self):
        return self.name
    def add_one(self,x):
        return x+1
    def get_age(self):
        return self.age
    def set_age(self,age):
        self.age=age
    def bark(self):
        # method
        print("bark")

d= Dog("tim",21) # everything inside this brackets
#gets into __init__ function.
d2=Dog("bill",34)
print(d.name)
print(d2.name)
print(d2.get_name())
print(d2.get_age())
d.set_age(23)
print(d.get_age())



