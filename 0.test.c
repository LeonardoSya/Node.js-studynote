#include <stdio.h>
long int fun(long int f1, long int f2, int n)
{
    if (n == 1)
        return f1 + f2 - 1;
    return fun(f2, f1 + f2, n - 1);
}

int main()
{
    printf("%d\n", fun(28));
    return 0;
}