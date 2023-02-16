"""
    4. Que son las expresiones regulares en Python?

    Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.
"""

import re

regx = re.compile(r'\bHola\b')  # busca la palabra foo con el delimitador \b   

print(regx.match("Hola Mundo"))