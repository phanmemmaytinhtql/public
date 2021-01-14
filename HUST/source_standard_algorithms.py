import numpy as np
from ortools.linear_solver import pywraplp
import random as rd
from time import time


def gen_data(N, M, K):
    infile = open(FILENAME, 'w')

    print(N, M, K, end=' ', file=infile)
    for i in range(N):
        print(file=infile)
        T = rd.randrange(K, M + 1)
        print(T, end=' ', file=infile)
        for j in rd.sample(range(1, M + 1), T):
            print(j, end=' ', file=infile)
    infile.close()


def input_from(filename):
    infile = open(filename, 'r')
    
    N, M, K = [int(i) for i in infile.readline().split()]
    
    A = []
    L = np.zeros((N,M), dtype = 'int')
    for i in range(N):
        A.append(sorted([int(k) for k in infile.readline().split()[1:]]))
        if len(A) < K:
            objective_value = "INFEASIBLE"
        for j in A[i]:
            L[i, j - 1] = 1
    infile.close()
    return A, L

def output():
    print(objective_value)
    if objective_value != "INFEASIBLE":
        for i in range(N):
            print()
            for j in range(K):
                print(optimal_solution[i][j], end=' ')
                
def ortools():
    """Minimize the maximal number of articles that a scientist can take on using OR-tools.
    
    solver   solver using Mixed-Integer Programmin with SCIP
    Y        variable mataining the objective function of the SCIP solver    
    """
    global objective_value, optimal_solution
    
    solver = pywraplp.Solver.CreateSolver('SCIP')
    
    INF = solver.infinity()

    X = np.array([[None]*M for i in range(N)])
    Y = solver.IntVar(-INF, INF, 'Y')

    for i in range(N):
        for j in range(M):
            X[i, j] = solver.IntVar(0, int(L[i, j]), 'X[{}, {}]'.format(i, j))

    for i in range(N):
        solver.Add(K == sum(L[i, j]*X[i, j] for j in range(M)))
        
    for j in range(M):
        solver.Add(Y >= sum(L[i, j]*X[i, j] for i in range(N)))

    solver.Minimize(Y)
    status = solver.Solve()
    
    if status == pywraplp.Solver.OPTIMAL:
        objective_value = solver.Objective().Value()
        optimal_solution = [[j + 1 for j in range(M) if X[i, j].solution_value() == 1] for i in range(N)]
    else:
        objective_value = "INFEASIBLE"
        
def heuristics():
    """Minimize the maximal number of articles that a scientist can take on using heuristics.
    
    workload            workload[j] will maintains the number of articles that the scientist j is currently taking
    optimal_solution    optimal_solution[i] maintains the scientists that is currenty taking the article i. After execution, it will be optimal
    """
    global objective_value, optimal_solution
    
    if objective_value != "INFEASIBLE":
        workload = [0]*M                                             # workload a scientist is currently taking, initially 0
        optimal_solution = [[] for i in range(N)]
        for i in range(N):                                           # for each article i
            list = sorted([(workload[j - 1], j) for j in A[i]])      # sort all scientists who CAN take the artcile i in the order of inceasing currently-taking workload
            optimal_solution[i] = [_[1] for _ in list[:K]]           # select in that list K scientists who is currently taking smallest workload
            for j in optimal_solution[i]:                            # then increase the workload of
                workload[j - 1] += 1                                 # each of these scientists by 1

        objective_value = max(workload)
        
def backtracking():
    """
    Find the t th scientist for the article i.

    index              the INDEX in A[i] of a scientist
    available_range    the range in which index varies. This ensures eliminating repetition.
    workload           workload[j] will maintains the number of articles that the scientist j is currently taking
    solution           a Nx3 nested list maintaining a way of assignment. Note that ...[i][t] indicates INDEX in A[i], not the name of a scientist.
    """
    solution = [[-1]*K for _ in range(N)]
    workload = [0]*M
    
    def Try(i, t):
        global objective_value
        
        available_range = range(solution[i][t - 1] + 1, len(A[i]) - K + t + 1)
        for index in available_range:
            if workload[A[i][index] - 1] + 1  < objective_value:    # branch and bound
                solution[i][t] = index                              # choose a scientist in A[i]
                workload[A[i][index] - 1] += 1                      # increase the workload of that scientist by 1
                if i == N - 1 and t == K - 1: Update()              # if sufficient scientists are chosen, then Update
                else:
                    if t < K - 1: Try(i, t + 1)                     # find scientists for the article i until enough K are chosen
                    else: Try(i + 1, 0)                             # then move to the next article
                workload[A[i][index] - 1] -= 1                      # After completing Try with that scientist, abandons him
                solution[i][t] = -1                                 # in order to try another candidate

    def Update():
        global objective_value, optimal_solution
        if max(workload) < objective_value:                # if the maximal workload of the current solution is the minimal recorded
            objective_value = max(workload)                # then we will save it
            optimal_solution = [[A[i][j] for j in solution[i]] for i in range(N)]
        
    if objective_value != "INFEASIBLE":
        Try(0, 0)


# EXECUTION
        
data_sizes = [(5, 4, 2), (10, 7, 3), (20, 15, 6), (50, 35, 15), (100, 70, 30), (300, 210, 90)]

for (N, M, K) in data_sizes:
    gen_data(N, M, K)
    
    for algorithm in ("ortools", "heuristics", "backtracking"):
        print(algorithm)

        A, L = input_from(FILENAME)
        objective_value, optimal_solution = float('inf'), []

        start_time = time()
        eval(algorithm + "()")
        end_time = time()
        
        print(end_time - start_time)
        
        output()
