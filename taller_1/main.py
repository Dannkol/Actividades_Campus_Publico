""" 9. Construya un algoritmo en Python, que permita ingresar la
información de un empleado e imprima el nombre, los
apellidos y la antigüedad. Los datos que se deben solicitar
son los siguientes:
*Nombre * Teléfono *Año de ingreso a la empresa
*Apellidos *Edad.
"""

valores = {'Nombre': '', 'Tel': '', 'Año de ingreso': 0, 'Apellido': '', 'Edad' : ''}

for i in valores:
  dato = input(f'Ingrese el valor para {i}: ')
  valores[i] = dato

print(f"Nombre del empleado es {valores['Nombre']} su telefono es {valores['Tel']} sus año de antiguedad son {2023-int(valores['Año de ingreso'])} su Apellido es {valores['Apellido']} su edad es {valores['Edad']}")
