class Carro:
    def __init__(self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano  
        
print("Digite as informações do carro:")
marca = input("Marca: ")    
modelo = input("Modelo: ")
ano = input("Ano: ")        

carro = Carro(marca, modelo, ano)
print(f"Carro criado: {carro.marca} {carro.modelo} {carro.ano}")