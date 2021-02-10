import numpy as np
#FILENAME = r"D:\Duy Hung\Hoc Tap\Tai lieu nam II\Fundamentals of Optimization\data_samples_mini_projects\miniproject-20\data.txt"
FILENAME = r"C:\Users\Hung\Desktop\data10.txt"
def get_data(filename):
    """
    Process user's input and generate data.
    
    N    number of articles
    M    number of scientists
    K    minimal number of scientists working on each article
    L    matrix representation of data. L[i, j] = 1 means scientist j can take on article i
    """
    infile = open(filename, 'r')
    
    N, M, K = [int(i) for i in infile.readline().split()]
    
    L = np.zeros((N+2,M+2), dtype = 'int')
    # Create N+1 and M+1 so that get the numbers of scientist and article 
    # The additional collumn M+1 and row N+1 give me information of 
    # the number of scientist take an article and the number of article 
    # taken by a scientist in order by get the sum of each collumn and row

    for i in range(1,N+1):
        a = [int(k) for k in infile.readline().split()][1:]
        for j in a:
            L[i,j] = 1
            L[0,j] += L[i,j]
        L[i,M+1] = i
    L[0,M+1] = N+1    
    for j in range(1,M+1):
        for i in range(1,N+1):
            L[i,0] += L[i,j]
        L[N+1,j] = j
    L[N+1,0] = M+1
    return N, M, K, L
'''
an arrange function that we can 'easily' reduce the number of article
among 'the_scientist_take_the_max_article'
'''     
def arrange(L):
    L = L[L[:,0].argsort()]
    L = L.T
    L = L[L[:,0].argsort()]
    L = L.T
    return L
def predecessor(L):
    #find the predecessor of max(article taken by the scientist)
    i = 0
    L = L[1:len(L)-1]
    while max(L) - L[len(L)-1-i] == 0 and i != len(L) :
        i += 1
    return [L[len(L)-1-i],i]

'''
    Stop condition for this algorithm:
    - if all the number of scientists take an article = K(the minimum scientist need to take each article)
    - if we can't reduce the_max_number of article taken by a scientist
    any more OR the_max_number after reduce is not equal to the
    predecessor(of max).
    #Note
        #trong qua trinh tru thi se co hang bang K.
        #nhung nhung hang o duoi thi co hang > K
        #tao dieu kien dung(tai mot hang) khi ma ta
        #tru den gia tri toi thieu(o day la K) 
        => stopCDT()
'''
def stopCDT(L,K):
    address = np.where(L[:,0][1:] == K)[0]
    if address.size > 0:
        return max(address)
    else:
        return 0
def solver(L,N,M,K):
    L = arrange(L)
    global check
    p = predecessor(L[0])
    t = 0  
    i = 0
    t1 = float('inf')
    st = stopCDT(L, K) 
    if L[N,0] == K:
        check = False    
    else:
        if p[0] != max(L[0][1:M+1]): #this sequence has predecessor
            for j in range(p[1]): #interate till find the predecessor
                while (L[0,M-j] != p[0]): #check when to stop reduce
                    if N-i == st:
                        break    
                    if (L[N-i,0]!= K) :    
                        if L[N-i,M-j] == 1:   
                            L[N-i,M-j] = 0
                            L[0,M-j] -= 1
                            L[N-i,0] -= 1
                            t += 1  #check if we can reduce the_max_article_taken by a scientist 
                                    #equal to predecessor
                                    #if not, break and then solution = max(after reduce)
                            if st != 0 and st != N:#update stop
                                k = st 
                                while (L[k,0] == K) and k!=N: 
                                    k+=1
                                st = k                            
                    i += 1
                if t1 > t:
                    t1 = t
                i = 0
                t = 0
            if t1 == 0:
                check = False
            elif (t1 < max(L[0]) - predecessor(L[0])[0]):
                return L
                check = False
        else:   # this sequence has no predecessor
            for j in range(p[1]):
                while N-i != st:
                    if L[N-i,0] != K:
                        if L[N-i,M-j] == 1:   
                            L[N-i,M-j] = 0
                            L[0,M-j] -= 1
                            L[N-i,0] -= 1
                            t += 1
                            if st != 0 and st != N:#update stop
                                k = st 
                                while (L[k,0] == K) and k!=N: 
                                    k+=1
                                st = k   
                        break
                    i += 1
                if t1 > t:
                    t1 = t
                t = 0
                i = 0
            if t1 == 0:
                return L
                check = False
    return L
def printmt(L,N,M):
    a = [[] for _ in range(N)]
    for i in range(1,N+1):
        for j in range(1,M+1):
            if L[i,j] != 0:
                a[L[i,M+1]-1].append(L[N+1,j])
    print(np.array(a))

def main():
    N, M, K, L = get_data(FILENAME) 
    
    while check:
        L = solver(L,N,M,K)
    print(L)
    printmt(L,N,M)
    print('the max article need to assign is: ', max(L[0][1:M+1]))
if __name__ == '__main__':
    check = True
    main()
    