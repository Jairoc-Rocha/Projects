numero_pedido = int(input("Digite o número de pedido "))
fornecedor = input("Digite o fornecedor: ")
produto = input("Digite o produto: ")
preco_unitario = float(input("Digite o preço unitário: "))
quantidade_comprada = int(input("Digite a quantidade comprada: "))
percentual_desconto = float(input("Digite o percentual de desconto: "))
estoque_inicial = int(input("Digite o estoque inicial: "))

subtotal = preco_unitario * quantidade_comprada
desconto = subtotal * (percentual_desconto / 100)
total_compra = subtotal - desconto
estoque_atual = estoque_inicial
estoque_atual += quantidade_comprada

print()
print("=== PEDIDO DE COMPRA ===")
print(f"Número do pedido: {numero_pedido}")
print(f"Fornecedor: {fornecedor}")
print(f"Produto: {produto}")
print(f"Preço unitário: R$ {preco_unitario:.2f}")
print(f"Quantidade comprada: {quantidade_comprada}")
print(f"Subtotal: R$ {subtotal:.2f}")
print(f"Percentual de desconto: {percentual_desconto}%")
print(f"Valor do desconto: R$ {desconto:.2f}")
print(f"Total da compra: R$ {total_compra:.2f}")
print(f"Estoque inicial: {estoque_inicial}")
print(f"Estoque atual: {estoque_atual}")