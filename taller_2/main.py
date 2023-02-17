atleta = {

}

record = 15.50

n = int(input("Cuantos atletas participan?: "))

for i in range(n):
    nombre = input("nombre del atleta: ")
    salto = int(input("distancia en metros del salto: "))
    atleta[nombre] = salto

val = max(atleta.items(), key=lambda x: x[1])[0]

if atleta[val] > record:
    print(f"El atleta ganador es: {val} con un salto de {atleta[val]} metros, es mayor que el record actual por ende gana 500 millones")
else:
    print(f"El atleta ganador es: {val} con un salto de {atleta[val]} metros, pero no es mayor al record axtual")