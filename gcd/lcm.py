#python3 

def gcd_fast(a,b):
    divident = max(a,b)#a  if a >= b else b
    divisor = min(a,b)#a if a <=b else b
    while divisor != 0:
        reminder = divident%divisor
        divident = divisor
        divisor = reminder
    return divident
    
if __name__ == "__main__":
    a, b = map(int, input().split())
    print( a*b // gcd_fast(a,b))
