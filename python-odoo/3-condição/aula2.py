renda =  float(input("Digite o valor da renda: "))
limite = 0

if (renda < 2000):
    limite = 1000
elif (renda < 4000):
    limite = 2000
elif (renda < 10000):
    limite = 3000
elif (renda > 10000):
    print("Você precisa falar com o nosso gerente")
    limite = 3000
    
    
print(f"Parabéns, o seu cartão fo aprovado, e o limite é de R${limite:.2f}")