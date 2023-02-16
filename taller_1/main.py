"""2. En la jerarquía de operadores, cuáles son los que más
prioridad tienen cuando el intérprete de Python los evalúa?

La prioridad de las operaciones va de mayor a menor 

------------------------------------------------------------------------------------
| Operador                                                  |     Reprecentacion   |
|-----------------------------------------------------------|----------------------|
|Operaciones entre paréntesis                               |     ()               |
|Potencia                                                   |        **            |
|Multiplicación y División, módulo o residuo,División entera|  *, /, %, //         |
|Suma y resta                                               |       + -            |
|Operadores relacionales                                    | <, <=, >, >=, !=, == |
|Operador lógico AND                                        |         AND          |
|Operador lógico OR                                         |         OR           |
------------------------------------------------------------------------------------
"""

print(f'para la operacion 1+2 * (6/2) es {1+2 * (6/2)} esto devido a que primero se resulve el parentesis y luego la multiplicacion para dejar de ultimo la suma')