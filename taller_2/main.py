ciclistas = {

}
suldobacis = int(input("suldo basico por kilometro recorrido: "))

total = 3277

n = int(input("cuantos ciclistas participan: "))

for i in range(n):
    nombre = input("nombre del atleta: ")
    estadisticas = []

    vald = True
    while vald:
        km1 = int(input("Ingresa los km recorridos en total: "))
        km2 = int(input("Ingresa los km recorridos como lider: "))
        if km1 <= total and km2 < km1:
            estadisticas.append(km1)
            estadisticas.append(km2)
            vald = False
        else:
            print(f"los km recorridos superan los km totales de la carre {total}")
    ciclistas[nombre] = estadisticas


val = max(ciclistas.items(), key=lambda x: x[1])[0]


for item in ciclistas:
    es = []
    if ciclistas[item][1] <= 1800:
        print(f"El ciclista {item} cobrara de bonificacion {ciclistas[item][0] * suldobacis} ya que solo recorrio como lider {ciclistas[item][1]}")
        es.append(ciclistas[item])
        es[0].append(ciclistas[item][0] * suldobacis)
        ciclistas[item] = es[0]
    else:
        print(f"El ciclista {item} cobrara de bonificacion {((ciclistas[item][0] - ciclistas[item][1]) * suldobacis) + (ciclistas[item][1] * ((suldobacis * 0.25)+ suldobacis))} ya que recorrio como lider {ciclistas[item][1]} y tinen una bonificacion del 25% por km recorrido como lider")
        es.append(ciclistas[item])
        es[0].append(((ciclistas[item][0] - ciclistas[item][1]) * suldobacis) + (ciclistas[item][1] * ((suldobacis * 0.25)+ suldobacis)))
        ciclistas[item] = es[0]

print(ciclistas)

if ciclistas[val][0] == total:
    ciclistas[item][2] = ciclistas[val][2] + 700000000 
    print(f"El ganador es el {val} ya que termino la carrera y la cantidad de  y su sueldo es de {ciclistas[val][2]} ya que son de más 700 millones al ganador")

print("----tebla de estadisticas------")
for item in ciclistas:
    print(f"""

        Nombre: {item}
        kilometros totales recorridos: {ciclistas[item][0]}
        Kilometros recorridos como lider: {ciclistas[item][1]}
        Sueldo: {ciclistas[item][2]}
-------------------------------------------------------------------
    """)
