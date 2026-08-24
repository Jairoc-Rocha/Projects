codigo = "PROD-001"
produto = "Teclado sem fio"
estoque_inicial = 20
quantidade_vendida = 4
preco_unitario = 125.50
produto_ativo = True

estoque_atual = estoque_inicial - quantidade_vendida
total_de_venda = preco_unitario *  quantidade_vendida

print("=== MOVIMENTAÇÃO DE ESTOQUE ===")
print("Código:", codigo)
print("Produto:", produto)
print("Estoque inicial:", estoque_inicial)
print("Quantidade vendida:", quantidade_vendida)
print("Estoque atual:", estoque_atual)
print("Preço unitário:", preco_unitario)
print("Total da venda:", total_de_venda)
print("Produto ativo:", produto_ativo)
