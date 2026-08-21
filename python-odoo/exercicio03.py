fornecedor = "Distribuidora Tech"
produto = "Monitor LED"
preco_unitario = 950.00
quantidade_comprada = 5
percentual_desconto = 8
estoque_inicial = 12

subtotal = preco_unitario * quantidade_comprada
valor_desconto = subtotal * (percentual_desconto / 100)
total_compra = subtotal - valor_desconto
estoque_atual = estoque_inicial
estoque_atual += quantidade_comprada


print(" === PEDIDO DE COMPRA ===")
print("Fornecedor:", fornecedor)
print("Produto:", produto)
print("Preço unitário:", preco_unitario)
print("Quantidade comprada:", quantidade_comprada)
print("Subtotal:", subtotal)
print("Percentual de desconto:", percentual_desconto)
print("Valor do desconto:", valor_desconto)
print("Total da compra:", total_compra)
print("Estoque inicial:", estoque_inicial)
print("Estoque atual:", estoque_atual)

