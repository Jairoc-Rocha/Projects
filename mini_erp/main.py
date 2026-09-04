print("=" * 40)
print("MINI ERP - ROCHATECH")
print("=" * 40)

print("1 - Parceiros")
print("2 - Produtos")
print("3 - Compras")
print("4 - Vendas")
print("5 - Estoque")
print("0 - Sair")

opcao = input("Escolha uma opção: ")

if opcao == "1":
    print("Você acessou o cadastro de parceiros.")

elif opcao == "2":
    print("Você acessou o cadastro de produtos.")

elif opcao == "3":
    print("Você acessou os pedidos de compra.")

elif opcao == "4":
    print("Você acessou os pedidos de venda.")

elif opcao == "5":
    print("Você acessou o controle de estoque.")

elif opcao == "0":
    print("Sistema encerrado.")

else:
    print("Opção inválida.")

