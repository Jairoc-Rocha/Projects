def buscar_contacto_por_codigo(lista_contactos, codigo_buscado):
    for contacto in lista_contactos:
        if contacto["codigo"] == codigo_buscado:
            return contacto
        
    return None

contactos = []

while True:
    print()
    print("=" * 40)
    print("MINI ERP - ROCHATECH")
    print("=" * 40)

    print("1 - Registrar contacto")
    print("2 - Productos")
    print("3 - Compras")
    print("4 - Ventas")
    print("5 - Inventario")
    print("6 - Listar contactos")
    print("7 - Buscar contacto")
    print("0 - Salir")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        print()
        print("=== REGISTRO DE CONTACTO ===")

        codigo = int(input("Código: "))

        contacto_existente = buscar_contacto_por_codigo(contactos, codigo)
        
        if contacto_existente is not None:
            print("Ya existe un contacto con este código.")


        else:
            nombre = input("Nombre: ")
            tipo_persona = input(
                "Tipo de persona [empresa/persona]: "
            ).lower()
            respuesta_cliente = input(
                "¿Es cliente? [s/si/n/no]: "
            ).lower()
            respuesta_proveedor = input(
                "¿Es proveedor? [s/si/n/no]: "
            ).lower()

            contacto = {
                "codigo": codigo,
                "nombre": nombre,
                "tipo_persona": tipo_persona,
                "es_cliente": respuesta_cliente in ["s", "si", "sí"],
                "es_proveedor": respuesta_proveedor in ["s", "si", "sí"]
            }

            contactos.append(contacto)

            print("Contacto registrado correctamente.")

    elif opcion == "2":
        print("Ha accedido a la gestión de productos.")

    elif opcion == "3":
        print("Ha accedido a los pedidos de compra.")

    elif opcion == "4":
        print("Ha accedido a los pedidos de venta.")

    elif opcion == "5":
        print("Ha accedido a la gestión de inventario.")

    elif opcion == "6":
        print()
        print("=== CONTACTOS REGISTRADOS ===")

        if len(contactos) == 0:
            print("No hay contactos registrados.")

        else:
            for contacto in contactos:
                if contacto["es_cliente"]:
                    texto_cliente = "Sí"
                else:
                    texto_cliente = "No"

                if contacto["es_proveedor"]:
                    texto_proveedor = "Sí"
                else:
                    texto_proveedor = "No"

                print("-" * 40)
                print(f"Código: {contacto['codigo']}")
                print(f"Nombre: {contacto['nombre']}")
                print(
                    f"Tipo de persona: "
                    f"{contacto['tipo_persona']}"
                )
                print(f"Cliente: {texto_cliente}")
                print(f"Proveedor: {texto_proveedor}")

    elif opcion == "7":
        print()
        print("=== BÚSQUEDA DE CONTACTO ===")

        codigo_buscado = int(input("Introduzca el código del contacto: "))

        contacto_encontrado = buscar_contacto_por_codigo(contactos, codigo_buscado)

        if contacto_encontrado is None:
            print("Contacto no encontrado.")

        else:
            if contacto_encontrado["es_cliente"]:
                texto_cliente = "Sí"
            else:
                texto_cliente = "No"

            if contacto_encontrado["es_proveedor"]:
                texto_proveedor = "Sí"
            else:
                texto_proveedor = "No"

            print("-" *40)
            print(f"Código: {contacto_encontrado["codigo"]}")
            print(f"Nombre: {contacto_encontrado["nombre"]}")
            print(f"Tipo de persona: " f"{contacto_encontrado["tipo_persona"]}")
            print(f"Cliente: {texto_cliente}")
            print(f"Proveedor: {texto_proveedor}")

    elif opcion == "0":
        print("Sistema cerrado.")
        break

    else:
        print("Opción no válida.")