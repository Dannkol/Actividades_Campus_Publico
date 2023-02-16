"""
    5. Enumere 5 tipos de datos en Python y suministre un valor de ejemplo de cada uno.
"""

datoint = 1
datopuntoflotante = 1.3
datonumerocomplx = 1+2j
datobool = False
datostring1 = "Hola mundo"


print(f"tenemos dato int {type(datoint)} = {datoint}")
print(f"tenemos dato floar {type(datopuntoflotante)} = {datopuntoflotante}")
print(f"tenemos dato complejo {type(datonumerocomplx)} en este dato tenemos su parte real {datonumerocomplx.real} y su parte imaginaria {datonumerocomplx.imag} = {datonumerocomplx}")
print(f'tenemos datos bool {type(datobool)} = {datobool}')
print(f'tenemos datos string {type(datostring1)} = {datostring1}')