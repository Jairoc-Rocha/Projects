salario = float(input("Digite o salário atual: "))
aumento = int(input("Digite a procentagem de aumento: "))

novo_salario = salario + (salario * (aumento / 100 ))

print(f"Salário atual: {salario:.2f}")
print(f"Novo salário: {novo_salario:.2f}")
