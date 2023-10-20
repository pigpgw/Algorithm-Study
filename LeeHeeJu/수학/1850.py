# 모든 자리가 1로만 이루어져있는 두 자연수 A와 B가 주어진다. 이때, A와 B의 최대 공약수를 구하는 프로그램을 작성하시오.
# 예를 들어, A가 111이고, B가 1111인 경우에 A와 B의 최대공약수는 1이고, A가 111이고, B가 111111인 경우에는 최대공약수가 111이다.
import sys
import math

a,b =map(int, sys.stdin.readline().split())
num = math.gcd(a,b)
print('1'*num)

# def gcd(a,b):
#     if(b == 0): return(a)
#     return gcd(b,a%b)
#재귀함수 메모리초과 

# def gcd(a,b):
#     for i in range(1,min(a,b)):
#         if(a % i ==0 and b % i == 0): 
#             num = i
#     return num;

