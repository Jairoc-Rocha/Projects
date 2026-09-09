# x, y, z = True, "Carlos", 10.5
# print(x, y, z)


# desestruturação
lista = [1, "João", (10, 10), True]
a, b, c, d = lista
print(a, b, c, d)

# outra forma de desestruturação
x, *_, z = lista
print(x, z)
print(_)