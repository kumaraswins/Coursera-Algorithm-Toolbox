#python3

n = int(input())
arr = [int(a) for a in input().split()]
max_product = 0
for first in range(n):
    for second in range(first+1, n):
        max_product = max(max_product,arr[first]*arr[second])

print(max_product)