almacen = {
  'pepe': {
    'arroz': [
      12,
      1000
    ],
    'arroz2': [
      10,
      800
    ],
    'arroz3': [
      9,
      4000
    ],
    'arroz4': [
      5,
      2000
    ],
    'arroz5': [
      12,
      5000
    ]
  },
  'juan': {
    'arroz': [
      12,
      6000
    ],
    'arroz2': [
      20,
      10
    ],
    'arroz3': [
      9,
      4000
    ],
    'arroz4': [
      5,
      2000
    ],
    'arroz5': [
      12,
      5000
    ]
  },
  'oi': {
    '2': [
      2,
      2
    ],
    '4': [
      2,
      2
    ],
    '5': [
      2,
      2
    ],
    '6': [
      2,
      2
    ],
    '7': [
      4,
      8
    ]
  }
}



n = int(input("Cuantos amacenes creara?: "))

p= {
    
}


for i in range(n):
    nombre = input("nombre del almacen: ")
    for y in almacen:
        aux1 = True
        while aux1:
            if nombre in y:
                nombre = input("nombre de almacen repetido, por favor cambie: ")
            else:
                aux1 = False        
    item = []
    for j in range(5):
        items = []
        producto = input("nombre del producto: ")
        for y in item:
            aux1 = True
            while aux1:
                if producto in y:
                    producto = input("producto repetido, por favor cambie: ")
                else:
                    aux1 = False
        items.append(int(input("cantidad vendida: ")))
        items.append(int(input("precio por unidad: ")))
        item.append({producto:items})
    for k in item:
        for x in k:
            p[x] = k[x]
    almacen[nombre] = p 



maxvengen = []
maxven = []

for item in almacen:
    maxvengen.append([almacen[item][max(almacen[item].items(), key=lambda x: x[1])[0]][0], max(almacen[item].items(), key=lambda x: x[1])[0] ])
    print(f"""
        Almacen: {item}
        Articulo mas vendido: {max(almacen[item].items(), key=lambda x: x[1])[0]}
        Unidades vendidas de ese articulo: {almacen[item][max(almacen[item].items(), key=lambda x: x[1])[0]][0]}
        Precio por unidad {almacen[item][max(almacen[item].items(), key=lambda x: x[1])[0]][1]}
        
    """)



for item in almacen:
    aux = 0
    for valor in almacen[item]:
        aux += almacen[item][valor][0]*almacen[item][valor][1]
    maxven.append([aux , item])    



print(f"""
    El alamcen que mas vendio fue {max(maxven)[1]} con un total de {max(maxven)[0]}
    El producto mas vendido en general es {max(maxvengen)[1]} con un total de {max(maxvengen)[0]} unidades vendidas
    """)
