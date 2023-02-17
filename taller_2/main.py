artemis = []
sputnik = []

art_spu = False
art_act = False

msg = ""

while True:
    def opt(opcion, art_act , art_spu , msg):
        msg = ""
        # Artemis
        if opcion == 1:
           msg = "Grupo Artemis creado"
        elif opcion == 1.1 and art_act:
            msg = "---------Lista de Artemis----------"
            for i in range(len(artemis)):
                msg += f"""
                    {i+1}. Camper: {artemis[i]}
                    """
        elif opcion == 1.2 and art_act:
            for i in range(len(artemis)):
                print(f"{i+1}. Camper: {artemis[i]}")
            artemis.append(input("argrega nombre del nuevo estudiante: "))
            msg = "camper agregado"

        elif opcion == 1.3 and art_act:
            for i in range(len(artemis)):
                print(f"{i+1}. Camper: {artemis[i]}")
            artemis.pop(int(input("introdusca el indice el camper a eliminar: "))-1)
            return "camper eliminado"
        elif opcion == 1.4 and art_act:
            print("Lista de campers de artemis ordenada alfabeticamente: ")
            artemis.sort()
            msg = "-----lista ordenada camper artemis-----"
            for i in range(len(artemis)):
                msg = f"""
                    {i}. Camper: {artemis[i]}
                """
        elif opcion == 1.3 and art_act:
            busca = input("nombre del camper a buscar: ")
            for dato in range(len(artemis)):
                if artemis[dato] == busca:
                     msg = f"""
                        indice {dato + 1} : {artemis[dato]}
                     """
                else:
                    msg = "no se encontro nada"
            
        # Spunitk
        if opcion == 2:
            msg = "Grupo Sputnik creado"
        elif opcion == 2.1 and art_spu:
            msg = "---------Lista de Soutnik----------"
            for i in range(len(sputnik)):
                msg += f"""
                    {i+1}. Camper: {sputnik[i]}
                    """
        elif opcion == 2.2 and art_spu:
            for i in range(len(sputnik)):
                print(f"{i+1}. Camper: {sputnik[i]}")
            sputnik.append(input("argrega nombre del nuevo estudiante: "))
            msg = "camper agregado"

        elif opcion == 2.3 and art_spu:
            for i in range(len(sputnik)):
                print(f"{i+1}. Camper: {sputnik[i]}")
            sputnik.pop(int(input("introdusca el indice el camper a eliminar: "))-1)
            msg = "camper eliminado"

        elif opcion == 2.4 and art_spu:
            print("Lista de campers de artemis ordenada alfabeticamente: ")
            sputnik.sort()
            msg = "-------lista organizada sputnik-------"
            for i in range(len(sputnik)):
                msg += f"""
                    {i}. Camper: {sputnik[i]}
                """
            
        elif opcion == 2.3 and art_spu:
            busca = input("nombre del camper a buscar: ")
            for dato in range(len(sputnik)):
                if sputnik[dato] == busca:
                    msg = f"indice {dato + 1} : {sputnik[dato]}"
                else:
                    msg = ("no se encontro nada")
        return msg

    print(f"""
        --------------------------MENU-----------------------------
        1. CREAR GRUPO ARTEMIS:
        1.1 LISTAR CAMPERS DE ARTEMIS 
        1.2 AGREGAR CAMPERS A ARTEMIS
        1.3 ELIMINAR CAMPERS DE ARTEMIS
        1.4 ORDENAR ALFABETICAMENTE EN LISTA DE ARTEMIS
        1.5 BUSCAR CAMPER EN LISTA DE ARTEMIS
        2. CREAR GRUPO SPUTNIK:
        2.1 LISTAR CAMPERS DE SPUTNIK:
        2.2 AGREGAR CAMPERS A SPUTNIK   
        2.3 ELIMINAR CAMPERS DE SPUTNIK
        2.4 ORDENAR ALFABETICAMENTE EN LISTA DE SPUTNIK
        2.5 BUSCAR CAMPER EN LISTA DE SPUTNIK

        {msg}
        """)
    opcion = float(input("Digite opcion: "))

    if opcion <= 1.5:
        if opcion == 1:
            art_act = True
            msg = opt(opcion, art_act, art_spu, msg)
        elif art_act:
            msg = opt(opcion, art_act , art_spu, msg)
        else:
            msg = "No a creado la lista de Artemis" 
    elif opcion <= 2.5:
        if opcion == 2:
            art_spu = True
            msg = opt(opcion, art_act, art_spu, msg)
        elif art_spu:
            msg = opt(opcion, art_act , art_spu, msg)
        else:
            msg = "No a creado la lista de Artemis" 