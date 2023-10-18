#괄호
import sys

n = int(sys.stdin.readline())

for _ in range(n):
    stack=[]
    string=input()
    isRight=True

    for ch in string:
        if ch == "(":
            stack.append("(")
        elif ch ==")":
            if stack:
                stack.pop();
            else:
                isRight=False
                break;
    
    if not stack and isRight:
        print("YES")
    else:
        print("NO")
        

        

# for i in range(n):
#     left=[]
#     right=[]
#     string = list(sys.stdin.readline())

#     for i in string:
#         if i == "(":
#             left.append("(")
#         elif i == ")":
#             right.append(")")

#     if (len(left) == len(right)):
#             print("YES")
#     else:
#             print("NO")

