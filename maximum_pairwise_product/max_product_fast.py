# uses python 3

n = int(input())
b = [int(a) for a in input().split()]
max_index_1 = -1

for index in range(n):
    if max_index_1 == -1 or b[index] > b[max_index_1]:
        max_index_1 = index

max_index_2 = -1
for index in range(n):
    if index != max_index_1 and (max_index_2 == -1 or b[index] > b[max_index_2]):
        max_index_2 = index

print(b[max_index_1]*b[max_index_2])
