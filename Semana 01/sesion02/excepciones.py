try:
 numero = int(input("Ingre un numero"))
 numero/0
except ValueError:
    print('Tiene que se un numero')
except ZeroDivisionError:
       print('No se puede hacer la division entre cero')
except:
  print('hubo un error')
else:
  print('Todo fue Bien!!')
finally:
  print('Yo simpre me ejecuto')
  print('yo soy otra linea de codigo')             