#숫자 카드 2
import sys

dict ={}

a = int(sys.stdin.readline());
card = list(map(int,sys.stdin.readline().split()));
b = int(sys.stdin.readline());
test = list(map(int,sys.stdin.readline().split()));

hash={}

for n in card:
  if n in hash:
    hash[n]+=1;
  else:
    hash[n]=1;


for i in test:
    if i in hash:
       print(hash[i],end=" ")
    else:
       print(0,end=" ")
  
