# Pedido de venda com entrada de dados

numero_pedido = int(input("Digite o número do pedido: "))
cliente = input("Digite o nome do cliente: ")
produto = input("Digite o nome do produto: ")
preco_unitario = float(input("Digite o preço unitário: "))
quantidade = int(input("Digite a quantidade: "))
percentual_desconto = float(input("Digite o percentual de desconto: "))

subtotal = preco_unitario * quantidade
valor_desconto = subtotal * (percentual_desconto / 100)
total_venda = subtotal - valor_desconto

print()
print("=== PEDIDO DE VENDA ===")
print(f"Número do pedido: {numero_pedido}")
print(f"Cliente: {cliente}")
print(f"Produto: {produto}")
print(f"Preço unitário: R$ {preco_unitario:.2f}")
print(f"Quantidade: {quantidade}")
print(f"Subtotal: R$ {subtotal:.2f}")
print(f"Percentual de desconto: {percentual_desconto}%")
print(f"Valor do desconto: R$ {valor_desconto:.2f}")
print(f"Total da venda: R$ {total_venda:.2f}")