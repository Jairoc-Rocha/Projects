aluno = input("Digite o nome do aluno: ")
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))
nota4 = float(input("Digite a quarta nota: "))

media = (nota1 + nota2 + nota3 + nota4) / 4


if(media >= 7):
    print(f"O aluno: {aluno} foi aprovado com a média: {media:.2f}")
elif(media == 6):
    print(f"O aluno: {aluno} ficou de recuperação com a média: {media:.2f}")
else:
    print(f"O aluno: {aluno} foi reprovado com a média: {media:.2f}")