n = int(input()) #3

for i in range(n): #n=3 i=0,1,2
    for j in range(n-i-1):#0,3-0-1=2 => 0,1(총2번),1,3-1-1=2 =>1(총 1번),3-2-1=0(출력안함)
        print(" ",end="")
    for k in range(i+1): #0(1번),* 0,1 (2번), * * 2+1=3(0,1,2) -> 3반* * * 
        print("* ",end="")
    print("")