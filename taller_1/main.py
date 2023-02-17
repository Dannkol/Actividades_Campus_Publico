
""" 10. En su casa le solicitan que realice un algoritmo en Python,
que permita calcular el valor a pagar por concepto de
energía eléctrica. Los datos que se conocen son los
siguientes:
  - Mes de consumo 
  - Valor kw
  -Total kw consumido en el mes 
  - estrato
"""

mes = 'Enero'
valorkw = [233.58, 291.98, 496.37, 583.97 , 700.76 , 700.76]
totalkwcons = 152
estrato = 2

print(f'su estrato es {estrato} por ende el valor wk cuesta {valorkw[estrato-1]}')

print(f'su total a pagar en el mes de {mes} es {valorkw[estrato-1] * totalkwcons } por un consumo total del mes {totalkwcons}')