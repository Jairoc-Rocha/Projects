class Pessoa:
    def __init__(self, nome, idade, profissao):
        self.nome = nome
        self.idade = idade
        self.profissao = profissao
        
matheus = Pessoa("Matheus", 25, "Programador")

print(matheus.nome)  # Saída: Matheus
print(matheus.idade)  # Saída: 25
print(matheus.profissao)  # Saída: Programador

    
    