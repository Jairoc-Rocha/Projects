# Cálculo de uma venda com desconto

numero_pedido = 1002
cliente = "Mercado São Paulo"
produto = "Impressora térmica"
preco_unitario = 850.00
quantidade = 3
percentual_desconto = 10

subtotal = preco_unitario * quantidade
valor_desconto = subtotal * (percentual_desconto / 100)
total_venda = subtotal - valor_desconto

print("=== PEDIDO DE VENDA ===")
print("Número do pedido:", numero_pedido)
print("Cliente:", cliente)
print("Produto:", produto)
print("Preço unitário:", preco_unitario)
print("Quantidade:", quantidade)
print("Subtotal:", subtotal)
print("Percentual de desconto:", percentual_desconto)
print("Valor do desconto:", valor_desconto)
print("Total da venda:", total_venda)