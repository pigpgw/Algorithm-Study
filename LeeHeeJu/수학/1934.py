a = int(input())

def gcd(a,b):
    if(b==0):
        return a
    return gcd(b,a%b)

for _ in range(a):
    n1,n2 = map(int,input().split())
    print(int(n1*n2/gcd(n1,n2)));



