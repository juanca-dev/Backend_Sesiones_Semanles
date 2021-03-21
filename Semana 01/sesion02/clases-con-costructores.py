class Persona:
   #Se usa el self para intanciar todos los
   #atributos de la clase, se crean con el  
   #constructor y se pueden usar en todos los metodos.
   def __init__(self, nombre,ocupacion):
     self.nombre = nombre
     self.profesion = ocupacion
     self.preferencias = []

   def saludar(self):
       print('Welcome{}'.format(self.nombre))         
       
objpersona = Persona('Jose','Informatico')
print(objpersona.preferencias)
objpersona.saludar()